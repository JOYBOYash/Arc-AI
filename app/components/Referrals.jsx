import { AtSign } from "lucide-react";
import React from "react";

function Referrals(props) {
  return (
    <div className="max-w-sm w-96 mx-auto bg-green-600/10 backdrop-blur-md items-center shadow-lg hover:scale-y-105 flex flex-col p-4 shadow-lg rounded-lg overflow-hidden border-2 border-gray-300 hover:border-green-500 transition duration-300">
      <img src="./pfp-1.jpeg" width={200} className="rounded-full mb-4"></img>
      <div className="">
        <p className="text-gray-400 text-left p-2">{props.description}</p>
      </div>
      <div className="p-4 flex items-center">
        <AtSign className="w-6 h-6 ml-[150px] mr-2" />{" "}
        <div className="flex content-center text-left flex-col">
          <h2 className="text-2xl text-green-600  transition ease-in-out font-bold text-white">
            {props.title}
          </h2>
          <p className="text-gray-500 italic">- {props.dgn}</p>
        </div>
      </div>
    </div>
  );
}

export default Referrals;
