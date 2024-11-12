import { useState } from "react"

export const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const clinicians = ['John Doe', 'Alice Smith', 'Bob Brown', 'Charlie White', 'David Black'];

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col gap-5 shadow-lg p-40 rounded-box bg-neutral-content">
        <p className="self-center">Welcome! Please make an appointment.</p>

        <div className="flex flex-col text-center">
          <p className="mb-2">Your client status</p>
          <div className="flex gap-7">
            <button
              className={isClicked ? 'btn btn-neutral flex-1' : 'btn btn-outline flex-1'}
              onClick={() => setIsClicked(!isClicked)}
            >I am a new client</button>
            <button className="btn btn-outline flex-1">I am a returning client</button>
          </div>
        </div>

        <div className="flex flex-col text-center">
          <p className="mb-2">Your pet species</p>
          <div className="flex gap-7">
            <button className="btn btn-outline flex-1">Dog</button>
            <button className="btn btn-outline flex-1">Cat</button>
          </div>
        </div>

        <div className="flex flex-col text-center">
          <p className="mb-2">Choose a clinician</p>
          <select className="select select-bordered w-full" defaultValue={'No preference'}>
            <option disabled>No preference</option>
            {clinicians.map((clinician, index) => (
              <option key={index}>{clinician}</option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary">Next</button>
      </div>
    </div>
  )
}

export default App
