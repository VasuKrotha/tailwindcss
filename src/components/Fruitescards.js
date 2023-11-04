import React from "react";

const Fruitescards = ({ fruit }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl transform group hover:scale-110 duration-100 relative">
      <img
        src={require(`../assests/${fruit.image}.jpeg`)}
        alt={`${fruit.name}`}
        className="w-full h-52 object-cover"
      />

      <div className="flex flex-col items-center my-2">
        <span className="font-Poppins text-slate-500 block">{fruit.name}</span>
        <span className="font-Poppins text-slate-500">
          <i className="fas fa-rupee-sign"></i> {fruit.price}
        </span>
        <span className="font-Poppins block uppercase text-xs text-lime-400 invisible group-hover:visible">
          Add to cart
        </span>
      </div>
      <span className="absolute top-3 right-2 text-sm bg-sky-300 text-white rounded-lg  border-b-sky-300 font-Poppins p-1">
        1% off
      </span>
    </div>
  );
};

export default Fruitescards;
