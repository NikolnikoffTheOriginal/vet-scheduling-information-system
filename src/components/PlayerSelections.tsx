import { useState } from "react";
import { MdCircle } from "react-icons/md";

export const PlayerSelections = ({ players }: any) => {
  const [formations, setFormations] = useState('');
  return (
    players && <div className="flex">
      <div>
        <select className="select w-full max-w-xs" onChange={(e) => setFormations(e.target.value)}>
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
        <select className="select w-full max-w-xs">
          <option selected disabled>Defenders</option>
        </select>
        <select className="select w-full max-w-xs">
          <option selected disabled>Midfielders</option>
        </select>
        <select className="select w-full max-w-xs">
          <option selected disabled>Offence</option>
        </select>
      </div>


      {formations === '4-4-2' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[1000px]" />
        <div className="absolute top-[70%]">
          <MdCircle size={70} />
        </div>
      </div>}
    </div>
  );
}