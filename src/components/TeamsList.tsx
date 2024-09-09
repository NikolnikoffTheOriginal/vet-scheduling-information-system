import { useState, useEffect } from "react";
import { db } from "../database/db";
import { PlayersList } from "./PlayersList";
import { MatchesList } from "./MatchesList";
import { PlayerSelections } from "./PlayerSelections";
import { ISquadMember, ITeams } from "../database/interfaces";

export const TeamsList = () => {
  const [teams, setTeams] = useState<Array<ITeams>>([]);
  const [selectedTeamPlayers, setSelectedTeamPlayers] = useState<Array<ISquadMember>>([]); 
  const [selectedTeamMatches, setSelectedTeamMatches] = useState<string>(); 

  useEffect(() => {
    db.teams.toArray().then((data: Array<ITeams>) => {
      setTeams(data);
    });
  }, []);

  const handleTeamClick = ({ squad, name }: ITeams) => {
    setSelectedTeamPlayers(squad);
    setSelectedTeamMatches(name);
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
            {teams.map((team, index) =>
              <tr key={team.id} className="hover">
                <th className="pr-[2px]">{index + 1}</th>
                <td className="cursor-pointer flex" onClick={() => {
                  handleTeamClick(team);
                }}> <img src={team.crest} className="w-10 pr-3" />{team.name}</td>
                {/* Include other team data as needed */}
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {selectedTeamPlayers && <PlayersList players={selectedTeamPlayers} />}
      {selectedTeamMatches && <MatchesList teamName={selectedTeamMatches} />}
      <PlayerSelections squad={selectedTeamPlayers} />
    </div>
  );
}
