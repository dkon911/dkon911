import { motion } from "framer-motion"

export default function Projects() {
    const projects = [
        {
            name: "Real-Time Meteorological Data Processing and Forecasting",
            description:
                "Designed and implemented an end-to-end pipeline for weather data collection, processing, and forecasting. Conducted cross-validation and feature engineering for machine learning models (Random Forest, XGBoost). Developed a Grafana dashboard for visualizing real-time and historical weather data.",
            technologies:
                "WeatherAPI (data source) → Kafka (streaming) → Spark (real-time processing) → Cassandra (data storage)",
            github: "https://github.com/dkon911/weather_streamming",
            date: "Mar 2024 – Nov 2024",
        },
        {
            name: "How Vietnamese use their time",
            description:
                "Analyzed a dataset to explore how Vietnamese people allocate time to daily activities. Cleaned and pre-processed data using Python (Pandas, NumPy). Visualized data trends and insights using Matplotlib and Tableau. Conducted descriptive statistics and pattern analysis to understand time usage behavior.",
            github: "https://github.com/dkon911/How_Vietnamese_ppl_spend_their_time/blob/main/demoASM2.ipynb",
            date: "Aug 2023 – Sep 2023",
        },
    ]

    return (
        <motion.section
            id="projects"
            className="my-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-display uppercase border-b-4 border-neo-black mb-8 inline-block">Projects</h2>
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        className="bg-neo-white border-2 border-neo-black p-6 shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all relative overflow-hidden"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                         <div className="absolute top-0 right-0 w-16 h-16 bg-halftone opacity-10"></div>
                        <h3 className="text-2xl font-bold uppercase mb-2">{project.name}</h3>
                        <p className="text-sm font-mono bg-neo-white border border-neo-black inline-block px-2 mb-4">{project.date}</p>
                        <p className="mb-4 font-medium">{project.description}</p>
                        {project.technologies && (
                            <p className="mb-4 p-3 bg-neo-yellow/20 border-l-4 border-neo-black">
                                <strong>Key Technologies:</strong> {project.technologies}
                            </p>
                        )}
                        <p>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-neo-black text-neo-white font-bold py-2 px-4 hover:bg-neo-white hover:text-neo-black border-2 border-neo-black transition-colors"
                            >
                                View on Github
                            </a>
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

