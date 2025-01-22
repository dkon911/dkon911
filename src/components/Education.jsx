import { motion } from "framer-motion"

export default function Education() {
    return (
        <motion.section
            id="education"
            className="my-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Bachelor of Information and Technology</h3>
                    <p>University of Greenwich Danang, Vietnam</p>
                    <p>2021 - Now</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">English certificate VSTEP B2</h3>
                    <p>University of Foreign Language Studies, Danang, Vietnam</p>
                    <p>Sep 2024</p>
                    <p>Overall 6.5/10</p>
                </div>
            </div>
        </motion.section>
    )
}

