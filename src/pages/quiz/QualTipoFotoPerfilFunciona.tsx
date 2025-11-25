import QuizLayout from "@/components/QuizLayout";
import QuizOption from "@/components/QuizOption";
import { Helmet } from "react-helmet";
import { Camera, Shirt, Mountain, Users } from "lucide-react";
import AdSenseBlock from "@/components/AdSenseBlock";

const QualTipoFotoPerfilFunciona = () => {
  return (
    <>
      <Helmet>
        <title>Qual Tipo de Foto de Perfil Funciona Melhor em Apps de Namoro | Beijo da Rua</title>
        <meta name="description" content="Descubra cientificamente quais tipos de fotos geram mais matches e interesse em apps de namoro. Guia completo para homens brasileiros aumentarem seus resultados." />
      </Helmet>
      
      <QuizLayout 
        title="Que tipo de foto você prefere no perfil?"
        description="Suas fotos são seu cartão de visitas - escolher bem pode triplicar seus matches"
        progress={60}
      >
        <AdSenseBlock />
        
        {/* Educational Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            A ciência por trás das fotos que geram mais matches
          </h2>
          
          <p className="text-foreground/80 mb-4">
            Suas fotos são responsáveis por <strong>90% da primeira impressão</strong> em apps de namoro. 
            Homens com fotos estrategicamente escolhidas recebem até <strong>300% mais matches</strong> do que 
            aqueles com fotos aleatórias ou mal tiradas.
          </p>

          <p className="text-foreground/80 mb-4">
            Não é sobre ser extremamente atraente - é sobre escolher fotos que transmitam confiança, 
            autenticidade e estilo de vida interessante. Estudos com milhões de perfis revelam padrões 
            claros do que funciona e do que não funciona.
          </p>

          <div className="bg-accent/30 border-l-4 border-primary p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">📸 Dados comprovados sobre fotos:</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• Perfis com 6 fotos recebem 40% mais matches que perfis com 3 fotos</li>
              <li>• Fotos ao ar livre aumentam matches em 19% comparado a fotos em ambientes fechados</li>
              <li>• Sorrir com dentes à mostra gera 14% mais interesse que sorrisos tímidos</li>
              <li>• Ter pelo menos 1 foto fazendo atividade aumenta matches em 27%</li>
              <li>• Selfies no espelho reduzem matches em 22% - evite!</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">Tipos de foto que matam seu perfil:</h3>
          <ul className="space-y-2 text-foreground/80 mb-6">
            <li>✗ Selfie no espelho do banheiro (grita desleixo)</li>
            <li>✗ Foto em grupo onde não dá pra saber quem é você</li>
            <li>✗ Foto borrada, mal iluminada ou pixelada</li>
            <li>✗ Só foto de cara séria (parece arrogante ou entediado)</li>
            <li>✗ Foto com ex cortada (transparece bagagem emocional)</li>
            <li>✗ Só foto close do rosto (esconder o corpo gera desconfiança)</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">Fórmula testada para perfil campeão:</h3>
          <ul className="space-y-2 text-foreground/80 mb-6">
            <li>✓ <strong>Foto 1 (principal):</strong> Rosto claro, sorrindo, boa iluminação natural</li>
            <li>✓ <strong>Foto 2:</strong> Corpo inteiro em situação casual mas arrumada</li>
            <li>✓ <strong>Foto 3:</strong> Fazendo hobby ou atividade que você gosta</li>
            <li>✓ <strong>Foto 4:</strong> Em evento social ou viagem (prova vida interessante)</li>
            <li>✓ <strong>Foto 5:</strong> Com animal de estimação OU em natureza</li>
            <li>✓ <strong>Foto 6:</strong> Foto divertida que mostre personalidade</li>
          </ul>

          <p className="text-foreground/80 mb-6">
            <strong>Regra de ouro:</strong> Todas as fotos devem ser de menos de 1 ano. Pessoas percebem 
            quando você está usando foto antiga, e isso quebra a confiança antes mesmo de começar. 
            Seja autêntico - mostre quem você é HOJE.
          </p>

          <div className="bg-primary/10 border-l-4 border-primary p-6 my-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">🎯 Dica especial para o Brasil:</h3>
            <p className="text-foreground/80">
              Brasileiras valorizam muito fotos em ambientes sociais e ao ar livre. Uma foto na praia, 
              em churrasco com amigos, ou numa trilha mostra que você é sociável e tem vida ativa - 
              isso gera 35% mais interesse que fotos só em casa.
            </p>
          </div>
        </article>

        <AdSenseBlock />

        {/* Quiz Options */}
        <div className="space-y-6 mt-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Qual estilo de foto você mais usa?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <QuizOption
              title="Fotos naturais e casuais"
              description="Prefiro fotos espontâneas, em lugares que gosto, sem pose forçada"
              href="/quanto-tempo-dedicar-apps-namoro-por-dia-homem"
              icon={<Camera size={24} />}
            />
            
            <QuizOption
              title="Fotos mais arrumado"
              description="Gosto de fotos onde estou bem vestido, cuidado, transmitindo confiança"
              href="/quanto-tempo-dedicar-apps-namoro-por-dia-homem"
              icon={<Shirt size={24} />}
            />
            
            <QuizOption
              title="Fotos de aventuras"
              description="Prefiro mostrar viagens, trilhas, esportes - meu lado aventureiro"
              href="/quanto-tempo-dedicar-apps-namoro-por-dia-homem"
              icon={<Mountain size={24} />}
            />
            
            <QuizOption
              title="Fotos sociais"
              description="Fotos com amigos, em eventos, festas - mostrando vida social"
              href="/quanto-tempo-dedicar-apps-namoro-por-dia-homem"
              icon={<Users size={24} />}
            />
          </div>
        </div>

        <AdSenseBlock />
      </QuizLayout>
    </>
  );
};

export default QualTipoFotoPerfilFunciona;
