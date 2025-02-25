"use client";
import { useState } from "react";

const WelcomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-white p-8 md:p-10 rounded-lg text-center shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Welcome to Our Store! </h2>
        <p className="text-gray-600 text-sm md:text-lg">
        Your One-Stop Shop for the Latest & Greatest Mobile Phones...
        </p>
        <button 
          onClick={() => setIsVisible(false)}
          className="mt-6 bg-[#2f1272] text-white px-8 py-3 text-lg rounded-md hover:bg-[#271949] transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
