import { useState, useEffect } from "react";
import { db } from "../database/db";
import { IMatches } from "../database/interfaces";

interface IMatchesList {
  teamName: string;
}

export const MatchesList = ({ teamName }: IMatchesList) => {
  const [matches, setMatches] = useState<Array<IMatches>>([]);

  useEffect(() => {
    db.matches.toArray().then((data: Array<IMatches>) => {
      setMatches(data);
    });
  }, []);

  return (
    <div className="">
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
            {matches.filter(match => match.awayTeam.name === teamName)
              .map((match: any) => // eslint-disable-line @typescript-eslint/no-explicit-any
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
