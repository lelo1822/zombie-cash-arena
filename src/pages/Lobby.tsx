
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import LobbyHeader from "@/components/lobby/LobbyHeader";
import GameRoomsList from "@/components/lobby/GameRoomsList";
import UserProfileCard from "@/components/lobby/UserProfileCard";
import TopPlayersList from "@/components/lobby/TopPlayersList";
import { GameRoom, UserStats } from "@/components/lobby/types";

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
    <div className="min-h-screen bg-black bg-opacity-95 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')] bg-blend-overlay bg-cover bg-fixed">
      <div className="container mx-auto px-4 py-8">
        <LobbyHeader />

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
      </div>
    </div>
  );
};

export default Lobby;
