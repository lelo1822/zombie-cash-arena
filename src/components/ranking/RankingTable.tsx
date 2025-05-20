
import { Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { PlayerRanking } from "@/data/rankingData";

interface RankingTableProps {
  data: PlayerRanking[];
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

export default RankingTable;
