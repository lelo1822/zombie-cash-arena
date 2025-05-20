
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const RankingHeader = () => {
  return (
    <motion.header 
      className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-black/50 p-4 rounded-xl border border-green-900/30 backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Link to="/" className="flex items-center">
          <div className="bg-gradient-to-r from-red-600 to-red-500 p-2 rounded-lg mr-2">
            <h1 className="text-3xl font-extrabold text-white">A</h1>
          </div>
          <h1 className="text-3xl font-extrabold">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">ARQUIVO</span>
            <span className="ml-2 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">Z</span>
          </h1>
        </Link>
      </motion.div>
      
      <div className="flex gap-2 items-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
            <Link to="/lobby">Lobby</Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
            <Link to="/account">Minha Conta</Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button variant="destructive" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600">
            <Link to="/">Sair</Link>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default RankingHeader;
