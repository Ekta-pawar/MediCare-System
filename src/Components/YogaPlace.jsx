import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { yogaAsanas } from "./YogaData";

const YogaPlace = () => {
  const { name } = useParams();
  const [yoga, setYoga] = useState(null);

  useEffect(() => {
    if (name) {
      const selectedYoga = yogaAsanas.find(
        (item) => item.name.toLowerCase() === name.toLowerCase()
      );
      setYoga(selectedYoga || null);
    }
  }, [name]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!yoga) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <p className="text-gray-600 text-lg">Loading yoga details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex justify-center items-start">
      <div className="max-w-3xl w-full bg-blue-50 shadow-lg rounded-2xl overflow-hidden p-6  md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 underline text-center mb-6">
          {yoga.name}
        </h1>

        <div className="flex justify-center mb-6">
          <img
            src={yoga.image}
            alt={yoga.name}
            className="rounded-xl shadow-md w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Benefits</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {yoga.benefits?.length ? (
              yoga.benefits.map((b, index) => <li key={index}>{b}</li>)
            ) : (
              <li>No benefits available.</li>
            )}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Details</h2>
          <p className="text-gray-600">{yoga.detail || "No details available."}</p>
        </div>
      </div>
    </div>
  );
};

export default YogaPlace;
