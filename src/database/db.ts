import Dexie from 'dexie';

// Define a type or interface for the Dexie object
interface MyDatabase extends Dexie {
 teams: Dexie.Table<object, string>;
 matches: Dexie.Table<object, string>;
 scorers: Dexie.Table<object, string>;
}

// Define a Dexie database
export const db: MyDatabase = new Dexie('MyDatabase') as MyDatabase;

// Define an object store for the cached data
db.version(23).stores({
 teams: 'id',
 matches: 'id',
 scorers: 'id',
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

fetch('/api/competitions/2021/scorers', options)
.then((response) => response.json())
.then(async (data) => {
 // Add 'id' property to each scorer object
 const scorersWithId = data.scorers.map((scorer: any, index: any) => ({...scorer, id: index}));
 // Use Table.put() to overwrite the existing data
 await Promise.all(scorersWithId.map((scorer: object) => db.scorers.put(scorer)));
})
