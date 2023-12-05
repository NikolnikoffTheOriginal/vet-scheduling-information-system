import { useState } from "react";
import { MdCircle } from "react-icons/md";

export const PlayerSelections = ({ players }: any) => {
  const [formations, setFormations] = useState('');
  return (
    players && <div className="flex ml-3">
      <div>
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
        <select className="select w-full max-w-xs mb-3">
          <option selected disabled>Defenders</option>
        </select>
        <select className="select w-full max-w-xs mb-3">
          <option selected disabled>Midfielders</option>
        </select>
        <select className="select w-full max-w-xs">
          <option selected disabled>Offence</option>
        </select>
      </div>


      {formations === '4-4-2' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[45%] items-center flex flex-col font-bold text-xl">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[5%] items-center flex flex-col font-bold text-xl">
          LB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[30%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[60%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[85%] items-center flex flex-col font-bold text-xl">
          RB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[5%] items-center flex flex-col font-bold text-xl">
          LM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[30%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[60%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[85%] items-center flex flex-col font-bold text-xl">
          RM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[30%] items-center flex flex-col font-bold text-xl">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[60%] items-center flex flex-col font-bold text-xl">
          CF
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '4-4-1-1' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[45%] items-center flex flex-col font-bold text-xl">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[5%] items-center flex flex-col font-bold text-xl">
          LB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[30%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[60%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[85%] items-center flex flex-col font-bold text-xl">
          RB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[5%] items-center flex flex-col font-bold text-xl">
          LM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[30%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[60%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[85%] items-center flex flex-col font-bold text-xl">
          RM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[10%] left-[45%] items-center flex flex-col font-bold text-xl">
          ST
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[25%] left-[45%] items-center flex flex-col font-bold text-xl">
          CF
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '4-4-2 diamond' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[45%] items-center flex flex-col font-bold text-xl">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[5%] items-center flex flex-col font-bold text-xl">
          LB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[30%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[60%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[85%] items-center flex flex-col font-bold text-xl">
          RB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[31%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[54%] left-[45%] items-center flex flex-col font-bold text-xl">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[60%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[34%] left-[45%] items-center flex flex-col font-bold text-xl">
          AM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[30%] items-center flex flex-col font-bold text-xl">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[60%] items-center flex flex-col font-bold text-xl">
          CF
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '4-3-3' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[45%] items-center flex flex-col font-bold text-xl">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[5%] items-center flex flex-col font-bold text-xl">
          LB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[30%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[60%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[85%] items-center flex flex-col font-bold text-xl">
          RB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[20%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[54%] left-[45%] items-center flex flex-col font-bold text-xl">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[70%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[15%] left-[45%] items-center flex flex-col font-bold text-xl">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[15%] items-center flex flex-col font-bold text-xl">
          LW
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[75%] items-center flex flex-col font-bold text-xl">
          RW
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '4-3-2-1' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[45%] items-center flex flex-col font-bold text-xl">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[5%] items-center flex flex-col font-bold text-xl">
          LB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[30%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[60%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[85%] items-center flex flex-col font-bold text-xl">
          RB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[20%] items-center flex flex-col font-bold text-xl">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[45%] items-center flex flex-col font-bold text-xl">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[70%] items-center flex flex-col font-bold text-xl">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[15%] left-[45%] items-center flex flex-col font-bold text-xl">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[30%] left-[30%] items-center flex flex-col font-bold text-xl">
          AM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[30%] left-[60%] items-center flex flex-col font-bold text-xl">
          AM
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '4-2-3-1' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[45%] items-center flex flex-col font-bold text-xl">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[5%] items-center flex flex-col font-bold text-xl">
          LB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[30%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[60%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[85%] items-center flex flex-col font-bold text-xl">
          RB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[30%] items-center flex flex-col font-bold text-xl">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[34%] left-[45%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[60%] items-center flex flex-col font-bold text-xl">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[15%] left-[45%] items-center flex flex-col font-bold text-xl">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[15%] items-center flex flex-col font-bold text-xl">
          LW
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[75%] items-center flex flex-col font-bold text-xl">
          RW
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '4-5-1' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[45%] items-center flex flex-col font-bold text-xl">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[5%] items-center flex flex-col font-bold text-xl">
          LB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[30%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[60%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[65%] left-[85%] items-center flex flex-col font-bold text-xl">
          RB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[40%] left-[31%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[45%] items-center flex flex-col font-bold text-xl">
          DM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[40%] left-[60%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[15%] left-[45%] items-center flex flex-col font-bold text-xl">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[10%] items-center flex flex-col font-bold text-xl">
          LM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[80%] items-center flex flex-col font-bold text-xl">
          RM
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '3-4-3' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[45%] items-center flex flex-col font-bold text-xl">
          GK
          <MdCircle size={70} />
        </div>

        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[45%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[70%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[31%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[44%] left-[60%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[10%] items-center flex flex-col font-bold text-xl">
          LM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[80%] items-center flex flex-col font-bold text-xl">
          RM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[10%] items-center flex flex-col font-bold text-xl">
          LW
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[10%] left-[45%] items-center flex flex-col font-bold text-xl">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[80%] items-center flex flex-col font-bold text-xl">
          RW
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '3-5-2' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[45%] items-center flex flex-col font-bold text-xl">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[45%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[70%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[40%] left-[31%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[45%] items-center flex flex-col font-bold text-xl">
          DM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[40%] left-[60%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[10%] items-center flex flex-col font-bold text-xl">
          LM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[80%] items-center flex flex-col font-bold text-xl">
          RM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[15%] left-[30%] items-center flex flex-col font-bold text-xl">
          CF
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[15%] left-[60%] items-center flex flex-col font-bold text-xl">
          CF
          <MdCircle size={70} />
        </div>
      </div>}

      {formations === '3-2-4-1' && <div className="relative">
        <img src="./src/assets/footballPitch.png" alt="" className="max-h-[100%]" />
        <div className="absolute top-[85%] left-[45%] items-center flex flex-col font-bold text-xl">
          GK
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[20%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[45%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[70%] left-[70%] items-center flex flex-col font-bold text-xl">
          CB
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[30%] items-center flex flex-col font-bold text-xl">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[50%] left-[60%] items-center flex flex-col font-bold text-xl">
          CDM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[30%] left-[5%] items-center flex flex-col font-bold text-xl">
          LM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[30%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[35%] left-[60%] items-center flex flex-col font-bold text-xl">
          CM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[30%] left-[85%] items-center flex flex-col font-bold text-xl">
          RM
          <MdCircle size={70} />
        </div>
        <div className="absolute top-[20%] left-[45%] items-center flex flex-col font-bold text-xl">
          CF
          <MdCircle size={70} />
        </div>
      </div>}
    </div>
  );
}