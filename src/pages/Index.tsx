
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, User, Users, Gamepad, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black bg-opacity-90 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22')] bg-blend-overlay bg-cover bg-center">
      <div className="container mx-auto px-4 py-10">
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-extrabold text-red-500">ARQUIVO <span className="text-green-500">Z</span></h1>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-white hover:text-green-500">
              <Link to="/login">Login</Link>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Link to="/register">Registrar</Link>
            </Button>
          </div>
        </header>

        <main>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Arena de Combate <span className="text-green-500">Z</span></h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre na arena. Elimine zumbis. Derrote jogadores. <span className="text-green-500 font-bold">Ganhe dinheiro real.</span>
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                <Link to="/register" className="flex items-center gap-2">
                  Começar <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { 
                title: "Faça seu Registro", 
                description: "Crie sua conta para participar nas partidas e gerenciar seus ganhos.", 
                icon: <User className="h-10 w-10 text-green-500" /> 
              },
              { 
                title: "Entre no Lobby", 
                description: "Encontre salas disponíveis ou crie sua própria arena de combate.", 
                icon: <Users className="h-10 w-10 text-green-500" /> 
              },
              { 
                title: "Entre na Ação", 
                description: "Elimine zumbis e outros jogadores em combates intensos.", 
                icon: <Gamepad className="h-10 w-10 text-green-500" /> 
              },
              { 
                title: "Saque seus Ganhos", 
                description: "Transfira seu dinheiro ganho diretamente para sua conta bancária.", 
                icon: <DollarSign className="h-10 w-10 text-green-500" /> 
              }
            ].map((item, i) => (
              <Card key={i} className="bg-black bg-opacity-70 border-green-900 text-white">
                <CardHeader>
                  <div className="mb-2">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-black bg-opacity-80 border-green-900 text-white mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-green-500">Como Funciona</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>O Arquivo Z é um jogo de arena de combate onde você pode ganhar dinheiro real com suas habilidades:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Cada vida vale R$2 (valor sujeito a alterações)</li>
                <li>Elimine zumbis e outros jogadores para acumular pontos</li>
                <li>Vença partidas e ganhe o dinheiro dos outros participantes</li>
                <li>Transfira seus ganhos para sua conta bancária quando quiser</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-900">
                <Link to="/about">Saiba mais</Link>
              </Button>
            </CardFooter>
          </Card>
        </main>

        <footer className="border-t border-green-900 pt-8 text-center text-gray-500">
          <p>© 2025 Arquivo Z - Todos os direitos reservados</p>
          <p className="text-sm mt-2">Um produto desenvolvido para amantes de jogos de tiro e estratégia</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
