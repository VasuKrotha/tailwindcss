import React from "react";

import Filters from "./Filters";
import Items from "./Items";
import { Fotter } from "../Fotter";
const Allcomp = () => {
  return (
    <div>
      <Filters />
      <Items />
      <Fotter />
    </div>
  );
};

export default Allcomp;
