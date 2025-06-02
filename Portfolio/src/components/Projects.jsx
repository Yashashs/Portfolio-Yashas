// import React from "react";
// import Header from './Header';
// import Footer from "./Footer";
// import { FaGithub } from "react-icons/fa";
// import Sobus from "../assets/images/Sobus.png";
// import Currency from "../assets/images/Currency.png";
// import Portfolio from "../assets/images/Portfolio.png";
// import Calculator from "../assets/images/Calculator.png";

// const Projects = () => {
//     return (
//         <>
//             <Header />
//             <section className="max-w-screen-xl mx-auto px-4 relative">
//                 <div className="flex justify-center mt-12">
//                     <button
//                         className="bg-[#4595eb] py-2 px-8 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-16 w-48 text-2xl"
//                     >
//                         Projects
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             version="1.1"
//                             x="0px"
//                             y="0px"
//                             width="44"
//                             height="44"
//                             viewBox="0 0 100 100"
//                             className="absolute rotate-90 left-1/2 -translate-x-1/2 top-14 group-hover:top-16 ease-in-out duration-100"
//                         >
//                             <g transform="translate(0,-952.36218)">
//                                 <path
//                                     style={{
//                                         textIndent: 0,
//                                         textTransform: 'none',
//                                         direction: 'ltr',
//                                         blockProgression: 'tb',
//                                         baselineShift: 'baseline',
//                                         color: '#000000',
//                                         enableBackground: 'accumulate'
//                                     }}
//                                     d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
//                                     fill="#fff"
//                                     fillOpacity="1"
//                                     stroke="white"
//                                     strokeWidth="2"
//                                 />
//                             </g>
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Vertical Timeline */}
//                 <div className="absolute left-1/2 -translate-x-1/2 bg-[#1788ae]" style={{ top: '130px', bottom: '0', width: '2.5px' }}></div>

//                 {/* Project 1: Harigurus */}
//                 <div className="flex gap-[80px] items-center mt-12 relative">
//                     {/* Timeline marker */}
//                     <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] bg-[#111] z-10 absolute left-1/2 -translate-x-1/2"></div>

//                     {/* Horizontal line from timeline to image */}
//                     <div className="h-[1px] bg-[#1788ae] absolute right-1/2 top-1/2 w-[calc(50%-200px)]"></div>

//                     <a href="https://sobus.vercel.app/home" className="flex w-full relative">
//                         <div className="relative group hover:scale-105 ease-in-out duration-200">
//                             <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] px-4 absolute left-1/2 -translate-x-1/2 top-3 py-2 rounded w-max items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
//                                 Sobus
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="16"
//                                     height="16"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="feather feather-external-link"
//                                 >
//                                     <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
//                                     <polyline points="15 3 21 3 21 9"></polyline>
//                                     <line x1="10" y1="14" x2="21" y2="3"></line>
//                                 </svg>
//                             </span>
//                             <div className="mr-16 relative w-72 h-72">
//                                 <div
//                                     className="absolute inset-0 z-[-1] bg-gradient-to-r from-pink-600 via-blue-400 to-teal-400 blur-[5rem] opacity-60 rounded-full"
//                                 ></div>
//                                 <img
//                                     className="max-w-[400px] mr-auto relative"
//                                     src={Sobus}
//                                     alt="Harigurus"
//                                 />
//                             </div>

//                         </div>
//                     </a>
//                     <div className="w-full mb-6">
//                         <h3 className="text-[#fc815c] font-bold text-4xl">Sobus</h3>
//                         <span className="text-[#fc815c] text-lg">(Club Management)</span>
//                         <p className="text-justify mt-2">
//                             The Sobus platform streamlines task assignments and activity tracking for its entrepreneurial community. Admins can easily assign tasks, create new activities, and notify members in real time, while members can track and update tasks seamlessly. This user-friendly platform fosters collaboration, helping Sobus stay organized and productive.
//                         </p>
//                         <ul className="flex flex-wrap gap-2 mt-2">
//                             {[
//                                 "#react.js",
//                                 "#express.js",
//                                 "#node.js",
//                                 "#postman",
//                                 "#tailwind css",
//                                 "#passport.js",
//                                 "#cloudinary",
//                                 "#mongoDB",
//                                 "#vercel",
//                                 "#nodemailer",
//                             ].map((tech, index) => (
//                                 <li
//                                     key={index}
//                                     className="border rounded-[50px] border-[#999] px-[10px] py-[5px]"
//                                 >
//                                     {tech}
//                                 </li>
//                             ))}
//                         </ul>
//                         <a href="#"><FaGithub className="mt-5 ml-2 h-[25px] w-[25px] hover:text-blue-500 hover:scale-125 rounded-xl transition-all hover:rounded-xl" /></a>
//                     </div>
//                 </div>
//                 <div className="flex gap-[80px] items-center mt-12 relative flex-row-reverse">
//                     {/* Timeline marker */}
//                     <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] bg-[#111] z-10 absolute left-1/2 -translate-x-1/2"></div>

