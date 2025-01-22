import { motion } from "framer-motion"
import { Database, Server, Code, BarChart, PenToolIcon as Tool, Users } from "lucide-react"

export default function Skills() {
    const technicalSkills = [
        { name: "Relational Databases: MySQL, PostgreSQL", icon: <Database className="w-6 h-6" /> },
        { name: "NoSQL Databases: MongoDB, Cassandra", icon: <Server className="w-6 h-6" /> },
        { name: "Data Processing: Apache Spark, Pandas", icon: <Code className="w-6 h-6" /> },
        { name: "Programming: Python", icon: <Code className="w-6 h-6" /> },
        { name: "Data Visualization: Grafana", icon: <BarChart className="w-6 h-6" /> },
        { name: "Event Streaming: Kafka", icon: <Server className="w-6 h-6" /> },
        { name: "Job Scheduling: Airflow", icon: <Tool className="w-6 h-6" /> },
        { name: "Tools: Docker", icon: <Tool className="w-6 h-6" /> },
    ]

    const softSkills = [
        { name: "Critical thinking", icon: <Users className="w-6 h-6" /> },
        { name: "Problem solving", icon: <Tool className="w-6 h-6" /> },
        { name: "Working in group", icon: <Users className="w-6 h-6" /> },
        { name: "Project Management: Agile/Scrum", icon: <Tool className="w-6 h-6" /> },
    ]

    return (
        <motion.section
            id="skills"
            className="my-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Technical Skills</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {technicalSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="bg-primary bg-opacity-10 p-4 rounded-lg flex items-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {skill.icon}
                                <span>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Soft Skills</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="bg-primary bg-opacity-10 p-4 rounded-lg flex items-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {skill.icon}
                                <span>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

