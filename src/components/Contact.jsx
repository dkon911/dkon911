import { motion } from "framer-motion"
import { Mail, Phone, Linkedin } from "lucide-react"

export default function Contact() {
    return (
        <motion.section
            id="contact"
            className="my-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-display uppercase border-b-4 border-neo-black mb-8 inline-block">Contact</h2>
            <div className="bg-neo-white border-2 border-neo-black shadow-hard p-8">
                <div className="flex flex-col space-y-6">
                    <div className="flex items-center space-x-4 group">
                        <div className="bg-neo-yellow p-2 border-2 border-neo-black group-hover:shadow-hard-sm transition-all">
                            <Phone className="w-6 h-6 text-neo-black" />
                        </div>
                        <a href="tel:+84935989512" className="text-lg font-bold hover:underline decoration-2 underline-offset-4">
                            (+84) 935 989 512
                        </a>
                    </div>
                    <div className="flex items-center space-x-4 group">
                        <div className="bg-neo-cyan p-2 border-2 border-neo-black group-hover:shadow-hard-sm transition-all">
                             <Mail className="w-6 h-6 text-neo-black" />
                        </div>
                        <a href="mailto:dkon.de31337@gmail.com" className="text-lg font-bold hover:underline decoration-2 underline-offset-4">
                            dkon.de31337@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-4 group">
                         <div className="bg-neo-magenta p-2 border-2 border-neo-black group-hover:shadow-hard-sm transition-all">
                             <Linkedin className="w-6 h-6 text-neo-black" />
                        </div>
                        <a
                            href="https://www.linkedin.com/in/ngo-truong-duy-cong-697726267/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-bold hover:underline decoration-2 underline-offset-4"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

