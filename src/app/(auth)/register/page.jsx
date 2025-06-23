import Image from 'next/image';
import React from 'react';

const Register = () => {

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <p className='text-center text-2xl font-bold'>Sign Up</p>
                            <form>
                                <fieldset className="fieldset">
                                    <label className="label font-bold">Name</label>
                                    <input type="text" className="input mb-3" placeholder="Name" />
                                    <label className="label font-bold">Email</label>
                                    <input type="email" className="input mb-3" placeholder="Email" />
                                    <label className="label font-bold">Password</label>
                                    <input type="password" className="input mb-3" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn bg-[#FF3811] mt-4 text-white">Sign Up</button>
                                </fieldset>
                            </form>
                            <div className='divider'>Or</div>
                            <div className='flex gap-2 justify-center'>
                                <button className="btn bg-[#1A77F2] text-white border-[#005fd8] rounded-full">
                                    <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                                </button>
                                <button className="btn bg-white text-black border-[#e5e5e5] rounded-full">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                </button>
                                <button className="btn bg-[#0967C2] text-white border-[#0059b3] rounded-full">
                                    <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
                                </button>
                            </div>
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

export default Register;