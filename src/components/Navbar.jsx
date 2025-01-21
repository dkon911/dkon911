export default function Navbar() {
    return (
        <nav className="bg-primary p-4 text-white fixed w-full top-0 z-10">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-2xl font-bold">Duy Cong</h1>
                <ul className="flex space-x-6">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
