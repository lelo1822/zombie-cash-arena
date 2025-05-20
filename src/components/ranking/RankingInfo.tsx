
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const RankingInfo = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Card className="bg-black/70 backdrop-blur-lg border-green-900/30 text-white shadow-lg shadow-green-900/10">
        <CardHeader>
          <CardTitle className="text-xl bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">Como Funciona o Ranking</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-300 border-l-4 border-green-500/50 pl-4 py-1">
            O sistema de ranking do Arquivo Z recompensa os melhores jogadores com prêmios em dinheiro real. 
            Quanto mais você joga e vence, mais pontos acumula e sobe no ranking.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-gradient-to-br from-black/80 to-red-950/30 p-5 rounded-xl border border-red-900/30"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h4 className="text-lg font-medium bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent mb-3 flex items-center">
                <span className="bg-gradient-to-br from-red-500 to-red-600 p-1.5 rounded-md mr-2 inline-flex">
                  <Trophy className="h-4 w-4 text-white" />
                </span>
                Ranking Semanal
              </h4>
              <ul className="text-gray-300 list-inside space-y-2">
                <li className="flex items-start">
                  <span className="bg-red-500/20 text-red-400 p-1 rounded-full mr-2 inline-flex items-center justify-center h-5 w-5 text-xs mt-0.5">•</span>
                  <span>Premiação de <span className="font-bold text-yellow-500">R$ 10.000,00</span> dividida entre os TOP 10</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-500/20 text-red-400 p-1 rounded-full mr-2 inline-flex items-center justify-center h-5 w-5 text-xs mt-0.5">•</span>
                  <span>Recompensas distribuídas toda segunda-feira</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-500/20 text-red-400 p-1 rounded-full mr-2 inline-flex items-center justify-center h-5 w-5 text-xs mt-0.5">•</span>
                  <span>Pontos calculados pelas partidas da semana</span>
                </li>
              </ul>
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Progresso para próximo rank</span>
                  <span className="text-red-400">68%</span>
                </div>
                <Progress value={68} className="h-2 bg-red-950/50" indicatorClassName="bg-gradient-to-r from-red-500 to-red-600" />
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-black/80 to-green-950/30 p-5 rounded-xl border border-green-900/30"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h4 className="text-lg font-medium bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-3 flex items-center">
                <span className="bg-gradient-to-br from-green-500 to-green-600 p-1.5 rounded-md mr-2 inline-flex">
                  <Award className="h-4 w-4 text-white" />
                </span>
                Ranking Geral
              </h4>
              <ul className="text-gray-300 list-inside space-y-2">
                <li className="flex items-start">
                  <span className="bg-green-500/20 text-green-400 p-1 rounded-full mr-2 inline-flex items-center justify-center h-5 w-5 text-xs mt-0.5">•</span>
                  <span>Premiação mensal de <span className="font-bold text-yellow-500">R$ 50.000,00</span></span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500/20 text-green-400 p-1 rounded-full mr-2 inline-flex items-center justify-center h-5 w-5 text-xs mt-0.5">•</span>
                  <span>Recompensas distribuídas no final de cada mês</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500/20 text-green-400 p-1 rounded-full mr-2 inline-flex items-center justify-center h-5 w-5 text-xs mt-0.5">•</span>
                  <span>Pontos acumulados por tempo indeterminado</span>
                </li>
              </ul>
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Progresso para próximo rank</span>
                  <span className="text-green-400">42%</span>
                </div>
                <Progress value={42} className="h-2 bg-green-950/50" indicatorClassName="bg-gradient-to-r from-green-500 to-green-600" />
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RankingInfo;
