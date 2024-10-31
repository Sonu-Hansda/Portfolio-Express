import React from 'react';
import { motion } from 'framer-motion';
import male from '../assets/boy.png';
import female from '../assets/girl.png';
import other from '../assets/silence.png';
import { toast } from 'react-toastify';

const StepOne: React.FC<any> = ({ formData, handleChange, nextStep }) => {
    const handleNextStep = () => {
        if (formData.firstName === "") {
            toast.error('Please fill in your first name.');
            return;
        } else if (formData.lastName === "") {
            toast.error('Please fill in your last name.');
            return;
        } else if (formData.gender === "") {
            toast.error('Please select your gender, or you might be considered as ...');
            return;
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
            <h2 className="text-5xl font-bold mb-4 text-center">Let's Get Started</h2>
            <p className="mb-6 text-lg text-gray-400 text-center">Please fill in your registration details below.</p>
    
            <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">Full Name:</label>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => handleChange({ firstName: e.target.value })}
                        required
                        className="flex-1 mb-2 md:mb-0 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => handleChange({ lastName: e.target.value })}
                        required
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">Gender:</label>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 items-center">
    <div onClick={() => handleChange({ gender: 'male' })} className="flex flex-col items-center text-center cursor-pointer">
        <img className={`w-16 h-16 ${formData.gender === 'male' ? 'outline p-1 rounded-full' : ''}`} src={male} alt="Male" />
        <p className="mt-2 text-lg">Male</p>
    </div>
    <div onClick={() => handleChange({ gender: 'female' })} className="flex flex-col items-center text-center cursor-pointer">
        <img className={`w-16 h-16 ${formData.gender === 'female' ? 'outline p-1 rounded-full' : ''}`} src={female} alt="Female" />
        <p className="mt-2 text-lg">Female</p>
    </div>
    <div onClick={() => handleChange({ gender: 'other' })} className="flex flex-col items-center text-center cursor-pointer">
        <img className={`w-16 h-16 ${formData.gender === 'other' ? 'outline p-1 rounded-full' : ''}`} src={other} alt="Others" />
        <p className="mt-2 text-lg">Prefer not to say</p>
    </div>
</div>
            </div>
            <div className="flex justify-between border-t pt-4 mt-8 border-gray-400">
                <button
                    onClick={handleNextStep}
                    className="flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300 w-full md:w-auto"
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
        </motion.div >
    );
};

export default StepOne;