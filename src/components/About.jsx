import { motion } from "framer-motion"

export default function About() {
    return (
        <motion.section
            id="about"
            className="my-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-display uppercase border-b-4 border-neo-black mb-8 inline-block">About Me</h2>
            <div className="bg-neo-white border-2 border-neo-black shadow-hard p-6 relative overflow-hidden">
                 <div className="absolute inset-0 bg-halftone opacity-5 pointer-events-none"></div>
                <p className="text-lg font-medium relative z-10">
                    Highly motivated Data Engineer with a strong foundation in Python, data processing, and machine learning.
                    Proficient in designing scalable data pipelines and implementing predictive models to solve real-world problems.
                    Seeking to contribute technical expertise to an organization while advancing my skills in the data field.
                </p>
            </div>
        </motion.section>
    )
}

