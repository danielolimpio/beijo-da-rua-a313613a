import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";

const PoliticaPrivacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Beijo da Rua - Proteção de Dados e Privacidade</title>
        <meta name="description" content="Conheça nossa política de privacidade detalhada. Saiba como coletamos, usamos, armazenamos e protegemos seus dados pessoais no Beijo da Rua de acordo com a LGPD." />
        <meta name="keywords" content="política de privacidade, proteção de dados, LGPD, privacidade online, dados pessoais, segurança da informação" />
        <link rel="canonical" href="https://www.beijodarua.com.br/politica-de-privacidade" />
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
                    <Shield className="w-12 h-12 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                Política de Privacidade
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Seu direito à privacidade e à proteção de dados pessoais é nossa prioridade
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
                  <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introdução</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Bem-vindo à Política de Privacidade do Beijo da Rua. Este documento foi desenvolvido em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei 13.709/2018) e tem como objetivo esclarecer como coletamos, utilizamos, armazenamos, compartilhamos e protegemos suas informações pessoais.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      O Beijo da Rua é um guia informativo sobre aplicativos de namoro, criado especialmente para o público masculino brasileiro. Nosso compromisso é fornecer conteúdo de qualidade enquanto respeitamos integralmente sua privacidade e seus direitos como titular de dados pessoais.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Collection */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <Database className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">2. Dados Coletados</h2>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground">2.1 Dados Fornecidos Voluntariamente</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Coletamos informações que você nos fornece diretamente ao utilizar nossos serviços, incluindo:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>Nome completo e endereço de e-mail ao se cadastrar ou entrar em contato</li>
                      <li>Dados de perfil quando você cria uma conta em nosso site</li>
                      <li>Respostas aos questionários e quizzes interativos</li>
                      <li>Comentários, avaliações e feedback sobre nosso conteúdo</li>
                      <li>Preferências de comunicação e interesses declarados</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">2.2 Dados Coletados Automaticamente</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Quando você navega em nosso site, podemos coletar automaticamente:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>Endereço IP e dados de localização geográfica aproximada</li>
                      <li>Tipo de navegador, sistema operacional e dispositivo utilizado</li>
                      <li>Páginas visitadas, tempo de permanência e padrões de navegação</li>
                      <li>Origem do acesso (link de referência) e termos de busca utilizados</li>
                      <li>Cookies e tecnologias similares de rastreamento</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">2.3 Dados Sensíveis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      O Beijo da Rua não coleta intencionalmente dados sensíveis conforme definido pela LGPD (origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, dados genéticos, biométricos ou relacionados à saúde ou vida sexual). Caso você forneça espontaneamente tais informações, elas serão tratadas com o máximo cuidado e apenas com seu consentimento explícito.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Usage */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <Eye className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">3. Uso dos Dados</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Utilizamos seus dados pessoais para as seguintes finalidades legítimas:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                      <li><strong>Prestação de Serviços:</strong> Fornecer acesso ao conteúdo, funcionalidades e recursos do site, incluindo artigos, guias, quizzes e recomendações personalizadas</li>
                      <li><strong>Comunicação:</strong> Enviar newsletters, atualizações sobre novos conteúdos, responder dúvidas e fornecer suporte ao usuário</li>
                      <li><strong>Personalização:</strong> Adaptar o conteúdo e as recomendações às suas preferências e interesses declarados</li>
                      <li><strong>Análise e Melhoria:</strong> Compreender como nossos usuários interagem com o site para melhorar a experiência, desenvolver novos recursos e otimizar nosso conteúdo</li>
                      <li><strong>Segurança:</strong> Detectar, prevenir e combater fraudes, abusos e atividades ilegais, protegendo nossos usuários e nossa plataforma</li>
                      <li><strong>Cumprimento Legal:</strong> Atender obrigações legais, regulatórias e solicitações de autoridades competentes</li>
                      <li><strong>Marketing:</strong> Enviar comunicações promocionais sobre nossos serviços e parceiros, sempre respeitando suas preferências de comunicação</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Sharing */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <UserCheck className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">4. Compartilhamento de Dados</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      O Beijo da Rua não vende seus dados pessoais a terceiros. Podemos compartilhar suas informações apenas nas seguintes situações:
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">4.1 Prestadores de Serviços</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Compartilhamos dados com empresas que nos auxiliam na operação do site, como provedores de hospedagem, análise de dados, envio de e-mails e processamento de pagamentos. Esses parceiros estão contratualmente obrigados a proteger suas informações e utilizá-las apenas para os fins especificados.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">4.2 Parceiros Comerciais</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Com seu consentimento expresso, podemos compartilhar dados com parceiros para ofertas e promoções relevantes. Você pode revogar este consentimento a qualquer momento através das configurações da sua conta.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">4.3 Obrigações Legais</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Podemos divulgar suas informações quando exigido por lei, ordem judicial, processo legal ou solicitação governamental, bem como para proteger nossos direitos, propriedade ou segurança, ou de nossos usuários e do público.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">4.4 Transferência de Negócios</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Em caso de fusão, aquisição, venda de ativos ou reorganização empresarial, seus dados pessoais podem ser transferidos. Garantiremos que a empresa adquirente mantenha o mesmo nível de proteção estabelecido nesta política.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <Lock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">5. Segurança dos Dados</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Implementamos medidas técnicas e organizacionais robustas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição, incluindo:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6 ml-4">
                      <li><strong>Criptografia:</strong> Utilizamos certificados SSL/TLS para proteger a transmissão de dados entre seu navegador e nossos servidores</li>
                      <li><strong>Controle de Acesso:</strong> Acesso restrito aos dados pessoais apenas para funcionários e prestadores de serviços autorizados que necessitam conhecê-los</li>
                      <li><strong>Monitoramento:</strong> Sistemas de detecção de intrusão e monitoramento contínuo de atividades suspeitas</li>
                      <li><strong>Backups Seguros:</strong> Cópias de segurança regulares armazenadas em ambientes protegidos</li>
                      <li><strong>Treinamento:</strong> Capacitação contínua de nossa equipe sobre boas práticas de segurança e proteção de dados</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      Apesar de todos os esforços, nenhum sistema é 100% seguro. Em caso de incidente de segurança que possa afetar seus dados, você será notificado conforme exigido pela legislação aplicável.
                    </p>
                  </div>
                </div>
              </section>

              {/* User Rights */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">6. Seus Direitos</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      De acordo com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                      <li><strong>Confirmação e Acesso:</strong> Confirmar se tratamos seus dados e solicitar acesso a eles</li>
                      <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados</li>
                      <li><strong>Anonimização ou Bloqueio:</strong> Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade</li>
                      <li><strong>Portabilidade:</strong> Solicitar a portabilidade de seus dados a outro fornecedor de serviço</li>
                      <li><strong>Eliminação:</strong> Solicitar a exclusão dos dados tratados com seu consentimento</li>
                      <li><strong>Revogação do Consentimento:</strong> Revogar seu consentimento a qualquer momento</li>
                      <li><strong>Oposição:</strong> Opor-se ao tratamento de dados realizado com base em uma das hipóteses de dispensa de consentimento</li>
                      <li><strong>Informação sobre Compartilhamento:</strong> Obter informações sobre entidades públicas e privadas com as quais compartilhamos seus dados</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-6">
                      Para exercer qualquer um desses direitos, entre em contato através do e-mail <a href="mailto:privacidade@beijodarua.com.br" className="text-primary hover:underline">privacidade@beijodarua.com.br</a>. Responderemos sua solicitação no prazo máximo de 15 dias.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Cookies e Tecnologias Similares</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. Cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>Lembrar suas preferências e configurações</li>
                  <li>Entender como você interage com nosso site</li>
                  <li>Personalizar conteúdo e anúncios</li>
                  <li>Analisar o desempenho do site</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Você pode gerenciar ou desativar cookies através das configurações do seu navegador. No entanto, isso pode afetar algumas funcionalidades do site.
                </p>
              </section>

              {/* Data Retention */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Retenção de Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo requisitos legais, contábeis ou de relatórios.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Quando seus dados não forem mais necessários, eles serão eliminados de forma segura ou anonimizados de maneira irreversível. Os prazos específicos de retenção variam conforme o tipo de dado e a base legal do tratamento.
                </p>
              </section>

              {/* Children */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <h2 className="text-2xl font-bold mb-4 text-foreground">9. Menores de Idade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nosso site é destinado a pessoas maiores de 18 anos. Não coletamos intencionalmente informações de menores de idade. Se você é pai, mãe ou responsável e acredita que seu filho nos forneceu dados pessoais, entre em contato conosco imediatamente para que possamos tomar as medidas apropriadas.
                </p>
              </section>

              {/* Updates */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <h2 className="text-2xl font-bold mb-4 text-foreground">10. Alterações na Política</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas, tecnologias ou requisitos legais. A versão mais recente sempre estará disponível nesta página, com a data de atualização claramente indicada.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Alterações significativas serão comunicadas por e-mail ou através de aviso destacado em nosso site. Recomendamos que você revise esta política regularmente para se manter informado sobre como protegemos suas informações.
                </p>
              </section>

              {/* Contact */}
              <section className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 animate-fade-in" style={{ animationDelay: '1s' }}>
                <h2 className="text-2xl font-bold mb-4 text-foreground">11. Contato</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para questões relacionadas a esta Política de Privacidade ou ao tratamento de seus dados pessoais, entre em contato conosco:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>E-mail:</strong> <a href="mailto:privacidade@beijodarua.com.br" className="text-primary hover:underline">privacidade@beijodarua.com.br</a></p>
                  <p><strong>Endereço:</strong> Av. Julia Freire, 1200 – João Pessoa, PB</p>
                  <p><strong>Telefone:</strong> +55 12 98251-9116</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  Você também tem o direito de apresentar uma reclamação à Autoridade Nacional de Proteção de Dados (ANPD) se acreditar que o tratamento de seus dados pessoais viola a LGPD.
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

export default PoliticaPrivacidade;
