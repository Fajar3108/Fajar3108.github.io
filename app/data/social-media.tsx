import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

interface SocialMediaType {
    name: string;
    link: string;
    icon: React.ReactNode;
}

const SocialMedias: Array<SocialMediaType> = [
    {
        name: "Github",
        link: "https://github.com/fajar3108",
        icon: <Github size={18} className="dark:text-gray-300" />
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/maulana-fajar-ibrahim-620a471a4/",
        icon: <Linkedin size={18} className="text-blue-400" />
    },
    {
        name: "Email",
        link: "mailto:maulanafajaribrahim@gmail.com",
        icon: <Mail size={18} className="text-red-600" />
    },
];

export default SocialMedias;

export type {
    SocialMediaType
}