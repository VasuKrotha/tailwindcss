import React, { useState } from "react";

const Filters = () => {
  const [selecteditem, setSelecteditem] = useState(1);
  return (
    <div>
      <div className="my-10 py-3 w-3/5 md:w-4/6 mx-auto flex  flex-col md:flex-row justify-around">
        <button
          onClick={() => setSelecteditem(1)}
          className={`btnstyles ${
            selecteditem === 1 ? "bg-green-400 text-white" : "text-slate-500"
          }`}
        >
          Latest
        </button>
        <button
          onClick={() => setSelecteditem(2)}
          className={`btnstyles ${
            selecteditem === 2 ? "bg-green-400 text-white" : "text-slate-500"
          }`}
        >
          Best Seller
        </button>
        <button
          onClick={() => setSelecteditem(3)}
          className={`btnstyles ${
            selecteditem === 3 ? "bg-green-400 text-white" : "text-slate-500"
          }`}
        >
          Special
        </button>
      </div>
    </div>
  );
};

export default Filters;
