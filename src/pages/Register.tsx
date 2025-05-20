
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/sonner";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem!");
      return;
    }

    if (!agreedToTerms) {
      toast.error("Você precisa concordar com os termos e condições!");
      return;
    }

    setIsLoading(true);

    // This would normally connect to your auth backend
    // For now, we'll just simulate a successful registration
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Conta criada com sucesso!");
      navigate("/lobby");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')] bg-blend-overlay bg-cover bg-center flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md bg-black bg-opacity-80 border-green-900 text-white">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Link to="/">
              <h1 className="text-3xl font-extrabold text-red-500">ARQUIVO <span className="text-green-500">Z</span></h1>
            </Link>
          </div>
          <CardTitle className="text-2xl text-center">Crie sua conta</CardTitle>
          <CardDescription className="text-gray-400 text-center">
            Registre-se para começar a jogar e ganhar dinheiro
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-900 border-green-900 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username" className="text-white">Nome de usuário</Label>
              <Input
                id="username"
                type="text"
                placeholder="Seu_nome_de_usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-gray-900 border-green-900 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-900 border-green-900 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-white">Confirmar senha</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="bg-gray-900 border-green-900 text-white"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={agreedToTerms} 
                onCheckedChange={() => setAgreedToTerms(!agreedToTerms)}
                className="data-[state=checked]:bg-green-500"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Concordo com os{" "}
                <Link to="/terms" className="text-green-500 hover:underline">
                  termos e condições
                </Link>
              </label>
            </div>
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={isLoading}
            >
              {isLoading ? "Processando..." : "Registrar"}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-center text-gray-400 text-sm w-full">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-green-500 hover:underline">
              Faça login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
