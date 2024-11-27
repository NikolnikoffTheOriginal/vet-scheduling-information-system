import { useEffect, useState } from "react"
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

const writeToDataBase = ({ clientInfo, approved, clinician, date, petInfo, time, uuid, doctorNote}: IDatabase) => {
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
    doctorNote,
  });
}

export const Schedule = () => {
  const uuid = uid();
  const [page, setPage] = useState(Page.client);
  // clientInfo
  const [isClicked, setIsClicked] = useState<'new' | 'existing' | null>(null);
  const [petSpecies, setPetSpecies] = useState<'dog' | 'cat' | string | null>(null);
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
  const [bgImage, setBgImage] = useState('');

  if (clinician === 'No preference') {
    const randomClinician = CLINICIANS[Math.floor(Math.random() * CLINICIANS.length)];
    setClinician(randomClinician);
  }


  useEffect(() => {
    const images = [
      'src/backgrounds/bg1.jpg',
      'src/backgrounds/bg2.jpg',
      'src/backgrounds/bg3.jpg',
      'src/backgrounds/bg4.jpg',
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    setBgImage(images[randomIndex]);
  }, []);

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${bgImage})` }}>

      <div className="w-full bg-blue-600 text-white text-center md:text-left py-4 px-6">
        <h1 className="text-3xl font-semibold">Patient Scheduling Information System</h1>
      </div>

      <div className="w-full flex justify-center items-center min-h-[90vH]">

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
                doctorNote: '',
              });
            }}
            onBackClick={() => setPage(Page.date)}
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {page === Page.submit && <SubmitWindow />}
      </div>
      <footer className="text-white text-center py-4 mt-auto">&copy; Mikael Nikolnikov, ISCS, Diploma Work, 2024</footer>

    </div>
  )
}
