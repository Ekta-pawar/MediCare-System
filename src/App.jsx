import React from "react";
import { Routes, Route } from "react-router-dom";
 import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import MedicineReminder from "./Components/MedicineReminder";
import YogaAsan from "./Components/YogaAsan";
import MyProfile from "./Components/MyProfile";

const App = () => {
  return (
    <>
      <NavBar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MedicineReminder" element={<MedicineReminder />} />
          <Route path="/YogaAsan" element={<YogaAsan />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
     
    </>
  );
};

export default App;
