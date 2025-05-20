
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const RankingHeader = () => {
  return (
    <motion.header 
      className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Link to="/">
          <h1 className="text-3xl font-extrabold text-red-500">ARQUIVO <span className="text-green-500">Z</span></h1>
        </Link>
      </motion.div>
      <div className="flex gap-4 items-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button variant="ghost" className="text-green-500">
            <Link to="/lobby">Lobby</Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button variant="ghost" className="text-green-500">
            <Link to="/account">Minha Conta</Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button variant="destructive">
            <Link to="/">Sair</Link>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default RankingHeader;
