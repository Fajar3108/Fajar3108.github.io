import ExperienceData, { ExperienceType } from "@/app/data/experience"

export default function Experience() {
    return (
        <section className="mt-8" id="experience">
            <h2 className="font-bold mb-4 text-xl">Expereince</h2>
            <div className="space-y-4">
                {
                    ExperienceData.map((item, i) => (
                        <ExperienceCard key={`experience-${i}`} experience={item} />
                    ))
                }
            </div>
        </section>
    )
}

interface ExperienceCardProps {
    experience: ExperienceType;
}
function ExperienceCard(prop: ExperienceCardProps) {
    return (
        <div className="border rounded-xl border-gray-300 p-4 transition hover:bg-gray-100">
            <h3 className="text-xl font-semibold">{prop.experience.position} - {prop.experience.company}</h3>
            <p className="text-sm text-gray-500">{prop.experience.startDate} - {prop.experience.endDate}</p>
            <ul className="list-disc list-inside mt-2 text-gray-500">
                {
                    prop.experience.description.map((item, j) => (
                        <li key={`experience-desc-${j}`}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}