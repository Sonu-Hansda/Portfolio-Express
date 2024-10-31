// StepTwo.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const programmingOptions = [
    'JavaScript',
    'Python',
    'Java',
    'C/C++',
    'Rust',
];

const developmentOptions = [
    'HTML',
    'CSS',
    'Bootstrap',
    'React',
    'Angular',
];

const StepTwo: React.FC<any> = ({ formData, handleChange, prevStep, nextStep }) => {
    const handleProgrammingChange = (value: string) => {
        const updatedLanguages = formData.programmingLanguages.includes(value)
            ? formData.programmingLanguages.filter((lang: string) => lang !== value)
            : [...formData.programmingLanguages, value];
        handleChange({ programmingLanguages: updatedLanguages });
    };

    const handleDevelopmentChange = (value: string) => {
        const updatedSkills = formData.developmentSkills.includes(value)
            ? formData.developmentSkills.filter((skill: string) => skill !== value)
            : [...formData.developmentSkills, value];
        handleChange({ developmentSkills: updatedSkills });
    };

    const handleNextStep = () => {
        if (formData.programmingLanguages.length === 0 || formData.developmentSkills.length === 0) {
            toast('No worries! We’ll teach you the rest. 🚀📚');
        } else if (formData.programmingLanguages.length > 2 || formData.developmentSkills.length > 3) {
            toast('Good job! Let\'s prepare for the job! 💼🎉');
        }
        nextStep();
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto p-4" // Center and limit max width
        >
            <h2 className="text-5xl font-bold mb-4 text-center">Tell us about yourself</h2>
            <p className="mb-6 text-lg text-gray-400 text-center">
                Please select the programming languages and development skills you are familiar with.
            </p>
    
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Programming Languages:</h3>
                <div className="flex flex-wrap gap-2">
                    {programmingOptions.map((option) => (
                        <button
                            key={option}
                            className={`flex items-center px-4 py-2 rounded-full transition duration-300 
                                ${formData.programmingLanguages.includes(option) 
                                    ? 'bg-teal-500 text-white' 
                                    : 'bg-gray-200 text-gray-800 hover:bg-teal-500 hover:text-white'
                                }`}
                            onClick={() => handleProgrammingChange(option)}
                        >
                            <span className="mr-2">{option}</span>
                        </button>
                    ))}
                </div>
            </div>
    
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Development Skills:</h3>
                <div className="flex flex-wrap gap-2">
                    {developmentOptions.map((option) => (
                        <button
                            key={option}
                            className={`flex items-center px-4 py-2 rounded-full transition duration-300 
                                ${formData.developmentSkills.includes(option) 
                                    ? 'bg-teal-500 text-white' 
                                    : 'bg-gray-200 text-gray-800 hover:bg-teal-500 hover:text-white'
                                }`}
                            onClick={() => handleDevelopmentChange(option)}
                        >
                            <span className="mr-2">{option}</span>
                        </button>
                    ))}
                </div>
            </div>
    
            <div className="flex flex-col md:flex-row justify-between mt-8 border-t border-gray-400 pt-4">
                <button
                    onClick={prevStep}
                    className="mb-4 md:mb-0 md:w-auto px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-300"
                >
                    Back
                </button>
                <button
                    onClick={handleNextStep}
                    className="flex items-center md:w-auto px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300"
                >
                    Next
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
                </button>
            </div>
        </motion.div>
    );
};

export default StepTwo;