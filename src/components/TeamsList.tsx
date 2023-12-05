import { useState, useEffect } from "react";
import { db } from "../database/db";
import { PlayersList } from "./PlayersList";
import { MatchesList } from "./MatchesList";
import { PlayerSelections } from "./PlayerSelections";

export const TeamsList = () => {
  const [teams, setTeams] = useState<any[]>([]); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [selectedTeamPlayers, setSelectedTeamPlayers] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [selectedTeamMatches, setSelectedTeamMatches] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    db.teams.toArray().then((data: any[]) => { // eslint-disable-line @typescript-eslint/no-explicit-any
      setTeams(data);
    });
  }, []);

  const handleTeamClick = (players: any, teamName: any) => {
    setSelectedTeamPlayers(players);
    setSelectedTeamMatches(teamName);
  };

  return (
    <div className="max-h-[1000px] flex justify-around">
      <div className="overflow-x-auto mr-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {teams.map((team: any, index) => // eslint-disable-line @typescript-eslint/no-explicit-any
              <tr key={team.id} className="hover">
                <th className="pr-[2px]">{index + 1}</th>
                <td className="cursor-pointer flex" onClick={() => {
                  handleTeamClick(team.squad, team.name)
                }}> <img src={team.crest} className="w-10 pr-3" />{team.name}</td>
                {/* Include other team data as needed */}
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {selectedTeamPlayers && <PlayersList players={selectedTeamPlayers} />}
      {selectedTeamMatches && <MatchesList teamName={selectedTeamMatches} />}
      <PlayerSelections players={selectedTeamPlayers} />
    </div>
  );
}
