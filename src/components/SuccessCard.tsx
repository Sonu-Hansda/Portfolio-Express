import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import whatsAppLogo from '../assets/whatsapp.png';

const SuccessCard: React.FC = () => {
    const navigate = useNavigate();

    const handleStartAgain = ()=>{
        navigate("/");
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <h2 className="text-5xl font-bold mb-4">Registration Successful!</h2>
            <p className="mb-6 text-lg text-gray-400">
                Thank you for registering.
            </p>
            <div className='flex items-center justify-center mb-8'>
            <button
                onClick={handleStartAgain}
                className="flex justify-center gap-x-2 items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300"
                >
                <img className='h-6' src={whatsAppLogo} />
                Join Group
            </button>
                </div>
            <button
                onClick={handleStartAgain}
                className="px-6 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300"
            >
                Start Again
            </button>
        </motion.div>
    );
};

export default SuccessCard;