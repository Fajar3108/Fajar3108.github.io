export default function Navbar() {
    return (
        <nav className="mt-10 w-full bg-white rounded-full shadow px-10 py-3 flex justify-center items-center">
            <ul className="flex gap-5 flex-wrap">
                <li>
                    <a href="#about">About</a>
                </li>
                 <li>
                    <a href="#skills">Skills</a>
                </li>
                 <li>
                    <a href="#achievement">Achievement</a>
                </li>

                 <li>
                    <a href="#experience">Experience</a>
                </li>
                 <li>
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </nav>
    )
}