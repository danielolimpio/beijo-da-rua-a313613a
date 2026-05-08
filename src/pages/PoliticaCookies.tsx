import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { Cookie, Info, Settings, Shield, BarChart3, Target, Sliders, Globe, RefreshCw, Mail, MapPin, Lock, ExternalLink } from "lucide-react";

const PoliticaCookies = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies | Beijo da Rua - Como Usamos Cookies</title>
        <meta name="description" content="Saiba como o Beijo da Rua utiliza cookies e tecnologias semelhantes. Entenda seus direitos e como controlar suas preferências de privacidade." />
        <meta name="keywords" content="política de cookies, cookies, rastreamento, privacidade, preferências, consentimento" />
        <link rel="canonical" href="https://beijodarua.com.br/politica-de-cookies/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-[140px]">{/* Spacer for fixed header */}</div>
        <DynamicBreadcrumb />
        
        <main className="pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-primary to-secondary p-4 rounded-full">
                    <Cookie className="w-12 h-12 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                Política de Cookies
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Como utilizamos cookies e tecnologias semelhantes
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Última atualização: 13 de dezembro de 2025
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Introduction */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Info className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      Esta Política de Cookies explica como o Beijo da Rua ("nós", "nosso" ou "site") utiliza cookies e tecnologias semelhantes quando você acessa nosso site <a href="https://beijodarua.com.br" className="text-primary hover:underline">https://beijodarua.com.br</a>. Nosso objetivo é ser transparente sobre o que são essas tecnologias, por que as usamos e como você pode controlá-las.
                    </p>
                  </div>
                </div>
              </section>

              {/* What are cookies */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Cookie className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">O que são cookies?</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, smartphone ou tablet) quando você visita um site. Eles permitem que o site:
                    </p>

                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>Funcione corretamente;</li>
                      <li>Lembre suas preferências;</li>
                      <li>Melhore sua experiência de navegação;</li>
                      <li>Coleta dados anônimos para análise e publicidade.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">Existem dois tipos principais:</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                        <h4 className="font-semibold text-foreground mb-2">Cookies Próprios</h4>
                        <p className="text-muted-foreground text-sm">Definidos por nós (Beijo da Rua).</p>
                      </div>
                      <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4">
                        <h4 className="font-semibold text-foreground mb-2">Cookies de Terceiros</h4>
                        <p className="text-muted-foreground text-sm">Definidos por parceiros (ex: Google AdSense, redes de anúncios).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why we use cookies */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Settings className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Por que usamos cookies?</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Usamos cookies para várias finalidades, agrupadas em quatro categorias:
                    </p>

                    {/* Category 1 */}
                    <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-6 mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-5 h-5 text-green-600" />
                        <h3 className="text-lg font-bold text-foreground">1. Cookies Essenciais (Técnicos)</h3>
                      </div>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>Finalidade:</strong> Garantir o funcionamento básico do site (ex: segurança, login, carregamento de páginas).</p>
                        <p><strong>Prazo:</strong> Sessão ou até 30 dias.</p>
                        <p><strong>Podem ser recusados?</strong> <span className="text-destructive font-medium">Não — são estritamente necessários.</span></p>
                      </div>
                    </div>

                    {/* Category 2 */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl p-6 mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <BarChart3 className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-bold text-foreground">2. Cookies de Análise e Desempenho</h3>
                      </div>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>Finalidade:</strong> Entender como os visitantes usam o site (páginas visitadas, tempo de permanência, erros).</p>
                        <p><strong>Fornecedores:</strong> Google Analytics, Google AdSense.</p>
                        <p><strong>Prazo:</strong> Até 2 anos.</p>
                        <p><strong>Podem ser recusados?</strong> <span className="text-green-600 font-medium">Sim.</span></p>
                      </div>
                    </div>

                    {/* Category 3 */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl p-6 mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Target className="w-5 h-5 text-purple-600" />
                        <h3 className="text-lg font-bold text-foreground">3. Cookies de Publicidade (Direcionamento)</h3>
                      </div>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>Finalidade:</strong> Exibir anúncios relevantes com base em seus interesses e comportamento online.</p>
                        <p><strong>Fornecedores:</strong> Google Ads, Google AdSense, DoubleClick.</p>
                        <p><strong>Prazo:</strong> De 30 minutos a 2 anos.</p>
                        <p><strong>Podem ser recusados?</strong> <span className="text-green-600 font-medium">Sim.</span></p>
                      </div>
                    </div>

                    {/* Category 4 */}
                    <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Sliders className="w-5 h-5 text-amber-600" />
                        <h3 className="text-lg font-bold text-foreground">4. Cookies de Preferências e Funcionalidade</h3>
                      </div>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>Finalidade:</strong> Lembrar suas configurações (ex: idioma, região, layout).</p>
                        <p><strong>Podem ser recusados?</strong> <span className="text-green-600 font-medium">Sim</span> (mas o site pode não funcionar como esperado).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* How to control cookies */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Settings className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Como controlar ou recusar cookies?</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Você tem total controle sobre os cookies por meio das configurações do seu navegador. Nelas, você pode:
                    </p>

                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>Aceitar todos os cookies;</li>
                      <li>Rejeitar cookies não essenciais;</li>
                      <li>Gerenciar suas preferências por categoria.</li>
                    </ul>

                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">Importante</span>
                      </div>
                      <p className="text-muted-foreground">
                        Você nunca será forçado a aceitar cookies de publicidade. O site funciona mesmo com eles desativados.
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">Você também pode configurar cookies manualmente no seu navegador:</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-muted/30 rounded-lg p-3 text-sm text-muted-foreground">
                        <strong>Chrome:</strong> Configurações &gt; Privacidade &gt; Cookies
                      </div>
                      <div className="bg-muted/30 rounded-lg p-3 text-sm text-muted-foreground">
                        <strong>Firefox:</strong> Opções &gt; Privacidade &gt; Cookies
                      </div>
                      <div className="bg-muted/30 rounded-lg p-3 text-sm text-muted-foreground">
                        <strong>Safari:</strong> Preferências &gt; Privacidade &gt; Gerenciar dados
                      </div>
                      <div className="bg-muted/30 rounded-lg p-3 text-sm text-muted-foreground">
                        <strong>Edge:</strong> Configurações &gt; Privacidade &gt; Cookies
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Additional tracking technologies */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Tecnologias de rastreamento adicionais</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Além de cookies, podemos usar:
                    </p>

                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                      <li><strong>Web beacons</strong> (pixels invisíveis) para medir eficácia de campanhas;</li>
                      <li><strong>IDs locais</strong> armazenados em localStorage para funcionalidades avançadas.</li>
                    </ul>

                    <p className="text-muted-foreground leading-relaxed">
                      Essas tecnologias seguem os mesmos princípios de privacidade descritos acima.
                    </p>
                  </div>
                </div>
              </section>

              {/* Behavioral advertising */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Publicidade comportamental</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Usamos redes de anúncios que exibem publicidade personalizada com base em seu comportamento online. Essas redes não coletam seu nome, e-mail ou dados pessoais diretamente, a menos que você os forneça voluntariamente.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Se desejar, você pode desativar a publicidade direcionada via:
                    </p>

                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span>Gerenciador de Consentimento (banner do site);</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                          Network Advertising Initiative (NAI)
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                          Digital Advertising Alliance (DAA)
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Updates */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <RefreshCw className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Atualizações nesta política</h2>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Podemos atualizar esta Política de Cookies periodicamente. A data da última atualização está sempre no topo da página. Recomendamos revisar regularmente.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-md border border-primary/20 animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Contato</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Para dúvidas sobre cookies ou privacidade, entre em contato conosco:
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <div>
                          <span className="text-muted-foreground">E-mail institucional: </span>
                          <a href="mailto:privacidade@beijodarua.com.br" className="text-primary hover:underline font-medium">
                            privacidade@beijodarua.com.br
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-1" />
                        <div className="text-muted-foreground">
                          <p>Av. Júlia Freire, 1200 – Expedicionários</p>
                          <p>João Pessoa – PB, CEP 58041-000</p>
                          <p className="mt-1">🇧🇷 Brasil</p>
                        </div>
                      </div>
                    </div>
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

export default PoliticaCookies;
