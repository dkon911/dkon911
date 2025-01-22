import { motion } from "framer-motion"
// import {Linkedin, Mail, Phone} from "lucide-react";

export default function About() {
    return (
        <motion.section
            id="about"
            className="my-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg">
                Highly motivated Data Engineer with a strong foundation in Python, data processing, and machine learning.
                Proficient in designing scalable data pipelines and implementing predictive models to solve real-world problems.
                Seeking to contribute technical expertise to an organization while advancing my skills in the data field.
            </p>
            <div className="mt-4">
                {/*<div className="flex flex-col space-y-4">*/}
                {/*    <div className="flex items-center space-x-2">*/}
                {/*        <Phone className="w-6 h-6"/>*/}
                {/*        <a href="tel:+84935989512" className="hover:underline">*/}
                {/*            (+84) 935 989 512*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*    <div className="flex items-center space-x-2">*/}
                {/*        <Mail className="w-6 h-6"/>*/}
                {/*        <a href="mailto:dkon.de31337@gmail.com" className="hover:underline">*/}
                {/*            dkon.de31337@gmail.com*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*    <div className="flex items-center space-x-2">*/}
                {/*        <Linkedin className="w-6 h-6"/>*/}
                {/*        <a*/}
                {/*            href="https://www.linkedin.com/in/yourusername"*/}
                {/*            target="_blank"*/}
                {/*            rel="noopener noreferrer"*/}
                {/*            className="hover:underline"*/}
                {/*        >*/}
                {/*            LinkedIn Profile*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </motion.section>
    )
}

