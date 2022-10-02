import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bot, setBotObjects] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then (res=>res.json())
    .then ((botDetails)=>{
      setBotObjects(botDetails.map(botObj=>botObj))
      console.log(bot)
    })
  }, []);

  return (
    <div>
      <YourBotArmy bot ={bot}/>
      <BotCollection  bot ={bot}/>
    </div>
  )
}

export default BotsPage;
