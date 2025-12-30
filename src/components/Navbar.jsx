export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-neo-white py-4 px-8 flex justify-between items-center border-b-4 border-neo-black z-50">
            <h1 className="text-neo-black text-2xl font-display uppercase font-bold tracking-wider">DUY CONG</h1>
            <ul className="flex space-x-6">
                {["About", "Projects", "Skills", "Contact"].map((item) => (
                    <li key={item}>
                        <a 
                            href={`#${item.toLowerCase()}`} 
                            className="text-neo-black font-bold uppercase border-2 border-transparent hover:border-neo-black hover:shadow-hard-sm px-2 py-1 transition-all bg-neo-white"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
