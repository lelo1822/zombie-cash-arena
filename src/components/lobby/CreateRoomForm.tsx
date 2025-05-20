
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "@/components/ui/sonner";

interface CreateRoomFormProps {
  onCreateRoom: (name: string, maxPlayers: number) => void;
}

const CreateRoomForm = ({ onCreateRoom }: CreateRoomFormProps) => {
  const [newRoomName, setNewRoomName] = useState("");
  const [maxPlayers, setMaxPlayers] = useState("8");

  const handleCreateRoom = () => {
    if (!newRoomName.trim()) {
      toast.error("Insira um nome para a sala!");
      return;
    }
    
    onCreateRoom(newRoomName, parseInt(maxPlayers));
    setNewRoomName("");
  };

  return (
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
  );
};

export default CreateRoomForm;
