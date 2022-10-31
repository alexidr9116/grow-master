import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Page from "../../components/Page";
import useAuth from '../../hooks/useAuth';
import { toast } from "react-hot-toast";


export default function Login() {
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const defaultValues = {
        email: "",
        password: "",
    }
    const { register, handleSubmit } = useForm(defaultValues);
    const onSubmit = async (data) => {
        setLoading(true);
        login(data.email, data.password).then(response => {
            setLoading(false);
            if (response.status === 200) {
                toast.success(response.message);
                // if (response?.data?.user?.emailVerified)
                navigate('/', { replace: true });
                // else
                //     navigate('/auth/verify-email', { replace: true });
            }
            else {
                toast.error(response.message);
            }

        }).catch(err => {
            setLoading(false)
            console.log(err);
        })
    }
    return (
        <Page title='Login'>
            <div className="container w-full justify-center flex items-center h-screen">
                <div className="max-w-lg flex flex-col items-center gap-4 p-8 md:p-12 border rounded">
                    <img src='/assets/grow-master-logo.png' alt='' className="mb-8" />
                    <form className="w-full px-4 sm:px-10 grid gap-6" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('email')} className="input input-bordered" placeholder={`Email or Username`}>

                        </input>
                        <input {...register('password')} type="password" className="input input-bordered " placeholder={`Type your password`}>
                        </input>
                        <div className="flex justify-between">
                            <Link to='/auth/forgot-password'>{'Forgot Password?'}</Link>
                            <Link to='/auth/signup'>{'Not registerd yet?'}</Link>
                        </div>
                        <button className={`btn btn-ghost bg-base-300 mt-4 mb-8 w-full ${loading ? 'loading' : ''} `}>{'Login'}</button>
                    </form>
                </div>
            </div>
        </Page>
    )
}