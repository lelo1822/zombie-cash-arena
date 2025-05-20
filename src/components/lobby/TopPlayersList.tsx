
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const TopPlayersList = () => {
  return (
    <Card className="bg-black bg-opacity-80 border-green-900 text-white">
      <CardHeader>
        <CardTitle className="text-xl text-green-500">Top Jogadores</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {[
            { name: "ZombiHunter", level: 18, kd: 4.2 },
            { name: "Exterminador", level: 15, kd: 3.8 },
            { name: "SnipeZ", level: 16, kd: 3.5 },
            { name: "BossZ", level: 14, kd: 3.0 },
            { name: "ZKiller99", level: 12, kd: 2.9 }
          ].map((player, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className={i === 0 ? "text-yellow-500" : "text-gray-500"}>
                  {i + 1}.
                </span>
                <span className="text-white">{player.name}</span>
              </div>
              <span className="text-sm text-gray-400">
                Nv.{player.level} • K/D {player.kd}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full text-green-500 hover:text-green-400">
          <Link to="/ranking">Ver Ranking Completo</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TopPlayersList;
