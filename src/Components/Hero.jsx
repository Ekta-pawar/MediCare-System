import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-gradient-to-l from-blue-100 to-blue-300/60 pt-[80px] pb-16">
      <div className="container mx-auto p-4 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 text-center md:text-left"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-blue-800">
              Welcome to the Medicare System
            </h1>
            <p className="text-sm md:text-lg font-semibold text-gray-600">
              A user-friendly Web App for all senior citizens to manage their
              medicines, maintain a healthy lifestyle with free yoga, and
              connect with a community.
            </p>
            <button className="self-center md:self-start px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <img
              className="w-[300px] md:w-[400px] rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-500"
              src="https://img.freepik.com/free-photo/medium-shot-smiley-senior-couple-sitting_23-2148984223.jpg?w=740&t=st=1688816213~exp=1688816813~hmac=4b396e59198fcd440360569b529c96c2666d186291a34ad85c1673f09c05fde7"
              alt="Senior Couple"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