//                     {/* Horizontal line from timeline to image */}
//                     <div className="h-[1px] bg-[#1788ae] absolute left-1/2 top-1/2 w-[calc(50%-200px)]"></div>

//                     <a href="#" className="flex w-full relative">
//                         <div className="relative group hover:scale-105 ease-in-out duration-200 ml-auto">
//                             <span className="flex text-black group-hover:-top-14 ease-jump duration-200 bg-[#ffe578] px-4 absolute left-1/2 -translate-x-1/2 top-3 py-2 rounded w-max items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
//                                 EazyGrad
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="16"
//                                     height="16"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="feather feather-external-link"
//                                 >
//                                     <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
//                                     <polyline points="15 3 21 3 21 9"></polyline>
//                                     <line x1="10" y1="14" x2="21" y2="3"></line>
//                                 </svg>
//                             </span>
//                             <div className="mr-16 relative w-72 h-72">
//                                 <div
//                                     className="absolute inset-0 z-[-1] bg-gradient-to-r from-pink-600 via-blue-400 to-teal-400 blur-[5rem] opacity-60 rounded-full"
//                                 ></div>
//                                 <img
//                                     className="max-w-[400px] relative"
//                                     src={Portfolio}
//                                     alt="EazyGrad"
//                                 />
//                             </div>

//                         </div>
//                     </a>
//                     <div className="w-full">
//                         <h3 className="text-[#ffe578] font-bold text-4xl">Portfolio</h3>
//                         <span className="text-[#ffe578] text-lg">(Personal Website)</span>
//                         <p className="text-justify mt-2">
//                             This is my personal portfolio website, where I showcase my projects, skills, and experiences. It's designed to provide an overview of my work and help visitors learn more about me. The site is built using React.js, Tailwind CSS.
//                         </p>
//                         <ul className="flex flex-wrap gap-2 mt-2">
//                             {[
//                                 "#react.js",
//                                 "#tailwind",
//                                 "#css",
//                                 "#javascript",
//                             ].map((tech, index) => (
//                                 <li
//                                     key={index}
//                                     className="border rounded-[50px] border-[#999] px-[10px] py-[5px]"
//                                 >
//                                     {tech}
//                                 </li>
//                             ))}
//                         </ul>
//                         <a href="#"><FaGithub className="mt-5 ml-2 h-[25px] w-[25px] hover:text-blue-500 hover:scale-125 rounded-xl transition-all hover:rounded-xl" /></a>
//                     </div>
//                 </div>
//                 <div className="flex gap-[80px] items-center mt-12 relative">
//                     {/* Timeline marker */}
//                     <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] bg-[#111] z-10 absolute left-1/2 -translate-x-1/2"></div>

//                     {/* Horizontal line from timeline to image */}
//                     <div className="h-[1px] bg-[#1788ae] absolute right-1/2 top-1/2 w-[calc(50%-200px)]"></div>

//                     <a href="https://sobus.vercel.app/home" className="flex w-full relative">
//                         <div className="relative group hover:scale-105 ease-in-out duration-200">
//                             <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] px-4 absolute left-1/2 -translate-x-1/2 top-3 py-2 rounded w-max items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
//                                 Sobus
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="16"
//                                     height="16"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="feather feather-external-link"
//                                 >
//                                     <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
//                                     <polyline points="15 3 21 3 21 9"></polyline>
//                                     <line x1="10" y1="14" x2="21" y2="3"></line>
//                                 </svg>
//                             </span>
//                             <div className="mr-16 relative w-72 h-72">
//                                 <div
//                                     className="absolute inset-0 z-[-1] bg-gradient-to-r from-pink-600 via-blue-400 to-teal-400 blur-[5rem] opacity-60 rounded-full"
//                                 ></div>
//                                 <img
//                                     className="max-w-[400px] mr-auto relative"
//                                     src={Calculator}
//                                     alt="Harigurus"
//                                 />
//                             </div>

