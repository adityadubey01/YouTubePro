import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-1">
      <img
        className="w-6 m-1"
        alt="User"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnF-wtqndIensQ2gIC-2KZPTJw_bTGZ50qNA&usqp=CAU"
      />
      <span className="font-bold px-1">{name}</span>
      <span className="pl-1">{message}</span>
    </div>
  );
};

export default ChatMessage;
