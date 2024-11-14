import { useState } from "react"
import { Button } from "./components/Button";
import Calendar from "react-calendar";

enum Page {
  'client',
  'date',
}

export const App = () => {
  const [isClicked, setIsClicked] = useState<'new' | 'existing' | null>(null);
  const [petSpecies, setPetSpecies] = useState<'dog' | 'cat' | null>(null);
  const clinicians = ['John Doe', 'Alice Smith', 'Bob Brown', 'Charlie White', 'David Black'];
  const [page, setPage] = useState(Page.client);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      {page === Page.client && (
        <div className="flex flex-col gap-5 shadow-lg p-40 rounded-box bg-neutral-content">
          <p className="self-center">Welcome! Please make an appointment.</p>

          <div className="flex flex-col text-center">
            <p className="mb-2">Your client status</p>
            <div className="flex gap-7">
              <Button text="I am a new client"
                className={isClicked === 'new' ? 'btn btn-neutral flex-1' : 'btn btn-outline flex-1'}
                onClick={() => setIsClicked('new')}
              />
              <Button text="I am an existing client"
                className={isClicked === 'existing' ? 'btn btn-neutral flex-1' : 'btn btn-outline flex-1'}
                onClick={() => setIsClicked('existing')}
              />
            </div>
          </div>

          <div className="flex flex-col text-center">
            <p className="mb-2">Your pet species</p>
            <div className="flex gap-7">
              <Button text="Dog"
                className={petSpecies === 'dog' ? 'btn btn-neutral flex-1' : 'btn btn-outline flex-1'}
                onClick={() => setPetSpecies('dog')}
              />
              <Button text="Cat"
                className={petSpecies === 'cat' ? 'btn btn-neutral flex-1' : 'btn btn-outline flex-1'}
                onClick={() => setPetSpecies('cat')}
              />
            </div>
          </div>

          <div className="flex flex-col text-center">
            <p className="mb-2">Choose a clinician</p>
            <select className="select select-bordered w-full" defaultValue={'No preference'}>
              <option>No preference</option>
              {clinicians.map((clinician, index) => (
                <option key={index}>{clinician}</option>
              ))}
            </select>
          </div>

          <button
            className="btn btn-primary"
            disabled={isClicked && petSpecies ? false : true}
            onClick={() => setPage(Page.date)}>
            Next
          </button>
        </div>
      )}

      {page === Page.date && (
        <div className="flex flex-col gap-5 shadow-lg p-40 rounded-box bg-neutral-content">
          <p className="self-center">Choose a date for your appointment.</p>
          <Calendar
            locale='en'
          />
        </div>
      )}
    </div>
  )
}

export default App
