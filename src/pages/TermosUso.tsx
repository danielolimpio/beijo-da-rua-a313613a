import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { Scale, FileText, AlertCircle, Users, Gavel, ShieldCheck, BookOpen, Ban, Send, Settings, RefreshCw, Globe, MessageSquare, Shield, FileCheck, Mail, MapPin } from "lucide-react";

const TermosUso = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | Beijo da Rua - Condições de Utilização do Site</title>
        <meta name="description" content="Leia nossos termos de uso completos. Conheça as regras, direitos, responsabilidades e condições para utilização do Beijo da Rua - guia sobre apps de namoro." />
        <meta name="keywords" content="termos de uso, condições de uso, regras do site, acordo de usuário, termos e condições, política de uso" />
        <link rel="canonical" href="https://beijodarua.com.br/termos-de-uso/" />
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
                Última atualização: 13 de dezembro de 2025
              </p>
            </div>

            {/* Index Card */}
            <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-md border border-primary/20 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Índice</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Nossos Serviços",
                  "Direitos de Propriedade Intelectual",
                  "Representações do Usuário",
                  "Atividades Proibidas",
                  "Contribuições Geradas pelo Usuário",
                  "Contribuição/Licença",
                  "Gestão de Serviços",
                  "Vigência e Rescisão",
                  "Modificações e Interrupções",
                  "Lei Aplicável",
                  "Resolução de Controvérsias",
                  "Correções",
                  "Isenção de Responsabilidade",
                  "Limitações de Responsabilidade",
                  "Indenização",
                  "Dados do Usuário",
                  "Comunicações Eletrônicas",
                  "Diversos",
                  "Contate-nos"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <span className="text-primary font-semibold">{index + 1}.</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Content */}
            <div className="space-y-8">
              {/* Acceptance */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <FileCheck className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Aceitação dos Nossos Termos Legais</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Nós somos <strong>Beijo da Rua</strong> ("Empresa", "nós", "nosso").
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Operamos, bem como quaisquer outros produtos e serviços relacionados que façam referência ou estejam vinculados a estes termos legais (os "Termos Legais") (coletivamente, os "Serviços").
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Você pode entrar em contato conosco por e-mail para <a href="mailto:contato@beijodarua.com.br" className="text-primary hover:underline">contato@beijodarua.com.br</a> ou por correio para Av. Júlia Freire, 1200 - Expedicionários, João Pessoa - PB, 58041-000, Brasil.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Estes Termos Legais constituem um acordo juridicamente vinculativo celebrado entre você, seja pessoalmente ou em nome de uma entidade ("você"), e Beijo da Rua. Ao acessar os Serviços, você concorda que leu, entendeu e aceitou estar vinculado a todos estes Termos Legais.
                    </p>

                    <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 mb-4">
                      <p className="text-foreground font-semibold">
                        CASO NÃO CONCORDE COM TODOS ESTES TERMOS LEGAIS, VOCÊ ESTÁ EXPRESSAMENTE PROIBIDO DE USAR OS SERVIÇOS E DEVE INTERROMPER O USO IMEDIATAMENTE.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Termos e condições suplementares ou documentos que possam ser publicados nos Serviços periodicamente são expressamente incorporados a este documento por referência. Reservamo-nos o direito, a nosso exclusivo critério, de fazer alterações ou modificações a estes Termos Legais a qualquer momento e por qualquer motivo.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Notificaremos você sobre quaisquer alterações atualizando a data de "Última atualização" destes Termos Legais. Você renuncia ao direito de receber notificação específica de cada alteração. É sua responsabilidade revisar periodicamente estes Termos Legais para se manter informado sobre as atualizações.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Recomendamos que imprima uma cópia destes Termos Legais para seus registros.
                    </p>
                  </div>
                </div>
              </section>

              {/* 1. Our Services */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Settings className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">1. Nossos Serviços</h2>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      As informações fornecidas ao usar os Serviços não se destinam à distribuição ou uso por qualquer pessoa ou entidade em qualquer jurisdição ou país onde tal distribuição ou uso seja contrário à lei ou regulamentação, ou que nos sujeite a qualquer exigência de registro nessa jurisdição ou país. Consequentemente, as pessoas que optarem por acessar os Serviços de outros locais o fazem por iniciativa própria e são as únicas responsáveis pelo cumprimento das leis locais, se, e na medida em que estas forem aplicáveis.
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. Intellectual Property */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <ShieldCheck className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">2. Direitos de Propriedade Intelectual</h2>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Nossa Propriedade Intelectual</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Somos proprietários ou licenciados de todos os direitos de propriedade intelectual dos nossos Serviços, incluindo todo o código-fonte, bancos de dados, funcionalidades, software, design do site, áudio, vídeo, texto, fotografias e elementos gráficos presentes nos Serviços (coletivamente, o "Conteúdo"), bem como as marcas comerciais, marcas de serviço e logotipos nele contidos (as "Marcas").
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Nosso Conteúdo e nossas Marcas são protegidos por leis de direitos autorais e marcas registradas (e várias outras leis de propriedade intelectual e de concorrência desleal) e tratados ao redor do mundo.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      O Conteúdo e as Marcas são fornecidos nos ou através dos Serviços "NO ESTADO EM QUE SE ENCONTRAM" para o seu uso pessoal, não comercial ou para fins comerciais internos apenas.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Seu Uso de Nossos Serviços</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Sujeito ao seu cumprimento destes Termos Legais, incluindo a seção "ATIVIDADES PROIBIDAS" abaixo, concedemos a você uma licença não exclusiva, intransferível e revogável para:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                      <li>Acessar os Serviços; e</li>
                      <li>Baixar ou imprimir uma cópia de qualquer parte do Conteúdo ao qual você tenha obtido acesso de forma adequada,</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      exclusivamente para seu uso pessoal, não comercial ou para fins comerciais internos.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Exceto conforme estabelecido nesta seção ou em outras partes de nossos Termos Legais, nenhuma parte dos Serviços, Conteúdo ou Marcas pode ser copiada, reproduzida, agregada, republicada, carregada, publicada, exibida publicamente, codificada, traduzida, transmitida, distribuída, vendida, licenciada ou explorada de qualquer outra forma para qualquer finalidade comercial, sem nossa prévia autorização expressa por escrito.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Caso deseje utilizar os Serviços, o Conteúdo ou as Marcas de forma diferente da estabelecida nesta seção, envie sua solicitação para: <a href="mailto:contato@beijodarua.com.br" className="text-primary hover:underline">contato@beijodarua.com.br</a>.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Reservamo-nos todos os direitos não expressamente concedidos a você em relação aos Serviços, Conteúdo e Marcas.
                    </p>

                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-4">
                      <p className="text-foreground font-medium">
                        Qualquer violação destes Direitos de Propriedade Intelectual constituirá uma violação material dos nossos Termos Legais e o seu direito de utilizar os nossos Serviços será imediatamente rescindido.
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Suas Contribuições</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Por favor, revise esta seção e a seção "ATIVIDADES PROIBIDAS" atentamente antes de usar nossos Serviços para entender (a) os direitos que você nos concede e (b) as obrigações que você tem ao publicar ou carregar qualquer conteúdo por meio dos Serviços.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>Envio de informações:</strong> Ao enviar diretamente qualquer pergunta, comentário, sugestão, ideia, feedback ou outras informações sobre os Serviços ("Submissões"), você concorda em nos ceder todos os direitos de propriedade intelectual relativos a ele. Você concorda que seremos proprietários deste conteúdo e teremos o direito de utilizá-lo e divulgá-lo irrestritamente para qualquer finalidade lícita, comercial ou não, sem qualquer obrigação de reconhecimento ou compensação para você.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>Você é responsável pelo conteúdo que publica ou carrega:</strong> Ao nos enviar suas contribuições por meio de qualquer parte dos Serviços, você:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                      <li>Confirma que leu e concorda com a seção "ATIVIDADES PROIBIDAS" e não publicará, enviará, divulgará, carregará ou transmitirá por meio dos Serviços qualquer Envio que seja ilegal, assediador, odioso, prejudicial, difamatório, obsceno, intimidatório, abusivo, discriminatório, ameaçador para qualquer pessoa ou grupo, sexualmente explícito, falso, impreciso, enganoso ou que induza ao erro;</li>
                      <li>Na medida permitida pela legislação aplicável, renuncia a todos e quaisquer direitos morais relativos a qualquer Submissão desse tipo;</li>
                      <li>Garante que qualquer Submissão desse tipo seja original ou você possui os direitos necessários e licenças para submetê-las;</li>
                      <li>Garante e declara que suas Submissões não constituem informações confidenciais.</li>
                    </ul>

                    <p className="text-muted-foreground leading-relaxed">
                      Você é o único responsável por suas Submissões e você concorda expressamente em nos reembolsar por todas e quaisquer perdas que possamos sofrer devido à sua violação de (a) esta seção, (b) quaisquer direitos de propriedade intelectual de terceiros ou (c) lei aplicável.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. User Representations */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">3. Representações do Usuário</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Ao utilizar os Serviços, você declara e garante que:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                      <li>Você tem capacidade legal e concorda em cumprir estes Termos Legais;</li>
                      <li>Você não é menor de idade na jurisdição em que reside;</li>
                      <li>Você não acessará os Serviços por meios automatizados ou não humanos, seja por meio de um bot, script ou de outra forma;</li>
                      <li>Você não usará os Serviços para qualquer finalidade ilegal ou não autorizada;</li>
                      <li>Seu uso dos Serviços não violará nenhuma lei ou regulamento aplicável.</li>
                    </ul>

                    <p className="text-muted-foreground leading-relaxed">
                      Caso você forneça informações falsas, imprecisas, desatualizadas ou incompletas, temos o direito de suspender ou encerrar sua conta e recusar qualquer uso atual ou futuro dos Serviços (ou qualquer parte deles).
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. Prohibited Activities */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Ban className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">4. Atividades Proibidas</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Você não poderá acessar ou usar os Serviços para qualquer finalidade que não seja aquela para a qual os disponibilizamos. Os Serviços não podem ser usados em conexão com qualquer atividade comercial, exceto aquelas que sejam especificamente endossadas ou aprovadas por nós.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Como usuário dos Serviços, você concorda em não:
                    </p>

                    <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                      <li>Extrair sistematicamente dados ou outros conteúdos dos Serviços para criar ou compilar, direta ou indiretamente, uma coleção, compilação, banco de dados ou diretório sem nossa autorização por escrito.</li>
                      <li>Enganar, fraudar ou induzir em erro a nós e a outros usuários, especialmente em qualquer tentativa de obter informações confidenciais da conta, como senhas de usuário.</li>
                      <li>Contornar, desativar ou interferir de qualquer outra forma com os recursos de segurança dos Serviços.</li>
                      <li>Desmerecer, difamar ou prejudicar de qualquer outra forma, em nossa opinião, a nós e/ou aos Serviços.</li>
                      <li>Utilizar qualquer informação obtida através dos Serviços para assediar, abusar ou prejudicar outra pessoa.</li>
                      <li>Fazer uso indevido de nossos serviços de suporte ou enviar relatos falsos de abuso ou má conduta.</li>
                      <li>Utilizar os Serviços de forma incompatível com quaisquer leis ou regulamentos aplicáveis.</li>
                      <li>Envolver-se em enquadramento ou vinculação não autorizados aos Serviços.</li>
                      <li>Carregar ou transmitir vírus, cavalos de Troia ou outros materiais que interfiram no uso dos Serviços.</li>
                      <li>Usar de forma automatizada do sistema, como o uso de scripts para enviar comentários ou mensagens.</li>
                      <li>Remover o aviso de direitos autorais ou outros avisos de direitos de propriedade de qualquer Conteúdo.</li>
                      <li>Tentar se passar por outro usuário ou pessoa.</li>
                      <li>Carregar ou transmitir qualquer material que funcione como um mecanismo de coleta de informações.</li>
                      <li>Interferir, interromper ou sobrecarregar indevidamente os Serviços ou as redes conectadas aos Serviços.</li>
                      <li>Assediar, incomodar, intimidar ou ameaçar qualquer um de nossos funcionários ou agentes.</li>
                      <li>Tentar contornar quaisquer medidas destinadas a impedir ou restringir o acesso aos Serviços.</li>
                      <li>Copiar ou adaptar o software dos Serviços, incluindo Flash, PHP, HTML, JavaScript ou outros códigos.</li>
                      <li>Decifrar, descompilar, desmontar ou realizar engenharia reversa de qualquer software que faça parte dos Serviços.</li>
                      <li>Usar, iniciar, desenvolver ou distribuir qualquer sistema automatizado que acesse os Serviços.</li>
                      <li>Fazer qualquer uso não autorizado dos Serviços, incluindo a coleta de nomes de usuário e/ou endereços de e-mail.</li>
                      <li>Utilizar os Serviços como parte de qualquer esforço para competir conosco ou para qualquer empreendimento comercial.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 5. User-Generated Contributions */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Send className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">5. Contribuições Geradas pelo Usuário</h2>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Os Serviços não oferecem aos usuários a opção de enviar ou publicar conteúdo. Podemos oferecer a você a oportunidade de criar, enviar, publicar, exibir, transmitir, executar, distribuir ou divulgar conteúdo e materiais para nós ou nos Serviços, incluindo, entre outros, texto, escritos, vídeo, áudio, fotografias, gráficos, comentários, sugestões ou informações pessoais ou outros materiais (coletivamente, "Contribuições"). As Contribuições podem ser visualizadas por outros usuários dos Serviços e por meio de sites de terceiros. Ao criar ou disponibilizar quaisquer Contribuições, você declara e garante que cumpre com todas as disposições destes Termos Legais.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Contribution License */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">6. Contribuição/Licença</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Você e os Serviços concordam que podemos acessar, armazenar, processar e usar quaisquer informações e dados pessoais que você fornecer e suas escolhas (incluindo configurações).
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Ao enviar sugestões ou outros comentários sobre os Serviços, você concorda que podemos usar e compartilhar esses comentários para qualquer finalidade, sem qualquer compensação para você.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Não reivindicamos qualquer direito de propriedade sobre suas Contribuições. Você mantém a propriedade integral de todas as suas Contribuições e de quaisquer direitos de propriedade intelectual ou outros direitos de propriedade associados a elas. Não nos responsabilizamos por quaisquer declarações ou representações contidas em suas Contribuições fornecidas por você em qualquer área dos Serviços. Você é o único responsável por suas Contribuições aos Serviços e concorda expressamente em nos exonerar de toda e qualquer responsabilidade e em se abster de qualquer ação legal contra nós em relação às suas Contribuições.
                    </p>
                  </div>
                </div>
              </section>

              {/* 7. Services Management */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Settings className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">7. Gestão de Serviços</h2>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Reservamo-nos o direito, mas não a obrigação, de: (1) monitorar os Serviços em busca de violações destes Termos Legais; (2) tomar as medidas legais cabíveis contra qualquer pessoa que, a nosso exclusivo critério, viole a lei ou estes Termos Legais, incluindo, sem limitação, denunciar tal usuário às autoridades policiais; (3) a nosso exclusivo critério e sem limitação, recusar, restringir o acesso, limitar a disponibilidade ou desativar (na medida em que for tecnologicamente viável) quaisquer de suas Contribuições ou qualquer parte delas; (4) a nosso exclusivo critério e sem aviso prévio ou responsabilidade, remover dos Serviços ou desativar todos os arquivos e conteúdos que sejam excessivamente grandes ou que, de alguma forma, sobrecarreguem nossos sistemas; e (5) gerenciar os Serviços de maneira a proteger nossos direitos e propriedade e facilitar o funcionamento adequado dos Serviços.
                    </p>
                  </div>
                </div>
              </section>

              {/* 8. Term and Termination */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <AlertCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">8. Vigência e Rescisão</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Estes Termos Legais permanecerão em pleno vigor enquanto você utilizar os Serviços.
                    </p>

                    <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 mb-4">
                      <p className="text-foreground text-sm font-medium">
                        SEM PREJUÍZO DE QUALQUER OUTRA DISPOSIÇÃO DESTES TERMOS LEGAIS, RESERVAMO-NOS O DIREITO DE, A NOSSO CRITÉRIO EXCLUSIVO E SEM AVISO PRÉVIO OU RESPONSABILIDADE, NEGAR O ACESSO E O USO DOS SERVIÇOS (INCLUINDO O BLOQUEIO DE DETERMINADOS ENDEREÇOS IP) A QUALQUER PESSOA, POR QUALQUER MOTIVO OU SEM MOTIVO ALGUM, INCLUINDO, SEM LIMITAÇÃO, POR VIOLAÇÃO DE QUALQUER DECLARAÇÃO, GARANTIA OU CLÁUSULA CONTIDA NESTES TERMOS LEGAIS OU DE QUALQUER LEI OU REGULAMENTO APLICÁVEL.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      PODEMOS ENCERRAR SEU USO OU PARTICIPAÇÃO NOS SERVIÇOS OU EXCLUIR SEUS DADOS. Qualquer conteúdo ou informação que você tenha publicado, a qualquer momento, sem aviso prévio, a nosso critério exclusivo.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Caso sua conta seja encerrada ou suspensa por qualquer motivo, você fica proibido de se registrar e criar uma nova conta em seu nome, com um nome falso ou emprestado, ou em nome de terceiros, mesmo que esteja agindo em nome desses terceiros. Além do encerramento ou suspensão da sua conta, reservamo-nos o direito de tomar as medidas legais cabíveis, incluindo, entre outras, ações cíveis, criminais e cautelares.
                    </p>
                  </div>
                </div>
              </section>

              {/* 9. Modifications and Interruptions */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <RefreshCw className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">9. Modificações e Interrupções</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Reservamo-nos o direito de alterar, modificar ou remover o conteúdo dos Serviços a qualquer momento e por qualquer motivo, a nosso exclusivo critério, sem aviso prévio. No entanto, não temos a obrigação de atualizar qualquer informação em nossos Serviços. Não seremos responsáveis perante você ou terceiros por qualquer modificação, alteração de preço, suspensão ou descontinuidade dos Serviços.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Não podemos garantir que os Serviços estarão disponíveis em todos os momentos. Podemos enfrentar problemas de hardware, software ou outros, ou precisar realizar manutenções relacionadas aos Serviços, resultando em interrupções, atrasos ou erros.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Reservamo-nos o direito de alterar, revisar, atualizar, suspender, descontinuar ou modificar os Serviços de qualquer outra forma, a qualquer momento e por qualquer motivo, sem aviso prévio. Você concorda que não temos qualquer responsabilidade por quaisquer perdas, danos ou inconvenientes causados pela sua incapacidade de acessar ou usar os Serviços durante qualquer período de inatividade ou descontinuidade dos mesmos. Nada nestes Termos Legais será interpretado como uma obrigação nossa de manter e dar suporte aos Serviços ou de fornecer quaisquer correções, atualizações ou versões relacionadas a eles.
                    </p>
                  </div>
                </div>
              </section>

              {/* 10. Governing Law */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">10. Lei Aplicável</h2>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Estes Termos Legais serão regidos e definidos de acordo com as leis da República Federativa do Brasil, e você consente irrevogavelmente que os tribunais do Estado da Paraíba, Brasil, terão jurisdição exclusiva para resolver qualquer disputa que possa surgir em relação a estes Termos Legais.
                    </p>
                  </div>
                </div>
              </section>

              {/* 11. Dispute Resolution */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Gavel className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">11. Resolução de Controvérsias</h2>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Negociações Informais</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Para agilizar a resolução e controlar os custos de qualquer disputa, controvérsia ou reclamação relacionada a estes Termos Legais (cada uma, "Disputa" e, coletivamente, as "Disputas") trazida por você ou por nós (individualmente, uma "Parte" e, coletivamente, as "Partes"), as Partes concordam em primeiro tentar negociar informalmente qualquer Disputa (exceto aquelas Disputas expressamente previstas abaixo) por pelo menos 30 (trinta) dias antes do início da arbitragem. Essas negociações informais começam mediante notificação por escrito de uma Parte à outra.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Arbitragem Vinculativa</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Qualquer disputa decorrente ou relacionada a estes Termos Legais, incluindo qualquer questão relativa à sua existência, validade ou rescisão, será submetida e resolvida definitivamente por arbitragem, de acordo com as regras de arbitragem aplicáveis no Brasil. O número de árbitros será um (1). A sede ou local de arbitragem será João Pessoa, Paraíba, Brasil. O idioma do processo será Português. A lei aplicável a estes Termos Legais será a lei substantiva do Brasil.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Restrições</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      As Partes concordam que qualquer arbitragem será limitada à Disputa entre as Partes individualmente. Na máxima extensão permitida por lei, (a) nenhuma arbitragem será consolidada com qualquer outro processo; (b) não há direito ou autorização para que qualquer Disputa seja arbitrada em caráter coletivo ou em conjunto com outras partes utilizando procedimentos de ação coletiva; e (c) não há direito ou autoridade para que qualquer Disputa seja apresentada em uma suposta capacidade representativa em nome do público em geral ou de quaisquer outras pessoas.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-foreground mt-6">Exceções às Negociações Informais e à Arbitragem</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      As Partes concordam que as seguintes Disputas não estão sujeitas às disposições acima referentes à arbitragem vinculativa em negociações informais: (a) quaisquer Disputas que visem fazer valer ou proteger, ou que digam respeito à validade de, quaisquer direitos de propriedade intelectual de uma Parte; (b) qualquer Disputa relacionada a, ou decorrente de, alegações de roubo, pirataria, invasão de privacidade ou uso não autorizado; e (c) qualquer pedido de medida cautelar. Se esta disposição for considerada ilegal ou inexequível, nenhuma das Partes optará pela arbitragem de qualquer Disputa abrangida pela parte desta disposição considerada ilegal ou inexequível, e tal Disputa será decidida por um tribunal de jurisdição competente dentre os tribunais listados acima, e as Partes concordam em se submeter à jurisdição pessoal desse tribunal.
                    </p>
                  </div>
                </div>
              </section>

              {/* 12. Corrections */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <h2 className="text-2xl font-bold mb-4 text-foreground">12. Correções</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pode haver informações nos Serviços que contenham erros tipográficos, imprecisões ou omissões, incluindo descrições, preços, disponibilidade e outras informações diversas. Reservamo-nos o direito de corrigir quaisquer erros, imprecisões ou omissões e de alterar ou atualizar as informações nos Serviços a qualquer momento, sem aviso prévio.
                </p>
              </section>

              {/* 13. Disclaimer */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">13. Isenção de Responsabilidade</h2>
                    
                    <div className="bg-muted/50 border border-border rounded-xl p-4 mb-4">
                      <p className="text-foreground font-medium text-sm uppercase">
                        OS SERVIÇOS SÃO FORNECIDOS "NO ESTADO EM QUE SE ENCONTRAM" E "CONFORME DISPONIBILIDADE". VOCÊ CONCORDA QUE O SEU ACESSO E USO DOS SERVIÇOS É POR SUA PRÓPRIA CONTA E RISCO.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm uppercase">
                      NA MÁXIMA EXTENSÃO PERMITIDA PELA LEGISLAÇÃO APLICÁVEL, NÓS E NOSSOS DIRETORES, FUNCIONÁRIOS, AGENTES, PARCEIROS E FORNECEDORES RENUNCIAMOS EXPRESSAMENTE A TODAS AS GARANTIAS, EXPRESSAS OU IMPLÍCITAS, INCLUINDO, SEM LIMITAÇÃO, AS GARANTIAS IMPLÍCITAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA, NÃO VIOLAÇÃO DE DIREITOS DE TERCEIROS E DISPONIBILIDADE CONTÍNUA.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>NÃO GARANTIMOS QUE:</strong>
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                      <li>OS SERVIÇOS SEJAM PRECISOS, COMPLETOS, CONFIÁVEIS, ATUAIS OU LIVRES DE ERROS;</li>
                      <li>O USO DOS SERVIÇOS SEJA ININTERRUPTO, SEGURO OU LIVRE DE VÍRUS OU OUTROS COMPONENTES MALICIOSOS;</li>
                      <li>OS RESULTADOS OU INFORMAÇÕES OBTIDOS POR MEIO DOS SERVIÇOS (INCLUINDO REVIEWS, OPINIÕES OU RECOMENDAÇÕES) SEJAM ADEQUADOS PARA SEUS OBJETIVOS PESSOAIS OU DE RELACIONAMENTO.</li>
                    </ul>

                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-4">
                      <p className="text-foreground font-medium">
                        O CONTEÚDO DOS NOSSOS SERVIÇOS, INCLUINDO ARTIGOS, ANÁLISES, AVALIAÇÕES E OUTROS MATERIAIS DE ENTRETENIMENTO, É FORNECIDO APENAS PARA FINS INFORMATIVOS E DE ENTRETENIMENTO. NÃO CONSTITUI ACONSELHAMENTO JURÍDICO, PSICOLÓGICO, RELACIONAL OU PROFISSIONAL DE QUALQUER TIPO.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      VOCÊ RECONHECE E CONCORDA QUE NÃO SEREMOS RESPONSÁVEIS PERANTE VOCÊ OU TERCEIROS POR QUAISQUER DANOS DIRETOS, INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU EXEMPLARES, INCLUINDO, SEM LIMITAÇÃO, PERDAS DE LUCROS, DADOS, RECEITA OU OUTRAS PERDAS INTANGÍVEIS, MESMO QUE AVISADOS DA POSSIBILIDADE DE TAIS DANOS, DECORRENTES DO SEU ACESSO OU USO (OU INCAPACIDADE DE USAR) DOS SERVIÇOS.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      NADA NESTA SEÇÃO LIMITARÁ OU EXCLUIRÁ NOSSA RESPONSABILIDADE POR: (a) MORTE OU LESÃO PESSOAL CAUSADA POR NEGLIGÊNCIA; (b) FRAUDE DOLOSA; OU (c) QUALQUER OUTRA RESPONSABILIDADE QUE NÃO POSSA SER LEGALMENTE EXCLUÍDA OU LIMITADA SEGUNDO A LEGISLAÇÃO APLICÁVEL (INCLUINDO A LGPD NO BRASIL OU OUTRAS NORMAS LOCAIS).
                    </p>
                  </div>
                </div>
              </section>

              {/* 14. Limitations of Liability */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <h2 className="text-2xl font-bold mb-4 text-foreground">14. Limitações de Responsabilidade</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm uppercase">
                  EM NENHUMA HIPÓTESE NÓS OU NOSSOS DIRETORES, FUNCIONÁRIOS, AGENTES, SUBSIDIÁRIAS, AFILIADAS OU PARCEIROS SEREMOS RESPONSÁVEIS PERANTE VOCÊ OU QUALQUER TERCEIRO POR QUAISQUER DANOS DIRETOS, INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU EXEMPLARES, INCLUINDO, SEM LIMITAÇÃO, PERDA DE LUCROS, RECEITA, DADOS, OPORTUNIDADES OU OUTRAS PERDAS INTANGÍVEIS, DECORRENTES DO SEU ACESSO, USO OU INCAPACIDADE DE USAR OS SERVIÇOS — MESMO QUE TENHAMOS SIDO AVISADOS DA POSSIBILIDADE DE TAIS DANOS.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  NÃO OBSTANTE QUALQUER DISPOSIÇÃO CONTRÁRIA CONTIDA NESTE DOCUMENTO, NOSSA RESPONSABILIDADE TOTAL PERANTE VOCÊ, POR QUALQUER MOTIVO E INDEPENDENTEMENTE DA FORMA DA AÇÃO, ESTARÁ SEMPRE LIMITADA AO MENOR VALOR ENTRE:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>(a) O VALOR PAGO POR VOCÊ A NÓS, SE HOUVER; OU</li>
                  <li>(b) R$ 100,00 (cem reais), EM CASO DE NÃO HAVERMOS RECEBIDO QUALQUER PAGAMENTO.</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  CERTAS LEIS ESTADUAIS DOS EUA E LEIS INTERNACIONAIS NÃO PERMITEM LIMITAÇÕES EM GARANTIAS IMPLÍCITAS OU A EXCLUSÃO OU LIMITAÇÃO DE CERTOS DANOS. SE ESSAS LEIS SE APLICAREM A VOCÊ, ALGUMAS OU TODAS AS ISENÇÕES OU LIMITAÇÕES ACIMA PODERÃO NÃO SE APLICAR A VOCÊ, E VOCÊ PODE TER DIREITOS ADICIONAIS.
                </p>
              </section>

              {/* 15. Indemnification */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <h2 className="text-2xl font-bold mb-4 text-foreground">15. Indenização</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  VOCÊ CONCORDA EM DEFENDER, INDENIZAR E ISENTAR DE RESPONSABILIDADE nós, nossas subsidiárias, afiliadas, diretores, funcionários, agentes, parceiros e licenciadores, contra qualquer reclamação, demanda, perda, dano, responsabilidade, despesa (incluindo honorários advocatícios razoáveis) ou custo apresentado por terceiros, decorrente ou relacionado a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li>Seu uso dos Serviços;</li>
                  <li>Violação destes Termos Legais;</li>
                  <li>Qualquer violação de suas declarações e garantias estabelecidas nestes Termos Legais;</li>
                  <li>Sua violação dos direitos de terceiros, incluindo, entre outros, direitos de propriedade intelectual;</li>
                  <li>Qualquer ato ou omissão sua que contrarie qualquer lei aplicável.</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  Nós nos reservamos o direito, à nossa exclusiva discrição, de assumir a defesa exclusiva e o controle de qualquer assunto sujeito à indenização por você, e você concorda em cooperar conosco, às suas custas, com a nossa defesa dessas reivindicações. Faremos todos os esforços razoáveis para notificá-lo de qualquer reivindicação, ação ou processo sujeito a esta indenização assim que tomarmos conhecimento do mesmo.
                </p>
              </section>

              {/* 16. User Data */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <h2 className="text-2xl font-bold mb-4 text-foreground">16. Dados do Usuário</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Conservaremos determinados dados que você transmitir aos Serviços com o objetivo de gerenciar o desempenho dos mesmos, bem como dados relacionados ao seu uso dos Serviços. Embora realizemos backups de rotina regulares dos dados, você é o único responsável por todos os dados que transmitir ou que se relacionem a qualquer atividade que você tenha realizado usando os Serviços.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Você concorda que não teremos qualquer responsabilidade perante você por qualquer perda ou corrupção de tais dados e, por meio deste, renuncia a qualquer direito de ação contra nós decorrente de tal perda ou corrupção de dados.
                </p>
              </section>

              {/* 17. Electronic Communications */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <MessageSquare className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">17. Comunicações Eletrônicas, Transações e Assinaturas</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Ao visitar os Serviços, enviar-nos e-mails e preencher formulários online, você concorda em receber comunicações eletrônicas. Você consente em receber comunicações eletrônicas e concorda que todos os contratos, avisos, divulgações e outras comunicações que lhe fornecemos eletronicamente, por e-mail e nos Serviços, satisfazem qualquer exigência legal de que tal comunicação seja feita por escrito.
                    </p>

                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 mb-4">
                      <p className="text-foreground font-medium text-sm">
                        VOCÊ CONCORDA COM O USO DE ASSINATURAS ELETRÔNICAS, CONTRATOS, PEDIDOS E OUTROS REGISTROS, BEM COMO COM A ENTREGA ELETRÔNICA DE AVISOS, POLÍTICAS E REGISTROS DE TRANSAÇÕES INICIADAS OU CONCLUÍDAS POR NÓS OU POR MEIO DOS SERVIÇOS.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Você renuncia a quaisquer direitos ou exigências previstos em quaisquer estatutos, regulamentos, normas, portarias ou outras leis em qualquer jurisdição que exijam uma assinatura original ou a entrega ou retenção de registros não eletrônicos, ou pagamentos ou concessão de créditos por qualquer meio que não seja eletrônico.
                    </p>
                  </div>
                </div>
              </section>

              {/* 18. Miscellaneous */}
              <section className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in">
                <h2 className="text-2xl font-bold mb-4 text-foreground">18. Diversos</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Estes Termos Legais e quaisquer políticas ou regras operacionais publicadas por nós nos Serviços ou referentes aos Serviços constituem o acordo integral entre você e nós. Nossa omissão em exercer ou exigir o cumprimento de qualquer direito ou disposição destes Termos Legais não constituirá uma renúncia a tal direito ou disposição.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Estes Termos Legais vigoram na máxima extensão permitida por lei. Podemos ceder quaisquer um dos nossos direitos e obrigações a terceiros a qualquer momento. Não seremos responsáveis por qualquer perda, dano, atraso ou falha no cumprimento de nossas obrigações causado por qualquer motivo fora do nosso controle razoável.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se qualquer disposição ou parte de disposição destes Termos Legais for considerada ilegal, nula ou inexequível, essa disposição ou parte da disposição será considerada separável dos demais Termos Legais e não afetará a validade e aplicabilidade das demais disposições.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Não há qualquer relação de joint venture, parceria, emprego ou agência entre você e nós como resultado destes Termos Legais ou do uso dos Serviços. Você concorda que estes Termos Legais não serão interpretados contra nós pelo simples fato de termos redigido-os. Você renuncia, por meio deste instrumento, a qualquer direito ou disposição que viole estes Termos Legais, defesas que você pode ter baseado na forma ou ausência de assinatura das partes para sua formalização.
                </p>
              </section>

              {/* 19. Contact */}
              <section className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-md border border-primary/20 animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">19. Contate-nos</h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Para resolver uma reclamação sobre os Serviços ou para obter mais informações sobre o uso dos Serviços, entre em contato conosco:
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <a href="mailto:contato@beijodarua.com.br" className="text-primary hover:underline font-medium">
                          contato@beijodarua.com.br
                        </a>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-1" />
                        <div className="text-muted-foreground">
                          <p className="font-medium text-foreground">Beijo da Rua</p>
                          <p>Av. Júlia Freire, 1200 - Expedicionários</p>
                          <p>João Pessoa - PB, 58041-000</p>
                          <p>Brasil</p>
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

export default TermosUso;
