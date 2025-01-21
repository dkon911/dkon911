export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-lg py-4 px-8 flex justify-between items-center border-b border-neon-pink z-10">
            <h1 className="text-neon-cyan text-2xl font-bold">DUY CONG</h1>
            <ul className="flex space-x-6 text-white">
                {["About", "Projects", "Skills", "Contact"].map((item) => (
                    <li key={item} className="hover:text-neon-pink transition">
                        <a href={`#${item.toLowerCase()}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
