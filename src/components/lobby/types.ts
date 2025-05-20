
export interface GameRoom {
  id: number;
  name: string;
  players: number;
  maxPlayers: number;
  stakes: string;
  status: string;
}

export interface UserStats {
  balance: number;
  matches: number;
  wins: number;
  kdRatio: number;
  level: number;
}
