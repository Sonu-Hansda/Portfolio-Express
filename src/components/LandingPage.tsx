import React, { useEffect, useState } from 'react';
import backgrounImage from '../assets/development.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 

const LandingPage: React.FC = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Poortfolio Express';
    const typingSpeed = 200;
    const navigate = useNavigate();

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length - 1) {
                setDisplayText((prev) => prev + fullText[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, []);

    const handleGetStarted = () => {

        navigate('/registration');

    };

    return (
        <div className="flex flex-col items-center justify-center md:h-screen text-white max-w-4xl mx-8 md:mx-0">
            <div>
                <motion.img
                    className="relative md:absolute md:right-40 md:top-32 h-44 md:h-96 z-10 md:mx-auto mb-4"
                    src={backgrounImage}
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.h2
                    className="hidden md:block mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Engineering & Computational Mechanics presents
                </motion.h2>
                <motion.h2
                    className="md:hidden mb-2"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    ECM Presents
                </motion.h2>
                <motion.h1
                    className="text-6xl font-bold mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {displayText}
                </motion.h1>
                <motion.p
                    className="md:text-2xl mb-8 max-w-xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    An exclusive web development bootcamp designed to transform you into a portfolio-ready developer!
                </motion.p>
                <motion.button
                    onTap={handleGetStarted}
                    className="flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300"
                    initial={{ opacity: 0, x: -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Get Started
                    <motion.svg
                        className="shrink-0 size-4 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{
                            x: [0, 5, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                    >
                        <path d="m9 18 6-6-6-6" />
                    </motion.svg>
                </motion.button>
            </div>
        </div>
    );
};

export default LandingPage;