import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const RingContext = createContext("Matir Ring");
const Grandpa = () => {
 /*  const house = 7;
  const ring = "diamond ring"; */
  const [house, setHouse] = useState(1);
  return (
    <RingContext.Provider value = 'Dadi Ring'>
      <div className="grandpa">
        <h2>Grandpa</h2>
        <section className="flex">
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
