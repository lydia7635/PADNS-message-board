/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Chat = ({ setPage }) => {
  useEffect(() => {
    setPage("Chat");
  });
  return (
    <>
      <h1 className="text-3xl font-bold underline">Chat Room</h1>
    </>
  );
};

export default Chat;
