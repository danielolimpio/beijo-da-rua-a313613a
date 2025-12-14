import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  UserCheck, 
  FileText, 
  Globe, 
  Cookie, 
  Clock, 
  Baby, 
  Scale, 
  Mail, 
  RefreshCw,
  ExternalLink,
  AlertCircle,
  CheckCircle,
  Link as LinkIcon,
  Users,
  MapPin,
  Info
} from "lucide-react";

const PoliticaPrivacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Beijo da Rua - Proteção de Dados e Privacidade</title>
        <meta name="description" content="Vá além do like! Saiba como manter conversas profundas e transformar matches em encontros memoráveis e relacionamentos reais." />
        <meta name="keywords" content="política de privacidade, proteção de dados, LGPD, privacidade online, dados pessoais, segurança da informação" />
        <link rel="canonical" href="https://www.beijodarua.com.br/politica-de-privacidade" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-[140px]"></div>
        <DynamicBreadcrumb />
        
        <main className="pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-primary to-secondary p-4 rounded-full">
                    <Shield className="w-12 h-12 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                POLÍTICA DE PRIVACIDADE
              </h1>
              <p className="text-sm text-muted-foreground mt-4 font-medium">
                Última atualização: 13 de dezembro de 2025
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Introduction Card */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Este Aviso de Privacidade para <strong className="text-foreground">Beijo da Rua</strong> ("nós", "nos" ou "nosso") descreve como e por que podemos acessar, coletar, armazenar, usar e/ou compartilhar ("processar") suas informações pessoais quando você usa nossos serviços ("Serviços"), inclusive quando você:
                    </p>
                    
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>Visita nosso site em <a href="https://beijodarua.com.br" className="text-primary hover:underline">https://beijodarua.com.br</a> ou qualquer outro site nosso que contenha um link para este Aviso de Privacidade;</li>
                      <li>Interage conosco de outras maneiras relacionadas, incluindo ações de marketing ou eventos.</li>
                    </ul>

                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-foreground font-medium mb-2">Tem dúvidas ou preocupações?</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            A leitura deste Aviso de Privacidade ajudará você a entender seus direitos e opções em relação à privacidade. Somos responsáveis por tomar decisões sobre como suas informações pessoais são processadas. Se você não concordar com nossas políticas e práticas, por favor, não utilize nossos Serviços. Caso ainda tenha dúvidas ou preocupações, entre em contato conosco pelo endereço: <a href="mailto:privacidade@beijodarua.com.br" className="text-primary hover:underline">privacidade@beijodarua.com.br</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Summary of Key Points */}
              <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-md border border-primary/20 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Info className="w-6 h-6 text-primary" />
                  RESUMO DOS PONTOS PRINCIPAIS
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Este resumo apresenta os pontos principais do nosso Aviso de Privacidade, mas você pode obter mais detalhes sobre qualquer um desses tópicos clicando no link após cada ponto principal ou usando nosso Índice abaixo para encontrar a seção desejada.
                </p>

                <div className="space-y-4">
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Que informações pessoais processamos?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Quando você visita, usa ou navega em nossos Serviços, podemos processar informações pessoais dependendo de como você interage conosco e com os Serviços, das escolhas que você faz e dos produtos e recursos que você usa. Saiba mais sobre as informações pessoais que você nos divulga.
                    </p>
                  </div>

                  <div className="bg-card rounded-xl p-4 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Processamos informações pessoais sensíveis?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Algumas dessas informações podem ser consideradas "especiais" ou "sensíveis" em certas jurisdições, por exemplo, sua origem racial ou étnica, orientação sexual e crenças religiosas. <strong className="text-foreground">Não processamos informações pessoais sensíveis.</strong>
                    </p>
                  </div>

                  <div className="bg-card rounded-xl p-4 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Coletamos informações de terceiros?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Não coletamos nenhuma informação de terceiros.
                    </p>
                  </div>

                  <div className="bg-card rounded-xl p-4 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Como processamos suas informações?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Processamos suas informações para fornecer, aprimorar e administrar nossos Serviços, comunicar-nos com você, para fins de segurança e prevenção de fraudes e para cumprir a lei. Também podemos processar suas informações para outros fins com o seu consentimento. Processamos suas informações somente quando temos uma base legal válida para fazê-lo. Saiba mais sobre como processamos suas informações.
                    </p>
                  </div>

                  <div className="bg-card rounded-xl p-4 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Em que situações e com quem compartilhamos informações pessoais?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Podemos compartilhar informações em situações específicas e com partes específicas/terceiros. Saiba mais sobre quando e com quem compartilhamos suas informações pessoais.
                    </p>
                  </div>

                  <div className="bg-card rounded-xl p-4 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Como protegemos suas informações?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Temos medidas adequadas de segurança organizacional e processos e procedimentos técnicos implementados para proteger suas informações pessoais. No entanto, nenhuma transmissão eletrônica pela internet ou tecnologia de armazenamento de informações pode ser garantida como 100% segura. Portanto, não podemos prometer ou garantir que hackers, cibercriminosos ou outros não consigam acessar suas informações de forma não autorizada. Terceiros não poderão burlar nossa segurança e coletar, acessar, roubar ou modificar suas informações indevidamente. Saiba mais sobre como protegemos suas informações.
                    </p>
                  </div>

                  <div className="bg-card rounded-xl p-4 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Quais são seus direitos?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Dependendo da sua localização geográfica, a legislação de privacidade aplicável pode conferir a você certos direitos em relação às suas informações pessoais. Saiba mais sobre seus direitos de privacidade.
                    </p>
                  </div>

                  <div className="bg-card rounded-xl p-4 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Como você exercita seus direitos?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A maneira mais fácil de exercer seus direitos é por meio do envio de uma solicitação de acesso pelo titular dos dados ou entrando em contato conosco. Analisaremos e tomaremos as medidas cabíveis em relação a qualquer solicitação, em conformidade com as leis de proteção de dados aplicáveis.
                    </p>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mt-4">
                    <p className="text-foreground font-medium text-center">
                      Quer saber mais sobre o que fazemos com as informações que coletamos? Leia o Aviso de Privacidade na íntegra.
                    </p>
                  </div>
                </div>
              </section>

              {/* Index */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <LinkIcon className="w-6 h-6 text-primary" />
                  ÍNDICE
                </h2>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                  <li className="hover:text-primary transition-colors cursor-pointer">QUE INFORMAÇÕES COLETAMOS?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">COMO PROCESSAMOS SUAS INFORMAÇÕES?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">EM QUE BASES LEGAIS NOS APOIAMOS PARA PROCESSAR SUAS INFORMAÇÕES PESSOAIS?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">QUANDO E COM QUEM COMPARTILHAMOS SUAS INFORMAÇÕES PESSOAIS?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">QUAL É A NOSSA POSIÇÃO EM RELAÇÃO A SITES DE TERCEIROS?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">UTILIZAMOS COOKIES E OUTRAS TECNOLOGIAS DE RASTREAMENTO?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">COMO LIDAMOS COM SEUS LOGINS EM REDES SOCIAIS?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">POR QUANTO TEMPO GUARDAMOS SUAS INFORMAÇÕES?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">COMO MANTÉMOS SUAS INFORMAÇÕES SEGURAS?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">COLETAMOS INFORMAÇÕES DE MENORES DE IDADE?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">QUAIS SÃO SEUS DIREITOS DE PRIVACIDADE?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">CONTROLES PARA RECURSOS DE NÃO RASTREAR</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">OS RESIDENTES DOS ESTADOS UNIDOS TÊM DIREITOS ESPECÍFICOS DE PRIVACIDADE?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">OUTRAS REGIÕES POSSUEM DIREITOS DE PRIVACIDADE ESPECÍFICOS?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">ATUALIZAMOS ESTE AVISO?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">COMO VOCÊ PODE ENTRAR EM CONTATO CONOSCO SOBRE ESTE AVISO?</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">COMO VOCÊ PODE REVISAR, ATUALIZAR OU EXCLUIR OS DADOS QUE COLETAMOS DE VOCÊ?</li>
                </ol>
              </section>

              {/* Section 1 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <Database className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">1. QUE INFORMAÇÕES COLETAMOS?</h2>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Informações pessoais que você nos divulga</h3>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6 border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        <strong className="text-foreground">Resumindo:</strong> Coletamos informações pessoais que você nos fornece.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Coletamos informações pessoais que você nos fornece voluntariamente quando você se registra nos Serviços, participa de atividades ou entra em contato conosco, demonstrando interesse em obter informações sobre nós, nossos produtos e serviços.
                    </p>

                    <h4 className="text-lg font-semibold mb-3 text-foreground">Informações pessoais fornecidas por você</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      As informações pessoais que coletamos dependem do contexto de suas interações conosco e com os Serviços, das escolhas que você faz e dos produtos e recursos que você utiliza. As informações pessoais que coletamos podem incluir:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>Nomes</li>
                      <li>Endereços de e-mail</li>
                    </ul>

                    <h4 className="text-lg font-semibold mb-3 text-foreground">Informações sensíveis</h4>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      <strong className="text-foreground">Não processamos informações pessoais sensíveis.</strong>
                    </p>

                    <h4 className="text-lg font-semibold mb-3 text-foreground">Dados de login de redes sociais</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Podemos oferecer a opção de você se cadastrar conosco usando os dados da sua conta de rede social, como Facebook, X ou outra. Se você optar por se cadastrar dessa forma, coletaremos algumas informações do seu perfil do provedor da rede social, conforme descrito na seção "Como lidamos com seus logins em redes sociais?" abaixo.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Todas as informações pessoais que você nos fornecer devem ser verdadeiras, completas e precisas, e você deve nos notificar sobre quaisquer alterações nessas informações.
                    </p>

                    <h4 className="text-lg font-semibold mb-3 text-foreground">API do Google</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      O uso que fizermos das informações recebidas das APIs do Google estará em conformidade com a <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de Dados do Usuário dos Serviços de API do Google</a>, incluindo os requisitos de uso limitado.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <Eye className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">2. COMO PROCESSAMOS SUAS INFORMAÇÕES?</h2>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6 border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        <strong className="text-foreground">Resumindo:</strong> Processamos suas informações para fornecer, aprimorar e administrar nossos Serviços, comunicar-nos com você, para fins de segurança e prevenção de fraudes, e para cumprir a lei. Também podemos processar suas informações para outros fins somente com seu consentimento prévio e explícito.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Processamos suas informações pessoais por diversos motivos, dependendo de como você interage com nossos Serviços, incluindo:
                    </p>

                    <ul className="space-y-4 mb-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">Para facilitar a criação e autenticação de contas e para gerenciar contas de usuário,</strong> podemos processar suas informações para que você possa criar e acessar sua conta, bem como para mantê-la em funcionamento.
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">Para salvaguardar ou proteger os interesses vitais de um indivíduo.</strong> Podemos processar suas informações quando necessário para salvaguardar ou proteger os interesses vitais de um indivíduo, como, por exemplo, para prevenir danos.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <Scale className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">3. EM QUE BASES LEGAIS NOS APOIAMOS PARA PROCESSAR SUAS INFORMAÇÕES PESSOAIS?</h2>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6 border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        <strong className="text-foreground">Resumindo:</strong> Só processamos suas informações pessoais quando temos uma base legal válida para fazê-lo, como seu consentimento, obrigações legais, execução de contrato ou interesses legítimos.
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">Se você estiver localizado na União Europeia ou no Reino Unido:</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      O Regulamento Geral de Proteção de Dados (RGPD) e o RGPD do Reino Unido exigem que expliquemos as bases legais válidas para o processamento. Podemos nos basear em:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li><strong className="text-foreground">Consentimento:</strong> Você nos deu permissão para usar suas informações para uma finalidade específica. Você pode retirar seu consentimento a qualquer momento.</li>
                      <li><strong className="text-foreground">Obrigações legais:</strong> Processamos suas informações para cumprir obrigações legais, como responder a ordens judiciais ou autoridades regulatórias.</li>
                      <li><strong className="text-foreground">Interesses vitais:</strong> Quando necessário para proteger a vida ou segurança de uma pessoa.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">Se você estiver localizado no Canadá:</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Podemos processar suas informações com seu consentimento expresso ou implícito. Em casos excepcionais, podemos fazê-lo sem consentimento, por exemplo:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Quando a coleta é claramente do interesse de um indivíduo e o consentimento não pode ser obtido a tempo;</li>
                      <li>Para prevenção ou detecção de fraudes;</li>
                      <li>Para identificar pessoas falecidas, doentes ou feridas;</li>
                      <li>Se houver suspeita razoável de abuso financeiro;</li>
                      <li>Para cumprir ordens judiciais ou mandados;</li>
                      <li>Em transações comerciais sob certas condições.</li>
                    </ul>

                    <p className="text-muted-foreground leading-relaxed mt-6">
                      Podemos divulgar informações anonimizadas para projetos de pesquisa ou estatística aprovados, sujeitos a supervisão ética e compromissos de confidencialidade.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">4. QUANDO E COM QUEM COMPARTILHAMOS SUAS INFORMAÇÕES PESSOAIS?</h2>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6 border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        <strong className="text-foreground">Resumindo:</strong> Podemos compartilhar informações em situações específicas descritas nesta seção.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Compartilharemos suas informações pessoais nas seguintes situações:
                    </p>

                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li><strong className="text-foreground">Transferências de negócios:</strong> Em caso de fusão, aquisição, venda de ativos ou financiamento, suas informações poderão ser transferidas como parte da transação.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <ExternalLink className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">5. QUAL É A NOSSA POSIÇÃO EM RELAÇÃO A SITES DE TERCEIROS?</h2>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6 border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        <strong className="text-foreground">Resumindo:</strong> Não somos responsáveis pela segurança ou práticas de privacidade de sites de terceiros vinculados aos nossos Serviços.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Os Serviços podem conter links para sites, serviços online ou aplicativos de terceiros não afiliados a nós. Não oferecemos garantias sobre esses terceiros e não somos responsáveis por quaisquer perdas ou danos causados pelo uso de tais sites ou serviços. A inclusão de um link não implica endosso. Quaisquer dados coletados por terceiros não são cobertos por este Aviso de Privacidade. Recomendamos que você revise as políticas de privacidade desses terceiros e os contate diretamente com suas dúvidas.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <Cookie className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">6. UTILIZAMOS COOKIES E OUTRAS TECNOLOGIAS DE RASTREAMENTO?</h2>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6 border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        <strong className="text-foreground">Resumindo:</strong> Podemos usar cookies e outras tecnologias de rastreamento para coletar e armazenar suas informações.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Usamos cookies, web beacons, pixels e tecnologias semelhantes para:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>Manter a segurança dos Serviços;</li>
                      <li>Corrigir erros;</li>
                      <li>Salvar suas preferências;</li>
                      <li>Auxiliar nas funções básicas do site.</li>
                    </ul>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Também permitimos que terceiros usem essas tecnologias em nossos Serviços para análise e publicidade, incluindo anúncios personalizados com base em seus interesses.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">Google Analytics</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Podemos compartilhar suas informações com o Google Analytics para analisar o uso dos Serviços. Você pode desativar o rastreamento do Google Analytics acessando:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                      <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mb-2">Outras opções incluem:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                      <li><a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://optout.networkadvertising.org/</a></li>
                      <li><a href="http://www.networkadvertising.org/mobile-choice" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.networkadvertising.org/mobile-choice</a></li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      Mais informações sobre privacidade no Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">7. COMO LIDAMOS COM SEUS LOGINS EM REDES SOCIAIS?</h2>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6 border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        <strong className="text-foreground">Resumindo:</strong> Se você se cadastrar usando uma conta de rede social, receberemos algumas informações do seu perfil.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Oferecemos a opção de login via redes sociais (como Facebook ou X). Ao usar essa opção, recebemos informações como seu nome, e-mail, lista de amigos e foto de perfil — conforme você tornou público naquela plataforma.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Usaremos essas informações apenas para os fins descritos neste Aviso de Privacidade. Não controlamos o uso que o provedor da rede social faz de seus dados. Recomendamos que você consulte a política de privacidade da rede social utilizada.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">8. POR QUANTO TEMPO GUARDAMOS SUAS INFORMAÇÕES?</h2>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6 border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        <strong className="text-foreground">Resumindo:</strong> Mantemos suas informações apenas pelo tempo necessário para cumprir os propósitos descritos aqui, salvo exigência legal.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Conservaremos suas informações pessoais apenas pelo tempo necessário para os fins deste Aviso de Privacidade, salvo se um período mais longo for exigido por lei (como para fins fiscais ou contábeis).
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Quando não houver mais necessidade legítima de manter seus dados, os excluiremos ou anonimizaremos. Se estiverem em backups, os manteremos isolados e seguros até que possam ser excluídos.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <Lock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">9. COMO MANTÉMOS SUAS INFORMAÇÕES SEGURAS?</h2>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6 border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        <strong className="text-foreground">Resumindo:</strong> Implementamos medidas técnicas e organizacionais para proteger suas informações.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Adotamos medidas razoáveis de segurança para proteger suas informações pessoais. No entanto, nenhuma transmissão pela internet é 100% segura. Não podemos garantir que terceiros mal-intencionados não consigam acessar suas informações. Você acessa nossos Serviços por sua própria conta e risco e deve fazê-lo apenas em ambientes seguros.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <Baby className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">10. COLETAMOS INFORMAÇÕES DE MENORES DE IDADE?</h2>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6 border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        <strong className="text-foreground">Resumindo:</strong> Não coletamos intencionalmente dados de menores de 18 anos.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Não coletamos, solicitamos nem direcionamos marketing a crianças ou adolescentes menores de 18 anos (ou idade equivalente segundo a lei local). Ao usar os Serviços, você declara ter pelo menos 18 anos ou ser responsável legal por um menor e autorizar seu uso.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Se descobrirmos que coletamos dados de menores, excluiremos imediatamente tais informações. Caso tenha conhecimento de tal coleta, entre em contato em: <a href="mailto:contato@beijodarua.com.br" className="text-primary hover:underline">contato@beijodarua.com.br</a>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <UserCheck className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">11. QUAIS SÃO SEUS DIREITOS DE PRIVACIDADE?</h2>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6 border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        <strong className="text-foreground">Resumindo:</strong> Dependendo da sua localização, você pode ter direitos sobre seus dados.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Se você reside no Espaço Econômico Europeu, Reino Unido, Suíça ou Canadá, você pode ter o direito de:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>Acessar e obter cópia de suas informações;</li>
                      <li>Solicitar correção ou exclusão;</li>
                      <li>Restringir o processamento;</li>
                      <li>Solicitar portabilidade dos dados;</li>
                      <li>Não ser submetido a decisões automatizadas com efeitos legais.</li>
                    </ul>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Você também pode se opor ao processamento em certas circunstâncias. Para exercer esses direitos, entre em contato conforme indicado na seção 16.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">Retirada de consentimento:</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Se o processamento se basear em seu consentimento, você pode retirá-lo a qualquer momento. Isso não afeta a legalidade do processamento anterior.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">Cancelamento de e-mails promocionais:</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Você pode cancelar a assinatura de nossos e-mails de marketing clicando no link "cancelar inscrição" ou entrando em contato conosco. Mesmo assim, poderemos lhe enviar mensagens operacionais (ex: sobre sua conta).
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">Cookies:</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Você pode configurar seu navegador para rejeitar cookies, mas isso pode afetar funcionalidades do site.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Dúvidas? Envie um e-mail para: <a href="mailto:privacidade@beijodarua.com.br" className="text-primary hover:underline">privacidade@beijodarua.com.br</a>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 12 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <Eye className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">12. CONTROLES PARA RECURSOS DE NÃO RASTREAR</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A maioria dos navegadores oferece a opção "Não Rastrear" (Do Not Track – DNT). Atualmente, não respondemos a sinais DNT, pois não há padrão legal ou técnico universalmente aceito para sua implementação. Se um padrão for adotado no futuro, atualizaremos esta política.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">Controle Global de Privacidade (GPC):</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Respeitamos o sinal do Controle Global de Privacidade (GPC). Se seu navegador enviar esse sinal, trataremos como uma solicitação válida para não vender ou compartilhar suas informações para publicidade direcionada (conforme leis como a CCPA). Para mais informações, visite: <a href="https://globalprivacycontrol.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://globalprivacycontrol.org</a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 13 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">13. OS RESIDENTES DOS ESTADOS UNIDOS TÊM DIREITOS ESPECÍFICOS DE PRIVACIDADE?</h2>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6 border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        <strong className="text-foreground">Resumindo:</strong> Se você mora em determinados estados dos EUA, tem direitos adicionais.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Se você reside na Califórnia, Colorado, Connecticut, Delaware, Flórida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, Nova Hampshire, Nova Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah ou Virgínia, você pode ter o direito de:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>Solicitar acesso às suas informações pessoais;</li>
                      <li>Corrigir imprecisões;</li>
                      <li>Obter uma cópia;</li>
                      <li>Excluir seus dados;</li>
                      <li>Revogar o consentimento.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-4 text-foreground">Categorias de informações coletadas (últimos 12 meses):</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="border border-border p-3 text-left font-semibold text-foreground">Categoria</th>
                            <th className="border border-border p-3 text-left font-semibold text-foreground">Exemplos</th>
                            <th className="border border-border p-3 text-center font-semibold text-foreground">Coletado?</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr>
                            <td className="border border-border p-3">A. Identificadores</td>
                            <td className="border border-border p-3">Nome, e-mail, IP, identificador online</td>
                            <td className="border border-border p-3 text-center font-medium text-foreground">NÃO</td>
                          </tr>
                          <tr className="bg-muted/20">
                            <td className="border border-border p-3">B. Informações pessoais (CA)</td>
                            <td className="border border-border p-3">Emprego, formação, dados financeiros</td>
                            <td className="border border-border p-3 text-center font-medium text-foreground">NÃO</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3">C. Características protegidas</td>
                            <td className="border border-border p-3">Idade, raça, sexo, estado civil</td>
                            <td className="border border-border p-3 text-center font-medium text-foreground">NÃO</td>
                          </tr>
                          <tr className="bg-muted/20">
                            <td className="border border-border p-3">D. Informações comerciais</td>
                            <td className="border border-border p-3">Histórico de compras, pagamentos</td>
                            <td className="border border-border p-3 text-center font-medium text-foreground">NÃO</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3">E. Informações biométricas</td>
                            <td className="border border-border p-3">Impressões digitais, vocais</td>
                            <td className="border border-border p-3 text-center font-medium text-foreground">NÃO</td>
                          </tr>
                          <tr className="bg-muted/20">
                            <td className="border border-border p-3">F. Atividade online</td>
                            <td className="border border-border p-3">Navegação, interações com o site</td>
                            <td className="border border-border p-3 text-center font-medium text-foreground">NÃO</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3">G. Geolocalização</td>
                            <td className="border border-border p-3">Localização do dispositivo</td>
                            <td className="border border-border p-3 text-center font-medium text-foreground">NÃO</td>
                          </tr>
                          <tr className="bg-muted/20">
                            <td className="border border-border p-3">H. Dados sensoriais</td>
                            <td className="border border-border p-3">Áudios, vídeos, imagens</td>
                            <td className="border border-border p-3 text-center font-medium text-foreground">NÃO</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3">I. Informações profissionais</td>
                            <td className="border border-border p-3">Cargo, histórico profissional</td>
                            <td className="border border-border p-3 text-center font-medium text-foreground">NÃO</td>
                          </tr>
                          <tr className="bg-muted/20">
                            <td className="border border-border p-3">J. Dados educacionais</td>
                            <td className="border border-border p-3">Registros acadêmicos</td>
                            <td className="border border-border p-3 text-center font-medium text-foreground">NÃO</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3">K. Inferências</td>
                            <td className="border border-border p-3">Perfis com base em dados coletados</td>
                            <td className="border border-border p-3 text-center font-medium text-foreground">NÃO</td>
                          </tr>
                          <tr className="bg-muted/20">
                            <td className="border border-border p-3">L. Informações sensíveis</td>
                            <td className="border border-border p-3">—</td>
                            <td className="border border-border p-3 text-center font-medium text-foreground">NÃO</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mt-6">
                      Também podemos coletar outras informações ao:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2 ml-4">
                      <li>Entrar em contato com nosso suporte;</li>
                      <li>Participar de pesquisas ou concursos;</li>
                      <li>Usar nossos Serviços.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 14 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">14. OUTRAS REGIÕES POSSUEM DIREITOS DE PRIVACIDADE ESPECÍFICOS?</h2>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">Austrália e Nova Zelândia</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Estamos em conformidade com a Lei de Privacidade da Austrália de 1988 e a Lei de Privacidade da Nova Zelândia de 2020.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Você tem o direito de solicitar acesso ou correção de seus dados. Caso não forneça as informações necessárias, poderemos não conseguir fornecer nossos serviços.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Se acreditar que violamos os princípios de privacidade, pode reclamar ao:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>Gabinete do Comissário de Informação Australiano (Austrália);</li>
                      <li>Gabinete do Comissário de Privacidade da Nova Zelândia (Nova Zelândia).</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">África do Sul</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Você tem o direito de solicitar acesso, correção ou exclusão de seus dados.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Em caso de insatisfação, pode contatar o Regulador de Informação da África do Sul:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Informações gerais: <a href="mailto:enquires@inforegulator.org.za" className="text-primary hover:underline">enquires@inforegulator.org.za</a></li>
                      <li>Reclamações: <a href="mailto:PAIACComplaints@inforegulator.org.za" className="text-primary hover:underline">PAIACComplaints@inforegulator.org.za</a> e <a href="mailto:POPIAComplaints@inforegulator.org.za" className="text-primary hover:underline">POPIAComplaints@inforegulator.org.za</a></li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 15 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <RefreshCw className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">15. ATUALIZAMOS ESTE AVISO?</h2>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6 border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        <strong className="text-foreground">Resumindo:</strong> Sim, atualizaremos conforme necessário para cumprir as leis.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Podemos atualizar esta Política de Privacidade periodicamente. A data da última atualização estará sempre no topo do documento. Em caso de alterações substanciais, notificaremos você por e-mail ou por aviso no site. Recomendamos revisar esta política regularmente.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 16 */}
              <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-md border border-primary/20 animate-fade-in">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">16. COMO VOCÊ PODE ENTRAR EM CONTATO CONOSCO SOBRE ESTE AVISO?</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Para dúvidas ou comentários, entre em contato conosco:
                    </p>

                    <div className="bg-card rounded-xl p-6 border border-border">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-primary" />
                          <span className="text-muted-foreground">E-mail: <a href="mailto:contato@beijodarua.com.br" className="text-primary hover:underline">contato@beijodarua.com.br</a></span>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-0.5" />
                          <div className="text-muted-foreground">
                            <p className="font-medium text-foreground">Endereço postal:</p>
                            <p>Beijo da Rua</p>
                            <p>Av. Júlia Freire, 1200 - Expedicionários</p>
                            <p>João Pessoa - PB, 58041-000</p>
                            <p>Brasil</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 17 */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">17. COMO VOCÊ PODE REVISAR, ATUALIZAR OU EXCLUIR OS DADOS QUE COLETAMOS DE VOCÊ?</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Você tem o direito de solicitar acesso, correção, cópia ou exclusão de suas informações pessoais. Esses direitos podem ser limitados conforme a lei.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Para exercê-los, preencha e envie uma solicitação de acesso pelo titular dos dados por meio dos nossos canais de contato.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PoliticaPrivacidade;
