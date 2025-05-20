
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
        <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <TabsTrigger value="weekly">Ranking Semanal</TabsTrigger>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <TabsTrigger value="allTime">Ranking Geral</TabsTrigger>
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
              <Card className="bg-black bg-opacity-80 border-green-900 text-white">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl text-green-500">Ranking Semanal</CardTitle>
                      <CardDescription className="text-gray-400">
                        Atualizado diariamente - Premiação: {prizePools.weekly}
                      </CardDescription>
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 10, 0] }}
                      transition={{ duration: 1, delay: 0.5, repeat: 0 }}
                    >
                      <Trophy className="h-10 w-10 text-yellow-500" />
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
              <Card className="bg-black bg-opacity-80 border-green-900 text-white">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl text-green-500">Ranking Geral</CardTitle>
                      <CardDescription className="text-gray-400">
                        Histórico completo - Premiação: {prizePools.allTime}
                      </CardDescription>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, delay: 0.5, repeat: 0 }}
                    >
                      <Award className="h-10 w-10 text-green-500" />
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
