'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const MENU = [
    {
        name: "Projects",
        link: "/"
    },
    {
        name: "Experience",
        link: "/experience"
    },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="mt-10">
            <ul className="flex gap-2">
                {
                    MENU.map((item, i) => (
                        <li key={`menu-${i}`}>
                            <Link href={item.link} className={clsx(
                                "px-3 py-1 rounded-full hover:bg-black hover:text-white transition dark:hover:bg-white dark:hover:text-black",
                                pathname === item.link ? "bg-black text-white dark:bg-white dark:text-black" : "text-gray-600 dark:text-gray-300"
                            )}>
                                {item.name}
                            </Link>
                        </li>

                    ))
                }
            </ul>
        </nav>
    )
}