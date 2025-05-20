
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RankingInfo = () => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <Card className="bg-black bg-opacity-80 border-green-900 text-white">
        <CardHeader>
          <CardTitle className="text-xl text-green-500">Como Funciona o Ranking</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300">
            O sistema de ranking do Arquivo Z recompensa os melhores jogadores com prêmios em dinheiro real. 
            Quanto mais você joga e vence, mais pontos acumula e sobe no ranking.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded-lg">
              <h4 className="text-lg font-medium text-green-500 mb-2">Ranking Semanal</h4>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                <li>Premiação de R$ 10.000,00 dividida entre os TOP 10</li>
                <li>Recompensas distribuídas toda segunda-feira</li>
                <li>Pontos calculados pelas partidas da semana</li>
              </ul>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded-lg">
              <h4 className="text-lg font-medium text-green-500 mb-2">Ranking Geral</h4>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                <li>Premiação mensal de R$ 50.000,00</li>
                <li>Recompensas distribuídas no final de cada mês</li>
                <li>Pontos acumulados por tempo indeterminado</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RankingInfo;
