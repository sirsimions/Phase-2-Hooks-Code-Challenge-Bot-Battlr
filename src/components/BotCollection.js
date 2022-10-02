import React from "react";

function BotCollection( {bot} ) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
      {bot.map(objects => (<span key={objects.id}><img src={objects.avatar_url}/></span>))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
