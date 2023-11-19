import { useState, useEffect } from "react";
import { db } from "../database/db";

export const MatchesList = () => {
  const [matches, setMatches] = useState<any[]>([]); // eslint-disable-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    db.matches.toArray().then((data: any[]) => { // eslint-disable-line @typescript-eslint/no-explicit-any
        setMatches(data);
    });
  }, []);

  return (
    <div className="w-2/12">
      <div className="overflow-x-auto max-h-[1000px]">
        <table className="table table-pin-rows">
          {/* head */}
          <thead>
            <tr>
              <th>Matches</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {matches.filter(match => match.status === "FINISHED") && matches.map((match: any) => // eslint-disable-line @typescript-eslint/no-explicit-any
              <tr key={match.id} className="hover">
                <td>{match.awayTeam.name} vs {match.homeTeam.name}</td>
                {/* Include other team data as needed */}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
