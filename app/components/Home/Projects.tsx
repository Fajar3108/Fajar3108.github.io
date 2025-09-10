import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import ProjectsData, { ProjectType } from "@/app/data/projects";

export default function Projects() {
    return (
        <section className="my-10">

            <div className="grid gap-5">
                {
                    ProjectsData.map((project: ProjectType) => (
                        <div key={project.id} className="grid md:grid-cols-2 gap-5 shadow-[0_0_20px_rgba(0,0,0,0.1)] p-8 md:py-14 rounded-2xl overflow-hidden dark:bg-gray-900">
                            <div>
                                <h3 className="font-semibold text-lg">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="mt-5 flex gap-2">
                                    {
                                        project.siteLink && (
                                            <Link href={project.siteLink} className="px-5 border rounded-full flex gap-2 w-fit bg-black text-white transition" target="_blank">
                                                Visit Site
                                                <ArrowRight className="w-3" />
                                            </Link>
                                        )
                                    }

                                    {
                                        project.githubLink && (
                                            <Link href={project.githubLink} className="px-5 border rounded-full flex gap-2 w-fit hover:bg-black hover:text-white transition" target="_blank">
                                                Github
                                                <Github className="w-3" />
                                            </Link>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="relative">
                                <Image src={project.image} alt={project.title} className="md:absolute md:-bottom-20 md:-right-10 h-64 rounded-lg shadow-lg max-h-80 object-cover mt-4 md:mt-0" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}