import { useState } from "react";
import { MdCircle } from "react-icons/md";

export const PlayerSelections = ({ players }: any) => {
  const [formations, setFormations] = useState('');
  const [goalkeeper, setGoalkeeper] = useState('');
  const [leftBack, setLeftBack] = useState('');
  const [rightBack, setRightBack] = useState('');
  const [firstCenterBack, setFirstCenterBack] = useState('');
  const [secondCenterBack, setSecondCenterBack] = useState('');
  const [thirdCenterBack, setThirdCenterBack] = useState('');
  const [firstCenterMidfield, setFirstCenterMidfield] = useState('');
  const [secondCenterMidfield, setSecondCenterMidfield] = useState('');
  const [leftMidfield, setLeftMidfield] = useState('');
  const [rightMidfield, setRightMidfield] = useState('');
  const [firstCenterForward, setFirstCenterForward] = useState('');
  const [secondCenterForward, setSecondCenterForward] = useState('');
  const [striker, setStriker] = useState('');
  const [firstCenterDefensiveMidfield, setFirstCenterDefensiveMidfield] = useState('');
  const [secondCenterDefensiveMidfield, setSecondCenterDefensiveMidfield] = useState('');
  const [thirdCenterDefensiveMidfield, setThirdCenterDefensiveMidfield] = useState('');
  const [firstAttackingMidfield, setFirstAttackingMidfield] = useState('');
  const [secondAttackingMidfield, setSecondAttackingMidfield] = useState('');
  const [leftWing, setLeftWing] = useState('');
  const [rightWing, setRightWing] = useState('');
  const [defensiveMidfield, setDefensiveMidfield] = useState('');

  return (
    players && <div className="flex pl-3 justify-around">
      <div className="pr-4">
        <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"Tactics"} onChange={(e) => {
          setFormations(e.target.value);
          setGoalkeeper('');
          setLeftBack('');
          setRightBack('');
          setFirstCenterBack('');
          setSecondCenterBack('');
          setThirdCenterBack('');
          setFirstCenterMidfield('');
          setSecondCenterMidfield('');
          setLeftMidfield('');
          setRightMidfield('');
          setFirstCenterForward('');
          setSecondCenterForward('');
          setStriker('');
          setFirstCenterDefensiveMidfield('');
          setSecondCenterDefensiveMidfield('');
          setThirdCenterDefensiveMidfield('');
          setFirstAttackingMidfield('');
          setSecondAttackingMidfield('');
          setLeftWing('');
          setRightWing('');
          setDefensiveMidfield('');
        }}>

          <option value={"Tactics"} disabled>Tactics</option>
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
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"GK"} onChange={(e) => setGoalkeeper(e.target.value)}>
              <option value={"GK"} disabled>GK</option>
              {players.map((player: any) => {
                if (player.position === 'Goalkeeper') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {goalkeeper !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setGoalkeeper('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LB"} onChange={(e) => setLeftBack(e.target.value)}>
              <option value={"LB"} disabled>LB</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 1"} onChange={(e) => setFirstCenterBack(e.target.value)}>
              <option value={"CB 1"} disabled>CB 1</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 2"} onChange={(e) => setSecondCenterBack(e.target.value)}>
              <option value={"CB 2"} disabled>CB 2</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RB"} onChange={(e) => setRightBack(e.target.value)}>
              <option value={"RB"} disabled>RB</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LM"} onChange={(e) => setLeftMidfield(e.target.value)}>
              <option value={"LM"} disabled>LM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 1"} onChange={(e) => setFirstCenterMidfield(e.target.value)}>
              <option value={"CM 1"} disabled>CM 1</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 2"} onChange={(e) => setSecondCenterMidfield(e.target.value)}>
              <option value={"CM 2"} disabled>CM 2</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RM"} onChange={(e) => setRightMidfield(e.target.value)}>
              <option value={"RM"} disabled>RM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CF 1"} onChange={(e) => setFirstCenterForward(e.target.value)}>
              <option value={"CF 1"} disabled>CF 1</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterForward !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterForward('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CF 2"} onChange={(e) => setSecondCenterForward(e.target.value)}>
              <option value={"CF 2"} disabled>CF 2</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterForward !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterForward('');
            }}>Clear</button>}
          </div>
          <button className="btn btn-outline" onClick={() => {
            setGoalkeeper('');
            setLeftBack('');
            setRightBack('');
            setFirstCenterBack('');
            setSecondCenterBack('');
            setThirdCenterBack('');
            setFirstCenterMidfield('');
            setSecondCenterMidfield('');
            setLeftMidfield('');
            setRightMidfield('');
            setFirstCenterForward('');
            setSecondCenterForward('');
            setStriker('');
            setFirstCenterDefensiveMidfield('');
            setSecondCenterDefensiveMidfield('');
            setThirdCenterDefensiveMidfield('');
            setFirstAttackingMidfield('');
            setSecondAttackingMidfield('');
            setLeftWing('');
            setRightWing('');
            setDefensiveMidfield('');
          }}>Clear</button>
        </div>}

        {formations === '4-4-1-1' && <div className="flex flex-col">
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"GK"} onChange={(e) => setGoalkeeper(e.target.value)}>
              <option value={"GK"} disabled>GK</option>
              {players.map((player: any) => {
                if (player.position === 'Goalkeeper') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {goalkeeper !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setGoalkeeper('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LB"} onChange={(e) => setLeftBack(e.target.value)}>
              <option value={"LB"} disabled>LB</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 1"} onChange={(e) => setFirstCenterBack(e.target.value)}>
              <option value={"CB 1"} disabled>CB 1</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 2"} onChange={(e) => setSecondCenterBack(e.target.value)}>
              <option value={"CB 2"} disabled>CB 2</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RB"} onChange={(e) => setRightBack(e.target.value)}>
              <option value={"RB"} disabled>RB</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LM"} onChange={(e) => setLeftMidfield(e.target.value)}>
              <option value={"LM"} disabled>LM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 1"} onChange={(e) => setFirstCenterMidfield(e.target.value)}>
              <option value={"CM 1"} disabled>CM 1</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 2"} onChange={(e) => setSecondCenterMidfield(e.target.value)}>
              <option value={"CM 2"} disabled>CM 2</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RM"} onChange={(e) => setRightMidfield(e.target.value)}>
              <option value={"RM"} disabled>RM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CF 1"} onChange={(e) => setFirstCenterForward(e.target.value)}>
              <option value={"CF 1"} disabled>CF 1</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterForward !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterForward('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"ST"} onChange={(e) => setStriker(e.target.value)}>
              <option value={"ST"} disabled>ST</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {striker !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setStriker('');
            }}>Clear</button>}
          </div>

          <button className="btn btn-outline" onClick={() => {
            setGoalkeeper('');
            setLeftBack('');
            setRightBack('');
            setFirstCenterBack('');
            setSecondCenterBack('');
            setThirdCenterBack('');
            setFirstCenterMidfield('');
            setSecondCenterMidfield('');
            setLeftMidfield('');
            setRightMidfield('');
            setFirstCenterForward('');
            setSecondCenterForward('');
            setStriker('');
            setFirstCenterDefensiveMidfield('');
            setSecondCenterDefensiveMidfield('');
            setThirdCenterDefensiveMidfield('');
            setFirstAttackingMidfield('');
            setSecondAttackingMidfield('');
            setLeftWing('');
            setRightWing('');
            setDefensiveMidfield('');
          }}>Clear</button>
        </div>}

        {formations === '4-4-2 diamond' && <div className="flex flex-col">
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"GK"} onChange={(e) => setGoalkeeper(e.target.value)}>
              <option value={"GK"} disabled>GK</option>
              {players.map((player: any) => {
                if (player.position === 'Goalkeeper') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {goalkeeper !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setGoalkeeper('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LB"} onChange={(e) => setLeftBack(e.target.value)}>
              <option value={"LB"} disabled>LB</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 1"} onChange={(e) => setFirstCenterBack(e.target.value)}>
              <option value={"CB 1"} disabled>CB 1</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 2"} onChange={(e) => setSecondCenterBack(e.target.value)}>
              <option value={"CB 2"} disabled>CB 2</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RB"} onChange={(e) => setRightBack(e.target.value)}>
              <option value={"RB"} disabled>RB</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CDM"} onChange={(e) => setFirstCenterDefensiveMidfield(e.target.value)}>
              <option value={"CDM"} disabled>CDM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterDefensiveMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterDefensiveMidfield('');
            }}>Clear</button>}
          </div>

          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 1"} onChange={(e) => setFirstCenterMidfield(e.target.value)}>
              <option value={"CM 1"} disabled>CM 1</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 2"} onChange={(e) => setSecondCenterMidfield(e.target.value)}>
              <option value={"CM 2"} disabled>CM 2</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"AM"} onChange={(e) => setFirstAttackingMidfield(e.target.value)}>
              <option value={"AM"} disabled>AM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstAttackingMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstAttackingMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CF 1"} onChange={(e) => setFirstCenterForward(e.target.value)}>
              <option value={"CF 1"} disabled>CF 1</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterForward !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterForward('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CF 2"} onChange={(e) => setSecondCenterForward(e.target.value)}>
              <option value={"CF 2"} disabled>CF 2</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterForward !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterForward('');
            }}>Clear</button>}
          </div>
        </div>}

        {formations === '4-3-3' && <div className="flex flex-col">
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"GK"} onChange={(e) => setGoalkeeper(e.target.value)}>
              <option value={"GK"} disabled>GK</option>
              {players.map((player: any) => {
                if (player.position === 'Goalkeeper') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {goalkeeper !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setGoalkeeper('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LB"} onChange={(e) => setLeftBack(e.target.value)}>
              <option value={"LB"} disabled>LB</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 1"} onChange={(e) => setFirstCenterBack(e.target.value)}>
              <option value={"CB 1"} disabled>CB 1</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 2"} onChange={(e) => setSecondCenterBack(e.target.value)}>
              <option value={"CB 2"} disabled>CB 2</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RB"} onChange={(e) => setRightBack(e.target.value)}>
              <option value={"RB"} disabled>RB</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CDM"} onChange={(e) => setFirstCenterDefensiveMidfield(e.target.value)}>
              <option value={"CDM"} disabled>CDM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterDefensiveMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterDefensiveMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 1"} onChange={(e) => setFirstCenterMidfield(e.target.value)}>
              <option value={"CM 1"} disabled>CM 1</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 2"} onChange={(e) => setSecondCenterMidfield(e.target.value)}>
              <option value={"CM 2"} disabled>CM 2</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LW"} onChange={(e) => setLeftWing(e.target.value)}>
              <option value={"LW"} disabled>LW</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftWing !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftWing('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CF 1"} onChange={(e) => setFirstCenterForward(e.target.value)}>
              <option value={"CF 1"} disabled>CF 1</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterForward !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterForward('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RW"} onChange={(e) => setRightWing(e.target.value)}>
              <option value={"RW"} disabled>RW</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightWing !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightWing('');
            }}>Clear</button>}
          </div>
          <button className="btn btn-outline" onClick={() => {
            setGoalkeeper('');
            setLeftBack('');
            setRightBack('');
            setFirstCenterBack('');
            setSecondCenterBack('');
            setThirdCenterBack('');
            setFirstCenterMidfield('');
            setSecondCenterMidfield('');
            setLeftMidfield('');
            setRightMidfield('');
            setFirstCenterForward('');
            setSecondCenterForward('');
            setStriker('');
            setFirstCenterDefensiveMidfield('');
            setSecondCenterDefensiveMidfield('');
            setThirdCenterDefensiveMidfield('');
            setFirstAttackingMidfield('');
            setSecondAttackingMidfield('');
            setLeftWing('');
            setRightWing('');
            setDefensiveMidfield('');
          }}>Clear</button>
        </div>}

        {formations === '4-3-2-1' && <div className="flex flex-col">
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"GK"} onChange={(e) => setGoalkeeper(e.target.value)}>
              <option value={"GK"} disabled>GK</option>
              {players.map((player: any) => {
                if (player.position === 'Goalkeeper') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {goalkeeper !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setGoalkeeper('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LB"} onChange={(e) => setLeftBack(e.target.value)}>
              <option value={"LB"} disabled>LB</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 1"} onChange={(e) => setFirstCenterBack(e.target.value)}>
              <option value={"CB 1"} disabled>CB 1</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 2"} onChange={(e) => setSecondCenterBack(e.target.value)}>
              <option value={"CB 2"} disabled>CB 2</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RB"} onChange={(e) => setRightBack(e.target.value)}>
              <option value={"RB"} disabled>RB</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CDM"} onChange={(e) => setFirstCenterDefensiveMidfield(e.target.value)}>
              <option value={"CDM"} disabled>CDM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterDefensiveMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterDefensiveMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CDM 2"} onChange={(e) => setSecondCenterDefensiveMidfield(e.target.value)}>
              <option value={"CDM 2"} disabled>CDM 2</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterDefensiveMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterDefensiveMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CDM 3"} onChange={(e) => setThirdCenterDefensiveMidfield(e.target.value)}>
              <option value={"CDM 3"} disabled>CDM 3</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {thirdCenterDefensiveMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setThirdCenterDefensiveMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"AM"} onChange={(e) => setFirstAttackingMidfield(e.target.value)}>
              <option value={"AM"} disabled>AM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstAttackingMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstAttackingMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"AM 2"} onChange={(e) => setSecondAttackingMidfield(e.target.value)}>
              <option value={"AM 2"} disabled>AM 2</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondAttackingMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondAttackingMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CF 1"} onChange={(e) => setFirstCenterForward(e.target.value)}>
              <option value={"CF 1"} disabled>CF 1</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterForward !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterForward('');
            }}>Clear</button>}
          </div>
          <button className="btn btn-outline" onClick={() => {
            setGoalkeeper('');
            setLeftBack('');
            setRightBack('');
            setFirstCenterBack('');
            setSecondCenterBack('');
            setThirdCenterBack('');
            setFirstCenterMidfield('');
            setSecondCenterMidfield('');
            setLeftMidfield('');
            setRightMidfield('');
            setFirstCenterForward('');
            setSecondCenterForward('');
            setStriker('');
            setFirstCenterDefensiveMidfield('');
            setSecondCenterDefensiveMidfield('');
            setThirdCenterDefensiveMidfield('');
            setFirstAttackingMidfield('');
            setSecondAttackingMidfield('');
            setLeftWing('');
            setRightWing('');
            setDefensiveMidfield('');
          }}>Clear</button>
        </div>}

        {formations === '4-2-3-1' && <div className="flex flex-col">
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"GK"} onChange={(e) => setGoalkeeper(e.target.value)}>
              <option value={"GK"} disabled>GK</option>
              {players.map((player: any) => {
                if (player.position === 'Goalkeeper') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {goalkeeper !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setGoalkeeper('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LB"} onChange={(e) => setLeftBack(e.target.value)}>
              <option value={"LB"} disabled>LB</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 1"} onChange={(e) => setFirstCenterBack(e.target.value)}>
              <option value={"CB 1"} disabled>CB 1</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 2"} onChange={(e) => setSecondCenterBack(e.target.value)}>
              <option value={"CB 2"} disabled>CB 2</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RB"} onChange={(e) => setRightBack(e.target.value)}>
              <option value={"RB"} disabled>RB</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CDM"} onChange={(e) => setFirstCenterDefensiveMidfield(e.target.value)}>
              <option value={"CDM"} disabled>CDM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterDefensiveMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterDefensiveMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CDM 2"} onChange={(e) => setSecondCenterDefensiveMidfield(e.target.value)}>
              <option value={"CDM 2"} disabled>CDM 2</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterDefensiveMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterDefensiveMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 1"} onChange={(e) => setFirstCenterMidfield(e.target.value)}>
              <option value={"CM 1"} disabled>CM 1</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LW"} onChange={(e) => setLeftWing(e.target.value)}>
              <option value={"LW"} disabled>LW</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftWing !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftWing('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RW"} onChange={(e) => setRightWing(e.target.value)}>
              <option value={"RW"} disabled>RW</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightWing !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightWing('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CF 1"} onChange={(e) => setFirstCenterForward(e.target.value)}>
              <option value={"CF 1"} disabled>CF 1</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterForward !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterForward('');
            }}>Clear</button>}
          </div>
          <button className="btn btn-outline" onClick={() => {
            setGoalkeeper('');
            setLeftBack('');
            setRightBack('');
            setFirstCenterBack('');
            setSecondCenterBack('');
            setThirdCenterBack('');
            setFirstCenterMidfield('');
            setSecondCenterMidfield('');
            setLeftMidfield('');
            setRightMidfield('');
            setFirstCenterForward('');
            setSecondCenterForward('');
            setStriker('');
            setFirstCenterDefensiveMidfield('');
            setSecondCenterDefensiveMidfield('');
            setThirdCenterDefensiveMidfield('');
            setFirstAttackingMidfield('');
            setSecondAttackingMidfield('');
            setLeftWing('');
            setRightWing('');
            setDefensiveMidfield('');
          }}>Clear</button>
        </div>}

        {formations === '4-5-1' && <div className="flex flex-col">
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"GK"} onChange={(e) => setGoalkeeper(e.target.value)}>
              <option value={"GK"} disabled>GK</option>
              {players.map((player: any) => {
                if (player.position === 'Goalkeeper') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {goalkeeper !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setGoalkeeper('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LB"} onChange={(e) => setLeftBack(e.target.value)}>
              <option value={"LB"} disabled>LB</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 1"} onChange={(e) => setFirstCenterBack(e.target.value)}>
              <option value={"CB 1"} disabled>CB 1</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 2"} onChange={(e) => setSecondCenterBack(e.target.value)}>
              <option value={"CB 2"} disabled>CB 2</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RB"} onChange={(e) => setRightBack(e.target.value)}>
              <option value={"RB"} disabled>RB</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 1"} onChange={(e) => setFirstCenterMidfield(e.target.value)}>
              <option value={"CM 1"} disabled>CM 1</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 2"} onChange={(e) => setSecondCenterMidfield(e.target.value)}>
              <option value={"CM 2"} disabled>CM 2</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"DM"} onChange={(e) => setDefensiveMidfield(e.target.value)}>
              <option selected disabled>DM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {defensiveMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setDefensiveMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LM"} onChange={(e) => setLeftMidfield(e.target.value)}>
              <option value={"LM"} disabled>LM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RM"} onChange={(e) => setRightMidfield(e.target.value)}>
              <option value={"RM"} disabled>RM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CF 1"} onChange={(e) => setFirstCenterForward(e.target.value)}>
              <option value={"CF 1"} disabled>CF 1</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterForward !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterForward('');
            }}>Clear</button>}
          </div>
          <button className="btn btn-outline" onClick={() => {
            setGoalkeeper('');
            setLeftBack('');
            setRightBack('');
            setFirstCenterBack('');
            setSecondCenterBack('');
            setThirdCenterBack('');
            setFirstCenterMidfield('');
            setSecondCenterMidfield('');
            setLeftMidfield('');
            setRightMidfield('');
            setFirstCenterForward('');
            setSecondCenterForward('');
            setStriker('');
            setFirstCenterDefensiveMidfield('');
            setSecondCenterDefensiveMidfield('');
            setThirdCenterDefensiveMidfield('');
            setFirstAttackingMidfield('');
            setSecondAttackingMidfield('');
            setLeftWing('');
            setRightWing('');
            setDefensiveMidfield('');
          }}>Clear</button>
        </div>}

        {formations === '3-4-3' && <div className="flex flex-col">
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"GK"} onChange={(e) => setGoalkeeper(e.target.value)}>
              <option value={"GK"} disabled>GK</option>
              {players.map((player: any) => {
                if (player.position === 'Goalkeeper') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {goalkeeper !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setGoalkeeper('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 1"} onChange={(e) => setFirstCenterBack(e.target.value)}>
              <option value={"CB 1"} disabled>CB 1</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 2"} onChange={(e) => setSecondCenterBack(e.target.value)}>
              <option value={"CB 2"} disabled>CB 2</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 3"} onChange={(e) => setThirdCenterBack(e.target.value)}>
              <option value={"CB 3"} disabled>CB 3</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {thirdCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setThirdCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 1"} onChange={(e) => setFirstCenterMidfield(e.target.value)}>
              <option value={"CM 1"} disabled>CM 1</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 2"} onChange={(e) => setSecondCenterMidfield(e.target.value)}>
              <option value={"CM 2"} disabled>CM 2</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LM"} onChange={(e) => setLeftMidfield(e.target.value)}>
              <option value={"LM"} disabled>LM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RM"} onChange={(e) => setRightMidfield(e.target.value)}>
              <option value={"RM"} disabled>RM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LW"} onChange={(e) => setLeftWing(e.target.value)}>
              <option value={"LW"} disabled>LW</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftWing !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftWing('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RW"} onChange={(e) => setRightWing(e.target.value)}>
              <option value={"RW"} disabled>RW</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightWing !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightWing('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CF 1"} onChange={(e) => setFirstCenterForward(e.target.value)}>
              <option value={"CF 1"} disabled>CF 1</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterForward !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterForward('');
            }}>Clear</button>}
          </div>
          <button className="btn btn-outline" onClick={() => {
            setGoalkeeper('');
            setLeftBack('');
            setRightBack('');
            setFirstCenterBack('');
            setSecondCenterBack('');
            setThirdCenterBack('');
            setFirstCenterMidfield('');
            setSecondCenterMidfield('');
            setLeftMidfield('');
            setRightMidfield('');
            setFirstCenterForward('');
            setSecondCenterForward('');
            setStriker('');
            setFirstCenterDefensiveMidfield('');
            setSecondCenterDefensiveMidfield('');
            setThirdCenterDefensiveMidfield('');
            setFirstAttackingMidfield('');
            setSecondAttackingMidfield('');
            setLeftWing('');
            setRightWing('');
            setDefensiveMidfield('');
          }}>Clear</button>
        </div>}

        {formations === '3-5-2' && <div className="flex flex-col">
        <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"GK"} onChange={(e) => setGoalkeeper(e.target.value)}>
              <option value={"GK"} disabled>GK</option>
              {players.map((player: any) => {
                if (player.position === 'Goalkeeper') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {goalkeeper !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setGoalkeeper('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 1"} onChange={(e) => setFirstCenterBack(e.target.value)}>
              <option value={"CB 1"} disabled>CB 1</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 2"} onChange={(e) => setSecondCenterBack(e.target.value)}>
              <option value={"CB 2"} disabled>CB 2</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 3"} onChange={(e) => setThirdCenterBack(e.target.value)}>
              <option value={"CB 3"} disabled>CB 3</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {thirdCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setThirdCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"DM"} onChange={(e) => setDefensiveMidfield(e.target.value)}>
              <option selected disabled>DM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {defensiveMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setDefensiveMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 1"} onChange={(e) => setFirstCenterMidfield(e.target.value)}>
              <option value={"CM 1"} disabled>CM 1</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 2"} onChange={(e) => setSecondCenterMidfield(e.target.value)}>
              <option value={"CM 2"} disabled>CM 2</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LM"} onChange={(e) => setLeftMidfield(e.target.value)}>
              <option value={"LM"} disabled>LM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RM"} onChange={(e) => setRightMidfield(e.target.value)}>
              <option value={"RM"} disabled>RM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CF 1"} onChange={(e) => setFirstCenterForward(e.target.value)}>
              <option value={"CF 1"} disabled>CF 1</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterForward !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterForward('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CF 2"} onChange={(e) => setSecondCenterForward(e.target.value)}>
              <option value={"CF 2"} disabled>CF 2</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterForward !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterForward('');
            }}>Clear</button>}
          </div>
          <button className="btn btn-outline" onClick={() => {
            setGoalkeeper('');
            setLeftBack('');
            setRightBack('');
            setFirstCenterBack('');
            setSecondCenterBack('');
            setThirdCenterBack('');
            setFirstCenterMidfield('');
            setSecondCenterMidfield('');
            setLeftMidfield('');
            setRightMidfield('');
            setFirstCenterForward('');
            setSecondCenterForward('');
            setStriker('');
            setFirstCenterDefensiveMidfield('');
            setSecondCenterDefensiveMidfield('');
            setThirdCenterDefensiveMidfield('');
            setFirstAttackingMidfield('');
            setSecondAttackingMidfield('');
            setLeftWing('');
            setRightWing('');
            setDefensiveMidfield('');
          }}>Clear</button>
        </div>}

        {formations === '3-2-4-1' && <div className="flex flex-col">
        <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"GK"} onChange={(e) => setGoalkeeper(e.target.value)}>
              <option value={"GK"} disabled>GK</option>
              {players.map((player: any) => {
                if (player.position === 'Goalkeeper') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {goalkeeper !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setGoalkeeper('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 1"} onChange={(e) => setFirstCenterBack(e.target.value)}>
              <option value={"CB 1"} disabled>CB 1</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 2"} onChange={(e) => setSecondCenterBack(e.target.value)}>
              <option value={"CB 2"} disabled>CB 2</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 3"} onChange={(e) => setThirdCenterBack(e.target.value)}>
              <option value={"CB 3"} disabled>CB 3</option>
              {players.map((player: any) => {
                if (player.position === 'Defence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {thirdCenterBack !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setThirdCenterBack('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CDM"} onChange={(e) => setFirstCenterDefensiveMidfield(e.target.value)}>
              <option value={"CDM"} disabled>CDM</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterDefensiveMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterDefensiveMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CDM 2"} onChange={(e) => setSecondCenterDefensiveMidfield(e.target.value)}>
              <option value={"CDM 2"} disabled>CDM 2</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterDefensiveMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterDefensiveMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 1"} onChange={(e) => setFirstCenterMidfield(e.target.value)}>
              <option value={"CM 1"} disabled>CM 1</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 2"} onChange={(e) => setSecondCenterMidfield(e.target.value)}>
              <option value={"CM 2"} disabled>CM 2</option>
              {players.map((player: any) => {
                if (player.position === 'Midfield') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {secondCenterMidfield !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setSecondCenterMidfield('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RW"} onChange={(e) => setRightWing(e.target.value)}>
              <option value={"RW"} disabled>RW</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {rightWing !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setRightWing('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LW"} onChange={(e) => setLeftWing(e.target.value)}>
              <option value={"LW"} disabled>LW</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {leftWing !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setLeftWing('');
            }}>Clear</button>}
          </div>
          <div className="flex">
            <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CF 1"} onChange={(e) => setFirstCenterForward(e.target.value)}>
              <option value={"CF 1"} disabled>CF 1</option>
              {players.map((player: any) => {
                if (player.position === 'Offence') {
                  return <option key={player.id}>{player.name}</option>
                }
              })}
            </select>
            {firstCenterForward !== '' && <button className="btn btn-outline ml-2" onClick={() => {
              setFirstCenterForward('');
            }}>Clear</button>}
          </div>
          <button className="btn btn-outline" onClick={() => {
            setGoalkeeper('');
            setLeftBack('');
            setRightBack('');
            setFirstCenterBack('');
            setSecondCenterBack('');
            setThirdCenterBack('');
            setFirstCenterMidfield('');
            setSecondCenterMidfield('');
            setLeftMidfield('');
            setRightMidfield('');
            setFirstCenterForward('');
            setSecondCenterForward('');
            setStriker('');
            setFirstCenterDefensiveMidfield('');
            setSecondCenterDefensiveMidfield('');
            setThirdCenterDefensiveMidfield('');
            setFirstAttackingMidfield('');
            setSecondAttackingMidfield('');
            setLeftWing('');
            setRightWing('');
            setDefensiveMidfield('');
          }}>Clear</button>
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
          {<p className="font-bold text-xl flex text-center">{firstCenterBack}</p>}
        </div>
        <div className="absolute top-[70%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterBack}</p>}
        </div>
        <div className="absolute top-[65%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightBack}</p>}
        </div>
        <div className="absolute top-[35%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{leftMidfield}</p>}
        </div>
        <div className="absolute top-[44%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterMidfield}</p>}
        </div>
        <div className="absolute top-[44%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterMidfield}</p>}
        </div>
        <div className="absolute top-[35%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightMidfield}</p>}
        </div>
        <div className="absolute top-[20%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterForward}</p>}
        </div>
        <div className="absolute top-[20%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterForward}</p>}
        </div>
      </div>}

      {formations === '4-4-1-1' && <div className="relative">
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
          {<p className="font-bold text-xl flex text-center">{firstCenterBack}</p>}
        </div>
        <div className="absolute top-[70%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterBack}</p>}
        </div>
        <div className="absolute top-[65%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightBack}</p>}
        </div>
        <div className="absolute top-[35%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{leftMidfield}</p>}
        </div>
        <div className="absolute top-[50%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterMidfield}</p>}
        </div>
        <div className="absolute top-[50%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterMidfield}</p>}
        </div>
        <div className="absolute top-[35%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightMidfield}</p>}
        </div>
        <div className="absolute top-[10%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          ST
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{striker}</p>}
        </div>
        <div className="absolute top-[25%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterForward}</p>}
        </div>
      </div>}

      {formations === '4-4-2 diamond' && <div className="relative">
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
          {<p className="font-bold text-xl flex text-center">{firstCenterBack}</p>}
        </div>
        <div className="absolute top-[70%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterBack}</p>}
        </div>
        <div className="absolute top-[65%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightBack}</p>}
        </div>
        <div className="absolute top-[44%] left-[22%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterMidfield}</p>}
        </div>
        <div className="absolute top-[54%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterDefensiveMidfield}</p>}
        </div>
        <div className="absolute top-[44%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterMidfield}</p>}
        </div>
        <div className="absolute top-[34%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          AM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstAttackingMidfield}</p>}
        </div>
        <div className="absolute top-[20%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterForward}</p>}
        </div>
        <div className="absolute top-[20%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterForward}</p>}
        </div>
      </div>}

      {formations === '4-3-3' && <div className="relative">
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
          {<p className="font-bold text-xl flex text-center">{firstCenterBack}</p>}
        </div>
        <div className="absolute top-[70%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterBack}</p>}
        </div>
        <div className="absolute top-[65%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightBack}</p>}
        </div>
        <div className="absolute top-[40%] left-[25%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterMidfield}</p>}
        </div>
        <div className="absolute top-[54%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterDefensiveMidfield}</p>}
        </div>
        <div className="absolute top-[40%] left-[50%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterMidfield}</p>}
        </div>
        <div className="absolute top-[15%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterForward}</p>}
        </div>
        <div className="absolute top-[20%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LW
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{leftWing}</p>}
        </div>
        <div className="absolute top-[20%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RW
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightWing}</p>}
        </div>
      </div>}

      {formations === '4-3-2-1' && <div className="relative">
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
          {<p className="font-bold text-xl flex text-center">{firstCenterBack}</p>}
        </div>
        <div className="absolute top-[70%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterBack}</p>}
        </div>
        <div className="absolute top-[65%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightBack}</p>}
        </div>
        <div className="absolute top-[42%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterDefensiveMidfield}</p>}
        </div>
        <div className="absolute top-[46%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterDefensiveMidfield}</p>}
        </div>
        <div className="absolute top-[42%] left-[55%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{thirdCenterDefensiveMidfield}</p>}
        </div>
        <div className="absolute top-[15%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterForward}</p>}
        </div>
        <div className="absolute top-[30%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          AM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstAttackingMidfield}</p>}
        </div>
        <div className="absolute top-[30%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          AM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondAttackingMidfield}</p>}
        </div>
      </div>}

      {formations === '4-2-3-1' && <div className="relative">
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
          {<p className="font-bold text-xl flex text-center">{firstCenterBack}</p>}
        </div>
        <div className="absolute top-[70%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterBack}</p>}
        </div>
        <div className="absolute top-[65%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightBack}</p>}
        </div>
        <div className="absolute top-[50%] left-[26%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterDefensiveMidfield}</p>}
        </div>
        <div className="absolute top-[34%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterMidfield}</p>}
        </div>
        <div className="absolute top-[50%] left-[50%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterDefensiveMidfield}</p>}
        </div>
        <div className="absolute top-[15%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterForward}</p>}
        </div>
        <div className="absolute top-[20%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LW
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{leftWing}</p>}
        </div>
        <div className="absolute top-[20%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RW
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightWing}</p>}
        </div>
      </div>}

      {formations === '4-5-1' && <div className="relative">
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
          {<p className="font-bold text-xl flex text-center">{firstCenterBack}</p>}
        </div>
        <div className="absolute top-[70%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterBack}</p>}
        </div>
        <div className="absolute top-[65%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightBack}</p>}
        </div>
        <div className="absolute top-[40%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterMidfield}</p>}
        </div>
        <div className="absolute top-[50%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          DM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{defensiveMidfield}</p>}
        </div>
        <div className="absolute top-[40%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterMidfield}</p>}
        </div>
        <div className="absolute top-[15%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterForward}</p>}
        </div>
        <div className="absolute top-[35%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{leftMidfield}</p>}
        </div>
        <div className="absolute top-[35%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightMidfield}</p>}
        </div>
      </div>}

      {formations === '3-4-3' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          GK
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{goalkeeper}</p>}
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterBack}</p>}
        </div>
        <div className="absolute top-[70%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterBack}</p>}
        </div>
        <div className="absolute top-[70%] left-[55%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{thirdCenterBack}</p>}
        </div>
        <div className="absolute top-[44%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterMidfield}</p>}
        </div>
        <div className="absolute top-[44%] left-[55%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterMidfield}</p>}
        </div>
        <div className="absolute top-[35%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{leftMidfield}</p>}
        </div>
        <div className="absolute top-[35%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightMidfield}</p>}
        </div>
        <div className="absolute top-[20%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LW
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{leftWing}</p>}
        </div>
        <div className="absolute top-[10%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterForward}</p>}
        </div>
        <div className="absolute top-[20%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RW
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightWing}</p>}
        </div>
      </div>}

      {formations === '3-5-2' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          GK
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{goalkeeper}</p>}
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterBack}</p>}
        </div>
        <div className="absolute top-[70%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterBack}</p>}
        </div>
        <div className="absolute top-[70%] left-[55%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{thirdCenterBack}</p>}
        </div>
        <div className="absolute top-[40%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterMidfield}</p>}
        </div>
        <div className="absolute top-[50%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          DM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{defensiveMidfield}</p>}
        </div>
        <div className="absolute top-[40%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterMidfield}</p>}
        </div>
        <div className="absolute top-[35%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{leftMidfield}</p>}
        </div>
        <div className="absolute top-[35%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightMidfield}</p>}
        </div>
        <div className="absolute top-[15%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterForward}</p>}
        </div>
        <div className="absolute top-[15%] left-[55%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterForward}</p>}
        </div>
      </div>}

      {formations === '3-2-4-1' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          GK
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{goalkeeper}</p>}
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterBack}</p>}
        </div>
        <div className="absolute top-[70%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterBack}</p>}
        </div>
        <div className="absolute top-[70%] left-[55%] items-center flex flex-col font-bold text-xl w-3/12">
          CB
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{thirdCenterBack}</p>}
        </div>
        <div className="absolute top-[50%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterDefensiveMidfield}</p>}
        </div>
        <div className="absolute top-[50%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CDM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterDefensiveMidfield}</p>}
        </div>
        <div className="absolute top-[30%] left-[-3%] items-center flex flex-col font-bold text-xl w-3/12">
          LW
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{leftWing}</p>}
        </div>
        <div className="absolute top-[35%] left-[20%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterMidfield}</p>}
        </div>
        <div className="absolute top-[35%] left-[54%] items-center flex flex-col font-bold text-xl w-3/12">
          CM
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{secondCenterMidfield}</p>}
        </div>
        <div className="absolute top-[30%] left-[77%] items-center flex flex-col font-bold text-xl w-3/12">
          RW
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{rightWing}</p>}
        </div>
        <div className="absolute top-[20%] left-[37.5%] items-center flex flex-col font-bold text-xl w-3/12">
          CF
          <MdCircle size={70} />
          {<p className="font-bold text-xl flex text-center">{firstCenterForward}</p>}
        </div>
      </div>}
    </div>
  );
}