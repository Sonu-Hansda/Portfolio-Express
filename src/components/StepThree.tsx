import React from 'react';
import { motion } from 'framer-motion';

const StepThree: React.FC<any> = ({ formData, handleChange, prevStep, handleSubmit, isLoading }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto p-4" // Center and limit max width
        >
            <h2 className="text-5xl font-bold mb-4 text-center">Registration Details</h2>
            <p className="mb-6 text-lg text-gray-400 text-center">
                Please fill in your registration details below.
            </p>
    
            <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">
                    Registration Number:
                </label>
                <input
                    type="text"
                    value={formData.registrationNumber}
                    onChange={(e) => handleChange({ registrationNumber: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
            </div>
    
            <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">
                    Email Address:
                </label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange({ email: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
            </div>
    
            <div className="flex flex-col md:flex-row justify-between mt-6">
                <button
                    onClick={prevStep}
                    className="mb-4 md:mb-0 md:w-auto px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-300"
                >
                    Back
                </button>
                <button
                    disabled={isLoading}
                    onClick={handleSubmit}
                    className={`px-6 py-3 rounded-lg transition duration-300 ${
                        isLoading 
                            ? "mx-auto text-center text-transparent bg-teal-600 loading loading-spinner" 
                            : "bg-teal-600 text-white hover:bg-teal-700"
                    }`}
                >
                    {isLoading ? "Submitting..." : "Submit"}
                </button>
            </div>
        </motion.div>
    );
};

export default StepThree;