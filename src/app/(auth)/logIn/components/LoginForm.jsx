'use client'
import React, { useState } from 'react';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';

import toast from 'react-hot-toast';

const LoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        toast('Log in......')
        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value;

        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (result?.ok) {
            router.push('/');
            toast.success('Successfully Log In')
        } else {
            setError("Invalid email or password");
            toast.error('Failed to Log in')
            console.log("Login error:", result);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <p className='text-red-700'>{error}</p>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>

        </div>
    );
};

export default LoginForm;