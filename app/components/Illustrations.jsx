import React from "react";

function Illustrations(props) {
  return (
    <div className="max-w-sm mx-auto mb-24 bg-slate-800/10 backdrop-blur-md shadow-lg transition ease-in-out hover:outline-offset-2 hover:outline-2 hover:outline hover:scale-y-105 flex flex-col p-4 shadow-lg rounded-3xl overflow-hidden hover:border-green-500 transition duration-300">
      <div className="p-4 flex flex-col items-center">
        <img src={props.image} className="" width={300}></img>

        <h2 className="text-2xl text-green-600  transition ease-in-out font-bold  text-white">
          {props.title}
        </h2>
      </div>
    </div>
  );
}

export default Illustrations;
