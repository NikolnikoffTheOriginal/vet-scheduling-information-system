import { useState } from "react"
import { CalendarDate } from "./components/CalendarDate";
import { ClientInfo } from "./components/ClientInfo";

enum Page {
  'client',
  'date',
  'info',
}

export const App = () => {
  const [page, setPage] = useState(Page.client);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      {page === Page.client && (
        <ClientInfo onNextClick={() => setPage(Page.date)}/>
      )}

      {page === Page.date && (
        <CalendarDate onBackClick={() => setPage(Page.client)} onNextClick={() => setPage(Page.info)}/>
      )}
    </div>
  )
}

export default App
