
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Gamepad, Users, Clock, Skull, Shield, Zap } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Game = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameData, setGameData] = useState({
    roomName: "Arena Mortal",
    players: 8,
    maxPlayers: 10,
    timeRemaining: "12:45",
    kills: 0,
    aliveStatus: true,
    health: 100,
    energy: 100,
    score: 0,
  });

  // Simulated game controls
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [enemies, setEnemies] = useState([
    { id: 1, x: 20, y: 30, type: 'zombie', health: 100 },
    { id: 2, x: 70, y: 20, type: 'player', health: 100, name: 'Adversário1' },
    { id: 3, x: 80, y: 70, type: 'zombie', health: 100 },
  ]);

  useEffect(() => {
    // Simulate game loading
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setLoading(false);
          toast.success("Jogo carregado! Preparando para iniciar...");
          
          // After a brief delay, start the game
          setTimeout(() => {
            setGameStarted(true);
            toast.success("Partida iniciada! Boa sorte!");
          }, 1500);
          
          return 100;
        }
        return prev + 10;
      });
    }, 400);

    return () => clearInterval(timer);
  }, []);

  // Simulated game loop
  useEffect(() => {
    if (!gameStarted) return;

    const gameLoop = setInterval(() => {
      // Update time remaining
      setGameData(prev => {
        const [minutes, seconds] = prev.timeRemaining.split(':').map(Number);
        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        
        if (newMinutes < 0) {
          clearInterval(gameLoop);
          toast.info("Fim da partida!");
          return prev;
        }
        
        // Randomly decrease health/energy to simulate combat
        const healthDecrease = Math.random() > 0.8 ? Math.floor(Math.random() * 5) : 0;
        const energyDecrease = Math.random() > 0.6 ? Math.floor(Math.random() * 3) : 0;
        const healthIncrease = Math.random() > 0.9 ? Math.floor(Math.random() * 3) : 0;
        const energyIncrease = Math.random() > 0.7 ? Math.floor(Math.random() * 2) : 0;
        
        const newHealth = Math.max(0, Math.min(100, prev.health - healthDecrease + healthIncrease));
        const newEnergy = Math.max(0, Math.min(100, prev.energy - energyDecrease + energyIncrease));
        
        // Simulate occasional kills
        const newKills = Math.random() > 0.95 ? prev.kills + 1 : prev.kills;
        const newScore = prev.score + (newKills > prev.kills ? 100 : Math.floor(Math.random() * 5));
        
        // Check if player is eliminated
        const aliveStatus = newHealth > 0;
        if (!aliveStatus && prev.aliveStatus) {
          toast.error("Você foi eliminado!");
        }
        
        return {
          ...prev,
          timeRemaining: `${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`,
          health: newHealth,
          energy: newEnergy,
          kills: newKills,
          score: newScore,
          aliveStatus
        };
      });
      
      // Randomly move enemies
      setEnemies(prev => prev.map(enemy => ({
        ...enemy,
        x: Math.max(0, Math.min(100, enemy.x + (Math.random() * 10 - 5))),
        y: Math.max(0, Math.min(100, enemy.y + (Math.random() * 10 - 5))),
        health: Math.random() > 0.9 ? Math.max(0, enemy.health - Math.floor(Math.random() * 20)) : enemy.health
      })));
      
    }, 1000);
    
    return () => clearInterval(gameLoop);
  }, [gameStarted]);

  const handleExitGame = () => {
    if (window.confirm("Tem certeza que deseja sair da partida? Você pode perder seu progresso.")) {
      toast.info("Saindo da partida...");
      navigate("/lobby");
    }
  };

  const handleAttack = () => {
    if (!gameStarted || !gameData.aliveStatus) return;
    
    // Find the closest enemy
    const target = enemies.find(enemy => enemy.health > 0);
    if (!target) {
      toast.info("Nenhum inimigo por perto!");
      return;
    }
    
    // Simulate attack
    setEnemies(prev => prev.map(enemy => 
      enemy.id === target.id 
        ? { ...enemy, health: Math.max(0, enemy.health - Math.floor(20 + Math.random() * 30)) } 
        : enemy
    ));
    
    // Update energy
    setGameData(prev => ({
      ...prev,
      energy: Math.max(0, prev.energy - 10)
    }));
    
    if (target.health <= 30) {
      toast.success(`${target.type === 'zombie' ? 'Zumbi' : target.name} eliminado!`);
      setGameData(prev => ({
        ...prev,
        kills: prev.kills + 1,
        score: prev.score + (target.type === 'player' ? 100 : 50)
      }));
    }
  };

  const handleMove = (direction: 'up' | 'down' | 'left' | 'right') => {
    if (!gameStarted || !gameData.aliveStatus) return;
    
    const moveAmount = 5;
    setPosition(prev => {
      let newX = prev.x;
      let newY = prev.y;
      
      switch (direction) {
        case 'up':
          newY = Math.max(0, prev.y - moveAmount);
          break;
        case 'down':
          newY = Math.min(100, prev.y + moveAmount);
          break;
        case 'left':
          newX = Math.max(0, prev.x - moveAmount);
          break;
        case 'right':
          newX = Math.min(100, prev.x + moveAmount);
          break;
      }
      
      // Consume energy on movement
      setGameData(prev => ({
        ...prev,
        energy: Math.max(0, prev.energy - 2)
      }));
      
      return { x: newX, y: newY };
    });
  };

  // Regenerate energy over time
  useEffect(() => {
    if (!gameStarted) return;
    
    const energyRegen = setInterval(() => {
      if (gameData.aliveStatus) {
        setGameData(prev => ({
          ...prev,
          energy: Math.min(100, prev.energy + 1)
        }));
      }
    }, 1000);
    
    return () => clearInterval(energyRegen);
  }, [gameStarted, gameData.aliveStatus]);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen p-4">
          <h2 className="text-2xl font-bold text-green-500 mb-8">Carregando Arquivo Z</h2>
          <div className="w-full max-w-md">
            <Progress 
              value={progress} 
              className="h-2 mb-2" 
              indicatorClassName="bg-gradient-to-r from-green-500 to-emerald-400"
            />
            <p className="text-sm text-gray-400">Carregando recursos do jogo... {progress}%</p>
          </div>
          <div className="mt-16 text-gray-500 max-w-md text-center">
            <p className="mb-2">Dica: Zumbis são mais lentos, mas atacam em grupos. Jogadores são mais rápidos, mas estão sozinhos.</p>
            <p>Cada eliminação de jogador vale mais pontos que eliminar zumbis.</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen">
          {/* Game area */}
          <div className="flex-grow bg-gray-900 relative overflow-hidden">
            {/* Game world visualization */}
            <div className="absolute inset-0">
              {/* Background grid for reference */}
              <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-10">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} className="border border-green-500/30"></div>
                ))}
              </div>
              
              {/* Enemies */}
              {enemies.map(enemy => (
                enemy.health > 0 && (
                  <div 
                    key={enemy.id}
                    className={`absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center
                      ${enemy.type === 'zombie' ? 'bg-red-900/70' : 'bg-yellow-900/70'}`}
                    style={{ left: `${enemy.x}%`, top: `${enemy.y}%` }}
                  >
                    {enemy.type === 'zombie' ? (
                      <Skull className="w-4 h-4 text-red-500" />
                    ) : (
                      <Users className="w-4 h-4 text-yellow-500" />
                    )}
                    {/* Health bar */}
                    <div className="absolute -bottom-3 w-10 h-1 bg-gray-800">
                      <div 
                        className={`h-full ${enemy.type === 'zombie' ? 'bg-red-500' : 'bg-yellow-500'}`}
                        style={{ width: `${enemy.health}%` }}
                      ></div>
                    </div>
                  </div>
                )
              ))}
              
              {/* Player */}
              {gameData.aliveStatus && (
                <div 
                  className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 bg-green-900/70 rounded-full flex items-center justify-center z-10"
                  style={{ left: `${position.x}%`, top: `${position.y}%` }}
                >
                  <Gamepad className="w-5 h-5 text-green-500" />
                </div>
              )}
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
                
                <div className="bg-black bg-opacity-70 text-white p-2 rounded-md mr-2">
                  <div className="font-bold text-yellow-500 flex items-center">
                    <span className="mr-2">Pontuação:</span>
                    {gameData.score}
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
                  <div className="w-60">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-red-400 mr-2" />
                      <div className="h-2 w-full bg-red-900/30 rounded-full mr-2">
                        <div 
                          className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" 
                          style={{ width: `${gameData.health}%` }}
                        ></div>
                      </div>
                      <span className="text-red-400 w-8 text-right">{gameData.health}%</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <Zap className="h-4 w-4 text-blue-400 mr-2" />
                      <div className="h-2 w-full bg-blue-900/30 rounded-full mr-2">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" 
                          style={{ width: `${gameData.energy}%` }}
                        ></div>
                      </div>
                      <span className="text-blue-400 w-8 text-right">{gameData.energy}%</span>
                    </div>
                  </div>
                </div>
                
                {gameStarted && gameData.aliveStatus && (
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="col-span-3 grid grid-cols-3 gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="col-start-2 border-green-900 hover:bg-green-950"
                        onClick={() => handleMove('up')}
                        disabled={gameData.energy < 2}
                      >
                        ↑
                      </Button>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-green-900 hover:bg-green-950"
                      onClick={() => handleMove('left')}
                      disabled={gameData.energy < 2}
                    >
                      ←
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      className="bg-red-600 hover:bg-red-700"
                      onClick={handleAttack}
                      disabled={gameData.energy < 10}
                    >
                      ATACAR
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-green-900 hover:bg-green-950"
                      onClick={() => handleMove('right')}
                      disabled={gameData.energy < 2}
                    >
                      →
                    </Button>
                    <div className="col-span-3 grid grid-cols-3 gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="col-start-2 border-green-900 hover:bg-green-950"
                        onClick={() => handleMove('down')}
                        disabled={gameData.energy < 2}
                      >
                        ↓
                      </Button>
                    </div>
                  </div>
                )}
                
                {(!gameData.aliveStatus && gameStarted) && (
                  <div className="mt-4 text-center">
                    <p className="text-red-500 mb-2">Você foi eliminado!</p>
                    <Button 
                      variant="destructive" 
                      onClick={handleExitGame}
                    >
                      Voltar ao Lobby
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
