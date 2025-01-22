import { motion } from "framer-motion"

export default function Header() {
    return (
        <motion.header
            className="bg-primary text-background py-4 sticky top-0 z-10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <motion.h1 className="text-2xl font-bold" whileHover={{ scale: 1.1 }}>
                    Data Engineer Portfolio
                </motion.h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#about" className="hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:underline">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:underline">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    )
}

