"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "./img/a-removebg-preview.png"


const Navbar = () => {
    const [pathname, setPathname] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPathname(window.location.pathname);
        }
    }, []);

    return (
        <div className="flex flex-col">
            <div className="flex ps-24">
                <Image src={logo} alt="logo" width={300} height={300} />
            </div>
            <nav className="flex items-center w-full  bg-primary text-secondary text-lg font-semibold  ps-28 mt-4 ">
                <Link className={`px-2 py-1 rounded-md transition ease duration-300 ${pathname === '/' ? 'bg-tertiary text-secondary hover:bg-secondary hover:text-tertiary' : 'hover:bg-secondary hover:text-tertiary'}`} href="/">Home</Link>
                <Link  className={`px-2 py-1 rounded-md transition ease duration-300 ${pathname === '/article' ? 'bg-tertiary text-secondary hover:bg-secondary hover:text-tertiary' : 'hover:bg-secondary hover:text-tertiary'}`} href="/articles">Articles</Link>
                <Link  className={`px-2 py-1 rounded-md transition ease duration-300 ${pathname === '/news' ? 'bg-tertiary text-secondary hover:bg-secondary hover:text-tertiary' : 'hover:bg-secondary hover:text-tertiary'}`} href="/news">News</Link>
                <Link  className={`px-2 py-1 rounded-md transition ease duration-300 ${pathname === '/event' ? 'bg-tertiary text-secondary hover:bg-secondary hover:text-tertiary' : 'hover:bg-secondary hover:text-tertiary'}`} href="/event">Event</Link>
                <Link  className={`px-2 py-1 rounded-md transition ease duration-300 ${pathname === '/about' ? 'bg-tertiary text-secondary hover:bg-secondary hover:text-tertiary' : 'hover:bg-secondary hover:text-tertiary'}`} href="/about">About</Link>
                <Link  className={`px-2 py-1 rounded-md transition ease duration-300 ${pathname === '/contact' ? 'bg-tertiary text-secondary hover:bg-secondary hover:text-tertiary' : 'hover:bg-secondary hover:text-tertiary'}`} href="/contact">Contact</Link>
            </nav>
        </div>
    )
}

export default Navbar;