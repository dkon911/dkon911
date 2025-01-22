import { motion } from "framer-motion"

export default function Hero() {
    return (
        <motion.section
            id="hero"
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="text-5xl font-bold mb-4"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                Ngo Truong Duy Cong
            </motion.h1>
            <motion.p
                className="text-xl"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                Data Engineer
            </motion.p>
        </motion.section>
    )
}

