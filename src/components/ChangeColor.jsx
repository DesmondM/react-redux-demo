import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { colorChange } from "../features/theme";

const ChangeColor = () => {
  const [colour, setColour] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" onChange={(e) => setColour(e.target.value)} />
      <button
        onClick={() => {
          dispatch(colorChange(colour));
        }}
      >
        Change Theme Color
      </button>
      <h3>Theme colour is{colour}</h3>
    </div>
  );
};

export default ChangeColor;
