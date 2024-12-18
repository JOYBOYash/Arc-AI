import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react"; // Replace IconName with the actual icon you want to use

const Card = ({ title, description, icon }) => {
  return (
    <div className="max-w-sm mx-auto bg-slate-800/10 backdrop-blur-md shadow-lg hover:scale-y-105 flex flex-col p-4 shadow-lg rounded-lg overflow-hidden border-2 border-gray-300 hover:border-green-500 transition duration-300">
      <div className="p-4 flex items-center">
        <ArrowUpRight className="w-6 h-6 mr-2" />{" "}
        {/* <script>
          const id = document.getElementById("down"); if ( == "down"){" "}
          {<ArrowDownRight></ArrowDownRight>}
          else{<ArrowUpRight className="w-6 h-6 mr-2" />}
        </script> */}
        {/* Replace IconName with the actual icon */}
        <h2 className="text-2xl text-green-600  transition ease-in-out font-bold  text-white">
          {title}
        </h2>
      </div>
      <div className="">
        <p className="text-gray-400 text-left p-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
