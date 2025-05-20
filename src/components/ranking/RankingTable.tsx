
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
    <div className="overflow-x-auto rounded-lg border border-gray-800/50">
      <Table>
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-green-900/30">
            <TableHead className="text-green-400 w-16 font-semibold">Posição</TableHead>
            <TableHead className="text-green-400 font-semibold">Jogador</TableHead>
            <TableHead className="text-green-400 text-center font-semibold">Nível</TableHead>
            <TableHead className="text-green-400 text-center font-semibold">K/D</TableHead>
            <TableHead className="text-green-400 text-center hidden md:table-cell font-semibold">Vitórias</TableHead>
            <TableHead className="text-green-400 text-center hidden md:table-cell font-semibold">Eliminações</TableHead>
            <TableHead className="text-green-400 text-center font-semibold">Pontuação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((player, index) => (
            <motion.tr
              key={player.rank}
              className="border-green-900/30 backdrop-blur-sm"
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
                        className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full p-1"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      >
                        <Trophy className="h-6 w-6 text-black" />
                      </motion.div>
                    ) : player.rank === 2 ? (
                      <motion.div 
                        className="text-gray-300 text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                      >
                        2º
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="text-amber-700 text-xl font-bold bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      >
                        3º
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-gray-400">{player.rank}º</div>
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
                      <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black">Líder</Badge>
                    </motion.div>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <span className="inline-flex items-center justify-center bg-green-900/30 px-2 py-1 rounded-md font-semibold text-green-400">
                  {player.level}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <span className={`inline-flex items-center justify-center ${player.kdRatio >= 2.0 ? 'bg-red-900/30 text-red-400' : 'bg-blue-900/30 text-blue-400'} px-2 py-1 rounded-md font-semibold`}>
                  {player.kdRatio.toFixed(1)}
                </span>
              </TableCell>
              <TableCell className="text-center hidden md:table-cell">
                <span className="inline-flex items-center justify-center bg-purple-900/30 px-2 py-1 rounded-md font-semibold text-purple-400">
                  {player.victories}
                </span>
              </TableCell>
              <TableCell className="text-center hidden md:table-cell">
                <span className="inline-flex items-center justify-center bg-orange-900/30 px-2 py-1 rounded-md font-semibold text-orange-400">
                  {player.totalKills}
                </span>
              </TableCell>
              <motion.td 
                className="text-center font-bold"
                whileHover={{ scale: 1.05, color: "#22c55e" }}
              >
                <span className="inline-flex items-center justify-center bg-gradient-to-r from-green-900/30 to-emerald-900/30 px-3 py-1 rounded-md font-bold text-yellow-500">
                  {player.score.toLocaleString()}
                </span>
              </motion.td>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RankingTable;
