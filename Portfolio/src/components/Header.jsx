// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Header() {
//     return (
//         <header className="flex items-center justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto border-b border-gray-700">
//             <svg
//                 viewBox="0 0 128 128"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="64"
//                 height="64"
//                 aria-hidden="true"
//                 role="img"
//                 className="iconify iconify--noto"
//                 preserveAspectRatio="xMidYMid meet"
//                 fill="#ffffff"
//                 stroke="#ffffff"
//             >
//                 <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                 <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//                 <g id="SVGRepo_iconCarrier">
//                     <path
//                         d="M114.89 16.69a2.36 2.36 0 0 0-2.09-1.25H90.5c-.77 0-1.5.38-1.94 1.02L64 51.74L39.43 16.45a2.346 2.346 0 0 0-1.94-1.02h-22.3c-.87 0-1.67.48-2.08 1.25s-.36 1.71.12 2.43l36.58 54.56v44.58c0 1.29 1.05 2.33 2.34 2.33h23.71c1.29 0 2.34-1.04 2.34-2.33V73.68l36.57-54.56c.48-.72.53-1.66.12-2.43z"
//                         fill="#ffffff"
//                     ></path>
//                 </g>
//             </svg>
//             {/* <div class="text-lg font-semibold cursor-pointer"><a href="/"><span class="text-[#8245ec]">&lt;</span><span class="text-white">Kapil</span><span class="text-[#8245ec]">/</span><span class="text-white">Agrawal</span><span class="text-[#8245ec]">&gt;</span></a></div> */}
//             <nav className="flex gap-8 text-xl">
//                 <Link to="/" className="hover:text-blue-400">Home</Link>
//                 <Link to="/projects" className="hover:text-blue-400">Projects</Link>
//                 <Link to="/technologies" className="hover:text-blue-400">Tools and Technologies</Link>
//                 <Link to="/aboutme" className="hover:text-blue-400">About Me</Link>
//                 {/* <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="feather feather-sun"
//                 >
//                     <circle cx="12" cy="12" r="5"></circle>
//                     <line x1="12" y1="1" x2="12" y2="3"></line>
//                     <line x1="12" y1="21" x2="12" y2="23"></line>
//                     <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
//                     <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
//                     <line x1="1" y1="12" x2="3" y2="12"></line>
//                     <line x1="21" y1="12" x2="23" y2="12"></line>
//                     <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
//                     <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
//                 </svg>
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="hidden"
//                 >
//                     <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//                 </svg> */}
//             </nav>
//         </header>
//     );
// }

/////////////////////////////////////////////////////////// ------- Old MId Version --------- //////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Header() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <header className="flex items-center justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto border-b border-gray-700">
//             <svg
//                 viewBox="0 0 128 128"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="64"
//                 height="64"
//                 aria-hidden="true"
//                 role="img"
//                 className="iconify iconify--noto"
//                 preserveAspectRatio="xMidYMid meet"
//                 fill="#ffffff"
//                 stroke="#ffffff"
//             >
//                 <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                 <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//                 <g id="SVGRepo_iconCarrier">
//                     <path
//                         d="M114.89 16.69a2.36 2.36 0 0 0-2.09-1.25H90.5c-.77 0-1.5.38-1.94 1.02L64 51.74L39.43 16.45a2.346 2.346 0 0 0-1.94-1.02h-22.3c-.87 0-1.67.48-2.08 1.25s-.36 1.71.12 2.43l36.58 54.56v44.58c0 1.29 1.05 2.33 2.34 2.33h23.71c1.29 0 2.34-1.04 2.34-2.33V73.68l36.57-54.56c.48-.72.53-1.66.12-2.43z"
//                         fill="#ffffff"
//                     ></path>
//                 </g>
//             </svg>

//             {/* Hamburger icon for small screens */}
//             <button
//                 className="sm:hidden flex flex-col items-center justify-center w-8 h-8 text-white focus:outline-none"
//                 onClick={() => setIsOpen(!isOpen)}
//             >
//                 <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
//                 <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
//                 <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
//             </button>

//             {/* Desktop nav */}
//             <nav className="hidden sm:flex gap-8 text-xl">
//                 <Link to="/" className="hover:text-blue-400">Home</Link>
//                 <Link to="/projects" className="hover:text-blue-400">Projects</Link>
//                 <Link to="/technologies" className="hover:text-blue-400">Tools and Technologies</Link>
//                 <Link to="/aboutme" className="hover:text-blue-400">About Me</Link>
//             </nav>

