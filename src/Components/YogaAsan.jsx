import React from "react";
import { yogaAsanas } from "./YogaData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const YogaAsan = () => {
  return (
    <>
      <div className="pt-[90px] container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600"
        >
          <h1>Yoga Asanas</h1>
        </motion.div>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-6 my-5 md:grid-cols-2 lg:grid-cols-3 px-4">
        {yogaAsanas.map(({ id, name, image, benefits }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * id, duration: 0.5 }}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-white transition-shadow duration-300"
          >
            <Link
              to={`/yoga/${name}`}
              className="flex flex-col space-y-3 p-4 hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  className="w-full h-52 object-cover transform hover:scale-105 transition-transform duration-500"
                  src={image}
                  alt={name}
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {name}
                </h2>

                <ul className="pl-5 list-disc space-y-1 text-gray-600">
                  {benefits?.map((b, index) => (
                    <li key={`${id}-benefit-${index}`}>{b}</li>
                  ))}
                </ul>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default YogaAsan;
