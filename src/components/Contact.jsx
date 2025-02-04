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
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                    <Phone className="w-6 h-6" />
                    <a href="tel:+84935989512" className="hover:underline">
                        (+84) 935 989 512
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <Mail className="w-6 h-6" />
                    <a href="mailto:dkon.de31337@gmail.com" className="hover:underline">
                        dkon.de31337@gmail.com
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <Linkedin className="w-6 h-6" />
                    <a
                        href="https://www.linkedin.com/in/ngo-truong-duy-cong-697726267/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        LinkedIn Profile
                    </a>
                </div>
            </div>
        </motion.section>
    )
}

