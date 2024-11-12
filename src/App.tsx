import { useState } from "react"

export const App = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col gap-5">
        <div>
          <p className="mb-2">Please choose your client status</p>
          <div className="flex gap-7">
            <button
              className={isClicked ? 'btn btn-neutral' : 'btn btn-outline'}
              onClick={() => setIsClicked(!isClicked)}
            >I am a new client</button>
            <button className="btn btn-outline">I am a returning client</button>
          </div>
        </div>

        <div>
          <p className="mb-2">Please choose your pet species</p>
          <div className="flex gap-7">
            <button className="btn btn-outline">Dog</button>
            <button className="btn btn-outline">Cat</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
