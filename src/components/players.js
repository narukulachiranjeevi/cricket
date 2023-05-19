import PlayerUi from "./playerui";
import {useState,useEffect} from "react";


const Players =() => {
  const [players,setPlayers] = useState();
  useEffect(()=>{
      fetch('http://localhost:3005/players')
      .then((res)=>res.json())
      .then((data)=>setPlayers(data));
  },[])
    return (
        <>
          <div className="flex flex-wrap justify-between gap-8">
            {players ? players.map((player)=>{
              return (
                <PlayerUi className="" name={player.name} role={player.role}
                img={player.img} matchsPlayed={player.mat} runsScored={player.runs} team={player.team}/>
              );
            }):null}
          </div>
        </>
    )
}
export default Players;