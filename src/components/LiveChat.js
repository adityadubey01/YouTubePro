import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "./utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const setInter = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(15) + "😁",
        })
      );
    }, 1500);

    return () => {
      clearInterval(setInter);
    };
  }, []);
  return (
    <>
      <div className="max-h-[540px] overflow-y-scroll flex flex-col-reverse">
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
      <div className="w-full p-2 border border-black">
        <input
          className="w-56 pl-1 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          className="px-1 ml-2 border border-black bg-green-100"
          onClick={() => {
            dispatch(addMessage({ name: "Aditya", message: liveMessage }));
            setLiveMessage("");
          }}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default LiveChat;
