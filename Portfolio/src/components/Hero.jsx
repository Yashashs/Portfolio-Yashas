import React from 'react';
// import phtImage from '../assets/images/pht.jpeg';
import Yashas from '../assets/images/Yash.JPG';
import { Typewriter } from 'react-simple-typewriter';
import Resume from '../assets/images/Yashas_R.pdf'


// function Hero() {
//     return (
//         <div className='mt-36'>
//             <div className="flex items-center justify-between w-full px-4 max-w-screen-xl mx-auto -mt-[60px] relative">
//                 <div className="text-section w-2/4 ml-4 md:ml-16 realtive">
//                     <div className="absolute w-96 h-56 bg-cyan-400 rounded-full blur-3xl opacity-30 -z-10 top-4 left-5"></div>
//                     <p className="text-xl my-4 md:my-6">Hello, My Name is</p>
//                     <h1 className="text-5xl md:text-6xl font-['Spartan'] font-[900]">
//                         Yashas Sawai
//                     </h1>
//                     <p className="text-3xl my-4 md:my-6">And I am a, <span className='text-cyan-500'>
//                         <Typewriter
//                             words={['Web Developer', 'Coder']}
//                             loop={true}
//                             cursor
//                             cursorStyle='|'
//                             typeSpeed={90}
//                             deleteSpeed={50}
//                             delaySpeed={2000}
//                         /></span></p>
//                     <p className="font-['Merriweather'] italic my-4 md:my-6">
//                         "I am a passionate full-stack developer skilled in building seamless, user-friendly applications.
//                         With expertise in modern front-end and back-end technologies, I thrive on solving challenges,
//                         writing clean code, and creating efficient, scalable solutions. Always eager to learn, I aim to
//                         deliver impactful projects that exceed expectations."
//                     </p>
//                     <button
//                         className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group">
//                         <a
//                             href={Resume}
//                             download="Yashas_Sawai_Resume.pdf"
//                             className="flex items-center justify-center"
//                         >
//                             My Resume
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 version="1.1"
//                                 x="0px"
//                                 y="0px"
//                                 width="44"
//                                 height="44"
//                                 viewBox="0 0 100 100"
//                                 className="absolute top-1/2 -translate-y-1/2 -right-6 group-hover:-right-8 ease-in-out duration-100"
//                             >
//                                 <g transform="translate(0,-952.36218)">
//                                     <path
//                                         style={{
//                                             textIndent: 0,
//                                             textTransform: 'none',
//                                             direction: 'ltr',
//                                             blockProgression: 'tb',
//                                             baselineShift: 'baseline',
//                                             color: '#000000',
//                                             enableBackground: 'accumulate'
//                                         }}
//                                         d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
//                                         fill="#fff"
//                                         fillOpacity="1"
//                                         stroke="white"
//                                         strokeWidth="2"
//                                     />
//                                 </g>
//                             </svg>
//                         </a>
//                     </button>
//                 </div>
//                 <div className="mr-16 relative w-72 h-72">
//                     <div
//                         className="absolute inset-0 z-[-1] bg-gradient-to-r from-pink-600 via-blue-400 to-teal-400 blur-[5rem] opacity-60 rounded-full"
//                     ></div>
//                     <img src={Yashas} alt="Profile" className="h-72 w-72 rounded-[50%] object-cover" />
//                 </div>
//             </div>

//             <div className="flex justify-center mt-[75px]">
//                 <button id="connect-button"
//                     onClick={() => {
//                         const section = document.getElementById('connectme');
//                         const button = document.getElementById('connect-button'); // give your button this id
//                         const buttonHeight = button ? button.offsetHeight : 0;
//                         const yOffset = -buttonHeight - 165; // 20px extra padding, adjust as needed
//                         const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

//                         window.scrollTo({ top: y, behavior: 'smooth' });
//                     }}
//                     className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-16"
//                 >
//                     Let's Connect
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         version="1.1"
//                         x="0px"
//                         y="0px"
//                         width="44"
//                         height="44"
//                         viewBox="0 0 100 100"
//                         className="absolute rotate-90 left-1/2 -translate-x-1/2 top-11 group-hover:top-12 ease-in-out duration-100"
//                     >
//                         <g transform="translate(0,-952.36218)">
//                             <path
//                                 style={{
//                                     textIndent: 0,
//                                     textTransform: 'none',
//                                     direction: 'ltr',
//                                     blockProgression: 'tb',
//                                     baselineShift: 'baseline',
//                                     color: '#000000',
//                                     enableBackground: 'accumulate'
//                                 }}
//                                 d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
//                                 fill="#fff"
//                                 fillOpacity="1"
//                                 stroke="white"
//                                 strokeWidth="2"
//                             />
//                         </g>
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// }
function Hero() {
    return (
        <div className='mt-36'>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 max-w-screen-xl mx-auto -mt-[60px] relative">
                <div className="text-section w-full md:w-2/4 ml-4 md:ml-16 relative">
                    <div className="absolute w-96 h-56 bg-cyan-400 rounded-full blur-3xl opacity-30 -z-10 top-4 left-5"></div>
                    <p className="text-xl my-4 md:my-6">Hello, My Name is</p>
                    <h1 className="text-5xl md:text-6xl font-['Spartan'] font-[900]">
                        Yashas Sawai
                    </h1>
                    <p className="text-3xl my-4 md:my-6">And I am a, <span className='text-cyan-500'>
                        <Typewriter
                            words={['Web Developer', 'Coder']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={90}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        /></span></p>
                    <p className="font-['Merriweather'] italic my-4 md:my-6">
                        "I am a passionate full-stack developer skilled in building seamless, user-friendly applications.
                        With expertise in modern front-end and back-end technologies, I thrive on solving challenges,
                        writing clean code, and creating efficient, scalable solutions. Always eager to learn, I aim to
                        deliver impactful projects that exceed expectations."
                    </p>
                    <button
                        className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group">
                        <a
                            href={Resume}
                            download="Yashas_Sawai_Resume.pdf"
                            className="flex items-center justify-center"
                        >
                            My Resume
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="44"
                                height="44"
                                viewBox="0 0 100 100"
                                className="absolute top-1/2 -translate-y-1/2 -right-6 group-hover:-right-8 ease-in-out duration-100"
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
                        </a>
                    </button>
                </div>
                <div className="mr-0 md:mr-16 relative w-72 h-72 mb-6 md:mb-0">
                    <div
                        className="absolute inset-0 z-[-1] bg-gradient-to-r from-pink-600 via-blue-400 to-teal-400 blur-[5rem] opacity-60 rounded-full"
                    ></div>
                    <img src={Yashas} alt="Profile" className="h-72 w-72 rounded-[50%] object-cover" />
                </div>
            </div>

            {/* rest unchanged */}
            <div className="flex justify-center mt-[75px]">
                <button id="connect-button"
                    onClick={() => {
                        const section = document.getElementById('connectme');
                        const button = document.getElementById('connect-button'); // give your button this id
                        const buttonHeight = button ? button.offsetHeight : 0;
                        const yOffset = -buttonHeight - 165; // 20px extra padding, adjust as needed
                        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }}
                    className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-16"
                >
                    Let's Connect
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        x="0px"
                        y="0px"
                        width="44"
                        height="44"
                        viewBox="0 0 100 100"
                        className="absolute rotate-90 left-1/2 -translate-x-1/2 top-11 group-hover:top-12 ease-in-out duration-100"
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
        </div>
    );
}


export default Hero;