//                         </div>
//                     </a>
//                     <div className="w-full mb-6">
//                         <h3 className="text-[#fc815c] font-bold text-4xl">Numerical Calculator</h3>
//                         <span className="text-[#fc815c] text-lg">(Calculator)</span>
//                         <p className="text-justify mt-2">
//                             Developed a web-based calculator using HTML, CSS, and JavaScript for real-time arithmetic operations. Styled the interface with CSS, featuring a gradient background and custom-styled buttons for better UX. Implemented JavaScript logic to handle inputs, perform calculations, and update the display dynamically.
//                         </p>
//                         <ul className="flex flex-wrap gap-2 mt-2">
//                             {[
//                                 "#html",
//                                 "#css",
//                                 "#javascript",
//                             ].map((tech, index) => (
//                                 <li
//                                     key={index}
//                                     className="border rounded-[50px] border-[#999] px-[10px] py-[5px]"
//                                 >
//                                     {tech}
//                                 </li>
//                             ))}
//                         </ul>
//                         <a href="#"><FaGithub className="mt-5 ml-2 h-[25px] w-[25px] hover:text-blue-500 hover:scale-125 rounded-xl transition-all hover:rounded-xl" /></a>
//                     </div>
//                 </div>
//                 {/* Project 2: EazyGrad */}
//                 <div className="flex gap-[80px] items-center mt-12 relative flex-row-reverse">
//                     {/* Timeline marker */}
//                     <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] bg-[#111] z-10 absolute left-1/2 -translate-x-1/2"></div>

//                     {/* Horizontal line from timeline to image */}
//                     <div className="h-[1px] bg-[#1788ae] absolute left-1/2 top-1/2 w-[calc(50%-200px)]"></div>

//                     <a href="#" className="flex w-full relative">
//                         <div className="relative group hover:scale-105 ease-in-out duration-200 ml-auto">
//                             <span className="flex text-black group-hover:-top-14 ease-jump duration-200 bg-[#ffe578] px-4 absolute left-1/2 -translate-x-1/2 top-3 py-2 rounded w-max items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
//                                 EazyGrad
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="16"
//                                     height="16"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="feather feather-external-link"
//                                 >
//                                     <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
//                                     <polyline points="15 3 21 3 21 9"></polyline>
//                                     <line x1="10" y1="14" x2="21" y2="3"></line>
//                                 </svg>
//                             </span>
//                             <div className="mr-16 relative w-72 h-72">
//                                 <div
//                                     className="absolute inset-0 z-[-1] bg-gradient-to-r from-pink-600 via-blue-400 to-teal-400 blur-[5rem] opacity-60 rounded-full"
//                                 ></div>
//                                 <img
//                                     className="max-w-[400px] relative"
//                                     src={Currency}
//                                     alt="EazyGrad"
//                                 />
//                             </div>

//                         </div>
//                     </a>
//                     <div className="w-full">
//                         <h3 className="text-[#ffe578] font-bold text-4xl">Currency Converter</h3>
//                         <span className="text-[#ffe578] text-lg">(Calculator)</span>
//                         <p className="text-justify mt-2">
//                             Developed an interactive currency converter using HTML, CSS, and JavaScript with real-time exchange rates. Designed a user-friendly interface with dynamic input fields and currency selectors for better UX. Integrated a currency exchange API for real-time updates and accurate conversions using JavaScript.
//                         </p>
//                         <ul className="flex flex-wrap gap-2 mt-2">
//                             {[
//                                 "#html",
//                                 "#css",
//                                 "#javascript",
//                             ].map((tech, index) => (
//                                 <li
//                                     key={index}
//                                     className="border rounded-[50px] border-[#999] px-[10px] py-[5px]"
//                                 >
//                                     {tech}
//                                 </li>
//                             ))}
//                         </ul>
//                         <a href="#"><FaGithub className="mt-5 ml-2 h-[25px] w-[25px] hover:text-blue-500 hover:scale-125 rounded-xl transition-all hover:rounded-xl" /></a>
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </>


