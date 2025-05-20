
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import GameRoomItem from "./GameRoomItem";
import CreateRoomForm from "./CreateRoomForm";

interface GameRoom {
  id: number;
  name: string;
  players: number;
  maxPlayers: number;
  stakes: string;
  status: string;
}

interface GameRoomsListProps {
  rooms: GameRoom[];
  onJoinRoom: (roomId: number, roomName: string) => void;
  onCreateRoom: (name: string, maxPlayers: number) => void;
}

const GameRoomsList = ({ rooms, onJoinRoom, onCreateRoom }: GameRoomsListProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRooms = rooms.filter(room => 
    room.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="bg-black bg-opacity-80 border-green-900 text-white mb-6">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <CardTitle className="text-2xl text-green-500">Salas Disponíveis</CardTitle>
            <CardDescription className="text-gray-400">
              Entre em uma sala ou crie a sua própria
            </CardDescription>
          </div>
          <CreateRoomForm onCreateRoom={onCreateRoom} />
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
              <GameRoomItem 
                key={room.id} 
                room={room} 
                onJoin={onJoinRoom} 
              />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GameRoomsList;
