import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();

    const variants = {
        initial: { opacity: 0, x: 1200 },
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    return (
        <>
            <nav className="navbar bg-base-100 md:px-32">
                <div className="flex-1">
                    <Link to={"/"} className="btn btn-ghost text-xl">ECM</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <Link to={"/resources"}>Resources</Link>
                        {/* <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                    </ul>
                </div>
            </nav>
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
        </>
    );
};

export default Layout;