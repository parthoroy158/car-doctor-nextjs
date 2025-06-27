"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const { data: session, status } = useSession()
    console.log(session)
    const navMenu = () => {

        return (
            <>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        About
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        Services
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        Blogs
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        Contacts
                    </Link>
                </li>
            </>
        )
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <Link href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </Link>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navMenu()}
                    </ul>
                </div>
                <Link href='/' className="btn btn-ghost text-xl">
                    <Image src={'/assets/logo.svg'} width={50} height={50} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu()}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    session ?
                        <>
                            <p>{session.user.name}</p>
                            <button className='btn btn-secondary' onClick={() => signOut()}> Log Out</button>
                        </>
                        :
                        <div className='flex gap-2'>
                            <Link href='/register'>
                                Register
                            </Link>
                            <Link href='/logIn'>
                                Log in
                            </Link>

                        </div>
                }
                <a className="btn btn-outline">Appointment</a>
            </div>
        </div >
    );
};

export default Navbar;