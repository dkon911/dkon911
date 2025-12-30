import { useState, useEffect } from "react"

const sections = [
    { id: "hero", name: "Hero" },
    { id: "about", name: "About" },
    { id: "education", name: "Education" },
    { id: "skills", name: "Skills" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
]

export default function MiniMap() {
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.5 },
        )

        sections.forEach((section) => {
            const element = document.getElementById(section.id)
            if (element) observer.observe(element)
        })

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section.id)
                if (element) observer.unobserve(element)
            })
        }
    }, [])

    const handleClick = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-neo-white p-4 border-2 border-neo-black shadow-hard z-50 hidden md:block">
            <ul className="space-y-3">
                {sections.map((section) => (
                    <li key={section.id}>
                        <button
                            onClick={() => handleClick(section.id)}
                            className={`w-full text-left px-2 py-1 border-2 transition-all duration-200 uppercase font-bold text-xs ${
                                activeSection === section.id 
                                    ? "bg-neo-black text-neo-white border-neo-black shadow-none translate-x-[2px] translate-y-[2px]" 
                                    : "bg-neo-white text-neo-black border-transparent hover:border-neo-black hover:shadow-hard-sm"
                            }`}
                        >
                            {section.name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

