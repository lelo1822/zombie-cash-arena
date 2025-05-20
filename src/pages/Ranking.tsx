
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Trophy, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Dados simulados para o ranking
const weeklyRankings = [
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

const allTimeRankings = [
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

const prizePools = {
  weekly: "R$ 10.000,00",
  allTime: "R$ 50.000,00"
};

const Ranking = () => {
  const [rankingType, setRankingType] = useState<"weekly" | "allTime">("weekly");
  
  const rankingData = rankingType === "weekly" ? weeklyRankings : allTimeRankings;

  return (
    <div className="min-h-screen bg-black bg-opacity-90 bg-[url('https://images.unsplash.com/photo-1493799582117-9a58bc1d8dea')] bg-blend-overlay bg-cover bg-fixed">
      <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <Link to="/">
              <h1 className="text-3xl font-extrabold text-red-500">ARQUIVO <span className="text-green-500">Z</span></h1>
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <Button variant="ghost" className="text-green-500">
              <Link to="/lobby">Lobby</Link>
            </Button>
            <Button variant="ghost" className="text-green-500">
              <Link to="/account">Minha Conta</Link>
            </Button>
            <Button variant="destructive">
              <Link to="/">Sair</Link>
            </Button>
          </div>
        </header>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-green-500 text-center">Ranking de Jogadores</h2>
          <p className="text-gray-400 text-center mt-2">
            Confira os melhores jogadores do Arquivo Z e a premiação em dinheiro real
          </p>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="weekly" onValueChange={(value) => setRankingType(value as "weekly" | "allTime")}>
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
              <TabsTrigger value="weekly">Ranking Semanal</TabsTrigger>
              <TabsTrigger value="allTime">Ranking Geral</TabsTrigger>
            </TabsList>
            
            <TabsContent value="weekly" className="mt-6">
              <Card className="bg-black bg-opacity-80 border-green-900 text-white">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl text-green-500">Ranking Semanal</CardTitle>
                      <CardDescription className="text-gray-400">
                        Atualizado diariamente - Premiação: {prizePools.weekly}
                      </CardDescription>
                    </div>
                    <Trophy className="h-10 w-10 text-yellow-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <RankingTable data={weeklyRankings} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="allTime" className="mt-6">
              <Card className="bg-black bg-opacity-80 border-green-900 text-white">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl text-green-500">Ranking Geral</CardTitle>
                      <CardDescription className="text-gray-400">
                        Histórico completo - Premiação: {prizePools.allTime}
                      </CardDescription>
                    </div>
                    <Award className="h-10 w-10 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <RankingTable data={allTimeRankings} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex justify-center mb-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-black bg-opacity-80 border-green-900 text-white">
            <CardHeader>
              <CardTitle className="text-xl text-green-500">Como Funciona o Ranking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                O sistema de ranking do Arquivo Z recompensa os melhores jogadores com prêmios em dinheiro real. 
                Quanto mais você joga e vence, mais pontos acumula e sobe no ranking.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 bg-opacity-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-green-500 mb-2">Ranking Semanal</h4>
                  <ul className="text-gray-300 list-disc list-inside space-y-1">
                    <li>Premiação de R$ 10.000,00 dividida entre os TOP 10</li>
                    <li>Recompensas distribuídas toda segunda-feira</li>
                    <li>Pontos calculados pelas partidas da semana</li>
                  </ul>
                </div>
                <div className="bg-gray-900 bg-opacity-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-green-500 mb-2">Ranking Geral</h4>
                  <ul className="text-gray-300 list-disc list-inside space-y-1">
                    <li>Premiação mensal de R$ 50.000,00</li>
                    <li>Recompensas distribuídas no final de cada mês</li>
                    <li>Pontos acumulados por tempo indeterminado</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

interface RankingTableProps {
  data: {
    rank: number;
    username: string;
    level: number;
    kdRatio: number;
    victories: number;
    totalKills: number;
    score: number;
  }[];
}

const RankingTable = ({ data }: RankingTableProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-green-900">
            <TableHead className="text-green-500 w-16">Posição</TableHead>
            <TableHead className="text-green-500">Jogador</TableHead>
            <TableHead className="text-green-500 text-center">Nível</TableHead>
            <TableHead className="text-green-500 text-center">K/D</TableHead>
            <TableHead className="text-green-500 text-center hidden md:table-cell">Vitórias</TableHead>
            <TableHead className="text-green-500 text-center hidden md:table-cell">Eliminações</TableHead>
            <TableHead className="text-green-500 text-center">Pontuação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((player) => (
            <TableRow key={player.rank} className="border-green-900/30 hover:bg-green-900/10">
              <TableCell className="font-medium">
                {player.rank <= 3 ? (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full">
                    {player.rank === 1 ? (
                      <div className="text-yellow-500 text-xl font-bold">
                        <Trophy className="h-6 w-6" />
                      </div>
                    ) : player.rank === 2 ? (
                      <div className="text-gray-300 text-xl font-bold">
                        2º
                      </div>
                    ) : (
                      <div className="text-amber-700 text-xl font-bold">
                        3º
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center">{player.rank}º</div>
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="font-bold text-white">{player.username}</div>
                  {player.rank === 1 && <Badge className="bg-yellow-500 text-black">Líder</Badge>}
                </div>
              </TableCell>
              <TableCell className="text-center">{player.level}</TableCell>
              <TableCell className="text-center">{player.kdRatio.toFixed(1)}</TableCell>
              <TableCell className="text-center hidden md:table-cell">{player.victories}</TableCell>
              <TableCell className="text-center hidden md:table-cell">{player.totalKills}</TableCell>
              <TableCell className="text-center font-bold">{player.score.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Ranking;
