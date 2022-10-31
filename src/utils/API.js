import axios from "./axios";
import { HOST_API as SERVER_ADDRESS} from '../config';

const API_AUTH = {
    register:"api/v1/auth/register",
    login:"api/v1/auth/login",
    account:"api/v1/auth/my-account",
    resendAuthMail:"api/v1/auth/send-verify-mail"
}

const ASSETS_URL = {
    root: SERVER_ADDRESS,
    image: `${SERVER_ADDRESS}uploads/images/`,
    products:`${SERVER_ADDRESS}uploads/images/products/`,
   
}
const SEND_PUT_REQUEST = async(url, data) => {
    const response = await axios.put(url, data);
    if (response.status === 200 || response.status === 201) {
        return response.data;
    } else {
        return [];
    }
}
const SEND_POST_REQUEST_WITH_FORM_DATA = async(url, data) => {
    const response = await axios.post(url, data);
    if (response.status === 200 || response.status === 201) {
        return response.data;
    } else {
        return [];
    }
}
const SEND_DELETE_REQUEST = async(url, id, callback) => {
    const response = await axios.delete(`${url}/${id}`);
    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
}
const SEND_POST_REQUEST = async(url, data, callbak) => { 
    const response = await axios.post(url, data);
    if (response.status === 200 || response.status === 201) {
        return response.data;
    } else {
        return [];
    }
    // });


}
const SEND_GET_REQUEST = async(url, data) => {
    const response = await axios.get(url, data);
    if (response.status === 200 || response.status === 201) {
        return response.data;
    } else {
        return [];
    }
}
export {
    SEND_DELETE_REQUEST,
    SEND_POST_REQUEST,
    SEND_GET_REQUEST,
    SEND_PUT_REQUEST,
    SEND_POST_REQUEST_WITH_FORM_DATA,
    ASSETS_URL, 
    API_AUTH,
   
};