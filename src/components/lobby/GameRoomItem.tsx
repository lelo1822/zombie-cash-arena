
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, DollarSign, UserPlus } from "lucide-react";
import { useState } from "react";
import InviteFriendsModal from "./InviteFriendsModal";

interface GameRoomProps {
  room: {
    id: number;
    name: string;
    players: number;
    maxPlayers: number;
    stakes: string;
    status: string;
  };
  onJoin: (roomId: number, roomName: string) => void;
}

const GameRoomItem = ({ room, onJoin }: GameRoomProps) => {
  const [inviteModalOpen, setInviteModalOpen] = useState(false);

  return (
    <Card className="bg-gray-900 border-green-900">
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
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-green-900 bg-transparent hover:bg-green-900/20 text-green-500"
              onClick={() => setInviteModalOpen(true)}
            >
              <UserPlus size={18} className="mr-1" />
              Convidar
            </Button>
            <Button 
              className={`${room.status === "Aguardando" ? "bg-green-600 hover:bg-green-700" : "bg-yellow-600 hover:bg-yellow-700"}`}
              onClick={() => onJoin(room.id, room.name)}
            >
              {room.status === "Aguardando" ? "Entrar" : "Observar"}
            </Button>
          </div>
        </div>
      </CardContent>
      <InviteFriendsModal 
        roomId={room.id}
        roomName={room.name}
        open={inviteModalOpen}
        onOpenChange={setInviteModalOpen}
      />
    </Card>
  );
};

export default GameRoomItem;
