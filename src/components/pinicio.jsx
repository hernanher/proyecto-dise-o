import "./pinicio.css";
import list from "../data";
import Cards from "./card";
import React, { useState, useEffect } from "react";
import BC from "./BC";
import TB from "./TB";


const Pinicio = ({ handleClick }) => {
  return (
    <div>
    <BC />
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
    <hr class="my-5"></hr>
    <TB />
    </div>
  );
};

export default Pinicio;

