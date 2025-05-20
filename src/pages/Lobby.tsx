
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import GameRoomsList from "@/components/lobby/GameRoomsList";
import UserProfileCard from "@/components/lobby/UserProfileCard";
import TopPlayersList from "@/components/lobby/TopPlayersList";
import { GameRoom, UserStats } from "@/components/lobby/types";
import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout";

// Mock data for game rooms
const mockRooms = [
  { id: 1, name: "Arena Mortal", players: 4, maxPlayers: 10, stakes: "R$ 2,00 / vida", status: "Em andamento" },
  { id: 2, name: "Bunker Z", players: 2, maxPlayers: 8, stakes: "R$ 2,00 / vida", status: "Aguardando" },
  { id: 3, name: "Esconderijo", players: 6, maxPlayers: 12, stakes: "R$ 2,00 / vida", status: "Aguardando" },
  { id: 4, name: "Apocalipse Urbano", players: 3, maxPlayers: 8, stakes: "R$ 2,00 / vida", status: "Aguardando" },
  { id: 5, name: "Laboratório Secreto", players: 7, maxPlayers: 10, stakes: "R$ 2,00 / vida", status: "Em andamento" },
];

const Lobby = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState<GameRoom[]>(mockRooms);
  const [userStats, setUserStats] = useState<UserStats>({
    balance: 120.00,
    matches: 24,
    wins: 16,
    kdRatio: 1.8,
    level: 5
  });

  // Simulate real-time updates
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Randomly update player counts and statuses
      setRooms(prev => prev.map(room => ({
        ...room,
        players: Math.min(room.maxPlayers, Math.max(1, room.players + (Math.random() > 0.7 ? Math.floor(Math.random() * 3) - 1 : 0))),
        status: Math.random() > 0.9 ? (room.status === "Aguardando" ? "Em andamento" : "Aguardando") : room.status
      })));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCreateRoom = (roomName: string, maxPlayersCount: number) => {
    const newRoom = {
      id: rooms.length + 1,
      name: roomName,
      players: 1,
      maxPlayers: maxPlayersCount,
      stakes: "R$ 2,00 / vida",
      status: "Aguardando"
    };
    
    setRooms(prev => [newRoom, ...prev]);
    toast.success(`Sala "${roomName}" criada com sucesso!`);
    
    // Auto-join this room after a short delay
    setTimeout(() => {
      handleJoinRoom(newRoom.id, newRoom.name);
    }, 1000);
  };

  const handleJoinRoom = (roomId: number, roomName: string) => {
    toast.success(`Entrando na sala: ${roomName}`);
    
    // Redirect to the game page
    setTimeout(() => {
      navigate("/game");
    }, 1500);
  };

  return (
    <AuthenticatedLayout 
      title="Lobby" 
      subtitle="Escolha ou crie uma sala para jogar"
      showHeader={true} 
      showFooter={true}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <GameRoomsList 
            rooms={rooms} 
            onJoinRoom={handleJoinRoom} 
            onCreateRoom={handleCreateRoom} 
          />
        </div>

        <div className="md:w-1/4">
          <UserProfileCard userStats={userStats} />
          <TopPlayersList />
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Lobby;
