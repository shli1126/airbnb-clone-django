"use client";
import React from 'react'
import Link from "next/link";
import { Navbar } from "flowbite-react";
import Image from 'next/image';
import SearchFilters from './SearchFilters';

export default function Header() {
    return (
        <Navbar fluid rounded className='border-b-2'>
            <Navbar.Brand className='flex flex-col items-center ' as={Link} href="/">
                <Image src="/assets/Airbnb_Logo.png" width={128} height={40} className="mr-3 ml-5 mt-3 mb-3" alt="Airbnb Logo" />
            </Navbar.Brand>
            <SearchFilters />
            <Navbar.Link href="#">Add Property - User nav</Navbar.Link>
        </Navbar>
    )
}
