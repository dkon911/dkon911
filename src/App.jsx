import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Education from "./components/Education"
import MiniMap from "./components/MiniMap"
import Cursor from "./components/Cursor"
import Header from "./components/Header"

function App() {
    return (
        <div className="min-h-screen relative cursor-none md:cursor-default transition-colors duration-300">
            <Cursor />
            <Header />
            <main className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
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

