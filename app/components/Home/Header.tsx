import SocialMedias, { SocialMediaType } from "@/app/data/social-media";

export default function Header() {
    return (
        <header className="flex flex-col md:flex-row items-center md:justify-between mt-10" id="about">
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600">Maulana Fajar Ibrahim</h1>
                <p className="text-xl mt-2">Fullstack Web Developer | Next/React, Laravel, Go</p>
                <p className="leading-relaxed text-gray-500 mt-3">
                    As a highly accomplished Full-Stack Web Developer, I have over three years of experience with key technologies including PHP Laravel, Go, React.js, and Next.js. My passion for development led me to become a national LKS competition winner and earn the Best Mentor award from Ruang Guru in 2023. Currently, I lead the Full-Stack delivery team at PT Hanatekindo, where I leverage my strong development and leadership skills to drive project success.
                </p>
                <ul className="text-gray-600 flex mt-4 gap-2 justify-center md:justify-start">
                    {
                        SocialMedias.map((item: SocialMediaType, i: number) => (
                            <a href={item.link} target="_blank" key={`social-media-${i}-${item.name}}`} >
                                <li className="border border-gray-300 p-2 rounded text-sm hover:bg-gray-300 transition dark:bg-white">
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