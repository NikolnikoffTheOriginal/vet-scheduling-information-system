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
    <div className="w-2/12">
      <div className="overflow-x-auto max-h-[1000px]">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Standings</th>
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {teams.map((team: any, index) => // eslint-disable-line @typescript-eslint/no-explicit-any
              <tr key={team.id} className="hover">
                <th>{index + 1}</th>
                <td>{team.name}</td>
                {/* Include other team data as needed */}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
