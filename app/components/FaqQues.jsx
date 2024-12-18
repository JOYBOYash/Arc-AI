"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function FaqQues(props) {
  // State to track which question is open (using an object for each question)
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle a specific question
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open question
  };

  return (
    <div className="hover:border-green-600/60 hover:outline-2 hover:outline transition ease-in-out rounded-lg">
      {" "}
      <div className="bg-black transition ease-in-out text-white p-4 rounded-lg shadow-md">
        {/* Question Section */}
        <div
          className="flex justify-between transition ease-in-out items-center cursor-pointer"
          onClick={() => toggleAnswer(0)}
        >
          <span className="text-lg transition ease-in-out font-semibold">
            {props.ques}
          </span>
          <ChevronDown
            size={24}
            className={`transition-transform transition ease-in-out duration-300 ease-in-out ${
              openIndex === 0 ? "rotate-180" : ""
            }`}
            style={{ color: "#22c55e" }} // Classic Green color
          />
        </div>

        {/* Answer Section with Smooth Transition */}
        <div
          className={`mt-4 text-gray-300 transition ease-in-out transition-all duration-500 ease-in-out overflow-hidden max-h-0 ${
            openIndex === 0 ? "max-h-screen" : ""
          }`}
        >
          {openIndex === 0 && <p>{props.answer}</p>}
        </div>
      </div>
    </div>
  );
}

export default FaqQues;
