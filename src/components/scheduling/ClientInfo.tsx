import { CLINICIANS } from "../../constants";

interface IClientInfo {
  isClicked: 'new' | 'existing' | null;
  petSpecies: 'dog' | 'cat' | null;
  onNextClick: () => void;
  setIsClicked: (value: 'new' | 'existing') => void;
  setPetSpecies: (value: 'dog' | 'cat') => void;
  setClinician: (value: string) => void;
}

export const ClientInfo = ({
  onNextClick,
  isClicked,
  petSpecies,
  setIsClicked,
  setPetSpecies,
  setClinician,
}: IClientInfo) => {

  return (
    <div className="flex flex-col gap-5 shadow-lg p-40 rounded-box bg-neutral-content">
      <h1 className="text-2xl font-bold">Welcome! Please make an appointment.</h1>

      <div className="flex flex-col text-center">
        <p className="mb-2 text-xl">Your client status</p>
        <div className="flex gap-7">
          <button
            className={isClicked === 'new' ? 'btn btn-neutral flex-1' : 'btn btn-outline flex-1'}
            onClick={() => setIsClicked('new')}
          >
            I am a new client
          </button>
          <button
            className={isClicked === 'existing' ? 'btn btn-neutral flex-1' : 'btn btn-outline flex-1'}
            onClick={() => setIsClicked('existing')}
          >
            I am an existing client
          </button>
        </div>
      </div>

      <div className="flex flex-col text-center">
        <p className="mb-2 text-xl">Your pet species</p>
        <div className="flex gap-7">
          <button
            className={petSpecies === 'dog' ? 'btn btn-neutral flex-1' : 'btn btn-outline flex-1'}
            onClick={() => setPetSpecies('dog')}
          >
            Dog
          </button>
          <button
            className={petSpecies === 'cat' ? 'btn btn-neutral flex-1' : 'btn btn-outline flex-1'}
            onClick={() => setPetSpecies('cat')}
          >
            Cat
          </button>
        </div>
      </div>

      <div className="flex flex-col text-center">
        <p className="mb-2 text-xl">Choose a clinician</p>
        <select
          className="select select-bordered w-full"
          defaultValue={'No preference'}
          onChange={(e) => {
            setClinician(e.target.value);
          }}
        >
          <option>No preference</option>
          {CLINICIANS.map((clinician, index) => (
            <option key={index}>{clinician}</option>
          ))}
        </select>
      </div>

      <button
        className="btn btn-primary text-lg"
        disabled={isClicked && petSpecies ? false : true}
        onClick={onNextClick}
      >
        Next
      </button>
    </div>
  )
};