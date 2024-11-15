import { useState } from "react"
import { CalendarDate } from "./components/CalendarDate";
import { ClientInfo } from "./components/ClientInfo";
import { PersonalInfo } from "./components/PersonalInfo";
import { SubmitWindow } from "./components/SubmitWindow";

enum Page {
  'client',
  'date',
  'info',
  'submit'
}

export const App = () => {
  const [page, setPage] = useState(Page.info);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      {page === Page.client && (
        <ClientInfo onNextClick={() => setPage(Page.date)} />
      )}

      {page === Page.date && (
        <CalendarDate onBackClick={() => setPage(Page.client)} onNextClick={() => setPage(Page.info)} />
      )}

      {page === Page.info && (
        <PersonalInfo onFinalSubmit={() => setPage(Page.submit)} onBackClick={() => setPage(Page.date)}/>
      )}

      {page === Page.submit && <SubmitWindow />}
    </div>
  )
}

export default App
