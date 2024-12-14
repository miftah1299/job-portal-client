import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content max-w-screen-lg mx-auto flex-col lg:flex-row-reverse gap-20">
                <div className="flex-1">
                    <img
                        src="https://i.ibb.co.com/hBZmgm5/images-q-tbn-ANd9-Gc-Tjs-B4m-Xl1-Rb-Fjo-Fkjggwejc-JYdt-h9j-WBk3-Q-s.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>

                <div className="flex-1">
                    <motion.h1
                        animate={{
                            x: 50,
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                        className="text-5xl font-bold"
                    >
                        Latest Job For You!
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
