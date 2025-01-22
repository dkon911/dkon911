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
        <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
            <ul className="space-y-2">
                {sections.map((section) => (
                    <li key={section.id}>
                        <button
                            onClick={() => handleClick(section.id)}
                            className={`text-sm ${
                                activeSection === section.id ? "text-primary font-bold" : "text-gray-500 hover:text-primary"
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

