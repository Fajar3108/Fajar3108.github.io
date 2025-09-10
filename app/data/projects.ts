import SiraTourImage from "@/app/images/projects/siratour.id.png";
import CirendeuImage from "@/app/images/projects/cirendeu.png";
import NadiImage from "@/app/images/projects/nadi.co.id.png";
import PianoTileImage from "@/app/images/projects/piano-tiles.png";
import { StaticImageData } from "next/image";

interface ProjectType {
    id: string;
    title: string;
    description: string;
    siteLink: string;
    githubLink: string;
    image: StaticImageData;
}

const ProjectsData: ProjectType[] = [
    {
        id: "1",
        title: "Nadi Company Profile",
        description: "Developed a company profile website for Nadi using Laravel and Tailwind CSS.",
        siteLink: "https://nadi.co.id",
        githubLink: "",
        image: NadiImage,
    },
    {
        id: "2",
        title: "Sira Tour - Travel Booking Platform",
        description: "Developed a travel booking platform using Laravel for the backend and React for the frontend.",
        siteLink: "https://siratour.id",
        githubLink: "",
        image: SiraTourImage,
    },
    {
        id: "3",
        title: "Cirendeu - Village Profile Website",
        description: "Developed a village profile website using Laravel for the backend and React for the frontend.",
        siteLink: "",
        githubLink: "https://github.com/fajar3108/desa-sii",
        image: CirendeuImage,
    },
    {
        id: "4",
        title: "Piano Tiles - JS Canvas Game",
        description: "Developed a JS canvas game using JavaScript. Implemented features such as touch and click events, game physics, and responsive design.",
        siteLink: "https://pianotilesjscanvas.netlify.app/",
        githubLink: "https://github.com/Fajar3108/js-canvas-piano-tiles/",
        image: PianoTileImage,
    },
];

export default ProjectsData;
export type {
    ProjectType
}