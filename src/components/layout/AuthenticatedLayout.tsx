
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

interface AuthenticatedLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  backgroundImage?: string;
  className?: string;
}

const AuthenticatedLayout = ({ 
  children, 
  title, 
  subtitle, 
  showHeader = true, 
  showFooter = true, 
  backgroundImage = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  className = ""
}: AuthenticatedLayoutProps) => {
  return (
    <div 
      className={`min-h-screen bg-black bg-opacity-90 ${backgroundImage ? `bg-[url('${backgroundImage}')] bg-blend-overlay bg-cover bg-fixed bg-center` : ''} ${className}`}
    >
      <div className="container mx-auto px-4 py-8">
        {showHeader && (
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
              <Button variant="ghost" className="text-green-500">
                <Link to="/ranking" className="flex items-center gap-1">
                  <Trophy size={18} />
                  Ranking
                </Link>
              </Button>
              <Button variant="ghost" className="text-green-500">
                <Link to="/account">Minha Conta</Link>
              </Button>
              <Button variant="destructive">
                <Link to="/">Sair</Link>
              </Button>
            </div>
          </motion.header>
        )}

        {(title || subtitle) && (
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {title && (
              <h2 className="text-4xl font-bold text-center">
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>
            )}
            {subtitle && (
              <motion.p 
                className="text-gray-400 text-center mt-2 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}

        <main>
          {children}
        </main>

        {showFooter && (
          <footer className="border-t border-green-900 pt-8 text-center text-gray-500 mt-16">
            <p>© 2025 Arquivo Z - Todos os direitos reservados</p>
            <p className="text-sm mt-2">Um produto desenvolvido para amantes de jogos de tiro e estratégia</p>
          </footer>
        )}
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
