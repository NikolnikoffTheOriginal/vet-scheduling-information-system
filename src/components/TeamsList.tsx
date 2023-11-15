import { useState, useEffect } from "react";
import { db } from "../database/db";

export const TeamsList = () => {
  const [teams, setTeams] = useState<any[]>([]); // eslint-disable-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    db.teams.toArray().then((data: any[]) => { // eslint-disable-line @typescript-eslint/no-explicit-any
      setTeams(data);
    });
  }, []);

  return (
    <div className="">
      {teams.map((team: any) => // eslint-disable-line @typescript-eslint/no-explicit-any
        <div className="team" key={team.id}>
          <h2>{team.name}</h2>
          {/* Include other team data as needed */}
        </div>
      )}
    </div>
  );
}
