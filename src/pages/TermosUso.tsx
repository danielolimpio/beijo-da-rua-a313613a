import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { Scale, FileCheck, AlertCircle, Users, Gavel, ShieldCheck } from "lucide-react";

const TermosUso = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | Beijo da Rua - Condições de Utilização do Site</title>
        <meta name="description" content="Leia nossos termos de uso completos. Conheça as regras, direitos, responsabilidades e condições para utilização do Beijo da Rua - guia sobre apps de namoro." />
        <meta name="keywords" content="termos de uso, condições de uso, regras do site, acordo de usuário, termos e condições, política de uso" />
        <link rel="canonical" href="https://www.beijodarua.com.br/termos-de-uso" />
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
                    <Scale className="w-12 h-12 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                Termos de Uso
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Condições gerais de uso do site Beijo da Rua
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Última atualização: 25 de novembro de 2025
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Introduction */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <FileCheck className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">1. Aceitação dos Termos</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Bem-vindo ao Beijo da Rua! Estes Termos de Uso ("Termos") estabelecem as condições legais que regem o uso de nosso site, conteúdo, produtos e serviços disponibilizados em www.beijodarua.com.br e seus subdomínios (coletivamente, "Site").
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Ao acessar ou utilizar nosso Site, você concorda em ficar vinculado a estes Termos, nossa Política de Privacidade e todas as leis e regulamentos aplicáveis. Se você não concordar com alguma parte destes Termos, não está autorizado a acessar ou usar o Site.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Recomendamos a leitura atenta deste documento antes de utilizar nossos serviços. Caso tenha dúvidas, entre em contato através do e-mail <a href="mailto:contato@beijodarua.com.br" className="text-primary hover:underline">contato@beijodarua.com.br</a>.
                    </p>
                  </div>
                </div>
              </section>

              {/* About the Service */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">2. Sobre o Serviço</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      O Beijo da Rua é uma plataforma informativa e educacional dedicada a fornecer conteúdo, guias, análises e recomendações sobre aplicativos de namoro e relacionamentos, com foco no público masculino brasileiro.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">2.1 Natureza do Conteúdo</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Nosso conteúdo inclui, mas não se limita a:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>Artigos e guias sobre aplicativos de namoro e relacionamentos</li>
                      <li>Análises e comparações de diferentes plataformas de encontros</li>
                      <li>Dicas e estratégias para otimização de perfis e comunicação online</li>
                      <li>Quizzes interativos e ferramentas de autoconhecimento</li>
                      <li>Histórias de sucesso e depoimentos de usuários</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">2.2 Disclaimer Importante</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      O Beijo da Rua é um site informativo independente e não está afiliado, endossado ou patrocinado pelos aplicativos de namoro mencionados em nosso conteúdo, salvo quando expressamente indicado. As opiniões expressas são baseadas em pesquisas, experiências de usuários e análises independentes.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Não garantimos resultados específicos no uso de aplicativos de namoro. O sucesso em relacionamentos depende de múltiplos fatores individuais e contextuais que estão além do nosso controle.
                    </p>
                  </div>
                </div>
              </section>

              {/* User Registration */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Cadastro e Conta de Usuário</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">3.1 Elegibilidade</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para criar uma conta em nosso Site, você deve:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                  <li>Ter pelo menos 18 anos de idade</li>
                  <li>Fornecer informações verdadeiras, precisas, atuais e completas</li>
                  <li>Manter e atualizar prontamente suas informações de cadastro</li>
                  <li>Ser legalmente capaz de aceitar estes Termos</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-foreground">3.2 Segurança da Conta</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Você é responsável por:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                  <li>Manter a confidencialidade de sua senha e credenciais de acesso</li>
                  <li>Todas as atividades realizadas através de sua conta</li>
                  <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
                  <li>Garantir que sai de sua conta ao final de cada sessão</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-foreground">3.3 Suspensão e Encerramento</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de suspender ou encerrar sua conta, a nosso exclusivo critério, sem aviso prévio, por violação destes Termos, conduta inadequada ou qualquer outra razão que consideremos necessária para proteger nossos serviços e comunidade.
                </p>
              </section>

              {/* Acceptable Use */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <AlertCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">4. Uso Aceitável</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Ao utilizar nosso Site, você concorda em NÃO:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4 mb-6">
                      <li>Violar quaisquer leis ou regulamentos locais, estaduais, nacionais ou internacionais</li>
                      <li>Infringir direitos de propriedade intelectual de terceiros</li>
                      <li>Transmitir conteúdo ilegal, ofensivo, difamatório, obsceno ou prejudicial</li>
                      <li>Assediar, intimidar, ameaçar ou discriminar outros usuários</li>
                      <li>Fazer spam, phishing ou distribuir malware</li>
                      <li>Tentar obter acesso não autorizado a sistemas, contas ou redes</li>
                      <li>Interferir ou interromper o funcionamento do Site</li>
                      <li>Coletar informações de outros usuários sem consentimento</li>
                      <li>Fazer uso comercial não autorizado do conteúdo do Site</li>
                      <li>Representar falsamente sua identidade ou afiliação</li>
                      <li>Utilizar bots, scrapers ou ferramentas automatizadas sem permissão</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">4.1 Conduta Ética</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Esperamos que todos os usuários mantenham um comportamento respeitoso e ético. O Beijo da Rua promove relacionamentos saudáveis baseados em respeito mútuo, comunicação honesta e consentimento. Não toleramos comportamentos abusivos, manipulativos ou desrespeitosos.
                    </p>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <ShieldCheck className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">5. Propriedade Intelectual</h2>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground">5.1 Nosso Conteúdo</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Todo o conteúdo presente no Site, incluindo textos, gráficos, logos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade do Beijo da Rua ou de seus licenciadores e está protegido pelas leis brasileiras e internacionais de direitos autorais.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">5.2 Licença de Uso</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para acessar e usar o Site para fins pessoais e não comerciais. Esta licença não inclui:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>Qualquer revenda ou uso comercial do Site ou seu conteúdo</li>
                      <li>Coleta e uso de listagens de produtos, descrições ou preços</li>
                      <li>Qualquer uso derivado do Site ou seu conteúdo</li>
                      <li>Download ou cópia de informações de conta para benefício de terceiros</li>
                      <li>Uso de mineração de dados, robôs ou ferramentas similares de coleta e extração de dados</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">5.3 Conteúdo de Usuários</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Ao enviar, publicar ou transmitir conteúdo para o Site (comentários, avaliações, fotos, etc.), você concede ao Beijo da Rua uma licença mundial, não exclusiva, isenta de royalties, sublicenciável e transferível para usar, reproduzir, distribuir, preparar trabalhos derivados, exibir e executar esse conteúdo em conexão com o Site e nossos negócios.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Você declara e garante que possui todos os direitos necessários sobre o conteúdo que enviar e que tal conteúdo não viola direitos de terceiros nem estes Termos.
                    </p>
                  </div>
                </div>
              </section>

              {/* Disclaimers */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <Gavel className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">6. Isenções de Responsabilidade</h2>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground">6.1 Informações Gerais</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      O conteúdo do Site é fornecido apenas para fins informativos e educacionais. Não oferecemos aconselhamento profissional em relacionamentos, psicologia, saúde mental ou questões legais. Para orientação profissional específica, consulte especialistas qualificados.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">6.2 Precisão do Conteúdo</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Embora nos esforcemos para manter informações precisas e atualizadas, não garantimos a completude, confiabilidade ou exatidão de qualquer conteúdo no Site. As informações podem conter imprecisões ou erros tipográficos, e podemos fazer alterações ou melhorias a qualquer momento.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">6.3 Links de Terceiros</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Nosso Site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo, políticas de privacidade ou práticas desses sites e não assumimos responsabilidade por eles. Você reconhece e concorda que não somos responsáveis por quaisquer danos ou perdas causados pelo uso de tais sites.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">6.4 Sem Garantias</h3>
                    <p className="text-muted-foreground leading-relaxed uppercase font-semibold mb-2">
                      O SITE É FORNECIDO "COMO ESTÁ" E "CONFORME DISPONÍVEL", SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Não garantimos que o Site será ininterrupto, seguro, livre de erros ou vírus. O uso do Site é por sua conta e risco.
                    </p>
                  </div>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 uppercase font-semibold">
                  NA MÁXIMA EXTENSÃO PERMITIDA PELA LEI APLICÁVEL, O BEIJO DA RUA E SEUS DIRETORES, FUNCIONÁRIOS, AGENTES E PARCEIROS NÃO SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS, INCLUINDO, MAS NÃO LIMITADO A, PERDA DE LUCROS, DADOS, USO OU OUTROS PREJUÍZOS INTANGÍVEIS.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Em jurisdições que não permitem a exclusão ou limitação de responsabilidade por danos consequenciais ou incidentais, nossa responsabilidade será limitada à extensão máxima permitida por lei.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa responsabilidade total em relação a qualquer reclamação sob estes Termos não excederá o valor que você nos pagou pelos serviços nos últimos doze meses, ou R$ 100,00 (cem reais), o que for maior.
                </p>
              </section>

              {/* Indemnification */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Indenização</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Você concorda em indenizar, defender e isentar o Beijo da Rua, suas subsidiárias, afiliadas, parceiros, diretores, agentes, funcionários e licenciadores de e contra todas as reivindicações, perdas, despesas, danos e custos, incluindo honorários advocatícios razoáveis, resultantes de:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Sua violação destes Termos</li>
                  <li>Seu uso indevido do Site</li>
                  <li>Sua violação de quaisquer direitos de terceiros, incluindo direitos de propriedade intelectual</li>
                  <li>Qualquer conteúdo que você enviar ou transmitir através do Site</li>
                  <li>Sua conduta em conexão com o Site</li>
                </ul>
              </section>

              {/* Governing Law */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <h2 className="text-2xl font-bold mb-4 text-foreground">9. Lei Aplicável e Jurisdição</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil, sem considerar seus conflitos de disposições legais.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Você concorda em se submeter à jurisdição exclusiva dos tribunais localizados em João Pessoa, Paraíba, Brasil, para resolução de quaisquer disputas decorrentes destes Termos ou do uso do Site.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Se alguma disposição destes Termos for considerada inválida ou inexequível, as disposições restantes permanecerão em pleno vigor e efeito.
                </p>
              </section>

              {/* Modifications */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <h2 className="text-2xl font-bold mb-4 text-foreground">10. Modificações dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento, a nosso exclusivo critério. Se uma revisão for material, tentaremos fornecer aviso prévio de pelo menos 30 dias antes de quaisquer novos termos entrarem em vigor.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O que constitui uma mudança material será determinado a nosso exclusivo critério. Alterações significativas serão comunicadas por e-mail ou através de aviso destacado no Site.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ao continuar a acessar ou usar nosso Site após essas revisões entrarem em vigor, você concorda em ficar vinculado aos termos revisados. Se você não concordar com os novos termos, deverá parar de usar o Site.
                </p>
              </section>

              {/* General Provisions */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '1s' }}>
                <h2 className="text-2xl font-bold mb-4 text-foreground">11. Disposições Gerais</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">11.1 Acordo Integral</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Estes Termos, juntamente com nossa Política de Privacidade, constituem o acordo integral entre você e o Beijo da Rua e substituem todos os acordos anteriores relativos ao assunto.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">11.2 Renúncia</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nenhuma renúncia de qualquer termo destes Termos será considerada uma renúncia adicional ou contínua de tal termo ou de qualquer outro termo, e nossa falha em fazer valer qualquer direito ou disposição destes Termos não constituirá uma renúncia de tal direito ou disposição.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">11.3 Divisibilidade</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se qualquer disposição destes Termos for considerada inválida ou inexequível por um tribunal, as disposições restantes destes Termos permanecerão em vigor.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">11.4 Cessão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Você não pode ceder ou transferir estes Termos, no todo ou em parte, sem nosso consentimento prévio por escrito. Podemos ceder nossos direitos sob estes Termos sem restrição. Qualquer tentativa de cessão em violação a esta disposição será nula.
                </p>
              </section>

              {/* Contact */}
              <section className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 animate-fade-in" style={{ animationDelay: '1.1s' }}>
                <h2 className="text-2xl font-bold mb-4 text-foreground">12. Informações de Contato</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para questões sobre estes Termos de Uso, entre em contato conosco:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Razão Social:</strong> Beijo da Rua - Conteúdo Digital LTDA</p>
                  <p><strong>E-mail:</strong> <a href="mailto:contato@beijodarua.com.br" className="text-primary hover:underline">contato@beijodarua.com.br</a></p>
                  <p><strong>E-mail Jurídico:</strong> <a href="mailto:juridico@beijodarua.com.br" className="text-primary hover:underline">juridico@beijodarua.com.br</a></p>
                  <p><strong>Endereço:</strong> Av. Julia Freire, 1200 – João Pessoa, PB, CEP 58000-000</p>
                  <p><strong>Telefone:</strong> +55 12 98251-9116</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-6 text-sm italic">
                  Agradecemos por ler nossos Termos de Uso. Seu uso responsável e respeitoso do Site contribui para uma comunidade melhor e mais positiva.
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermosUso;
