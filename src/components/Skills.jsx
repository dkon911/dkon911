import { motion } from "framer-motion"
import { Users, Award } from "lucide-react"
import { 
    SiMysql, SiPostgresql, 
    SiMongodb, SiApachecassandra, 
    SiApachespark, SiPandas, 
    SiPython, 
    SiGrafana, 
    SiApachekafka, 
    SiApacheairflow, 
    SiDocker,
    SiScrumalliance 
} from "react-icons/si";
import { FaBrain, FaLightbulb, FaHandshake } from "react-icons/fa"; // Icons for soft skills

export default function Skills() {
    const technicalSkills = [
        { name: "MySQL", icon: <SiMysql className="w-6 h-6" />},
        { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" /> },
        { name: "Cassandra", icon: <SiApachecassandra className="w-6 h-6" /> },
        { name: "Spark", icon: <SiApachespark className="w-6 h-6" />},
        { name: "Pandas", icon: <SiPandas className="w-6 h-6" /> },
        { name: "Python", icon: <SiPython className="w-6 h-6" /> },
        { name: "Grafana", icon: <SiGrafana className="w-6 h-6" /> },
        { name: "Kafka", icon: <SiApachekafka className="w-6 h-6" /> },
        { name: "Airflow", icon: <SiApacheairflow className="w-6 h-6" />, certificate: "https://drive.google.com/drive/folders/19UsTOPDiUmwILMpH9WL71F5m0uR8UTyu?usp=sharing" },
        { name: "Docker", icon: <SiDocker className="w-6 h-6" /> },
    ]

    const softSkills = [
        { name: "Critical thinking", icon: <FaBrain className="w-6 h-6" /> },
        { name: "Problem solving", icon: <FaLightbulb className="w-6 h-6" /> },
        { name: "Teamwork", icon: <Users className="w-6 h-6" /> },
        { name: "Agile/Scrum", icon: <SiScrumalliance className="w-6 h-6" /> },
    ]

    const SkillCard = ({ skill, index }) => (
        <motion.div
            className="bg-neo-white border-2 border-neo-black p-4 flex items-center justify-between shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group relative overflow-visible"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
        >
            <div className="flex items-center space-x-3">
                {/* Icon Container: Ensure icon is black and scales slightly on hover */}
                <div className="text-neo-black group-hover:scale-110 transition-transform duration-200">
                    {skill.icon}
                </div>
                <span className="font-mono font-bold text-sm md:text-base">{skill.name}</span>
            </div>
            
            {/* Certificate Stamp */}
            {skill.certificate && (
                <a 
                    href={skill.certificate}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-neo-yellow border-2 border-neo-black p-1 shadow-sm transform rotate-12 hover:rotate-0 hover:scale-110 transition-transform z-10 flex flex-col items-center justify-center w-8 h-8 md:w-10 md:h-10"
                    title="View Certificate"
                >
                    <Award className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </a>
            )}
        </motion.div>
    );

    return (
        <motion.section
            id="skills"
            className="my-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-display uppercase border-b-4 border-neo-black mb-8 inline-block tracking-tighter">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-display font-bold uppercase mb-4 bg-neo-cyan text-white inline-block border-2 border-neo-black px-3 py-1 shadow-hard-sm transform -rotate-1">Technical</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {technicalSkills.map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-display font-bold uppercase mb-4 bg-neo-magenta text-white inline-block border-2 border-neo-black px-3 py-1 shadow-hard-sm transform rotate-1">Soft Skills</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {softSkills.map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
