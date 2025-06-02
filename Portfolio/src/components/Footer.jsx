// Footer.jsx
import React from "react";

const Footer = () => {
    return (
        <footer className="text-white py-10 bg-[#141414] mt-14 border-t border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-screen-xl">
                {/* Flex container for aligning sections with proper spacing */}
                <div className="flex justify-between items-start md:items-center space-x-4">
                    {/* About Me Section */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-4">Yashas Sawai</h3>
                        <p className="text-md">Aspiring Full Stack Developer</p>
                    </div>

                    {/* Contact Section */}
                    <div className="text-right">
                        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                        <ul className="space-y-2 text-lg">
                            <li>
                                Email:{" "}
                                <a href="mailto:yashassawai@gmail.com" className="hover:text-gray-400">
                                    yashassawai@gmail.com
                                </a>
                            </li>
                            <li>
                                Phone:{" "}
                                <a href="tel:+1234567890" className="hover:text-gray-400">
                                    +91 7387514174
                                </a>
                            </li>
                            <li>
                                Socials:{" "}
                                <a href="https://www.linkedin.com/in/yashas-sawai-bab0ab250" className="hover:text-gray-400 ml-2">
                                    LinkedIn
                                </a>{" "}
                                |{" "}
                                <a href="https://github.com/Yashashs" className="hover:text-gray-400 ml-2">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
                    <p>© 2025 | Yashas Sawai All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
