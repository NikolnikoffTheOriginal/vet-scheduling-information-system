import { useState } from "react"
import { CalendarDate } from "./CalendarDate";
import { ClientInfo } from "./ClientInfo";
import { PersonalInfo } from "./PersonalInfo";
import { SubmitWindow } from "./SubmitWindow";

enum Page {
  'client',
  'date',
  'info',
  'submit'
}

export const Schedule = () => {
  const [page, setPage] = useState(Page.client);

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
