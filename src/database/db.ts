import Dexie from 'dexie';
import { IMatches, ITeams } from './interfaces';

// Define a type or interface for the Dexie object
interface MyDatabase extends Dexie {
 teams: Dexie.Table<ITeams>;
 matches: Dexie.Table<IMatches>;
}

// Define a Dexie database
export const db: MyDatabase = new Dexie('PlayerBase') as MyDatabase;

// Define an object store for the cached data
db.version(28).stores({
 teams: 'id',
 matches: 'id',
});

const options = {
 method: 'GET',
 headers: {
   'X-Auth-Token': '60aae18d99384f6e82c2e4ad7946e6f1',
 },
}

fetch('/api/competitions/2021/teams', options)
.then((response) => response.json())
.then(async (data) => {
 await db.teams.bulkPut(data.teams);
})

fetch('/api/competitions/2021/matches', options)
.then((response) => response.json())
.then(async (data) => {
 await db.matches.bulkPut(data.matches);
})
