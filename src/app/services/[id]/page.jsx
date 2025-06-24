import dbConnect, { collectionNameObject } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesDetails = async ({ params }) => {

    const p = await params.id;
    const singleData = await (await dbConnect(collectionNameObject.servicesCollections)).findOne({ _id: new ObjectId(p) })
    console.log(p)
    return (

        <div className='max-w-6xl mx-auto'>
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
                            Service Details
                        </p>
                    </div>
                </div>
            </section>
            <div className='md:flex justify-between gap-10'>
                <section className='mt-3 flex-1/2'>
                    <Image className='rounded ' src={singleData.img} width={752} height={400}></Image>
                    <p className='text-2xl font-bold mt-5'>{singleData.title}</p>
                    <p className='text-xl mt-5 text-justify '>{singleData.description}</p>
                </section>
                <div className='w-64 text-center place-content-center'>
                    <p className='font-bold text-red-600 mb-2'>Price: $ {singleData.price}</p>
                    <Link href='/services/checkOut'>
                        <button className='btn btn-primary w-full hover:translate-y-1 duration-300 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'>Checkout</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ServicesDetails;