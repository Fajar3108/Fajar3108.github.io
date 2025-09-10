import ExperienceData from "../data/experience";

export default function ExperiencePage() {
    return (
        <div className="grid gap-5 my-10">
            {
                ExperienceData.map((experience, i) => (
                    <div className="flex gap-3 pb-5 border-b border-gray-300 relative w-full" key={`experience-${i}`}>
                        <h2 className="font-bold text-gray-400">0{i + 1}</h2>
                        <div className="px-4 py-1 border border-gray-300 rounded-full w-fit text-sm text-gray-500 absolute top-1 right-0">
                            {experience.startDate} - {experience.endDate}
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">{experience.position}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{experience.company}</p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
                                {experience.description.map((responsibility, j) => (
                                    <li key={`responsibility-${j}`}>{responsibility}</li>
                                ))}
                            </ul>
                        </div>
                    </div >
                ))
            }
        </div >
    );
}
