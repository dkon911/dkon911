import { motion } from "framer-motion"

export default function Hero() {
    return (
        <motion.section
            id="hero"
            className="text-center py-20 mb-12 bg-neo-white border-2 md:border-4 border-neo-black shadow-hard relative overflow-hidden group"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none"></div>
            
            <div className="relative z-10">
                <motion.h1
                    className="text-4xl md:text-8xl font-display font-bold mb-6 uppercase text-neo-black tracking-tighter"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                >
                    Ngo Truong<br/>Duy Cong
                </motion.h1>
                <motion.div 
                    className="inline-block bg-neo-yellow border-2 border-neo-black px-6 py-2 shadow-hard-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-none"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-xl md:text-3xl font-mono font-bold uppercase text-white">
                        Data Engineer
                    </p>
                </motion.div>
            </div>
        </motion.section>
    )
}

