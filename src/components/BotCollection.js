import React from "react";
import BotCard from "./BotCard";

function BotCollection({ BotArr, handleDisplay, DeleteBot }) {
  // Your code here
  return (
    <div className="ui four column grid">
      {"Bot Collection click on a bot to add it to your army."}
      <div className="row">
      {BotArr.map((bot) => (
            <BotCard key={bot.id} bot={bot} handleDisplay={handleDisplay} DeleteBot={DeleteBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;