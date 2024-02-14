import React, { useState } from "react";
import Child from "./Child";
import "./Styles.scss";

export default function Parent() {
  const [color, setColor] = useState("black");

  const changeColor = () => {
    if (color === "black") setColor("blue");
    else setColor("black");
  };

  return (
    <>
      <h1>Change parent state from child</h1>
      <Child onChangeColor={changeColor} />
      <br />
      <br />
      <br />
      <h1 style={{ color: color }}>Color: {color}</h1>
    </>
  );
}
