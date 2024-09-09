import { ISquadMember } from "../../database/interfaces";

interface IFourFiveOne {
  squad: Array<ISquadMember>,
  setGoalkeeper: (value: string) => void,
  setLeftBack: (value: string) => void,
  setFirstCenterBack: (value: string) => void,
  setSecondCenterBack: (value: string) => void,
  setRightBack: (value: string) => void,
  setFirstCenterForward: (value: string) => void,
  setFirstCenterMidfield: (value: string) => void,
  setSecondCenterMidfield: (value: string) => void,
  setDefensiveMidfield: (value: string) => void,
  setLeftMidfield: (value: string) => void,
  setRightMidfield: (value: string) => void
}

export const FourFiveOne = ({
  squad,
  setGoalkeeper,
  setLeftBack,
  setFirstCenterBack,
  setSecondCenterBack,
  setRightBack,
  setFirstCenterForward,
  setFirstCenterMidfield,
  setSecondCenterMidfield,
  setDefensiveMidfield,
  setLeftMidfield,
  setRightMidfield,
}: IFourFiveOne) => (
  <div className="flex pl-3">
    <div className="flex flex-col">
      <div className="flex">
        <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"GK"} onChange={(e) => setGoalkeeper(e.target.value)}>
          <option value={"GK"} disabled>GK</option>
          {squad.map(squad => {
            if (squad.position === 'Goalkeeper') {
              return <option key={squad.id}>{squad.name}</option>
            }
          })}
        </select>
      </div>
      <div className="flex">
        <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LB"} onChange={(e) => setLeftBack(e.target.value)}>
          <option value={"LB"} disabled>LB</option>
          {squad.map(squad => {
            if (squad.position === 'Left-Back') {
              return <option key={squad.id}>{squad.name}</option>
            }
          })}
        </select>
      </div>
      <div className="flex">
        <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 1"} onChange={(e) => setFirstCenterBack(e.target.value)}>
          <option value={"CB 1"} disabled>CB 1</option>
          {squad.map(squad => {
            if (squad.position === 'Centre-Back') {
              return <option key={squad.id}>{squad.name}</option>
            }
          })}
        </select>
      </div>
      <div className="flex">
        <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CB 2"} onChange={(e) => setSecondCenterBack(e.target.value)}>
          <option value={"CB 2"} disabled>CB 2</option>
          {squad.map(squad => {
            if (squad.position === 'Centre-Back') {
              return <option key={squad.id}>{squad.name}</option>
            }
          })}
        </select>
      </div>
      <div className="flex">
        <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RB"} onChange={(e) => setRightBack(e.target.value)}>
          <option value={"RB"} disabled>RB</option>
          {squad.map(squad => {
            if (squad.position === 'Right-Back') {
              return <option key={squad.id}>{squad.name}</option>
            }
          })}
        </select>
      </div>
      <div className="flex">
        <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 1"} onChange={(e) => setFirstCenterMidfield(e.target.value)}>
          <option value={"CM 1"} disabled>CM 1</option>
          {squad.map(squad => {
            if (squad.position === 'Attacking Midfield') {
              return <option key={squad.id}>{squad.name}</option>
            }
          })}
        </select>
      </div>
      <div className="flex">
        <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CM 2"} onChange={(e) => setSecondCenterMidfield(e.target.value)}>
          <option value={"CM 2"} disabled>CM 2</option>
          {squad.map(squad => {
            if (squad.position === 'Attacking Midfield') {
              return <option key={squad.id}>{squad.name}</option>
            }
          })}
        </select>
      </div>
      <div className="flex">
        <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"DM"} onChange={(e) => setDefensiveMidfield(e.target.value)}>
          <option value={"DM"} disabled>DM</option>
          {squad.map(squad => {
            if (squad.position === 'Defensive Midfield') {
              return <option key={squad.id}>{squad.name}</option>
            }
          })}
        </select>
      </div>
      <div className="flex">
        <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"LM"} onChange={(e) => setLeftMidfield(e.target.value)}>
          <option value={"LM"} disabled>LM</option>
          {squad.map(squad => {
            if (squad.position === 'Left Winger') {
              return <option key={squad.id}>{squad.name}</option>
            }
          })}
        </select>
      </div>
      <div className="flex">
        <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"RM"} onChange={(e) => setRightMidfield(e.target.value)}>
          <option value={"RM"} disabled>RM</option>
          {squad.map(squad => {
            if (squad.position === 'Right Winger') {
              return <option key={squad.id}>{squad.name}</option>
            }
          })}
        </select>
      </div>
      <div className="flex">
        <select className="select select-accent w-full max-w-xs mb-3" defaultValue={"CF 1"} onChange={(e) => setFirstCenterForward(e.target.value)}>
          <option value={"CF 1"} disabled>CF 1</option>
          {squad.map(squad => {
            if (squad.position === 'Offence' || squad.position === 'Centre-Forward') {
              return <option key={squad.id}>{squad.name}</option>
            }
          })}
        </select>
      </div>
    </div>
  </div>
); 