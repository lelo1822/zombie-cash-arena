
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

interface UserStats {
  balance: number;
  matches: number;
  wins: number;
  kdRatio: number;
  level: number;
}

interface UserProfileCardProps {
  userStats: UserStats;
}

const UserProfileCard = ({ userStats }: UserProfileCardProps) => {
  return (
    <Card className="bg-black bg-opacity-80 border-green-900 text-white mb-6">
      <CardHeader>
        <CardTitle className="text-xl text-green-500">Seu Perfil</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center text-2xl font-bold text-white mb-2 border-2 border-green-500">
            JD
          </div>
          <h3 className="text-lg font-bold text-white">JogadorDestaque</h3>
          <p className="text-gray-400 text-sm">Nível {userStats.level}</p>

          <Separator className="my-4 bg-green-900/30" />
          
          <div className="w-full space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Saldo:</span>
              <span className="text-green-500 font-bold">R$ {userStats.balance.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Partidas:</span>
              <span className="text-white">{userStats.matches}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Vitórias:</span>
              <span className="text-white">{userStats.wins}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">K/D Ratio:</span>
              <span className="text-white">{userStats.kdRatio.toFixed(1)}</span>
            </div>
          </div>

          <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
            <Link to="/account" className="flex items-center gap-2">
              Gerenciar Conta <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
