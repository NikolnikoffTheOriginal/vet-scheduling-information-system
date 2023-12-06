import { useState } from "react";
import { MdCircle } from "react-icons/md";

export const PlayerSelections = ({ players }: any) => {
  const [formations, setFormations] = useState('');
  const [goalkeeper, setGoalkeeper]= useState('');
  const [leftBack, setLeftBack]= useState('');

  return (
    players && <div className="flex pl-3 justify-around">
      <div className="pr-4">
        <select className="select w-full max-w-xs mb-3" onChange={(e) => setFormations(e.target.value)}>
          <option selected disabled>Tactics</option>
          <option>4-4-2</option>
          <option>4-4-1-1</option>
          <option>4-4-2 diamond</option>
          <option>4-3-3</option>
          <option>4-3-2-1</option>
          <option>4-2-3-1</option>
          <option>4-5-1</option>
          <option>3-4-3</option>
          <option>3-5-2</option>
          <option>3-2-4-1</option>
        </select>
        {formations === '4-4-2' && <div className="flex flex-col">
          <select className="select w-full max-w-xs mb-3" defaultValue={"GK"} onChange={(e) => setGoalkeeper(e.target.value)}>
            <option value={"GK"} disabled>GK</option>
            {players.map((player: any) => {
              if (player.position === 'Goalkeeper') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LB"} onChange={(e) => setLeftBack(e.target.value)}>
            <option value={"LB"} disabled>LB</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 1"}>
            <option value={"CB 1"} disabled>CB 1</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 2"}>
            <option value={"CB 2"} disabled>CB 2</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RB"}>
            <option value={"RB"} disabled>RB</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LM"}>
            <option value={"LM"} disabled>LM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 1"}>
            <option value={"CM 1"} disabled>CM 1</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 2"}>
            <option value={"CM 2"} disabled>CM 2</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RM"}>
            <option value={"RM"} disabled>RM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CF 1"}>
            <option value={"CF 1"} disabled>CF 1</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CF 2"}>
            <option value={"CF 2"} disabled>CF 2</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
        </div>}

        {formations === '4-4-1-1' && <div className="flex flex-col">
          <select className="select w-full max-w-xs mb-3" defaultValue={"GK"}>
            <option value={"GK"} disabled>GK</option>
            {players.map((player: any) => {
              if (player.position === 'Goalkeeper') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LB"}>
            <option value={"LB"} disabled>LB</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 1"}>
            <option value={"CB 1"} disabled>CB 1</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 2"}>
            <option value={"CB 2"} disabled>CB 2</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RB"}>
            <option value={"RB"} disabled>RB</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LM"}>
            <option value={"LM"} disabled>LM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 1"}>
            <option value={"CM 1"} disabled>CM 1</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 2"}>
            <option value={"CM 2"} disabled>CM 2</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RM"}>
            <option value={"RM"} disabled>RM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CF"}>
            <option value={"CF"} disabled>CF</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"ST"}>
            <option value={"ST"} disabled>ST</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
        </div>}

        {formations === '4-4-2 diamond' && <div className="flex flex-col">
          <select className="select w-full max-w-xs mb-3" defaultValue={"GK"}>
            <option value={"GK"} disabled>GK</option>
            {players.map((player: any) => {
              if (player.position === 'Goalkeeper') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LB"}>
            <option value={"LB"} disabled>LB</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 1"}>
            <option value={"CB 1"} disabled>CB 1</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 2"}>
            <option value={"CB 2"} disabled>CB 2</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RB"}>
            <option value={"RB"} disabled>RB</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CDM"}>
            <option value={"CDM"} disabled>CDM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 1"}>
            <option value={"CM 1"} disabled>CM 1</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 2"}>
            <option value={"CM 2"} disabled>CM 2</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"AM"}>
            <option value={"AM"} disabled>AM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CF 1"}>
            <option value={"CF 1"} disabled>CF 1</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CF 2"}>
            <option value={"CF 2"} disabled>CF 2</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
        </div>}

        {formations === '4-3-3' && <div className="flex flex-col">
          <select className="select w-full max-w-xs mb-3" defaultValue={"GK"}>
            <option value={"GK"} disabled>GK</option>
            {players.map((player: any) => {
              if (player.position === 'Goalkeeper') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LB"}>
            <option value={"LB"} disabled>LB</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 1"}>
            <option value={"CB 1"} disabled>CB 1</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 2"}>
            <option value={"CB 2"} disabled>CB 2</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RB"}>
            <option value={"RB"} disabled>RB</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CDM"}>
            <option value={"CDM"} disabled>CDM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 1"}>
            <option value={"CM 1"} disabled>CM 1</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 2"}>
            <option value={"CM 2"} disabled>CM 2</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LW"}>
            <option value={"LW"} disabled>LW</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CF"}>
            <option value={"CF"} disabled>CF</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RW"}>
            <option value={"RW"} disabled>RW</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
        </div>}

        {formations === '4-3-2-1' && <div className="flex flex-col">
          <select className="select w-full max-w-xs mb-3" defaultValue={"GK"}>
            <option value={"GK"} disabled>GK</option>
            {players.map((player: any) => {
              if (player.position === 'Goalkeeper') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LB"}>
            <option value={"LB"} disabled>LB</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 1"}>
            <option value={"CB 1"} disabled>CB 1</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 2"}>
            <option value={"CB 2"} disabled>CB 2</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RB"}>
            <option value={"RB"} disabled>RB</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CDM 1"}>
            <option value={"CDM 1"} disabled>CDM 1</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CDM 2"}>
            <option value={"CDM 2"} disabled>CDM 2</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CDM 3"}>
            <option value={"CDM 3"} disabled>CDM 3</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"AM 1"}>
            <option value={"AM 1"} disabled>AM 1</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"AM 2"}>
            <option value={"AM 2"} disabled>AM 2</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CF"}>
            <option value={"CF"} disabled>CF</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
        </div>}

        {formations === '4-2-3-1' && <div className="flex flex-col">
          <select className="select w-full max-w-xs mb-3" defaultValue={"GK"}>
            <option value={"GK"} disabled>GK</option>
            {players.map((player: any) => {
              if (player.position === 'Goalkeeper') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LB"}>
            <option value={"LB"} disabled>LB</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 1"}>
            <option value={"CB 1"} disabled>CB 1</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 2"}>
            <option value={"CB 2"} disabled>CB 2</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RB"}>
            <option value={"RB"} disabled>RB</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CDM 1"}>
            <option value={"CDM 1"} disabled>CDM 1</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CDM 2"}>
            <option value={"CDM 2"} disabled>CDM 2</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM"}>
            <option value={"CM"} disabled>CM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LW"}>
            <option value={"LW"} disabled>LW</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RW"}>
            <option value={"RW"} disabled>RW</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CF"}>
            <option value={"CF"} disabled>CF</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
        </div>}

        {formations === '4-5-1' && <div className="flex flex-col">
          <select className="select w-full max-w-xs mb-3" defaultValue={"GK"}>
            <option value={"GK"} disabled>GK</option>
            {players.map((player: any) => {
              if (player.position === 'Goalkeeper') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LB"}>
            <option value={"LB"} disabled>LB</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 1"}>
            <option value={"CB 1"} disabled>CB 1</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 2"}>
            <option value={"CB 2"} disabled>CB 2</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RB"}>
            <option value={"RB"} disabled>RB</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 1"}>
            <option value={"CM 1"} disabled>CM 1</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 2"}>
            <option value={"CM 2"} disabled>CM 2</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"DM"}>
            <option selected disabled>DM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LM"}>
            <option value={"LM"} disabled>LM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RM"}>
            <option value={"RM"} disabled>RM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CF"}>
            <option value={"CF"} disabled>CF</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
        </div>}

        {formations === '3-4-3' && <div className="flex flex-col">
          <select className="select w-full max-w-xs mb-3" defaultValue={"GK"}>
            <option value={"GK"} disabled>GK</option>
            {players.map((player: any) => {
              if (player.position === 'Goalkeeper') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 1"}>
            <option value={"CB 1"} disabled>CB 1</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 2"}>
            <option value={"CB 2"} disabled>CB 2</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 2"}>
            <option value={"CB 2"} disabled>CB 3</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 1"}>
            <option value={"CM 1"} disabled>CM 1</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 2"}>
            <option value={"CM 2"} disabled>CM 2</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LM"}>
            <option value={"LM"} disabled>LM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RM"}>
            <option value={"RM"} disabled>RM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LW"}>
            <option value={"LW"} disabled>LW</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RW"}>
            <option value={"RW"} disabled>RW</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CF"}>
            <option value={"CF"} disabled>CF</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
        </div>}

        {formations === '3-5-2' && <div className="flex flex-col">
          <select className="select w-full max-w-xs mb-3" defaultValue={"GK"}>
            <option value={"GK"} disabled>GK</option>
            {players.map((player: any) => {
              if (player.position === 'Goalkeeper') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 1"}>
            <option value={"CB 1"} disabled>CB 1</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 2"}>
            <option value={"CB 2"} disabled>CB 2</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 2"}>
            <option value={"CB 2"} disabled>CB 3</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"DM"}>
            <option value={"DM"} disabled>DM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 1"}>
            <option value={"CM 1"} disabled>CM 1</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 2"}>
            <option value={"CM 2"} disabled>CM 2</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LM"}>
            <option value={"LM"} disabled>LM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RM"}>
            <option value={"RM"} disabled>RM</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CF 1"}>
            <option value={"CF 1"} disabled>CF 1</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CF 2"}>
            <option value={"CF 2"} disabled>CF 2</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
        </div>}

        {formations === '3-2-4-1' && <div className="flex flex-col">
          <select className="select w-full max-w-xs mb-3" defaultValue={"GK"}>
            <option value={"GK"} disabled>GK</option>
            {players.map((player: any) => {
              if (player.position === 'Goalkeeper') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 1"}>
            <option value={"CB 1"} disabled>CB 1</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 2"}>
            <option value={"CB 2"} disabled>CB 2</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CB 2"}>
            <option value={"CB 2"} disabled>CB 3</option>
            {players.map((player: any) => {
              if (player.position === 'Defence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CDM 1"}>
            <option value={"CDM 1"} disabled>CDM 1</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CDM 2"}>
            <option value={"CDM 2"} disabled>CDM 2</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 1"}>
            <option value={"CM 1"} disabled>CM 1</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CM 2"}>
            <option value={"CM 2"} disabled>CM 2</option>
            {players.map((player: any) => {
              if (player.position === 'Midfield') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"RW"}>
            <option value={"RW"} disabled>RW</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"LW"}>
            <option value={"LW"} disabled>LW</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
          <select className="select w-full max-w-xs mb-3" defaultValue={"CF"}>
            <option value={"CF"} disabled>CF</option>
            {players.map((player: any) => {
              if (player.position === 'Offence') {
                return <option key={player.id}>{player.name}</option>
              }
            })}
          </select>
        </div>}
      </div>


      {formations === '4-4-2' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          GK
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{goalkeeper}</p>}
        </div>
        <div className="absolute top-[65%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{leftBack}</p>}
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '4-4-1-1' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[10%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          ST
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[25%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '4-4-2 diamond' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[22%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[54%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[34%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          AM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '4-3-3' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[40%] left-[25%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[54%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[40%] left-[50%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[15%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LW
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RW
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '4-3-2-1' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[42%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[46%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[42%] left-[55%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[15%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[30%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          AM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[30%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          AM
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '4-2-3-1' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[26%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[34%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[50%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[15%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LW
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RW
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '4-5-1' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[40%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          DM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[40%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[15%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RM
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '3-4-3' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[55%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[55%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LW
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[10%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RW
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '3-5-2' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[55%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[40%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          DM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[40%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[15%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[15%] left-[55%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '3-2-4-1' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[55%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[30%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LW
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[30%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RW
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
        </div>
      </div>}
    </div>
  );
}