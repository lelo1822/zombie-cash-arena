
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Gamepad, Users, Clock, Skull } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Game = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [gameData, setGameData] = useState({
    roomName: "Arena Mortal",
    players: 8,
    maxPlayers: 10,
    timeRemaining: "12:45",
    kills: 0,
    aliveStatus: true,
  });

  useEffect(() => {
    // Simulate game loading
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setLoading(false);
          toast.success("Jogo carregado! Preparando para iniciar...");
          return 100;
        }
        return prev + 10;
      });
    }, 400);

    return () => clearInterval(timer);
  }, []);

  const handleExitGame = () => {
    if (window.confirm("Tem certeza que deseja sair da partida? Você pode perder seu progresso.")) {
      toast.info("Saindo da partida...");
      navigate("/lobby");
    }
  };

  // This would normally be where you'd integrate with your game engine
  // For demonstration, we'll just show a placeholder

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen p-4">
          <h2 className="text-2xl font-bold text-green-500 mb-8">Carregando Arquivo Z</h2>
          <div className="w-full max-w-md">
            <Progress value={progress} className="h-2 mb-2" />
            <p className="text-sm text-gray-400">Carregando recursos do jogo... {progress}%</p>
          </div>
          <div className="mt-16 text-gray-500 max-w-md text-center">
            <p className="mb-2">Dica: Zumbis são mais lentos, mas atacam em grupos. Jogadores são mais rápidos, mas estão sozinhos.</p>
            <p>Cada eliminação de jogador vale mais pontos que eliminar zumbis.</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen">
          {/* This would be replaced by your actual game canvas/container */}
          <div className="flex-grow bg-gray-900 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Gamepad className="h-24 w-24 text-green-500 mx-auto mb-4 opacity-50" />
                <p className="text-2xl text-white">Aqui é onde seu jogo será renderizado</p>
                <p className="text-gray-400 mt-2">Integre sua engine de jogo neste componente</p>
              </div>
            </div>
            
            {/* Game HUD overlay */}
            <div className="absolute top-0 left-0 right-0 p-4">
              <div className="flex justify-between items-center">
                <div className="bg-black bg-opacity-70 text-white p-2 rounded-md">
                  <h3 className="font-bold text-green-500">{gameData.roomName}</h3>
                  <div className="flex gap-4 text-sm mt-1">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {gameData.players}/{gameData.maxPlayers}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {gameData.timeRemaining}
                    </div>
                    <div className="flex items-center">
                      <Skull className="h-4 w-4 mr-1" />
                      {gameData.kills}
                    </div>
                  </div>
                </div>
                <div>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={handleExitGame}
                    className="bg-opacity-80"
                  >
                    Sair do Jogo
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Player status */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="bg-black bg-opacity-70 p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white">JogadorDestaque</p>
                    <p className={gameData.aliveStatus ? "text-green-500" : "text-red-500"}>
                      {gameData.aliveStatus ? "Vivo" : "Eliminado"}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <div className="h-2 w-20 bg-red-900 rounded-full mr-2">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <span className="text-red-400">70%</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="h-2 w-20 bg-blue-900 rounded-full mr-2">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-blue-400">45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
