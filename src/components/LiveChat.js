import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const setInter = setInterval(() => {
      dispatch(
        addMessage({ name: "Redux", message: "Check my live msz...😁" })
      );
    }, 1000);

    return () => {
      clearInterval(setInter);
    };
  }, []);
  return (
    <div className="max-h-[540px] overflow-y-scroll">
      {ChatMessages.map((currentMessage, index) => {
        return (
          <ChatMessage
            key={index}
            name={currentMessage.name}
            message={currentMessage.message}
          />
        );
      })}
    </div>
  );
};

export default LiveChat;
