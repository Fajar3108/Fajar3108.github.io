import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import NadiImage from '@/app/images/projects/nadi.co.id.png';
import SiraImage from '@/app/images/projects/siratour.id.png';
import PianoTilesImage from '@/app/images/projects/piano-tiles.png';
import CirendeuImage from '@/app/images/projects/cirendeu.png';

const projects = [
    {
        title: "Nadi Company Profile",
        tags: ["Laravel", "PHP", "Tailwind CSS"],
        liveUrl: "https://nadi.co.id",
        githubUrl: "",
        imageUrl: NadiImage,
    },
    {
        title: "Sira Tour",
        tags: ["React", "Laravel", "Tailwind CSS"],
        liveUrl: "https://siratour.id",
        githubUrl: "",
        imageUrl: SiraImage,
    },
    {
        title: "JS Canvas Game: Piano Tiles",
        tags: ["Vanilla Javascript"],
        liveUrl: "https://pianotilesjscanvas.netlify.app/",
        githubUrl: "https://github.com/Fajar3108/js-canvas-piano-tiles/",
        imageUrl: PianoTilesImage,
    },
    {
        title: "Cirendeu (Vilalge) Admin Panel",
        tags: ["Laravel", "Bootstrap"],
        liveUrl: "",
        githubUrl: "https://github.com/fajar3108/desa-sii",
        imageUrl: CirendeuImage,
    },
];

export default function Projects() {
    return (
        <div className="max-w-6xl mx-auto mt-8" id="projects">
            <h2 className="font-bold mb-4 text-xl">Projects</h2>
            <div className="grid grid-cols-2 gap-10">
                {projects.map((project, i) => (
                    <div key={`project-${i}`} className='grid gap-3'>
                        <Image src={project.imageUrl} alt='Project Tile' width={1000} height={1000} className='w-full rounded-xl' />
                        <div>
                            <h2 className='font-bold'>{project.title}</h2>
                            <ul className='flex gap-2 mt-1 text-blue-600'>
                                {project.tags.map((tag, j) => (
                                    <li key={`project-tag-${j}`}>#{tag}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex gap-2'>
                            {
                                project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="border p-2 rounded border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
                                        <Github size={18} />
                                    </a>
                                )
                            }
                            {
                                project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="border p-2 rounded border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
                                        <ExternalLink size={18} />
                                    </a>
                                )
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}