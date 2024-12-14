import React from "react";
import { motion } from "framer-motion";
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content max-w-screen-lg mx-auto flex-col lg:flex-row-reverse gap-20">
                <div className="flex-1">
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-64 h-48 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-primaryLight shadow-md"
                    />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{
                            duration: 10,
                            delay: 5,
                            repeat: Infinity,
                        }}
                        className="max-w-sm w-64 h-48 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-primaryLight shadow-md"
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
                        Latest{" "}
                        <motion.span
                            animate={{ color: ["#457B9D", "#1D3557"] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                        >
                            Jobs
                        </motion.span>{" "}
                        For You!
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn bg-primaryDark text-white hover:bg-primaryLight">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
