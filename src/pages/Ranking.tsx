
import { useState } from "react";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { RankingType } from "@/data/rankingData";
import RankingHeader from "@/components/ranking/RankingHeader";
import RankingTabs from "@/components/ranking/RankingTabs";
import RankingInfo from "@/components/ranking/RankingInfo";
import { motion } from "framer-motion";

const Ranking = () => {
  const [rankingType, setRankingType] = useState<RankingType>("weekly");
  
  return (
    <motion.div 
      className="min-h-screen bg-black bg-opacity-90 bg-[url('https://images.unsplash.com/photo-1493799582117-9a58bc1d8dea')] bg-blend-multiply bg-cover bg-fixed bg-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-8">
        <RankingHeader />

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Ranking de Jogadores
            </span>
          </h2>
          <motion.p 
            className="text-gray-400 text-center mt-2 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Confira os melhores jogadores do Arquivo Z e a premiação em dinheiro real
          </motion.p>
        </motion.div>

        <RankingTabs 
          rankingType={rankingType} 
          onRankingTypeChange={setRankingType} 
        />

        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Pagination>
            <PaginationContent>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <PaginationItem>
                  <PaginationPrevious href="#" className="bg-black/50 border border-green-900/30 hover:bg-green-900/20 hover:text-green-400" />
                </PaginationItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <PaginationItem>
                  <PaginationLink href="#" isActive className="bg-gradient-to-r from-green-600 to-green-500 text-white">1</PaginationLink>
                </PaginationItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <PaginationItem>
                  <PaginationLink href="#" className="bg-black/50 border border-green-900/30 hover:bg-green-900/20 hover:text-green-400">2</PaginationLink>
                </PaginationItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <PaginationItem>
                  <PaginationLink href="#" className="bg-black/50 border border-green-900/30 hover:bg-green-900/20 hover:text-green-400">3</PaginationLink>
                </PaginationItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <PaginationItem>
                  <PaginationNext href="#" className="bg-black/50 border border-green-900/30 hover:bg-green-900/20 hover:text-green-400" />
                </PaginationItem>
              </motion.div>
            </PaginationContent>
          </Pagination>
        </motion.div>

        <RankingInfo />
      </div>
    </motion.div>
  );
};

export default Ranking;
