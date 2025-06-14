"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'home',
        path: "/"
    },
    {
        name: 'information',
        path: "/info"
    },
    {
        name: 'resume',
        path: "/resume"
    },
    {
        name: 'contact',
        path: "/contact"
    },
]

{/*https://www.youtube.com/watch?v=dImgZ_AH7uA&ab_channel=CristianMihai --- 21:19 --- FIX MISSING ACCENT COLOR*/}
const Nav = () => {
    const pathname = usePathname();
    console.log(pathname)

    return <nav className="flex gap-8">
        {links.map((link, index) => 
            {return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"}`}>{link.name}</Link>}
        )}
    </nav>
}

export default Nav