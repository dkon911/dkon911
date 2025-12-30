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
            <h2 className="text-4xl font-display uppercase border-b-4 border-neo-black mb-8 inline-block">Education</h2>
            <div className="space-y-6">
                <div className="bg-neo-white border-2 border-neo-black shadow-hard p-6 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                    <h3 className="text-xl font-bold uppercase">Bachelor of Information and Technology</h3>
                    <p className="font-semibold">University of Greenwich Danang, Vietnam</p>
                    <p className="text-sm font-mono bg-neo-yellow inline-block px-1 border border-neo-black mt-1">2021 - Now</p>
                </div>
                <div className="bg-neo-white border-2 border-neo-black shadow-hard p-6 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                    <h3 className="text-xl font-bold uppercase">English certificate VSTEP B2</h3>
                    <p className="font-semibold">University of Foreign Language Studies, Danang, Vietnam</p>
                    <p className="text-sm font-mono bg-neo-cyan inline-block px-1 border border-neo-black mt-1">Sep 2024</p>
                    <p className="mt-2 font-bold">Overall 6.5/10</p>
                </div>
            </div>
        </motion.section>
    )
}

