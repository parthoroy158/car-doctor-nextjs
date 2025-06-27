"use client"
import { registerUser } from '@/app/actions/auth/registerUser';
import SocialLogin from '@/app/components/SocialLogin';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

const Registration = () => {
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        const response = await registerUser({ name, email, password })
        console.log(response)
        if (response?.success && response?.data?.insertedId) {
            Swal.fire({
                title: "SuccessFully Sign Up",
                icon: "success",
                draggable: true
            });
            router.push('/logIn')
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: response?.message,
            });
        }
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen px-4 py-8">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-8">

                    {/* Sign Up Card */}
                    <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <p className="text-center text-2xl font-bold mb-4">Sign Up</p>
                            <form onSubmit={handleSubmit}>
                                <fieldset>
                                    <label className="label font-bold">Name</label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full mb-3"
                                        name="name"
                                        placeholder="Name"
                                    />
                                    <label className="label font-bold">Email</label>
                                    <input
                                        type="email"
                                        className="input input-bordered w-full mb-3"
                                        name="email"
                                        placeholder="Email"
                                    />
                                    <label className="label font-bold">Password</label>
                                    <input
                                        type="password"
                                        className="input input-bordered w-full mb-3"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <div>
                                        <a className="link link-hover text-sm text-right block">
                                            Forgot password?
                                        </a>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn bg-[#FF3811] mt-4 w-full text-white"
                                    >
                                        Sign Up
                                    </button>
                                </fieldset>
                            </form>

                            {/* Divider */}
                            <div className="divider">Or</div>

                            {/* Social Buttons */}
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image
                            src="/assets/images/login/login.svg"
                            width={600}
                            height={600}
                            alt="Login illustration"
                            className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;