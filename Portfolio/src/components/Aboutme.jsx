import React from "react";
import Header from "./Header";
import { FaFacebook, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Yashas from '../assets/images/Yash.JPG';
// import profilePic from "../assets/images/pht.jpeg"; // Replace with your photo path

import { FaMapMarkerAlt } from 'react-icons/fa';
import TiltCard from "./TiltCard";
import Footer from "./Footer";


const AboutMe = () => {
    return (
        <>
            <Header></Header>

            <section className="py-16 px-4 md:px-16 text-white">
                <div className="flex relative flex-col items-center justify-center gap-[5rem] max-w-5xl mx-auto px-4">
                    {/* Profile + Intro */}
                    <div className="flex flex-col md:flex-row items-center gap-14 w-full">
                        {/* Your profile photo and description here */}
                        <div className="flex flex-col md:flex-row items-center gap-14">
                            <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg hover:scale-105 transition duration-500">
                                <img
                                    src={Yashas}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1 flex-col text-left">
                                <h2 className="text-5xl font-bold mb-2" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>  Yashas Sawai </h2>
                                <p className="text-gray-400 mb-4 font-sans text-xl">
                                    Web Developer
                                </p>
                                {/* <p className="text-gray-500 italic font-mono text-l">
                                    "Full-stack web developer passionate about building impactful applications."
                                </p> */}
                                <div className="w-full mt-6">
                                    {/* <h3 className="text-xl font-bold text-cyan-300 mb-4">Connect with me</h3> */}
                                    <div className="flex space-x-6 text-2xl">
                                        {/* Your social links here */}
                                        <a
                                            href="https://www.instagram.com/_yashas.29?igsh=MTluazd1eDY3cm9nYg=="
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-xl p-1 hover:bg-cyan-500 hover:scale-125 transition-all hover:rounded-xl"
                                        >
                                            <FaInstagram />
                                        </a>
                                        {/* <a
                                            href="https://facebook.com/yourhandle"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-xl p-1 hover:bg-cyan-500 hover:scale-125 transition-all hover:rounded-xl"
                                        >
                                            <FaFacebook />
                                        </a> */}
                                        <a
                                            href="https://www.linkedin.com/in/yashas-sawai-bab0ab250"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-xl p-1 hover:bg-cyan-500 hover:scale-125 transition-all hover:rounded-xl"
                                        >
                                            <FaLinkedin />
                                        </a>
                                        <a
                                            href="https://github.com/Yashashs"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-xl p-1 hover:bg-cyan-500 hover:scale-125 transition-all hover:rounded-xl"
                                        >
                                            <FaGithub />
                                        </a>
                                        <a
                                            href="mailto:yashassawai@gmail.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-xl p-1 hover:bg-cyan-500 hover:scale-125 transition-all hover:rounded-xl"
                                        >
                                            <IoMail />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <h1 className="text-4xl font-bold text-cyan-300 w-full text-center border-b-2 pb-4 border-white-500" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>About Me</h1>


                    {/* Basic Details */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-20 text-gray-300 w-full">
                        {/* Basic Details and Location */}
                        <div className="md:w-2/3">
                            {/* <h3 className="text-xl font-bold mb-2 text-cyan-300">Basic Details</h3> */}
                            <p className="text-lg font-['Noto_Sans',sans-serif]">
                                I'm a full-stack web developer with a passion for creating seamless and user-friendly digital experiences.
                                With hands-on experience in both front-end and back-end technologies, I enjoy turning ideas into functional, efficient applications.
                            </p>

                            <p className="mt-6 text-lg font-['Noto_Sans',sans-serif]">I'm always eager to learn new skills and stay updated with the latest trends in web development. My goal is to build scalable solutions that solve real-world problems while continuously improving my craft
                            </p>
                            {/* <ul className="space-y-1">
                                <li><span className="font-semibold">Name:</span> Yashas Sawai</li>
                                <li><span className="font-semibold">Age:</span> 20</li>
                                <li><span className="font-semibold">Email:</span> you@example.com</li>
                            </ul> */}
                        </div>
                        <div className="md:w-1/3">

                            {/* <h3 className="text-xl font-bold mb-2 text-cyan-300">Location</h3> */}
                            <p className="flex items-center space-x-2 text-lg">
                                <FaMapMarkerAlt className="text-grey-400" />
                                <span>Location: Nagpur, Maharashtra, India</span>
                            </p>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-cyan-300 w-full text-center border-b-2 pb-4 border-white-500" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>Education</h1>

                    <div className="w-full">
                        <div className="relative flex flex-col space-y-8">
                            {/* Vertical timeline line */}
                            <div className="absolute left-8 top-10 bottom-0 w-0.5 bg-cyan-300"></div>

                            {/* Timeline item 1 */}
                            <div className="flex items-start relative">
                                {/* Dot aligned to timeline */}
                                <div className="absolute left-8 w-6 h-6 rounded-full border-2 border-cyan-500 flex items-center justify-center bg-blue -translate-x-1/2">
                                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                                </div>

                                {/* Card to the right of the dot */}
                                <div className="ml-12">
                                    <TiltCard
                                        title="B.Tech in Computer Engineering"
                                        date="2022 - 2026"
                                        subtitle="NMIMS University"
                                    >
                                        I am currently pursuing a Bachelor of Technology degree in Computer Engineering at MPSTME, Shirpur, with a CGPA of 3.56 on a 4.0 scale.
                                    </TiltCard>
                                </div>
                            </div>

                            <div className="flex items-start relative">
                                {/* Dot aligned to timeline */}
                                <div className="absolute left-8 w-6 h-6 rounded-full border-2 border-cyan-500 flex items-center justify-center bg-blue -translate-x-1/2">
                                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                                </div>

                                {/* Card to the right of the dot */}
                                <div className="ml-12">
                                    <TiltCard
                                        title="Successfully completed Class 12"
                                        date="2020 - 2022"
                                        subtitle="Yeshwant College"
                                    >
                                        I completed Class 12 from Yeshwant College, HSC Board in 2022, in science Stream and also I have achieved 72.1% in my class 12th.
                                    </TiltCard>
                                </div>
                            </div>

                            <div className="flex items-start relative">
                                {/* Dot aligned to timeline */}
                                <div className="absolute left-8 w-6 h-6 rounded-full border-2 border-cyan-500 flex items-center justify-center bg-blue -translate-x-1/2">
                                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                                </div>

                                {/* Card to the right of the dot */}
                                <div className="ml-12">
                                    <TiltCard
                                        title="Successfully completed Class 10"
                                        date="2020"
                                        subtitle="Bhanvans Lloyds Vidya Niketan"
                                    >
                                        I completed Class 10 from Bhavans Lloyds Vidya Niketan, under CBSE Board in 2020,and also I have achieved 89.2% in my class 10th.
                                    </TiltCard>
                                </div>
                            </div>


                        </div>

                    </div>



                    {/* Connect with me */}


                    {/* Education Timeline */}
                    {/* <div
                        className="rounded-md shadow-sm shadow-indigo-700 pb-3 md:pl-4 pl-2 pr-2 relative overflow-hidden cursor-pointer transition-transform duration-[500ms] ease-out[transform-style:preserve-3d]bg-neutral-900 border-2 border-t-transparent border-r-transparent border-b-transparent border-l-transparent border-indigo-600 md:border-l md:pr-4 md:mr-1 md:mt-2"
                        style={{ transform: "rotateX(0deg) rotateY(0deg)", background: "rgb(17, 24, 39)", transformStyle: "preserve-3d" }}>
                        <h3 className="text-white text-sm md:text-sm font-bold mb-2 mt-2">
                            <span className="md:text-lg text-indigo-400">Technical Lead at GDSC MPSTME Shirpur&nbsp;&nbsp;</span>
                            (2023 - 2024)
                        </h3>
                        <p className="text-primary-200 text-sm md:text-base">
                            In August 2023, I became the Technical Lead for our campus. I organized and managed the Code Kraken hackathon,
                            facilitated Google Cloud workshops, and taught 9th-10th grade students about technology to inspire their interest.
                            I also maintain the GDSC-MPSTME-SHIRPUR website.
                        </p>
                    </div> */}
                </div>

            </section>

            <Footer></Footer>


        </>

    );
};

export default AboutMe;