//             {/* Mobile nav (dropdown) */}
//             {isOpen && (
//                 // <nav className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-4 sm:hidden text-xl border-t border-gray-700 z-50">
//                 <nav className="absolute top-16 left-0 w-full bg-black/ backdrop-blur-xl flex flex-col items-center gap-4 py-4 sm:hidden text-xl border-t border-gray-700 z-50">

//                         <Link to="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link>
//                         <Link to="/projects" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</Link>
//                         <Link to="/technologies" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Tools and Technologies</Link>
//                         <Link to="/aboutme" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>About Me</Link>
//                     </nav>
//             )}
//                 </header>
//             );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Y from '../assets/images/Group 739 (1).png'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/30 backdrop-blur-xl z-40 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            />
            <header className="relative z-50 flex items-center justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto border-b border-gray-700">
                {/* Logo */}
                {/* <h1 className="h-16 text-xl text-white flex items-center justify-center">
                    Yashas Sawai
                </h1> */}
                {/* <div>
                    <img src={Y} alt="" className="w-64 h-16 sm"  />    
                </div> */}

                {/* <div>
                    <h1 className='[font-family:"Play",sans-serif] font-bold text-cyan-500 h-[64px] w-[64px] text-[46px] flex items-center'>
                        <span className='text-[36px]'>👨‍💻</span>
                        yashas.
                    </h1>
                </div> */}

                <Link to="/">
                    <div>
                        <h1 className='[font-family:"Play",sans-serif] font-bold text-cyan-500  flex items-center'>
                            <span className="text-[46px] sm:text-[30px] md:text-[40px]">👨‍💻</span>
                            <span className="text-[36px] sm:text-[40px] md:text-[36px]">yashas.</span>
                        </h1>
                    </div>
                </Link>




                {/* <div className="flex items-center">
                    <img src={Y} alt="" className="w-16 h-16" />
                    <p className="text-white text-lg mt-6">Your text here</p>
                </div> */}

                {/* <svg
                    viewBox="0 0 128 128"
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--noto"
                    preserveAspectRatio="xMidYMid meet"
                    fill="#ffffff"
                    stroke="#ffffff"
                >
                    <path
                        d="M114.89 16.69a2.36 2.36 0 0 0-2.09-1.25H90.5c-.77 0-1.5.38-1.94 1.02L64 51.74L39.43 16.45a2.346 2.346 0 0 0-1.94-1.02h-22.3c-.87 0-1.67.48-2.08 1.25s-.36 1.71.12 2.43l36.58 54.56v44.58c0 1.29 1.05 2.33 2.34 2.33h23.71c1.29 0 2.34-1.04 2.34-2.33V73.68l36.57-54.56c.48-.72.53-1.66.12-2.43z"
                        fill="#ffffff"
                    ></path>
                    
                </svg> */}


                {/* Hamburger icon for small screens */}
                <button
                    className="sm:hidden flex flex-col items-center justify-center w-8 h-8 text-white focus:outline-none z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div
                        className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1' : ''
                            }`}
                    ></div>
                    <div
                        className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''
                            }`}
                    ></div>
                    <div
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1' : ''
                            }`}
                    ></div>
                </button>

                {/* Desktop nav */}
                <nav className="hidden sm:flex gap-8 text-xl">
                    <Link to="/" className="hover:text-blue-400">
                        Home
                    </Link>
                    <Link to="/projects" className="hover:text-blue-400">
                        Projects
                    </Link>
                    <Link to="/technologies" className="hover:text-blue-400">
                        Tools and Technologies
                    </Link>
                    <Link to="/aboutme" className="hover:text-blue-400">
                        About Me
                    </Link>
                </nav>

                {/* Backdrop overlay */}


                {/* Mobile nav (dropdown) */}
                <nav
                    className={`absolute top-16 left-0 w-full bg-black/60 backdrop-blur-xl flex flex-col items-center gap-4 py-4 sm:hidden text-xl border-t border-gray-700 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                        }`}
                >
                    <Link to="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link to="/projects" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
                        Projects
                    </Link>
                    <Link to="/technologies" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
                        Tools and Technologies
                    </Link>
                    <Link to="/aboutme" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
                        About Me
                    </Link>
                </nav>
            </header>
        </>

    );
}
