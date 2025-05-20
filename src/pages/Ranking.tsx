
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
      className="min-h-screen bg-black bg-opacity-90 bg-[url('https://images.unsplash.com/photo-1493799582117-9a58bc1d8dea')] bg-blend-overlay bg-cover bg-fixed"
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
          <h2 className="text-3xl font-bold text-green-500 text-center">Ranking de Jogadores</h2>
          <motion.p 
            className="text-gray-400 text-center mt-2"
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
                  <PaginationPrevious href="#" />
                </PaginationItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <PaginationItem>
                  <PaginationNext href="#" />
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
