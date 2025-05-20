
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, DollarSign, Clock, User, Shield, LogOut } from "lucide-react";
import { toast } from "@/components/ui/sonner";

// Mock transaction data
const transactions = [
  { id: 1, type: "Ganho", amount: 24.00, game: "Arena Mortal", date: "20/05/2025" },
  { id: 2, type: "Saque", amount: -100.00, status: "Processado", date: "18/05/2025" },
  { id: 3, type: "Ganho", amount: 46.00, game: "Laboratório Secreto", date: "15/05/2025" },
  { id: 4, type: "Ganho", amount: 38.00, game: "Bunker Z", date: "10/05/2025" },
  { id: 5, type: "Saque", amount: -200.00, status: "Processado", date: "05/05/2025" },
];

// Mock game history
const gameHistory = [
  { id: 1, name: "Arena Mortal", result: "Vitória", kills: 8, position: "1º", earnings: 24.00, date: "20/05/2025" },
  { id: 2, name: "Bunker Z", result: "Derrota", kills: 3, position: "4º", earnings: 0.00, date: "19/05/2025" },
  { id: 3, name: "Laboratório Secreto", result: "Vitória", kills: 12, position: "1º", earnings: 46.00, date: "15/05/2025" },
  { id: 4, name: "Apocalipse Urbano", result: "Derrota", kills: 5, position: "3º", earnings: 0.00, date: "12/05/2025" },
  { id: 5, name: "Bunker Z", result: "Vitória", kills: 9, position: "1º", earnings: 38.00, date: "10/05/2025" },
];

const Account = () => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [pixKey, setPixKey] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const balance = 120.00;

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(withdrawAmount);

    if (isNaN(amount) || amount <= 0) {
      toast.error("Por favor, insira um valor válido.");
      return;
    }

    if (amount > balance) {
      toast.error("Saldo insuficiente para realizar o saque.");
      return;
    }

    if (!pixKey.trim()) {
      toast.error("Por favor, insira sua chave PIX.");
      return;
    }

    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      toast.success(`Solicitação de saque de R$ ${amount.toFixed(2)} enviada com sucesso!`);
      setWithdrawAmount("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-95 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')] bg-blend-overlay bg-cover bg-fixed">
      <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-white p-2" asChild>
              <Link to="/lobby">
                <ArrowLeft size={20} />
              </Link>
            </Button>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Minha Conta</h1>
          </div>
          <Button variant="destructive" className="flex gap-2">
            <LogOut size={16} />
            <Link to="/">Sair</Link>
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="bg-black bg-opacity-80 border-green-900 text-white mb-6">
              <CardHeader>
                <CardTitle className="text-xl text-green-500">Seu Perfil</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-green-900 flex items-center justify-center text-3xl font-bold text-white mb-3">
                    JD
                  </div>
                  <h3 className="text-xl font-bold text-white">JogadorDestaque</h3>
                  <p className="text-gray-400">jogadordestaque@email.com</p>

                  <Separator className="my-4 bg-green-900/30" />
                  
                  <div className="w-full space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 flex items-center gap-2">
                        <User size={18} /> Nível:
                      </span>
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 flex items-center gap-2">
                        <Clock size={18} /> Tempo de jogo:
                      </span>
                      <span className="text-white">32h 45m</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 flex items-center gap-2">
                        <Shield size={18} /> Status:
                      </span>
                      <span className="text-green-500">Verificado</span>
                    </div>
                  </div>

                  <Button className="mt-6 w-full" variant="outline">
                    Editar Perfil
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black bg-opacity-80 border-green-900 text-white">
              <CardHeader>
                <CardTitle className="text-xl text-green-500">Estatísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 p-4 rounded-md">
                    <p className="text-gray-400 text-sm">Partidas</p>
                    <p className="text-2xl font-bold text-white">24</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-md">
                    <p className="text-gray-400 text-sm">Vitórias</p>
                    <p className="text-2xl font-bold text-green-500">16</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-md">
                    <p className="text-gray-400 text-sm">Eliminações</p>
                    <p className="text-2xl font-bold text-white">187</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-md">
                    <p className="text-gray-400 text-sm">K/D Ratio</p>
                    <p className="text-2xl font-bold text-white">1.8</p>
                  </div>
                </div>
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="text-gray-400 text-sm">Total Ganho</p>
                  <p className="text-2xl font-bold text-green-500">R$ 420,00</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-black bg-opacity-80 border-green-900 text-white mb-6">
              <CardHeader>
                <CardTitle className="text-xl text-green-500">Saldo Disponível</CardTitle>
                <CardDescription className="text-gray-400">
                  Gerencie seu saldo e realize saques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-gray-400">Seu saldo atual</p>
                  <div className="flex items-center">
                    <DollarSign className="h-8 w-8 text-green-500 mr-2" />
                    <span className="text-4xl font-bold text-white">
                      R$ {balance.toFixed(2)}
                    </span>
                  </div>
                </div>

                <form onSubmit={handleWithdraw} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="withdraw-amount" className="text-white">
                        Valor do Saque (R$)
                      </Label>
                      <Input
                        id="withdraw-amount"
                        type="number"
                        placeholder="0,00"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        step="0.01"
                        min="0"
                        className="bg-gray-900 border-green-900 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pix-key" className="text-white">
                        Chave PIX
                      </Label>
                      <Input
                        id="pix-key"
                        placeholder="CPF, Email, Telefone, etc."
                        value={pixKey}
                        onChange={(e) => setPixKey(e.target.value)}
                        className="bg-gray-900 border-green-900 text-white"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processando..." : "Solicitar Saque"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-black bg-opacity-80 border-green-900 text-white">
              <CardHeader>
                <CardTitle className="text-xl text-green-500">Histórico</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="transactions" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-900">
                    <TabsTrigger value="transactions" className="data-[state=active]:bg-green-900">
                      Transações
                    </TabsTrigger>
                    <TabsTrigger value="games" className="data-[state=active]:bg-green-900">
                      Partidas
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="transactions" className="mt-4 space-y-4">
                    {transactions.map((tx) => (
                      <div key={tx.id} className="bg-gray-900 p-4 rounded-md">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className={`font-medium ${tx.type === "Ganho" ? "text-green-500" : "text-red-400"}`}>
                              {tx.type}
                              {tx.game && ` - ${tx.game}`}
                            </p>
                            <p className="text-sm text-gray-400">{tx.date}</p>
                          </div>
                          <p className={`font-bold ${tx.amount > 0 ? "text-green-500" : "text-red-400"}`}>
                            {tx.amount > 0 ? "+" : ""}R$ {Math.abs(tx.amount).toFixed(2)}
                          </p>
                        </div>
                        {tx.status && (
                          <div className="mt-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              {tx.status}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="games" className="mt-4 space-y-4">
                    {gameHistory.map((game) => (
                      <div key={game.id} className="bg-gray-900 p-4 rounded-md">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-medium text-white">{game.name}</p>
                          <p className={`font-medium ${game.result === "Vitória" ? "text-green-500" : "text-red-400"}`}>
                            {game.result}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400">
                          <span>{game.date}</span>
                          <span>{game.kills} eliminações</span>
                          <span>Posição: {game.position}</span>
                          <span className={game.earnings > 0 ? "text-green-500" : ""}>
                            {game.earnings > 0 ? `+R$ ${game.earnings.toFixed(2)}` : "Sem ganhos"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="ghost" className="text-green-500">
                  Carregar Mais
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
