
import { Trophy, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allTimeRankings, PlayerRanking, prizePools, RankingType, weeklyRankings } from "@/data/rankingData";
import RankingTable from "./RankingTable";
import { motion, AnimatePresence } from "framer-motion";

interface RankingTabsProps {
  rankingType: RankingType;
  onRankingTypeChange: (value: RankingType) => void;
}

const RankingTabs = ({ rankingType, onRankingTypeChange }: RankingTabsProps) => {
  const rankingData = rankingType === "weekly" ? weeklyRankings : allTimeRankings;
  
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Tabs 
        defaultValue={rankingType} 
        onValueChange={(value) => onRankingTypeChange(value as RankingType)}
      >
        <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto bg-black/50 border border-green-900/30 rounded-lg p-1 backdrop-blur-sm">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <TabsTrigger 
              value="weekly" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-red-600 data-[state=active]:text-white"
            >
              Ranking Semanal
            </TabsTrigger>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <TabsTrigger 
              value="allTime"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-green-600 data-[state=active]:text-white"
            >
              Ranking Geral
            </TabsTrigger>
          </motion.div>
        </TabsList>
        
        <AnimatePresence mode="wait">
          <TabsContent value="weekly" className="mt-6">
            <motion.div
              key="weekly"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-black/70 border-red-900/50 text-white backdrop-blur-lg shadow-lg shadow-red-900/20">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent font-bold">Ranking Semanal</CardTitle>
                      <CardDescription className="text-gray-400">
                        Atualizado diariamente - Premiação: <span className="font-bold text-yellow-500">{prizePools.weekly}</span>
                      </CardDescription>
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 10, 0] }}
                      transition={{ duration: 1, delay: 0.5, repeat: 0 }}
                      className="bg-gradient-to-br from-yellow-400 to-amber-600 p-2.5 rounded-full"
                    >
                      <Trophy className="h-8 w-8 text-black" />
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <RankingTable data={weeklyRankings} />
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="allTime" className="mt-6">
            <motion.div
              key="allTime"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-black/70 border-green-900/50 text-white backdrop-blur-lg shadow-lg shadow-green-900/20">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent font-bold">Ranking Geral</CardTitle>
                      <CardDescription className="text-gray-400">
                        Histórico completo - Premiação: <span className="font-bold text-yellow-500">{prizePools.allTime}</span>
                      </CardDescription>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, delay: 0.5, repeat: 0 }}
                      className="bg-gradient-to-br from-green-400 to-green-600 p-2.5 rounded-full"
                    >
                      <Award className="h-8 w-8 text-black" />
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <RankingTable data={allTimeRankings} />
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  );
};

export default RankingTabs;
