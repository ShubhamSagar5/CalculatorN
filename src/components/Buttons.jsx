import React from "react";

const Buttons = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div>
      <div className="buttonsContainer">
        {buttonNames.map((name) => (
          <button className="btnClass">{name}</button>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
