import { useState } from "react";

interface IClientInfo {
  onNextClick: () => void;
}

export const ClientInfo = ({ onNextClick }: IClientInfo) => {
  const [isClicked, setIsClicked] = useState<'new' | 'existing' | null>(null);
  const [petSpecies, setPetSpecies] = useState<'dog' | 'cat' | null>(null);
  const clinicians = ['John Doe', 'Alice Smith', 'Bob Brown', 'Charlie White', 'David Black'];

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
        <select className="select select-bordered w-full" defaultValue={'No preference'}>
          <option>No preference</option>
          {clinicians.map((clinician, index) => (
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