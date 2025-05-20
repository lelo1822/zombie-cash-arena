
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
import { motion } from "framer-motion";

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
          {data.map((player, index) => (
            <motion.tr
              key={player.rank}
              className="border-green-900/30 hover:bg-green-900/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ backgroundColor: "rgba(34, 197, 94, 0.15)" }}
            >
              <TableCell className="font-medium">
                {player.rank <= 3 ? (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full">
                    {player.rank === 1 ? (
                      <motion.div 
                        className="text-yellow-500 text-xl font-bold"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      >
                        <Trophy className="h-6 w-6" />
                      </motion.div>
                    ) : player.rank === 2 ? (
                      <motion.div 
                        className="text-gray-300 text-xl font-bold"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                      >
                        2º
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="text-amber-700 text-xl font-bold"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      >
                        3º
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="text-center">{player.rank}º</div>
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="font-bold text-white">{player.username}</div>
                  {player.rank === 1 && (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Badge className="bg-yellow-500 text-black">Líder</Badge>
                    </motion.div>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-center">{player.level}</TableCell>
              <TableCell className="text-center">{player.kdRatio.toFixed(1)}</TableCell>
              <TableCell className="text-center hidden md:table-cell">{player.victories}</TableCell>
              <TableCell className="text-center hidden md:table-cell">{player.totalKills}</TableCell>
              <motion.td 
                className="text-center font-bold"
                whileHover={{ scale: 1.05, color: "#22c55e" }}
              >
                {player.score.toLocaleString()}
              </motion.td>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RankingTable;
