
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout 
      showHeader={false} 
      showFooter={false}
      backgroundImage="https://images.unsplash.com/photo-1542451542907-6cf80ff362d6"
    >
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-md bg-black/60 p-8 rounded-lg border border-green-900/30 backdrop-blur-md">
          <h1 className="text-7xl font-bold mb-4 text-red-500">404</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-300 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-white mb-4">Página não encontrada</h2>
          <p className="text-gray-400 mb-6">
            A página que você está procurando não existe ou foi removida.
          </p>
          <Button className="bg-green-600 hover:bg-green-700">
            <Link to="/" className="flex items-center gap-2">
              <Home size={18} />
              Voltar para o início
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
