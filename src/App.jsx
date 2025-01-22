import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Education from "./components/Education"
import MiniMap from "./components/MiniMap"

function App() {
    return (
        <div className="min-h-screen relative">
            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <MiniMap />
        </div>
    )
}

export default App

