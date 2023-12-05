export const PlayersList = ({ players }: any) => {

   return (
      <div className="overflow-x-auto max-h-[1000px] mr-12">
         <table className="table">
            {/* head */}
            <thead>
               <tr>
                  <th></th>
                  <th>Player</th>
                  <th>Position</th>
               </tr>
            </thead>
            <tbody>
               {/* rows */}
               {players.map((player: any, index: number) => // eslint-disable-line @typescript-eslint/no-explicit-any
                  <tr key={player.id} className="hover">
                     <th>{index + 1}</th>
                     <td>{player.name}</td>
                     <td>{player.position}</td>
                        {/* Include other team data as needed */ }
                     </tr>
                  )}
         </tbody>
      </table>
         </div >
   );
}
