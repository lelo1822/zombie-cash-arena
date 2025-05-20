
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Bell } from "lucide-react";
import { motion } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Mock data for pending invites
const mockInvites = [
  { id: 1, from: "Carlos_Z", roomName: "Arena Mortal", timestamp: "Agora mesmo" },
  { id: 2, from: "BiohazardQueen", roomName: "Laboratório Secreto", timestamp: "5 minutos atrás" },
];

const LobbyHeader = () => {
  const [invites, setInvites] = useState(mockInvites);
  
  const handleAcceptInvite = (inviteId: number) => {
    // In a real app, we would join the room via an API call
    setInvites(prev => prev.filter(invite => invite.id !== inviteId));
  };
  
  const handleRejectInvite = (inviteId: number) => {
    setInvites(prev => prev.filter(invite => invite.id !== inviteId));
  };

  return (
    <motion.header 
      className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <Link to="/">
          <h1 className="text-3xl font-extrabold text-red-500">ARQUIVO <span className="text-green-500">Z</span></h1>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="ghost" className="text-green-500">
            <Link to="/ranking" className="flex items-center gap-1">
              <Trophy size={18} />
              Ranking
            </Link>
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="text-green-500 relative">
                <Users size={18} />
                Amigos
                {invites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {invites.length}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-black border-green-900 p-0">
              <div className="p-4 border-b border-green-900">
                <h3 className="text-green-500 font-bold">Convites Recebidos</h3>
              </div>
              <div className="max-h-72 overflow-y-auto">
                {invites.length === 0 ? (
                  <div className="p-4 text-center text-gray-400">
                    Nenhum convite pendente
                  </div>
                ) : (
                  invites.map(invite => (
                    <div key={invite.id} className="p-4 border-b border-green-900/40">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-white font-medium">{invite.from}</p>
                          <p className="text-gray-400 text-sm">convidou você para "{invite.roomName}"</p>
                          <p className="text-gray-500 text-xs mt-1">{invite.timestamp}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700 h-8"
                            onClick={() => handleAcceptInvite(invite.id)}
                          >
                            Aceitar
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="border border-green-900/50 hover:bg-green-900/20 h-8"
                            onClick={() => handleRejectInvite(invite.id)}
                          >
                            Recusar
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </PopoverContent>
          </Popover>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="ghost" className="text-green-500">
            <Link to="/account">Minha Conta</Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="destructive">
            <Link to="/">Sair</Link>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default LobbyHeader;
