import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuVariants = {
        closed: { opacity: 0, x: "100%" },
        open: { opacity: 1, x: 0 },
    };

    return (
        <>
            <motion.header
                className="bg-neo-white dark:bg-neo-white text-neo-black py-3 sticky top-0 z-[900] border-b-4 border-neo-yellow shadow-hard opacity-100"
                style={{ backgroundColor: 'rgb(var(--neo-white))' }}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <motion.a 
                        href="#hero"
                        className="text-xl md:text-2xl font-display font-bold uppercase bg-neo-black text-neo-white px-3 py-1 shadow-hard-sm no-underline hover:bg-neo-yellow hover:text-neo-black transition-colors" 
                        whileHover={{ scale: 1.05 }}
                    >
                        DC
                    </motion.a>
                    
                    <div className="flex items-center space-x-4">
                        {/* Desktop Nav */}
                        <nav className="hidden md:block">
                            <ul className="flex space-x-6">
                                {["About", "Skills", "Projects", "Contact"].map((item) => (
                                    <li key={item}>
                                        <a 
                                            href={`#${item.toLowerCase()}`} 
                                            className="font-bold uppercase text-sm relative group overflow-hidden inline-block py-1"
                                        >
                                            <span className="relative z-10 group-hover:text-neo-yellow transition-colors duration-300">{item}</span>
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neo-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        
                        <ThemeToggle className="!w-9 !h-9 !border-0 !shadow-none hover:bg-transparent hover:!text-neo-yellow hidden md:flex" />

                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden p-2 text-neo-black hover:text-neo-yellow transition-colors"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[800] bg-neo-white flex flex-col items-center justify-center space-y-8 md:hidden"
                        style={{ backgroundColor: 'rgb(var(--neo-white))' }}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {["Hero", "About", "Skills", "Projects", "Contact"].map((item) => (
                            <a 
                                key={item}
                                href={`#${item.toLowerCase()}`} 
                                className="text-4xl font-display font-bold uppercase text-neo-black hover:text-neo-yellow transition-colors"
                                onClick={toggleMenu}
                            >
                                {item}
                            </a>
                        ))}
                         <div className="pt-8">
                            <ThemeToggle className="!w-12 !h-12" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}