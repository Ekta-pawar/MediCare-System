import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import MedicineReminder from "./Components/MedicineReminder";
import YogaAsan from "./Components/YogaAsan";
import YogaPlace from "./Components/YogaPlace";

import BMICalculator from "./Components/BMICalculator";
import FeedBack from "./Components/FeedBack";
import MyProfile from "./Components/MyProfile";


const App = () => {
  return (
    <>
      <NavBar />
      <div className="pt-20 min-h-[80vh]"> {/* padding to avoid navbar overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MedicineReminder" element={<MedicineReminder />} />
          <Route path="/YogaAsan" element={<YogaAsan />} />
          <Route path="/YogaPlace" element={<YogaPlace />} />
            <Route path="/yoga" element={<YogaAsan />} />
  <Route path="/yoga/:name" element={<YogaPlace />} />

          <Route path="/BMICalculator" element={<BMICalculator />} />
          <Route path="/FeedBack" element={<FeedBack />} />
          <Route path="/myProfile" element={<MyProfile />} />

        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
