import { motion } from "framer-motion"

export default function Projects() {
    const projects = [
        {
            name: "Real-Time Meteorological Data Processing and Forecasting",
            description:
                "Designed and implemented an end-to-end pipeline for weather data collection, processing, and forecasting. Conducted cross-validation and feature engineering for machine learning models (Random Forest, XGBoost). Developed a Grafana dashboard for visualizing real-time and historical weather data.",
            technologies:
                "WeatherAPI (data source) → Kafka (streaming) → Spark (real-time processing) → Cassandra (data storage)",
            github: "https://github.com/yourusername/weather-forecasting",
            date: "Mar 2024 – Nov 2024",
        },
        {
            name: "How Vietnamese use their time",
            description:
                "Analyzed a dataset to explore how Vietnamese people allocate time to daily activities. Cleaned and pre-processed data using Python (Pandas, NumPy). Visualized data trends and insights using Matplotlib and Tableau. Conducted descriptive statistics and pattern analysis to understand time usage behavior.",
            github: "https://github.com/yourusername/vietnamese-time-usage",
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
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        className="bg-primary bg-opacity-10 p-6 rounded-lg"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{project.date}</p>
                        <p className="mb-2">{project.description}</p>
                        {project.technologies && (
                            <p className="mb-2">
                                <strong>Key Technologies:</strong> {project.technologies}
                            </p>
                        )}
                        <p>
                            <strong>Github:</strong>{" "}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                Here
                            </a>
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

