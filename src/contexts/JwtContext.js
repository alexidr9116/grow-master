import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

// utils
import axios from '../utils/axios';
import { isValidToken, setSession } from '../utils/jwt';


// const firebaseApp = initializeApp(FIREBASE_API);

// const AUTH = getAuth(firebaseApp);

// AUTH.settings.appVerificationDisabledForTesting  = true; 
// ----------------------------------------------------------------------

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

const handlers = {
    INITIALIZE: (state, action) => {
        const { isAuthenticated, user } = action.payload;
        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
        };
    },

    OTPFINAL: (state, action) => {
        const { final } = action.payload;
        return {
            ...state,
            isAuthenticated: false,
            isInitialized: true,
            final,
            user: null,
        }
    },
    LOGINED: (state, action) => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
    LOGOUT: (state) => ({
        ...state,
        isAuthenticated: false,
        final: null,

        user: null,
    }),


};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
    ...initialState,
    method: 'jwt',
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    initialize: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
    children: PropTypes.node,
};

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const initialize = async () => {
        try {
            const accessToken = window.localStorage.getItem('accessToken');
            if (accessToken && isValidToken(accessToken)) {
                setSession(accessToken);
                const response = await axios.get('/api/auth/my-account');
                const { user } = response.data;
                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: true,
                        user,
                    },
                });
            } else {
                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });
            }
        } catch (err) {
            console.error(err);
            dispatch({
                type: 'INITIALIZE',
                payload: {
                    isAuthenticated: false,
                    user: null,
                },
            });
        }
    };

    useEffect(() => {
        console.log("--------------iniitalize passport-------------------");
        initialize();
    }, []);

    const otpVerify = async (otp, callback) => {
        try {
            const phoneNumber = window.phoneNumber;
            const otpResult = await axios.post('/api/auth/verifyOtp', {
                phoneNumber,
                otp
            });
            const { success } = otpResult.data;
            if (success) {
                // register or update mongodb
                const response = await axios.post('/api/auth/register', {
                    phoneNumber,
                });
                if (response.status === 200) {
                    const { token, user } = response.data;
                    setSession(token);
                    dispatch({
                        type: 'LOGINED',
                        payload: {
                            user,
                        },
                    });
                    callback({ success: true });
                }
            } else {
                callback({ success: false, err: 'unmathed otpcode' });
            }

        } catch (err) {
            callback({ success: false, err: 'otp response err' });
        }
    }

    const codeVerify = async (phoneNumber, pinCode) => {
        const response = await axios.post('/api/auth/pincode', { phoneNumber, pinCode });

        const { token, user } = response.data;

        // verify phoneNumber via firebase
        if (!token) {
            try {
                window.phoneNumber = phoneNumber;
                return { success: false, message: 'pin code verification error' };
            } catch (err) {
                return { success: false, message: 'pin code verification error' };
            }
        }
        if (user.status === "inactive") {
            return { success: false, message: 'Your account is inactive. Please contact with administrator' };
        }
        setSession(token);
        dispatch({
            type: 'LOGINED',
            payload: {
                user,
            },
        });
        return { success: true, message: 'verification successfully' };

    }

    const login = async (phoneNumber) => {

        const response = await axios.post('/api/auth/login', {
            phoneNumber
        });

        const isPinCode = response.data.pinVerify

        if (isPinCode) {
            return 'pincode'
        }
        const { token, user } = response.data;

        // verify phoneNumber via sms
        if (!token) {
            try {
                window.phoneNumber = phoneNumber;
                return 'otp';
            } catch (err) {
                console.log(err);
                return 'otp';
            }

        } else {

            if (user.status === "inactive") {
                return "inactive";
            }
            setSession(token);
            dispatch({
                type: 'LOGINED',
                payload: {
                    user,
                },
            });
            return 'navigate';

        }

    };


    const logout = async () => {
        try {
            setSession(null);

            dispatch({ type: 'LOGOUT' });
            // signOut(AUTH);
        } catch (err) {

            console.log(err);
        }

    };

    return (<AuthContext.Provider value={
        {
            ...state,
            method: 'jwt',
            login,
            logout,
            otpVerify,
            codeVerify,
            initialize,
        }
    } > {children} </AuthContext.Provider>);
}

export { AuthContext, AuthProvider };