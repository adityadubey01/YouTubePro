import Button from "./Button";
import React from "react";

const buttonList = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentines",
  "Streaming",
  "Sports",
];
const ButtonList = () => {
  return (
    <div className="grid grid-flow-col">
      {buttonList.map((list, index) => {
        return <Button key={index} name={list} />;
      })}
    </div>
  );
};

export default ButtonList;
