import Image from 'next/image';
import React from 'react';

const CheckOut = () => {

    return (
        <div className='max-w-7xl mx-auto'>
            <section className="flex justify-center ">
                <div className="relative w-full max-w-screen-xl">
                    <figure>
                        <Image
                            src="/assets/images/checkout/checkout.png"
                            width={1137}
                            height={300}
                            alt="banner"
                            className="w-full h-auto object-cover max-h-[300px] sm:max-h-[400px]"
                            priority
                        />
                    </figure>

                    <div className="absolute bottom-10 left-4 sm:bottom-30 sm:left-6">
                        <p className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
                            Check Out
                        </p>
                    </div>
                </div>
            </section>
            <div className='bg-[#F3F3F3] mt-10'>
                <div className='p-10'>
                    <div className='flex gap-5 mt-5' >
                        <input type="text" placeholder="First Name" className="input w-full rounded" />
                        <input type="text" placeholder="Last Name" className="input w-full rounded" />
                    </div>
                    <div className='flex gap-5 mt-5 '>
                        <input type="text" placeholder="Your Profile" className="input w-full rounded" />
                        <input type="text" placeholder="Your E-mail" className="input w-full rounded" />
                    </div>
                    <textarea placeholder="Your Message" className="textarea textarea-xl w-full mt-5"></textarea>
                    <button className='btn text-white bg-[#FF3811] w-full mt-5 rounded-md hover:translate-y-1 duration-300 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 '>Order Confirm</button>
                </div>
            </div>
        </div>

    );
};

export default CheckOut;