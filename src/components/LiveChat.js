import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    // API polling logic
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: "User " + Math.floor(Math.random() * 1000), // 
          message: "This is a random message " + Math.random().toFixed(2), 
        })
      );
    }, 2000);

    return () => clearInterval(i); // Cleanup on component unmount
  }, [dispatch]); // Include dispatch in dependencies to avoid stale closure

  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll">
      {chatMessages.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