//     );
// };

// export default Projects;

import React from "react";
import Header from './Header';
import Footer from "./Footer";
import { FaGithub } from "react-icons/fa";
import Sobus from "../assets/images/Sobus.png";
import Currency from "../assets/images/Currency.png";
import Portfolio from "../assets/images/Portfolio.png";
import Calculator from "../assets/images/Calculator.png";

const Projects = () => {
    return (
        <>
            <Header />
            <section className="max-w-screen-xl mx-auto px-4 relative">
                <div className="flex justify-center mt-12">
                    <button
                        className="bg-[#4595eb] py-2 px-8 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-16 w-48 text-2xl"
                    >
                        Projects
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            x="0px"
                            y="0px"
                            width="44"
                            height="44"
                            viewBox="0 0 100 100"
                            className="absolute rotate-90 left-1/2 -translate-x-1/2 top-14 group-hover:top-16 ease-in-out duration-100"
                        >
                            <g transform="translate(0,-952.36218)">
                                <path
                                    style={{
                                        textIndent: 0,
                                        textTransform: 'none',
                                        direction: 'ltr',
                                        blockProgression: 'tb',
                                        baselineShift: 'baseline',
                                        color: '#000000',
                                        enableBackground: 'accumulate'
                                    }}
                                    d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
                                    fill="#fff"
                                    fillOpacity="1"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </g>
                        </svg>
                    </button>
                </div>

                {/* Vertical Timeline - Hidden on small screens */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bg-[#1788ae]" style={{ top: '130px', bottom: '0', width: '2.5px' }}></div>

                {/* Project 1: Sobus */}
                <div className="lg:flex lg:gap-[80px] items-center mt-12 relative">
                    {/* Timeline marker - Hidden on small screens */}
                    <div className="hidden lg:block w-4 h-4 rounded-full border-[3px] border-[#fc815c] bg-[#111] z-10 absolute left-1/2 -translate-x-1/2"></div>

                    {/* Horizontal line from timeline to image - Hidden on small screens */}
                    <div className="hidden lg:block h-[1px] bg-[#1788ae] absolute right-1/2 top-1/2 w-[calc(50%-200px)]"></div>

                    <a href="https://sobus.vercel.app/home" className="flex w-full relative items-center">
                        <div className="relative group hover:scale-105 ease-in-out duration-200 mx-auto lg:mx-0">
                            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] px-4 absolute left-1/2 -translate-x-1/2 top-3 py-2 rounded w-max items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                                Sobus
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-external-link"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </span>
                            <div className="lg:mr-16 relative w-[400px] h-72 mx-auto">
                                <div
                                    className="absolute w-[400px] inset-0 z-[-1] bg-gradient-to-r from-pink-600 via-blue-400 to-teal-400 blur-[5rem] opacity-60 rounded-full"
                                ></div>
                                <img
                                    className="max-w-[400px] lg:mr-auto relative mx-auto"
                                    src={Sobus}
                                    alt="Sobus"
                                />
                            </div>
                        </div>
                    </a>
                    <div className="w-full mb-6 lg:mt-0 text-center lg:text-left">
                        <h3 className="text-[#fc815c] font-bold text-4xl">Sobus</h3>
                        <span className="text-[#fc815c] text-lg">(Club Management)</span>
                        <p className="text-justify mt-2 lg:pr-0 px-4 lg:px-0">
                            The Sobus platform streamlines task assignments and activity tracking for its entrepreneurial community. Admins can easily assign tasks, create new activities, and notify members in real time, while members can track and update tasks seamlessly. This user-friendly platform fosters collaboration, helping Sobus stay organized and productive.
                        </p>
                        <ul className="flex flex-wrap gap-2 mt-2 justify-center lg:justify-start">
                            {[
                                "#react.js",
                                "#express.js",
                                "#node.js",
                                "#postman",
                                "#tailwind css",
                                "#passport.js",
                                "#cloudinary",
                                "#mongoDB",
                                "#vercel",
                                "#nodemailer",
                            ].map((tech, index) => (
                                <li
                                    key={index}
                                    className="border rounded-[50px] border-[#999] px-[10px] py-[5px]"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center lg:justify-start">
                            <a href="https://github.com/chirag412vijayvergiya/sobus"><FaGithub className="mt-5 ml-2 h-[25px] w-[25px] hover:text-blue-500 hover:scale-125 rounded-xl transition-all hover:rounded-xl" /></a>
                        </div>
                    </div>
                </div>

                {/* Project 2: Portfolio */}
                <div className="mt-40 lg:flex lg:gap-[80px] items-center relative flex-col lg:flex-row-reverse">
                    {/* Timeline marker - Hidden on small screens */}
                    <div className="hidden lg:block w-4 h-4 rounded-full border-[3px] border-[#fc815c] bg-[#111] z-10 absolute left-1/2 -translate-x-1/2"></div>

                    {/* Horizontal line from timeline to image - Hidden on small screens */}
                    <div className="hidden lg:block h-[1px] bg-[#1788ae] absolute left-1/2 top-1/2 w-[calc(50%-200px)]"></div>

                    <a href="#" className="flex w-full relative">
                        <div className="relative group hover:scale-105 ease-in-out duration-200 mx-auto lg:ml-auto">
                            <span className="flex text-black group-hover:-top-14 ease-jump duration-200 bg-[#ffe578] px-4 absolute left-1/2 -translate-x-1/2 top-3 py-2 rounded w-max items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                                Portfolio
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-external-link"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </span>
                            <div className="lg:ml-16 relative w-[400px] h-72 mx-auto">
                                <div
                                    className="absolute w-[400px] inset-0 z-[-1] bg-gradient-to-r from-pink-600 via-blue-400 to-teal-400 blur-[5rem] opacity-60 rounded-full"

                                ></div>
                                <img
                                    className="max-w-[400px] lg:mr-auto relative mx-auto"
                                    src={Portfolio}
                                    alt="Portfolio"
                                />
                            </div>
                        </div>
                    </a>
                    <div className="w-full lg:mt-0 text-center lg:text-left">
                        <h3 className="text-[#ffe578] font-bold text-4xl">Portfolio</h3>
                        <span className="text-[#ffe578] text-lg">(Personal Website)</span>
                        <p className="text-justify mt-2 lg:pr-0 px-4 lg:px-0">
                            This is my personal portfolio website, where I showcase my projects, skills, and experiences. It's designed to provide an overview of my work and help visitors learn more about me. The site is built using React.js, Tailwind CSS.
                        </p>
                        <ul className="flex flex-wrap gap-2 mt-2 justify-center lg:justify-start">
                            {[
                                "#react.js",
                                "#tailwind",
                                "#css",
                                "#javascript",
                            ].map((tech, index) => (
                                <li
                                    key={index}
                                    className="border rounded-[50px] border-[#999] px-[10px] py-[5px]"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center lg:justify-start">
                            <a href="https://github.com/Yashashs/Portfolio-Yashas"><FaGithub className="mt-5 ml-2 h-[25px] w-[25px] hover:text-blue-500 hover:scale-125 rounded-xl transition-all hover:rounded-xl" /></a>
                        </div>
                    </div>
                </div>

                {/* Project 3: Calculator */}
                <div className="mt-40 lg:flex lg:gap-[80px] items-center mt-28 relative">
                    {/* Timeline marker - Hidden on small screens */}
                    <div className="hidden lg:block w-4 h-4 rounded-full border-[3px] border-[#fc815c] bg-[#111] z-10 absolute left-1/2 -translate-x-1/2"></div>

                    {/* Horizontal line from timeline to image - Hidden on small screens */}
                    <div className="hidden lg:block h-[1px] bg-[#1788ae] absolute right-1/2 top-1/2 w-[calc(50%-200px)]"></div>

                    <a href="#" className="flex w-full relative">
                        <div className="relative group hover:scale-105 ease-in-out duration-200 mx-auto lg:mx-0">
                            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] px-4 absolute left-1/2 -translate-x-1/2 top-3 py-2 rounded w-max items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                                Calculator
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-external-link"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </span>
                            <div className="lg:mr-16 relative w-[400px] h-72 mx-auto">
                                <div
                                    className="absolute w-[400px] inset-0 z-[-1] bg-gradient-to-r from-pink-600 via-blue-400 to-teal-400 blur-[5rem] opacity-60 rounded-full"
                                ></div>
                                <img
                                    className="max-w-[400px] lg:mr-auto relative"
                                    src={Calculator}
                                    alt="Calculator"
                                />
                            </div>
                        </div>
                    </a>
                    <div className="w-full mb-6 lg:mt-0 text-center lg:text-left">
                        <h3 className="text-[#fc815c] font-bold text-4xl">Numerical Calculator</h3>
                        <span className="text-[#fc815c] text-lg">(Calculator)</span>
                        <p className="text-justify mt-2 lg:pr-0 px-4 lg:px-0">
                            Developed a web-based calculator using HTML, CSS, and JavaScript for real-time arithmetic operations. Styled the interface with CSS, featuring a gradient background and custom-styled buttons for better UX. Implemented JavaScript logic to handle inputs, perform calculations, and update the display dynamically.
                        </p>
                        <ul className="flex flex-wrap gap-2 mt-2 justify-center lg:justify-start">
                            {[
                                "#html",
                                "#css",
                                "#javascript",
                            ].map((tech, index) => (
                                <li
                                    key={index}
                                    className="border rounded-[50px] border-[#999] px-[10px] py-[5px]"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center lg:justify-start">
                            <a href="https://github.com/Yashashs/Calculator"><FaGithub className="mt-5 ml-2 h-[25px] w-[25px] hover:text-blue-500 hover:scale-125 rounded-xl transition-all hover:rounded-xl" /></a>
                        </div>
                    </div>
                </div>

                {/* Project 4: Currency Converter */}
                <div className="mt-40 lg:flex lg:gap-[80px] items-center mt-28 relative flex-col lg:flex-row-reverse">
                    {/* Timeline marker - Hidden on small screens */}
                    <div className="hidden lg:block w-4 h-4 rounded-full border-[3px] border-[#fc815c] bg-[#111] z-10 absolute left-1/2 -translate-x-1/2"></div>

                    {/* Horizontal line from timeline to image - Hidden on small screens */}
                    <div className="hidden lg:block h-[1px] bg-[#1788ae] absolute left-1/2 top-1/2 w-[calc(50%-200px)]"></div>

                    <a href="#" className="flex w-full relative">
                        <div className="relative group hover:scale-105 ease-in-out duration-200 mx-auto lg:ml-auto">
                            <span className="flex text-black group-hover:-top-14 ease-jump duration-200 bg-[#ffe578] px-4 absolute left-1/2 -translate-x-1/2 top-3 py-2 rounded w-max items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                                Currency
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-external-link"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </span>
                            <div className="lg:ml-16 relative w-[400px] h-72 mx-auto">
                                <div
                                    className="absolute w-[400px] inset-0 z-[-1] bg-gradient-to-r from-pink-600 via-blue-400 to-teal-400 blur-[5rem] opacity-60 rounded-full"
                                ></div>
                                <img
                                    className="max-w-[400px] relative"
                                    src={Currency}
                                    alt="Currency Converter"
                                />
                            </div>
                        </div>
                    </a>
                    <div className="w-full lg:mt-0 text-center lg:text-left">
                        <h3 className="text-[#ffe578] font-bold text-4xl">Currency Converter</h3>
                        <span className="text-[#ffe578] text-lg">(Calculator)</span>
                        <p className="text-justify mt-2 lg:pr-0 px-4 lg:px-0">
                            Developed an interactive currency converter using HTML, CSS, and JavaScript with real-time exchange rates. Designed a user-friendly interface with dynamic input fields and currency selectors for better UX. Integrated a currency exchange API for real-time updates and accurate conversions using JavaScript.
                        </p>
                        <ul className="flex flex-wrap gap-2 mt-2 justify-center lg:justify-start">
                            {[
                                "#html",
                                "#css",
                                "#javascript",
                            ].map((tech, index) => (
                                <li
                                    key={index}
                                    className="border rounded-[50px] border-[#999] px-[10px] py-[5px]"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center lg:justify-start">
                            <a href="https://github.com/Yashashs/Currency-Calculator"><FaGithub className="mt-5 ml-2 h-[25px] w-[25px] hover:text-blue-500 hover:scale-125 rounded-xl transition-all hover:rounded-xl" /></a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Projects;
