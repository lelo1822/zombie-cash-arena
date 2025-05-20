
// Dados simulados para o ranking
export const weeklyRankings = [
  { rank: 1, username: "ZombieHunter", level: 28, kdRatio: 5.8, victories: 145, totalKills: 1872, score: 24560 },
  { rank: 2, username: "SnipeZ", level: 26, kdRatio: 4.9, victories: 132, totalKills: 1543, score: 21350 },
  { rank: 3, username: "Exterminador", level: 25, kdRatio: 4.5, victories: 128, totalKills: 1498, score: 20760 },
  { rank: 4, username: "BossZ", level: 24, kdRatio: 4.2, victories: 121, totalKills: 1356, score: 19840 },
  { rank: 5, username: "ZKiller99", level: 22, kdRatio: 4.0, victories: 115, totalKills: 1245, score: 18950 },
  { rank: 6, username: "DeadEye", level: 21, kdRatio: 3.8, victories: 108, totalKills: 1189, score: 17680 },
  { rank: 7, username: "HeadShot", level: 20, kdRatio: 3.6, victories: 103, totalKills: 1102, score: 16970 },
  { rank: 8, username: "SurvivorZ", level: 19, kdRatio: 3.4, victories: 98, totalKills: 1067, score: 16250 },
  { rank: 9, username: "ZombSlayer", level: 18, kdRatio: 3.2, victories: 94, totalKills: 986, score: 15780 },
  { rank: 10, username: "LastHope", level: 17, kdRatio: 3.0, victories: 89, totalKills: 945, score: 15120 },
];

export const allTimeRankings = [
  { rank: 1, username: "LegendZ", level: 50, kdRatio: 7.2, victories: 486, totalKills: 8956, score: 124580 },
  { rank: 2, username: "ZombieHunter", level: 48, kdRatio: 6.8, victories: 452, totalKills: 8432, score: 118750 },
  { rank: 3, username: "Exterminador", level: 47, kdRatio: 6.5, victories: 438, totalKills: 8124, score: 115890 },
  { rank: 4, username: "SnipeZ", level: 45, kdRatio: 6.2, victories: 426, totalKills: 7856, score: 112340 },
  { rank: 5, username: "BossZ", level: 44, kdRatio: 6.0, victories: 412, totalKills: 7632, score: 108970 },
  { rank: 6, username: "DeadEye", level: 43, kdRatio: 5.8, victories: 398, totalKills: 7421, score: 106540 },
  { rank: 7, username: "HeadShot", level: 42, kdRatio: 5.6, victories: 387, totalKills: 7245, score: 103870 },
  { rank: 8, username: "ZKiller99", level: 41, kdRatio: 5.4, victories: 375, totalKills: 7023, score: 100240 },
  { rank: 9, username: "SurvivorZ", level: 40, kdRatio: 5.2, victories: 364, totalKills: 6874, score: 97650 },
  { rank: 10, username: "LastHope", level: 39, kdRatio: 5.0, victories: 352, totalKills: 6723, score: 95120 },
];

export const prizePools = {
  weekly: "R$ 10.000,00",
  allTime: "R$ 50.000,00"
};

export type PlayerRanking = {
  rank: number;
  username: string;
  level: number;
  kdRatio: number;
  victories: number;
  totalKills: number;
  score: number;
};

export type RankingType = "weekly" | "allTime";
