
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RankingHeader = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
      <div>
        <Link to="/">
          <h1 className="text-3xl font-extrabold text-red-500">ARQUIVO <span className="text-green-500">Z</span></h1>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="ghost" className="text-green-500">
          <Link to="/lobby">Lobby</Link>
        </Button>
        <Button variant="ghost" className="text-green-500">
          <Link to="/account">Minha Conta</Link>
        </Button>
        <Button variant="destructive">
          <Link to="/">Sair</Link>
        </Button>
      </div>
    </header>
  );
};

export default RankingHeader;
