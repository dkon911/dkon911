import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center text-center bg-hero-pattern bg-cover">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-6xl font-bold text-white glitch">Hi, I'm <span className="text-neon-cyan">Duy Cong</span></h1>
                <p className="mt-4 text-lg text-neon-pink">Data Engineer with a cyberpunk touch</p>
            </motion.div>
        </section>
    );
}
