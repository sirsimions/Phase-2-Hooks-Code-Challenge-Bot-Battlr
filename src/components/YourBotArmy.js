import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ BotArr, handleDisplay, DeleteBot }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        {"Click on a Bot on the bot collection to enlist it to your army."}
        <div className="row bot-army-row">
          {BotArr.map((bot) => (
            <BotCard key={bot.id} bot={bot} handleDisplay={handleDisplay} DeleteBot={DeleteBot} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;