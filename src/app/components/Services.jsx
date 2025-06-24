import dbConnect, { collectionNameObject } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowRight } from "react-icons/go";

const Services = async () => {
    // const data = await fetch('/services.json')
    const data = await (await dbConnect(collectionNameObject.servicesCollections)).find({}).toArray()


    return (
        <div className='grid grid-cols-12 max-w-7xl mx-auto gap-5 '>
            {
                data.map(item => {
                    return (
                        <div key={item._id} className='col-span-4 shadow-md rounded-xl object-cover hover:-translate-y-2 duration-300'>
                            <div className='p-5  '>
                                <figure className='w-full h-full flex justify-center items-center'>
                                    <Image className=' h-full w-full object-fill' src={item.img} width={314} height={208}></Image>
                                </figure>
                                <p className='font-bold'>{item.title}</p>
                                <div className='flex justify-between items-center '>
                                    <p className='font-bold text-red-600'>Price: ${item.price}</p>
                                    <Link href={`/services/${item._id}`}>
                                        <p className='font-bold text-red-600'><GoArrowRight /></p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Services;