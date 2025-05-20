
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import Layout from "@/components/layout/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // This would normally connect to your auth backend
    // For now, we'll just simulate a successful login
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login efetuado com sucesso!");
      navigate("/lobby");
    }, 1000);
  };

  return (
    <Layout 
      showHeader={false}
      showFooter={false}
      backgroundImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md bg-black bg-opacity-80 border-green-900 text-white">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <Link to="/">
                <h1 className="text-3xl font-extrabold text-red-500">ARQUIVO <span className="text-green-500">Z</span></h1>
              </Link>
            </div>
            <CardTitle className="text-2xl text-center">Acesse sua conta</CardTitle>
            <CardDescription className="text-gray-400 text-center">
              Entre com seu email e senha para acessar sua conta
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-white">Senha</Label>
                  <Link to="/forgot-password" className="text-sm text-green-500 hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
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
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={isLoading}
              >
                {isLoading ? "Processando..." : "Entrar"}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-center text-gray-400 text-sm w-full">
              Não tem uma conta?{" "}
              <Link to="/register" className="text-green-500 hover:underline">
                Registre-se
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
