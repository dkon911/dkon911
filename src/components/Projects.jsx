const projects = [
    {
        title: "Real-Time Weather Forecast",
        description: "Pipeline xử lý dữ liệu thời tiết bằng Kafka, Spark, Cassandra.",
        github: "https://github.com/dkon911/weather_streamming",
    },
    {
        title: "Vietnamese Time Usage Analysis",
        description: "Phân tích thời gian sử dụng của người Việt.",
        github: "https://github.com/dkon911/How_Vietnamese_ppl_spend_their_time",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 container mx-auto text-center">
            <h2 className="text-3xl font-bold text-neon-pink">Projects</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-black/40 p-6 border border-neon-cyan shadow-lg transform hover:scale-105 transition-all duration-300">
                        <h3 className="text-xl text-neon-cyan">{project.title}</h3>
                        <p className="mt-2 text-gray-300">{project.description}</p>
                        <a href={project.github} className="text-neon-pink mt-4 inline-block">View on GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
