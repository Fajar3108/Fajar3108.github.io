import SocialMedias, { SocialMediaType } from "@/app/data/social-media";
import Image from "next/image";
import ImageProfile from "@/app/favicon.ico"

export default function Header() {
    return (
        <header className="flex flex-col mt-24" id="about">
            <div>
                <div className="w-16 h-16 relative rounded-lg overflow-hidden mb-3 p-1 shadow">
                    <Image alt="Profile" src={ImageProfile} className="rounded-lg" />
                </div>
                <h1 className="text-2xl md:text-3xl">Hello, I{"'"}m Fajar!</h1>
                <p className="leading-relaxed text-gray-500 mt-3 max-w-sm dark:text-gray-300">
                    Full-Stack Web Developer (3+ years) proficient in PHP Laravel, React.js/Next.js, and Go.
                </p>
                <ul className="text-gray-600 flex mt-4 gap-2">
                    {
                        SocialMedias.map((item: SocialMediaType, i: number) => (
                            <a href={item.link} target="_blank" key={`social-media-${i}-${item.name}}`} >
                                <li className="border border-gray-300 p-2 rounded text-sm hover:bg-gray-300 dark:hover:bg-black transition">
                                    {item.icon}
                                </li>
                            </a>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}