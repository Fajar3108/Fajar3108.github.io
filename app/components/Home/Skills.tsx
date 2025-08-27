export default function Skills() {
    return (
        <section className="mt-8" id="skills">
            <h2 className="font-bold mb-4 text-xl">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
                {['JavaScript', 'PHP', 'Go', 'Laravel', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'HTML5', 'CSS3', 'Git', 'Docker', 'SOLID Principles', 'RESTful API'].map(skill => (
                    <span key={skill} className="bg-gray-100 text-sm font-medium px-4 py-2 rounded-full">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
}