const projects = [
    {
        title: "Real-Time Weather Forecast",
        description: "End-to-end pipeline for weather data processing using Kafka, Spark, and Cassandra.",
        github: "https://github.com/dkon911/weather_streamming",
    },
    {
        title: "Vietnamese Time Usage Analysis",
        description: "Analyzed how Vietnamese people spend their time using Pandas, Matplotlib, and Tableau.",
        github: "https://github.com/dkon911/How_Vietnamese_ppl_spend_their_time",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 container mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary">Projects</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-6 shadow-lg rounded-lg max-w-sm">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="mt-2">{project.description}</p>
                        <a href={project.github} className="text-primary mt-4 block">View on GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
