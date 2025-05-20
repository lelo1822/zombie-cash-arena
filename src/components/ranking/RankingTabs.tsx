
import { Trophy, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allTimeRankings, PlayerRanking, prizePools, RankingType, weeklyRankings } from "@/data/rankingData";
import RankingTable from "./RankingTable";

interface RankingTabsProps {
  rankingType: RankingType;
  onRankingTypeChange: (value: RankingType) => void;
}

const RankingTabs = ({ rankingType, onRankingTypeChange }: RankingTabsProps) => {
  const rankingData = rankingType === "weekly" ? weeklyRankings : allTimeRankings;
  
  return (
    <div className="mb-8">
      <Tabs 
        defaultValue={rankingType} 
        onValueChange={(value) => onRankingTypeChange(value as RankingType)}
      >
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
  );
};

export default RankingTabs;
