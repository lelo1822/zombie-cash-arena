
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Plus, Users, Gamepad, Clock, DollarSign } from "lucide-react";
import { toast } from "@/components/ui/sonner";

// Mock data for game rooms
const mockRooms = [
  { id: 1, name: "Arena Mortal", players: 4, maxPlayers: 10, stakes: "R$ 2,00 / vida", status: "Em andamento" },
  { id: 2, name: "Bunker Z", players: 2, maxPlayers: 8, stakes: "R$ 2,00 / vida", status: "Aguardando" },
  { id: 3, name: "Esconderijo", players: 6, maxPlayers: 12, stakes: "R$ 2,00 / vida", status: "Aguardando" },
  { id: 4, name: "Apocalipse Urbano", players: 3, maxPlayers: 8, stakes: "R$ 2,00 / vida", status: "Aguardando" },
  { id: 5, name: "Laboratório Secreto", players: 7, maxPlayers: 10, stakes: "R$ 2,00 / vida", status: "Em andamento" },
];

const Lobby = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [newRoomName, setNewRoomName] = useState("");
  const [maxPlayers, setMaxPlayers] = useState("8");

  const filteredRooms = mockRooms.filter(room => 
    room.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateRoom = () => {
    if (!newRoomName.trim()) {
      toast.error("Insira um nome para a sala!");
      return;
    }
    
    toast.success(`Sala "${newRoomName}" criada com sucesso!`);
    // Normally we would create the room via API and redirect to it
    setNewRoomName("");
  };

  const handleJoinRoom = (roomId: number, roomName: string) => {
    toast.success(`Entrando na sala: ${roomName}`);
    // Normally we would join the room via API and redirect to the game
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-95 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')] bg-blend-overlay bg-cover bg-fixed">
      <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <Link to="/">
              <h1 className="text-3xl font-extrabold text-red-500">ARQUIVO <span className="text-green-500">Z</span></h1>
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <Button variant="ghost" className="text-green-500">
              <Link to="/account">Minha Conta</Link>
            </Button>
            <Button variant="destructive">
              <Link to="/">Sair</Link>
            </Button>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/4">
            <Card className="bg-black bg-opacity-80 border-green-900 text-white mb-6">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle className="text-2xl text-green-500">Salas Disponíveis</CardTitle>
                    <CardDescription className="text-gray-400">
                      Entre em uma sala ou crie a sua própria
                    </CardDescription>
                  </div>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Plus className="mr-2 h-4 w-4" /> Criar Sala
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="bg-gray-900 text-white border-green-900">
                      <SheetHeader>
                        <SheetTitle className="text-green-500">Criar Nova Sala</SheetTitle>
                        <SheetDescription className="text-gray-400">
                          Configure sua sala de jogo personalizada
                        </SheetDescription>
                      </SheetHeader>
                      <div className="space-y-4 mt-6">
                        <div className="space-y-2">
                          <Label htmlFor="room-name" className="text-white">Nome da Sala</Label>
                          <Input 
                            id="room-name"
                            value={newRoomName}
                            onChange={(e) => setNewRoomName(e.target.value)}
                            placeholder="Ex: Arena do Caos"
                            className="bg-gray-800 border-green-900 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="max-players" className="text-white">Jogadores Máximos</Label>
                          <Input 
                            id="max-players"
                            type="number"
                            value={maxPlayers}
                            onChange={(e) => setMaxPlayers(e.target.value)}
                            min="2"
                            max="16"
                            className="bg-gray-800 border-green-900 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-white">Valor por Vida</Label>
                          <div className="bg-gray-800 border border-green-900 rounded-md px-3 py-2 text-white">
                            R$ 2,00 <span className="text-gray-400">(padrão)</span>
                          </div>
                        </div>
                        <Button 
                          onClick={handleCreateRoom} 
                          className="w-full mt-4 bg-green-600 hover:bg-green-700"
                        >
                          Criar e Entrar
                        </Button>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Input
                    placeholder="Buscar salas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-gray-900 border-green-900 text-white"
                  />
                </div>
                <div className="space-y-4">
                  {filteredRooms.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">Nenhuma sala encontrada</p>
                  ) : (
                    filteredRooms.map((room) => (
                      <Card key={room.id} className="bg-gray-900 border-green-900">
                        <CardContent className="p-4">
                          <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-bold text-white">{room.name}</h3>
                              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                                <div className="flex items-center text-gray-400 text-sm">
                                  <Users className="h-4 w-4 mr-1" />
                                  {room.players}/{room.maxPlayers} jogadores
                                </div>
                                <div className="flex items-center text-gray-400 text-sm">
                                  <DollarSign className="h-4 w-4 mr-1" />
                                  {room.stakes}
                                </div>
                                <div className={`flex items-center text-sm ${room.status === "Aguardando" ? "text-green-500" : "text-yellow-500"}`}>
                                  <Clock className="h-4 w-4 mr-1" />
                                  {room.status}
                                </div>
                              </div>
                            </div>
                            <Button 
                              className={`${room.status === "Aguardando" ? "bg-green-600 hover:bg-green-700" : "bg-yellow-600 hover:bg-yellow-700"}`}
                              onClick={() => handleJoinRoom(room.id, room.name)}
                            >
                              {room.status === "Aguardando" ? "Entrar" : "Observar"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-1/4">
            <Card className="bg-black bg-opacity-80 border-green-900 text-white mb-6">
              <CardHeader>
                <CardTitle className="text-xl text-green-500">Seu Perfil</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-green-900 flex items-center justify-center text-2xl font-bold text-white mb-2">
                    JD
                  </div>
                  <h3 className="text-lg font-bold text-white">JogadorDestaque</h3>
                  <p className="text-gray-400 text-sm">Nível 5</p>

                  <Separator className="my-4 bg-green-900/30" />
                  
                  <div className="w-full space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Saldo:</span>
                      <span className="text-green-500 font-bold">R$ 120,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Partidas:</span>
                      <span className="text-white">24</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Vitórias:</span>
                      <span className="text-white">16</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">K/D Ratio:</span>
                      <span className="text-white">1.8</span>
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
                  Ver Ranking Completo
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
