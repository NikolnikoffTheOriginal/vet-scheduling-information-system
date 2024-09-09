export interface IMatches {
  area: {
    code: string,
    flag: string,
    id: number,
    name: string,
  },
  awayTeam: {
    crest: string,
    id: number,
    name: string,
    shortName: string,
    tla: string,
  },
  competition: {
    code: string,
    emblem: string,
    id: number,
    name: string,
    type: string,
  },
  group: null,
  homeTeam: {
    crest: string,
    id: number,
    name: string,
    shortName: string,
    tla: string,
  },
  id: number,
  lastUpdated: string,
  matchday: number,
  odds: {
    msg: string,
  },
  referees: [
    {
      id: number,
      name: string,
      nationality: string,
      type: string,
    }
  ],
  score: {
    duration: string,
    fullTime: {
      awayTeam: number,
      homeTeam: number,
    },
    halfTime: {
      awayTeam: number,
      homeTeam: number,
    },
    winner: string,
  },
  season: {
    currentMatchday: number,
    endDate: string,
    id: number,
    startDate: string,
    winner: null,
  },
  stage: string,
  status: string,
  utcDate: string,
}

export interface ISquadMember {
  dateOfBirth: string;
  id: number;
  name: string;
  nationality: string;
  position: string;
}

export interface ITeams {
  address: string,
  area: {
    code: string,
    flag: string,
    id: number,
    name: string,
  },
  clubColors: string,
  coach: {
    contract: {
      start: string,
      until: string,
    },
    dateOfBirth: string,
    firstName: string,
    lastName: string,
    name: string,
    nationality: string,
  },
  crest: string,
  founded: number,
  id: number,
  lastUpdated: string,
  name: string,
  runningCompetitions: [{
      code: string,
      emblem: null,
      id: number,
      name: string,
      type: string,
  }],
  shortName: string,
  squad: Array<ISquadMember>,
  staff: [],
  tla: string,
  venue: string,
  website: string,
}