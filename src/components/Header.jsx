import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
             setHidden(false); // Cuộn xuống -> Ẩn (để rộng chỗ đọc)
        } else if (latest < previous) {
             setHidden(true); // Cuộn lên -> Hiện (để điều hướng)
        }
    });

    return (
        <motion.header
            className="bg-neo-white dark:bg-neo-white text-neo-black py-3 sticky top-0 z-[900] border-b-4 border-neo-black shadow-hard opacity-100"
            style={{ backgroundColor: 'rgb(var(--neo-white))' }}
            variants={{
                visible: { y: 0 },
                hidden: { y: "-110%" },
            }}
            initial="visible"
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <motion.a 
                    href="#hero"
                    className="text-xl md:text-2xl font-display font-bold uppercase bg-neo-yellow px-2 border-2 border-neo-black shadow-hard-sm no-underline text-neo-black" 
                    whileHover={{ scale: 1.05 }}
                >
                    DC
                </motion.a>
                
                <div className="flex items-center space-x-4">
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4">
                            {["Hero", "About", "Skills", "Projects", "Contact"].map((item) => (
                                <li key={item}>
                                    <a 
                                        href={`#${item.toLowerCase()}`} 
                                        className="font-bold uppercase hover:bg-neo-black hover:text-neo-white px-3 py-1 transition-colors border-2 border-transparent hover:border-transparent text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    
                    {/* Theme Toggle integrated here */}
                    <ThemeToggle />
                </div>
            </div>
        </motion.header>
    )
}

