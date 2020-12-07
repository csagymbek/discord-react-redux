import React from "react";
import "../styles/Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export default function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages"></div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form action="">
          <input type="text" placeholder={`Message #TESTCHANNEL`} />
          <button type="submit" className="chat__inputButton">SEND</button>
        </form>
        <div className="chat__inputIcons">
          
        </div>
      </div>
    </div>
  );
}
