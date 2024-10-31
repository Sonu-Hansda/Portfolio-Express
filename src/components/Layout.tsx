import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();

    const variants = {
        initial: { opacity: 0, x: 1200 },
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    return (
            <motion.div
                key={location.key}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={location.pathname !== "/" ? variants : {}}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
    );
};

export default Layout;