import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl font-bold text-primary">Hi, I'm Duy Cong</h1>
                <p className="mt-4 text-lg">A passionate Data Engineer</p>
            </motion.div>
        </section>
    );
}
