import TeamUi from './teamui';
import {useState, useEffect} from 'react'
const Teams = ()=> {
    const [teams, setTeams] = useState();
    useEffect(()=>{
        fetch('http://localhost:3005/teams')
        .then((res)=>res.json())
        .then((data)=>setTeams(data));
    },[]);
    /*{teams.map((ele)=>{
        console.log(ele.teamImg);
    })}*/
    return (
        <>
            <div className="flex flex-wrap gap-8 m-20 justify-center">
                {teams?teams.map((ele)=>{
                    return <TeamUi teamName={ele.teamName} captain={ele.teamCaptain} teamImg={ele.teamImg} champions={ele.teamChampion}/>
                }):null}
            </div>
        </>
    );
}
export default Teams;