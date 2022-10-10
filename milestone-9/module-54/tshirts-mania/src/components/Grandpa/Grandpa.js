import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const RingContext = createContext("Matir Ring");
export const MoneyContext = createContext(400);
const Grandpa = () => {
 /*  const house = 7;
  const ring = "diamond ring"; */
  const [house, setHouse] = useState(1);
  const [money, setMoney] = useState(500);
  return (
    <RingContext.Provider value = {[house, setHouse]}>
      <MoneyContext.Provider value={[money, setMoney]}>
      <div className="grandpa">
        <h2>Grandpa</h2>
        <section className="flex">
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
      </MoneyContext.Provider>
    </RingContext.Provider>
  );
};

export default Grandpa;
