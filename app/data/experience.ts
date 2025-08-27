interface ExperienceType {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    description: Array<string>;
}

const ExperienceData: Array<ExperienceType> = [
    {
        position: "Fullstack Web Developer",
        company: "PT Hanatekindo Mulia Abadi",
        startDate: "Nov 2023",
        endDate: "Present",
        description: [
            "Directing the entire project lifecycle, from planning to quality assurance.",
            "Communicating project outcomes to diverse stakeholders.",
            "Ensuring seamless front-end and back-end integration.",
        ],
    },
    {
        position: "Competition (LKS) Trainer",
        company: "SMKN 10 Jakarta",
        startDate: "Sep 2022",
        endDate: "Okt 2023",
        description: [
            "Mentored 15 students, with one achieving a third-place national ranking.",
            "Elevated the standards for web competition readiness.",
        ],
    },
    {
        position: "Frontend Mentor",
        company: "PT Ruang Raya Indonesia",
        startDate: "Jul 2022",
        endDate: "Jun 2023",
        description: [
            "Recognized as Best Mentor for providing exceptional guidance.",
            "Provided over 180 hours of mentorship to 48 students.",
            "Led 4-5 weekly interactive sessions.",
            "Conducted 24 in-depth one-on-one sessions.",
        ],
    },
    {
        position: "Remote Backend Engineer",
        company: "PT Ruang Raya Indonesia",
        startDate: "Jul 2022",
        endDate: "Sep 2022",
        description: [
            "Optimized backend efficiency and cultivated interdepartmental collaborations.",
            "Consistently delivered tasks within defined schedules.",
            "Actively participated in the upkeep of high-traffic web applications.",
        ],
    },
    {
        position: "Web Developer Internship",
        company: "PT Solusi Intek Indonesia",
        startDate: "Apr 2021",
        endDate: "Okt 2021",
        description: [
            "Spearheaded development and deployment using Laravel & React.js.",
            "Facilitated knowledge transfer initiatives within the team.",
            "Recognized as an outstanding intern for my contributions to the team.",
        ],
    },
];

export default ExperienceData;
export type {ExperienceType};