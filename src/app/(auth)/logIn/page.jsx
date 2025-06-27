import Image from 'next/image';
import React from 'react';
import LoginForm from './components/LoginForm';
import SocialLogin from '@/app/components/SocialLogin';

const LogIn = () => {

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <p className='text-center text-3xl font-bold '>Log In</p>
                            <LoginForm></LoginForm>
                            <div className='divider'>Or</div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <Image src='/assets/images/login/login.svg' width={600} height={600}>
                        </Image>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;