import { Award } from "lucide-react";

interface AchievementType {
    title: string;
    description: string;
}
const Achievements: Array<AchievementType> = [
    {
        title: "Best Mentor - Ruangguru",
        description: "Recognized as Best Mentor for providing exceptional guidance."
    },
    {
        title: "4th (Medallion For Exellence) | LKS Nasional 2021 Web Technologies",
        description: "Make WordPress themes from scratch, APIs with Laravel, Frontend with React, and 2D games with JavaScript Canvas according to the given requirements. "
    },
    {
        title: "1st | LKS DKI Jakarta 2021 Web Technologies",
        description: "Winning 1st place at LKS DKI Jakarta 2021."
    },
]

export default function Achievement() {
    return (
        <section className="mt-8" id="achievement">
            <h2 className="font-bold mb-4 text-xl">Achievement [<a href="https://drive.google.com/drive/folders/12vJjHCnFMBEvcvfMyGIuyCjXC-LI_vo5?usp=drive_link" target="_blank" className="text-blue-600">HERE</a>]</h2>
            <div className="space-y-4">
                {
                    Achievements.map((achievement, i) => (
                        <AchiementCard {...achievement} key={`achievement-${i}`} />
                    ))
                }
            </div>
        </section>
    )
}

interface AchievementType {
    title: string;
    description: string;
}
function AchiementCard(props: AchievementType) {
    return (
        <div className="flex items-start">
            <div className="text-yellow-600 mt-1 mr-4 flex-shrink-0">
                <Award size={24} />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{props.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{props.description}</p>
            </div>
        </div>
    )
}