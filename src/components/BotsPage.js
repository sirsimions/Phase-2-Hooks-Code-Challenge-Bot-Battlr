import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);
   
  const DeleteBot = (bot) =>{
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE", 
      header: {"Content-Type": "application/json"}
    }).then((result) => {
       result.json().then((resp)=>{
        console.warn(resp)
       })
    });
  }

  function display(bot) {
    if (army.includes(bot));
    setArmy((army) => [...army, bot]);
  }
  function remove(bot) {
    setArmy((army) => army.filter((item) => item.id !== bot.id));
  }
  return (
    <div>
      <YourBotArmy BotArr={army} handleDisplay={remove} DeleteBot={DeleteBot} />
      <BotCollection BotArr={bots} handleDisplay={display} DeleteBot={DeleteBot} />
    </div>
  );
}

export default BotsPage;