
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

const Ranking = () => {
  const [rankingType, setRankingType] = useState<RankingType>("weekly");
  
  return (
    <div className="min-h-screen bg-black bg-opacity-90 bg-[url('https://images.unsplash.com/photo-1493799582117-9a58bc1d8dea')] bg-blend-overlay bg-cover bg-fixed">
      <div className="container mx-auto px-4 py-8">
        <RankingHeader />

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-green-500 text-center">Ranking de Jogadores</h2>
          <p className="text-gray-400 text-center mt-2">
            Confira os melhores jogadores do Arquivo Z e a premiação em dinheiro real
          </p>
        </div>

        <RankingTabs 
          rankingType={rankingType} 
          onRankingTypeChange={setRankingType} 
        />

        <div className="flex justify-center mb-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <RankingInfo />
      </div>
    </div>
  );
};

export default Ranking;
