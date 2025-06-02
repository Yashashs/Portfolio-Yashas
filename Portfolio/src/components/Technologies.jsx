// File: ToolsAndTechnologies.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import expressLogo from '../assets/images/express.png';
import postmanLogo from "../assets/images/Postman.png";
import gitHubLogo from "../assets/images/Github.png";

const techStack = [
    {
        name: "C++",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
    {
        name: "Python",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Python_logo_%28icon_only%29.svg",
    },
    {
        name: "HTML5",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
    },
    {
        name: "CSS3",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    },
    {
        name: "JavaScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
        name: "React.js",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        name: "Tailwind CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
        name: "Node.js",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
        name: "Express.js",
        image: expressLogo,
    },
    {
        name: "MongoDB",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Mongodb-svgrepo-com.svg",
    },
    {
        name: "Postman",
        image: postmanLogo,
    },
    {
        name: "Git",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    },
    {
        name: "GitHub",
        image: gitHubLogo,
    },
    {
        name: "Android Studio",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg",
    },
    {
        name: "Figma",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    

];

export default function Technologies() {
    return (
        <>
            <Header />
            <section className="py-16 text-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
                        Tools and Technologies
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 justify-items-center">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="relative group transition-transform hover:scale-105"
                            >
                                <div className="w-32 h-32 rounded-full border-2 border-gray-700 bg-gray-800 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-blue-500 transition duration-300">
                                    <img
                                        src={tech.image}
                                        alt={tech.name}
                                        className="w-16 h-16 object-contain transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                {/* Tooltip */}
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 bg-blue-500 text-xs text-white py-1 px-2 rounded shadow-lg z-20">
                                    {tech.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}
