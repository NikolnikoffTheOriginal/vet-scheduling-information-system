import { useEffect, useState } from "react";
import { useCountPlayerRating } from "./hooks/useCountPlayerRating";
import { ISquadMember } from "../database/interfaces";
import { FourFourTwo } from "./formations/FourFourTwo";
import { FourFourOneOne } from "./formations/FourFourOneOne";
import { FourFourTwoDiamond } from "./formations/FourFourTwoDiamond";
import { FourThreeThree } from "./formations/FourThreeThree";
import { FourThreeTwoOne } from "./formations/FourThreeTwoOne";
import { FourTwoThreeOne } from "./formations/FourTwoThreeOne";
import { FourFiveOne } from "./formations/FourFiveOne";
import { ThreeFourThree } from "./formations/FourThreeFour";
import { ThreeFiveTwo } from "./formations/ThreeFiveTwo";
import { ThreeTwoFourOne } from "./formations/ThreeTwoFourOne";

interface IPlayerSelections {
  squad: Array<ISquadMember>
}

export const PlayerSelections = ({ squad }: IPlayerSelections) => {
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

  const { rating, countRatings } = useCountPlayerRating();

  useEffect(() => {
    countRatings();
  }, [countRatings]);

  return (
    squad && <div className="flex pl-3 justify-around">
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

        {formations === '4-4-2' &&
          <FourFourTwo
            squad={squad}
            setGoalkeeper={setGoalkeeper}
            setLeftBack={setLeftBack}
            setFirstCenterBack={setFirstCenterBack}
            setSecondCenterBack={setSecondCenterBack}
            setRightBack={setRightBack}
            setLeftMidfield={setLeftMidfield}
            setFirstCenterMidfield={setFirstCenterMidfield}
            setSecondCenterMidfield={setSecondCenterMidfield}
            setRightMidfield={setRightMidfield}
            setFirstCenterForward={setFirstCenterForward}
            setSecondCenterForward={setSecondCenterForward}
          />}

        {formations === '4-4-1-1' &&
          <FourFourOneOne
            squad={squad}
            setGoalkeeper={setGoalkeeper}
            setLeftBack={setLeftBack}
            setFirstCenterBack={setFirstCenterBack}
            setSecondCenterBack={setSecondCenterBack}
            setRightBack={setRightBack}
            setLeftMidfield={setLeftMidfield}
            setFirstCenterMidfield={setFirstCenterMidfield}
            setSecondCenterMidfield={setSecondCenterMidfield}
            setRightMidfield={setRightMidfield}
            setFirstCenterForward={setFirstCenterForward}
            setStriker={setStriker}
          />}

        {formations === '4-4-2 diamond' &&
          <FourFourTwoDiamond
            squad={squad}
            setGoalkeeper={setGoalkeeper}
            setLeftBack={setLeftBack}
            setFirstCenterBack={setFirstCenterBack}
            setSecondCenterBack={setSecondCenterBack}
            setRightBack={setRightBack}
            setFirstCenterMidfield={setFirstCenterMidfield}
            setSecondCenterMidfield={setSecondCenterMidfield}
            setFirstCenterForward={setFirstCenterForward}
            setFirstCenterDefensiveMidfield={setFirstCenterDefensiveMidfield}
            setFirstAttackingMidfield={setFirstAttackingMidfield}
            setSecondCenterForward={setSecondCenterForward}
          />}

        {formations === '4-3-3' &&
          <FourThreeThree
            squad={squad}
            setGoalkeeper={setGoalkeeper}
            setLeftBack={setLeftBack}
            setFirstCenterBack={setFirstCenterBack}
            setSecondCenterBack={setSecondCenterBack}
            setRightBack={setRightBack}
            setFirstCenterMidfield={setFirstCenterMidfield}
            setSecondCenterMidfield={setSecondCenterMidfield}
            setFirstCenterForward={setFirstCenterForward}
            setFirstCenterDefensiveMidfield={setFirstCenterDefensiveMidfield}
            setLeftWing={setLeftWing}
            setRightWing={setRightWing}
          />}

        {formations === '4-3-2-1' &&
          <FourThreeTwoOne
            squad={squad}
            setGoalkeeper={setGoalkeeper}
            setLeftBack={setLeftBack}
            setFirstCenterBack={setFirstCenterBack}
            setSecondCenterBack={setSecondCenterBack}
            setRightBack={setRightBack}
            setFirstCenterDefensiveMidfield={setFirstCenterDefensiveMidfield}
            setSecondCenterDefensiveMidfield={setSecondCenterDefensiveMidfield}
            setThirdCenterDefensiveMidfield={setThirdCenterDefensiveMidfield}
            setFirstAttackingMidfield={setFirstAttackingMidfield}
            setSecondAttackingMidfield={setSecondAttackingMidfield}
            setFirstCenterForward={setFirstCenterForward}
          />}

        {formations === '4-2-3-1' &&
          <FourTwoThreeOne
            squad={squad}
            setGoalkeeper={setGoalkeeper}
            setLeftBack={setLeftBack}
            setFirstCenterBack={setFirstCenterBack}
            setSecondCenterBack={setSecondCenterBack}
            setRightBack={setRightBack}
            setFirstCenterMidfield={setFirstCenterMidfield}
            setSecondCenterDefensiveMidfield={setSecondCenterDefensiveMidfield}
            setFirstCenterDefensiveMidfield={setFirstCenterDefensiveMidfield}
            setLeftWing={setLeftWing}
            setFirstCenterForward={setFirstCenterForward}
            setRightWing={setRightWing}
          />}

        {formations === '4-5-1' &&
          <FourFiveOne
            squad={squad}
            setGoalkeeper={setGoalkeeper}
            setLeftBack={setLeftBack}
            setFirstCenterBack={setFirstCenterBack}
            setSecondCenterBack={setSecondCenterBack}
            setRightBack={setRightBack}
            setFirstCenterMidfield={setFirstCenterMidfield}
            setSecondCenterMidfield={setSecondCenterMidfield}
            setDefensiveMidfield={setDefensiveMidfield}
            setLeftMidfield={setLeftMidfield}
            setRightMidfield={setRightMidfield}
            setFirstCenterForward={setFirstCenterForward}
          />
        }

        {formations === '3-4-3' &&
          <ThreeFourThree
            squad={squad}
            setGoalkeeper={setGoalkeeper}
            setFirstCenterBack={setFirstCenterBack}
            setSecondCenterBack={setSecondCenterBack}
            setThirdCenterBack={setThirdCenterBack}
            setFirstCenterMidfield={setFirstCenterMidfield}
            setSecondCenterMidfield={setSecondCenterMidfield}
            setLeftMidfield={setLeftMidfield}
            setRightMidfield={setRightMidfield}
            setLeftWing={setLeftWing}
            setRightWing={setRightWing}
            setFirstCenterForward={setFirstCenterForward}
          />
        }

        {formations === '3-5-2' &&
          <ThreeFiveTwo
            squad={squad}
            setGoalkeeper={setGoalkeeper}
            setFirstCenterBack={setFirstCenterBack}
            setSecondCenterBack={setSecondCenterBack}
            setThirdCenterBack={setThirdCenterBack}
            setDefensiveMidfield={setDefensiveMidfield}
            setFirstCenterMidfield={setFirstCenterMidfield}
            setSecondCenterMidfield={setSecondCenterMidfield}
            setLeftMidfield={setLeftMidfield}
            setRightMidfield={setRightMidfield}
            setFirstCenterForward={setFirstCenterForward}
            setSecondCenterForward={setSecondCenterForward}
          />
        }

        {formations === '3-2-4-1' &&
          <ThreeTwoFourOne
            squad={squad}
            setGoalkeeper={setGoalkeeper}
            setFirstCenterBack={setFirstCenterBack}
            setSecondCenterBack={setSecondCenterBack}
            setThirdCenterBack={setThirdCenterBack}
            setFirstCenterDefensiveMidfield={setFirstCenterDefensiveMidfield}
            setSecondCenterDefensiveMidfield={setSecondCenterDefensiveMidfield}
            setFirstCenterMidfield={setFirstCenterMidfield}
            setSecondCenterMidfield={setSecondCenterMidfield}
            setLeftWing={setLeftWing}
            setRightWing={setRightWing}
            setFirstCenterForward={setFirstCenterForward}
          />
        }

        {formations && (
          <button className="btn btn-outline w-full" onClick={() => {
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
        )}
      </div>
    </div>
  );
}