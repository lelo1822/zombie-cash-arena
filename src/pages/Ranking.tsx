
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
import RankingTabs from "@/components/ranking/RankingTabs";
import RankingInfo from "@/components/ranking/RankingInfo";
import { motion } from "framer-motion";
import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout";

const Ranking = () => {
  const [rankingType, setRankingType] = useState<RankingType>("weekly");
  
  return (
    <AuthenticatedLayout
      title="Ranking de Jogadores"
      subtitle="Confira os melhores jogadores do Arquivo Z e a premiação em dinheiro real"
      backgroundImage="https://images.unsplash.com/photo-1493799582117-9a58bc1d8dea"
      className="bg-blend-multiply"
    >
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
    </AuthenticatedLayout>
  );
};

export default Ranking;
