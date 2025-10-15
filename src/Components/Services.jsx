import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";

const customersData = [
  {
    id: 1,
    name: "Dev Mehra",
    firstLetter: "D",
    rating: "4.5/5",
    desc: "Fabulous experience and amazing hospitality. Thank you!",
  },
  {
    id: 2,
    name: "Vishal Chauhan",
    firstLetter: "V",
    rating: "4.0/5",
    desc: "Game-changer! Reliable and user-friendly. Must-have application!",
  },
  {
    id: 3,
    name: "John Doe",
    firstLetter: "J",
    rating: "4.5/5",
    desc: "Life-saving app! Never forget your meds again. Highly recommended!",
  },
];

const Services = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto md:py-14 px-4">
      
        <div className="flex flex-col items-center justify-center space-y-3 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">OUR SERVICES</h1>
          <p className="text-md md:text-lg text-gray-500 font-semibold text-center md:text-center">
            A user-friendly system designed for senior citizens
          </p>
        </div>

      
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Manage Medicines",
              desc: "Easily keep track of your medicines with our Medicines Reminder feature.",
              link: "/MedicineReminder",
            },
            {
              title: "Profile",
              desc: "Customize your profile to suit your preferences. Update personal info and more.",
              link: "/myProfile",
            },
            {
              title: "Yoga Place",
              desc: "Get free Yoga and Exercise sessions for you and your family.",
              link: "/YogaAsan",
            },
            {
              title: "BMI Calculator",
              desc: "Calculate your BMI for a better understanding of your health.",
              link: "/BMICalculator",
            },
            {
              title: "Give Feedback",
              desc: "Share your suggestions and feedback with us.",
              link: "/FeedBack",
            },
            {
              title: "Community",
              desc: "A place where you can connect with other members.",
              link: "/",
            },
          ].map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="flex flex-col p-8 space-y-4 rounded-xl bg-blue-200/40 hover:bg-blue-300/60 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="text-gray-800">{service.desc}</p>
            </Link>
          ))}
        </div>

       
        <div className="flex justify-center mt-14 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold uppercase text-center">
            Here's what a few of our customers have to say about us
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {customersData.map(({ id, firstLetter, name, desc, rating }) => (
            <div
              key={id}
              className="flex flex-col gap-4 p-6 rounded-xl bg-gradient-to-r from-gray-200 to-gray-100 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 bg-orange-200 rounded-full flex justify-center items-center text-2xl font-semibold">
                  {firstLetter}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="text-gray-600">{rating}</p>
                </div>
              </div>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
