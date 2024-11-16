import { useState } from "react"
import { CalendarDate } from "./CalendarDate";
import { ClientInfo } from "./ClientInfo";
import { PersonalInfo } from "./PersonalInfo";
import { SubmitWindow } from "./SubmitWindow";
import { getDatabase, ref, set } from "firebase/database";
import { uid } from "uid";
import { CLINICIANS, IDatabase, IDateTime } from "../../constants";

enum Page {
  'client',
  'date',
  'info',
  'submit'
}

const writeToDataBase = ({ clientInfo, approved, clinician, date, petInfo, time, uuid }: IDatabase) => {
  const db = getDatabase();
  const reference = ref(db, 'appointments/' + uuid);

  set(reference, {
    clientInfo,
    date,
    time,
    petInfo,
    clinician,
    approved,
    uuid,
  });
}

export const Schedule = () => {
  const uuid = uid();
  const [page, setPage] = useState(Page.client);
  // clientInfo
  const [isClicked, setIsClicked] = useState<'new' | 'existing' | null>(null);
  const [petSpecies, setPetSpecies] = useState<'dog' | 'cat' | null>(null);
  const [clinician, setClinician] = useState('No preference');
  // calendarDate
  const [dateTime, setDateTime] = useState<IDateTime>({ date: null, time: null });
  // personalInfo
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    petName: '',
    phoneNumber: '',
    message: '',
  });

  if (clinician === 'No preference') {
    const randomClinician = CLINICIANS[Math.floor(Math.random() * CLINICIANS.length)];
    setClinician(randomClinician);
  }

  return (
    <div className="flex justify-center items-center h-[100vh]">
      {page === Page.client && (
        <ClientInfo
          onNextClick={() => setPage(Page.date)}
          petSpecies={petSpecies}
          setIsClicked={setIsClicked}
          setPetSpecies={setPetSpecies}
          isClicked={isClicked}
          setClinician={setClinician}
        />
      )}

      {page === Page.date && (
        <CalendarDate
          onBackClick={() => setPage(Page.client)}
          onNextClick={() => setPage(Page.info)}
          dateTime={dateTime}
          setDateTime={setDateTime}
        />
      )}

      {page === Page.info && (
        <PersonalInfo
          onFinalSubmit={() => {
            setPage(Page.submit);
            writeToDataBase({
              approved: false,
              clientInfo: {
                email: formData.email,
                name: formData.name,
                message: formData.message,
                phone: formData.phoneNumber,
                status: isClicked!,
              },
              clinician,
              date: dateTime.date!,
              petInfo: {
                name: formData.petName,
                species: petSpecies!,
              },
              time: dateTime.time!,
              uuid,
            });
          }}
          onBackClick={() => setPage(Page.date)}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {page === Page.submit && <SubmitWindow />}
    </div>
  )
}
