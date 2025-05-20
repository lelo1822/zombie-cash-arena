
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/sonner";
import { Users, Send, Copy } from "lucide-react";

interface Friend {
  id: number;
  name: string;
  status: "online" | "offline" | "in-game";
}

interface InviteFriendsModalProps {
  roomId: number;
  roomName: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InviteFriendsModal = ({ roomId, roomName, open, onOpenChange }: InviteFriendsModalProps) => {
  const [inviteLink, setInviteLink] = useState(`https://arquivo-z.com/join/${roomId}`);
  const [friendSearch, setFriendSearch] = useState("");

  // Mock friends data
  const friends: Friend[] = [
    { id: 1, name: "Carlos_Z", status: "online" },
    { id: 2, name: "SobreviventeX", status: "online" },
    { id: 3, name: "ZumbiHunter", status: "offline" },
    { id: 4, name: "BiohazardQueen", status: "in-game" },
    { id: 5, name: "ApocalypseKing", status: "online" },
  ];

  const filteredFriends = friends.filter(friend => 
    friend.name.toLowerCase().includes(friendSearch.toLowerCase())
  );

  const handleSendInvite = (friendId: number, friendName: string) => {
    toast.success(`Convite enviado para ${friendName}`);
    // In a real app, we would send the invite to the friend via an API call
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
    toast.success("Link copiado para a área de transferência!");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black border-green-900 text-white">
        <DialogHeader>
          <DialogTitle className="text-green-500">Convidar Amigos</DialogTitle>
          <DialogDescription className="text-gray-400">
            Convide seus amigos para jogar na sala "{roomName}"
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 my-4">
          <div>
            <Label htmlFor="invite-link" className="text-white">Link de Convite</Label>
            <div className="flex mt-1.5">
              <Input
                id="invite-link"
                value={inviteLink}
                readOnly
                className="bg-gray-900 border-green-900 text-white flex-1"
              />
              <Button 
                className="ml-2 bg-green-700 hover:bg-green-800" 
                onClick={handleCopyLink}
              >
                <Copy size={18} />
              </Button>
            </div>
          </div>

          <div className="pt-4">
            <Label htmlFor="friend-search" className="text-white">Seus Amigos</Label>
            <Input
              id="friend-search"
              placeholder="Buscar amigos..."
              value={friendSearch}
              onChange={(e) => setFriendSearch(e.target.value)}
              className="bg-gray-900 border-green-900 text-white mt-1.5"
            />
          </div>

          <div className="max-h-60 overflow-y-auto space-y-2 mt-4">
            {filteredFriends.length === 0 ? (
              <p className="text-gray-400 text-center py-4">Nenhum amigo encontrado</p>
            ) : (
              filteredFriends.map((friend) => (
                <div key={friend.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                      <Users size={14} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-white">{friend.name}</p>
                      <p className={`text-xs ${
                        friend.status === "online" ? "text-green-500" : 
                        friend.status === "in-game" ? "text-yellow-500" : "text-gray-500"
                      }`}>
                        {friend.status === "online" ? "Online" : 
                         friend.status === "in-game" ? "Em jogo" : "Offline"}
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className={`${friend.status !== "offline" ? 
                      "bg-green-700 hover:bg-green-800" : 
                      "bg-gray-700 cursor-not-allowed"}`}
                    disabled={friend.status === "offline"}
                    onClick={() => handleSendInvite(friend.id, friend.name)}
                  >
                    <Send size={14} />
                    <span className="ml-1">Convidar</span>
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>

        <DialogFooter>
          <Button 
            variant="ghost" 
            className="border border-green-900 hover:bg-green-900/20 text-white"
            onClick={() => onOpenChange(false)}
          >
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InviteFriendsModal;
