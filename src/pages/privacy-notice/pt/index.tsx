import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getModifiedFileName } from "../../../common/utils/helper";
import Footer from "../../../components/footer";
import LanguageSelector from "../../../components/languageSelector";
import PageHeader from "../../../components/pageHeader";
import { LanguageContext } from "../../../hoc/languageProvider";
import styles from "../privacyPolicy.module.scss";

const PrivacyPolicyPagePt = () => {
  const { localString } = useContext(LanguageContext);
  return (
    <>
      <PageHeader />
      <Container>
        <LanguageSelector styleProps={styles} privacyPage={true} />
      </Container>
      <Container className={styles["outerContainer"]}>
        <Row>
          <Col className={styles["container"]}>
            <h2 className={styles["title"]}>
              HYDRAFACIAL{" "}
              <strong className={styles["fontWeightExtraBold"]}>
                privacidade
              </strong>{" "}
              perceber
            </h2>

            <em className={styles["updatedOn"]}>
              Esta Política de Privacidade teve a sua última atualização em
              24/02/2023.
            </em>

            <p>
              Esta Política de Privacidade ajudá-lo-á a compreender como
              recolhemos, usamos e protegemos os seus Dados Pessoais, e é
              aplicável a todos os produtos e serviços da Hydrafacial.
            </p>
            <p>
              De tempos a tempos, podemos ter necessidade de alterar esta
              Política de Privacidade. Sempre que considerarmos que você não
              espera uma tal alteração, alertá-lo-emos sobre alterações
              materiais, por exemplo, colocando um aviso nos nossos websites,
              e/ou enviando-lhe um e-mail (se tiver registado o seu e-mail
              connosco), quando formos obrigados a fazê-lo nos termos da lei
              aplicável. Pode ver quando esta Política de Privacidade sofreu a
              última atualização, verificando a data neste espaço. Cabe-lhe a
              responsabilidade de rever periodicamente esta Política de
              Privacidade.
            </p>
            <div className={styles["summary"]}>
              <h3 className={styles["summaryTitle"]}>
                A NOSSA POLÍTICA DE PRIVACIDADE EM RESUMO
              </h3>
              <ol>
                <li>
                  <strong>O Nosso Compromisso.</strong> A Hydrafacial
                  compromete-se a proteger os seus Dados Pessoais. Trataremos
                  sempre os seus Dados Pessoais com respeito e conceberemos os
                  nossos produtos e serviços tendo em mente a sua privacidade.
                </li>
                <li>
                  <strong>Dados que Recolhemos.</strong> Para que possamos
                  fornecer-lhe os nossos serviços, teremos de processar os seus
                  Dados Pessoais, tais como informações de contacto, dados de
                  conta, histórico de tratamentos, dados de pagamento,
                  identificadores de máquina ou informações sobre a forma como
                  interagiu connosco.
                </li>
                <li>
                  <strong>Como Recolhemos os Seus Dados.</strong> Recolheremos
                  os seus dados, a partir da utilização que fizer dos nossos
                  produtos e serviços, e de fontes externas.
                </li>
                <li>
                  <strong>Como Usamos os Seus Dados.</strong> Os seus dados
                  podem ser utilizados por diversas razões, de acordo com as
                  normas legais. O tratamento dos seus dados pode basear-se no
                  seu
                  <strong> consentimento </strong>
                  (por exemplo, criação de conta), na{" "}
                  <strong>execução de um contrato </strong> (por exemplo,
                  serviço ao cliente), numa
                  <strong> obrigação legal </strong>(por exemplo, exercer os
                  seus direitos, ou preencher um formulário de reclamação) ou no
                  nosso
                </li>
                <li>
                  <strong>nosso interesse legítimo </strong> (por exemplo,
                  algumas atividades de marketing e/ou prevenção de fraude).
                </li>
                <li>
                  <strong>Partilha de Dados.</strong> Partilhamos os seus dados
                  principalmente com fornecedores de serviços que nos fornecem
                  assistência e apoio, sendo estes empresas do Grupo Hydrafacial
                  ou fornecedores terceiros
                </li>
                <li>
                  <strong>Proteção dos Seus Dados.</strong>Esforçamo-nos por
                  implementar medidas técnicas e organizacionais adequadas, a
                  fim de proteger os seus Dados Pessoais contra destruição
                  acidental ou ilegal, perda ou alteração acidental, divulgação
                  ou acesso não autorizado e quaisquer outras formas de
                  tratamento ilegal
                </li>
                <li>
                  <strong>Privacidade Infantil.</strong> Não recolhemos
                  intencionalmente qualquer informação pessoal de crianças
                  menores de 13 anos
                </li>
                <li>
                  <strong>Ligações a outros Websites.</strong> Não temos
                  qualquer responsabilidade pelos websites para os quais existem
                  ligações
                </li>
                <li>
                  <strong>Os Seus Direitos.</strong> Poderá ter certos direitos
                  relacionados com os seus Dados Pessoais, dependendo da sua
                  localização e sujeitos às leis locais aplicáveis (por exemplo,
                  o direito de ser informado; o direito de acesso; o direito de
                  retificação; o direito de apagamento; o direito de objeção).
                  Informações adicionais para os consumidores nos Estados Unidos
                  da América abaixo.
                </li>
              </ol>
              <p>
                Encorajamo-lo a ler integralmente a nossa Política de
                Privacidade e a &nbsp;
                <a
                  href={getModifiedFileName(
                    `/files/pt/${localString?.["cookiePolicy"]}`
                  )}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Política de Cookies
                </a>
                &nbsp;, através das respetivas hiperligações abaixo, para
                compreender em profundidade a forma como utilizaremos os seus
                Dados Pessoais e os direitos que lhe assistem sobre os seus
                dados.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>O nosso compromisso</h3>
              <p>
                Na Hydrafacial, estamos empenhados em proteger os seus Dados
                Pessoais, e tratá-los-emos sempre com respeito, e conceberemos
                os nossos produtos e serviços tendo em mente a privacidade do
                cliente.
              </p>
              <p>
                A Hydrafacial é uma marca emblemática da The Beauty Health
                Company (doravante "Hydrafacial", "nosso", "nós" ou "nos"). A
                Hydrafacial é uma empresa global criadora de categorias, focada
                em proporcionar experiências de saúde estética, reinventando a
                relação do nosso consumidor com a sua pele, o seu corpo e a sua
                autoconfiança.
              </p>
              <p>
                A marca principal, HydraFacial, criou a categoria de
                hidradermabrasão, utilizando um Sistema de Entrega Vortex-Fusion
                para limpar, esfoliar, remover, infundir, e hidratar a pele com
                soluções e soros próprios.
              </p>
              <p>
                Esta Política de Privacidade cobre os Dados Pessoais que a
                Hydrafacial, as suas afiliadas e sucursais localizadas em todo o
                mundo, no seio da família de empresas The Beauty Health Company
                ("Afiliadas"), recolhem e tratam através dos diferentes meios.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Definições</h3>
              <p>
                "Informação pessoal ou dados pessoais" significa informação que
                (quer isoladamente ou em combinação com outros dados) lhe
                permite ser direta ou indiretamente identificado.
              </p>
              <p>
                "Responsável pelo Tratamento" é uma entidade que define as
                finalidades e os meios de tratamento de dados pessoais.
              </p>
              <p>
                "Subcontratante ou prestador de serviços/contratante/terceiro" é
                uma entidade que trata os dados pessoais em nome do Responsável
                pelo Tratamento.
              </p>
              <p>
                "Cliente ou Consumidor" é o indivíduo que recebe um tratamento
                da Hidrafacial.
              </p>
              <p>
                "Profissional de tratamento" é o profissional que realiza um
                tratamento da Hidrafacial.
              </p>
              <p>
                "Fornecedor ou Cliente" é a clínica ou centro que fornece
                tratamentos da Hydrafacial.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Dados que recolhemos </h3>
              <p>
                De modo a fornecer-lhe os nossos produtos e/ou serviços,
                necessitaremos tratar os seus dados pessoais. Os dados pessoais
                que recolhemos sobre si podem incluir:
              </p>
              <ul>
                <li>
                  Os seus dados de contacto, tais como o seu nome completo,
                  endereços físicos e de correio eletrónico, número(s) de
                  telefone, nome da clínica/centro e informações detalhadas,
                  incluindo, se for um esteticista, o nome da sua empresa ou
                  empregador, endereço e número de telefone para fazer negócios
                  consigo.
                </li>
                <li>
                  As informações da sua conta, tais como o seu endereço
                  eletrónico, nome completo, nome de utilizador e palavra-passe,
                  número de telefone, data de nascimento, código postal e
                  fotografia pessoal quando nos fornece para a criação de uma
                  conta
                </li>
                <li>
                  As informações e dados do seu CV fornecidos durante o processo
                  de recrutamento
                </li>
                <li>
                  O seu histórico de tratamento*, tal como o tipo de tratamento
                  recebido, quaisquer correções adicionais, e os produtos
                  utilizados (se aplicável) quando tem uma conta na Hydrafacial.
                </li>
                <li>
                  As suas informações de pagamento e/ou detalhes bancários a fim
                  de completar as suas encomendas.
                </li>
                <li>
                  Os identificadores técnicos incluem: o seu endereço IP,
                  sistema operativo, dispositivo, e localização quando utiliza
                  os nossos serviços online
                </li>
                <li>
                  Informação sobre como interagiu connosco, com os nossos sítios
                  web e com os nossos serviços
                </li>
              </ul>
              <p>
                *Os consumidores têm a opção de partilhar o seu histórico de
                tratamento com os profissionais de tratamento. Da mesma forma,
                quando os profissionais de tratamento utilizam um dispositivo
                HydraFacial, têm a opção de sincronizar a sua conta de aplicação
                com o dispositivo, a fim de ter um registo do histórico de
                tratamento dos profissionais. Os profissionais de tratamento
                verão dados agregados de tratamentos que tenham realizado. Não
                existe nenhuma Informação Pessoal associada aos tratamentos que
                o profissional de tratamentos visualiza.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Como recolhemos os seus dados
              </h3>
              <p>
                Procederemos à recolha dos seus dados, a partir da sua
                utilização dos nossos serviços e de fontes externas (por
                exemplo, fontes acessíveis ao público).
              </p>
              <p>Recolheremos os seus dados pessoais quando::</p>
              <ul>
                <li>
                  Se regista para obter informações sobre os nossos produtos ou
                  outros serviços.
                </li>
                <li>
                  Interage connosco ou faz perguntas, incluindo através das
                  redes sociais
                </li>
                <li>Realiza uma compra.</li>
                <li>Utiliza o nosso produto ou serviços.</li>
                <li>Cria ou atualiza a sua conta</li>
                <li>Utiliza as funcionalidades da aplicação Hydrafacial.</li>
                <li>
                  É um candidato a emprego ou está no processo de recrutamento
                </li>
                <li>Responde a comunicações ou inquéritos.</li>
                <li>Navega no nosso website ou serviços online.</li>
              </ul>
              <p>
                Recolhemos dados sobre si utilizando tecnologias, como cookies e
                impressões digitais de dispositivos, por outras palavras,
                técnicas utilizadas para combinar informações que nos ajudam a
                identificar o seu dispositivo.
              </p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>
                Tem a possibilidade de aceitar ou recusar cookies de qualquer
                website, modificando as definições no seu navegador. Se desejar
                restringir ou bloquear os cookies definidos pelo nosso website,
                pode fazê-lo através das definições do seu browser. Para obter
                informações sobre como gerir e desativar cookies, pode utilizar
                a função 'Ajuda' no seu navegador, ou visitar
                <a
                  href="https://www.aboutcookies.org/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  https://www.aboutcookies.org/
                </a>{" "}
                ou{" "}
                <a
                  href="https://www.allaboutcookies.org/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  https://www.allaboutcookies.org/
                </a>{" "}
                Contudo, por favor tenha em atenção que, ao apagar ou desativar
                os cookies, isto poderá afetar a funcionalidade do nosso site e
                poderá não conseguir aceder a certas áreas ou características do
                nosso site.
              </p>
              <p>
                Se desejar informações sobre como utilizamos cookies e
                dispositivos semelhantes que possam ser instalados nos terminais
                dos nossos clientes e utilizadores, recomendamos-lhe que
                consulte a nossa &nbsp;
                <a
                  href={getModifiedFileName(
                    `/files/pt/${localString?.["cookiePolicy"]}`
                  )}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Política de Cookies
                </a>
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Como usamos os seus dados
              </h3>
              <p>
                Os seus dados podem ser usados por várias razões, ao abrigo de
                várias bases legais, tais como:
              </p>
              <ul>
                <li>
                  Contactá-lo para lhe fornecer as informações solicitadas - com
                  base no seu consentimento
                </li>
                <li>
                  Processar o seu pagamento de encomendas e para outros fins
                  comerciais e contabilísticos - com base numa obrigação legal
                  e/ou na celebração de um contrato
                </li>
                <li>
                  Prestar serviço ao cliente - com base numa obrigação legal
                  e/ou na celebração de um contrato.
                </li>
                <li>
                  Processar o seu pedido para realizar negócios connosco - com
                  base no consentimento.
                </li>
                <li>
                  Criação, atualização, apoio e gestão de contas - com base no
                  consentimento e na celebração de um contrato
                </li>
                <li>
                  Mantê-lo informado sobre promoções e novidades por e-mail,
                  telefone, SMS, redes sociais ou correio, e convidá-lo através
                  de e-mail/SMS a criar uma conta quando utiliza o nosso produto
                  ou serviços (dependendo das suas preferências) - com base no
                  consentimento ou interesse legítimo, quando aplicável
                </li>
                <li>
                  Fornecer a si e a outros clientes informações relevantes
                  através do nosso programa de marketing - com base em
                  interesses legítimos
                </li>
                <li>
                  Reveja o seu perfil e antecedentes profissionais, quando se
                  candidata a um emprego, e durante o processo de recrutamento
                  para selecionar o candidato certo
                </li>
                <li>
                  Realizar estudos de mercado, desenvolvimento de produtos e
                  para fins estatísticos - com base em interesses legítimos
                </li>
                <li>
                  Deteção e prevenção de fraudes, acesso não autorizado ao
                  produto e/ou serviços, e outras actividades ilegais - com base
                  em interesses legítimos
                </li>
                <li>
                  Administrar a recuperação de dívidas - com base em interesses
                  legítimos.
                </li>
                <li>
                  Realizar avaliações e análises que nos permitam rever,
                  desenvolver e melhorar os serviços que oferecemos - com base
                  em interesses legítimos
                </li>
              </ul>
              <p>
                Como foi dito, por vezes precisamos de utilizar os seus dados
                pessoais para fins comerciais legítimos, para garantir que
                continuamos a proporcionar uma excelente experiência ao cliente.
                Em todos os casos, procuraremos sempre equilibrar os nossos
                interesses com os seus.
              </p>
              <p>
                Os processos descritos abaixo são considerados exemplos dos
                nossos interesses legítimos:
              </p>
              <ul>
                <li>
                  Deteção e prevenção de fraudes na Hydrafacial, o que pode
                  incluir a realização de controlos com base em informações
                  disponíveis ao público e perfis das redes sociais.
                </li>
                <li>
                  Envolvê-lo e contactá-lo para garantir que tem uma boa
                  experiência como cliente da Hydrafacial
                </li>
                <li>
                  Auditar internamente os nossos processos a fim de manter os
                  nossos elevados padrões
                </li>
                <li>Realizar algumas das nossas atividades de marketing.</li>
                <li>
                  Partilhar dados com terceiros selecionados, com vista a
                  acrescentar valor aos nossos produtos
                </li>
              </ul>
              <p>
                A Hydrafacial pode contactá-lo de vez em quando para lhe pedir
                que participe num inquérito, para que possamos rever,
                desenvolver e melhorar os nossos serviços.
              </p>
              <p>
                As suas respostas ao inquérito, incluindo quaisquer dados
                pessoais fornecidos, só serão utilizadas pela Hydrafacial para
                os fins declarados na presente Política de Privacidade. Os dados
                pessoais podem incluir (mas não estão limitados a) o seu nome,
                idade e endereço de correio eletrónico. Também podemos recolher
                dados pessoais de categoria especial, dependendo do inquérito ao
                qual está a responder.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Partilha de dados </h3>
              <p>Não vendemos as suas informações pessoais a terceiros.</p>
              <p>
                Podemos contratar outras empresas, incluindo Subcontratantes
                (prestadores de serviços), para desempenhar funções em nosso
                nome. Podemos partilhar a sua Informação Pessoal com estes
                Subcontratantes que nos ajudam nas nossas funções empresariais,
                tais como processamento de pagamentos, embalagem e expedição;
                escritórios de advogados, consultores, auditores em caso de
                necessidade; serviços de CRM, serviços de correio eletrónico,
                feedback de produtos ou software de helpdesk; análise de
                websites. Se a Hydrafacial receber os seus Dados Pessoais e
                posteriormente a transferir para um Subcontratante para o
                respetivo tratamento, a Hydrafacial permanece responsável por
                assegurar que esse Subcontratante trate os seus Dados Pessoais
                de acordo com as normas exigidos pelas leis de privacidade
                aplicáveis, incluindo o Regulamento Geral de Proteção de Dados
                Europeu ("RGPD"). Estas transferências serão tipicamente
                baseadas nos nossos interesses legítimos, ou estabelecidas no
                Acordo.
              </p>
              <p>
                Poderá ser necessário transferir os seus dados pessoais para
                outras empresas do Grupo, ou prestadores de serviços localizados
                nos Estados Unidos da América. Nestes casos, tomaremos medidas
                para assegurar que os seus dados recebem um nível de proteção
                adequado, de acordo com os regulamentos aplicáveis, e para fins
                compatíveis com a presente Política de Privacidade, e com base
                no nosso legítimo interesse ou necessidade contratual.
              </p>
              <p>
                Existem também certas circunstâncias em que partilharemos os
                seus dados com empresas externas. A privacidade permanece sempre
                primordial, e esforçar-nos-emos por minimizar os dados
                partilhados em cada ocasião.
              </p>
              <p>Estas circunstâncias incluem:</p>
              <ul>
                <li>
                  Partilhar dados com parceiros cuidadosamente selecionados, a
                  fim de acrescentar valor aos nossos produtos.
                </li>
                <li>
                  Partilhar dados com terceiros, para que possam apresentar-lhe
                  inquéritos.
                </li>
                <li>
                  Construir um perfil de marketing para encontrar clientes com
                  necessidades semelhantes
                </li>
              </ul>
              <p>
                Para além do que foi mencionado acima, existem outros cenários
                onde poderemos ter de partilhar os seus dados. Tal pode incluir:
              </p>
              <ul>
                <li>Nos casos em que somos legalmente obrigados a fazê-lo.</li>
                <li>Sempre que haja um dever público de divulgação.</li>
                <li>
                  Quando a divulgação for necessária para proteger os nossos
                  interesses.
                </li>
                <li>
                  Quando a divulgação for feita a seu pedido ou com o seu
                  consentimento
                </li>
              </ul>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Transferências Internacionais
              </h3>
              <p>
                A Hydrafacial é uma empresa que opera ao nível mundial.
                Portanto, os dados pessoais de indivíduos que visitam os nossos
                websites e/ou que utilizam ou compram o nosso produto ou
                serviços, ou que de outra forma interagem connosco, podem ser
                transferidos e acedidos de todo o mundo, tais como de países
                onde a Hydrafacial, as suas Afiliadas, ou os nossos
                subcontratantes operam.
              </p>
              <p>
                Protegeremos os seus Dados Pessoais em conformidade com esta
                Política de Privacidade, onde quer que eles sejam tratados. Não
                transferimos voluntária ou ativamente, nem divulgamos os Dados
                Pessoais dos nossos clientes ao governo ou às autoridades de
                aplicação da lei ("Autoridades") e/ou de outra forma concedemos
                a quaisquer Autoridades acesso aos seus Dados Pessoais. Em caso
                de pedido por parte de uma Autoridade, temos procedimentos e
                controlos em vigor, para garantir que qualquer desses pedidos
                seja avaliado, de acordo com o procedimento delineado no nosso
                &nbsp;
                <a
                  href={getModifiedFileName(
                    `/files/pt/${localString?.["transparencyReport"]}`
                  )}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Transparency Relatório de Transparência.
                </a>
                .
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3
                className={`${styles["contentTitle"]} ${styles["contentSubTitle"]}`}
              >
                Informação para indivíduos no Espaço Económico Europeu ("EEE")
                ou no Reino Unido ("UK")
              </h3>
              <p className={styles["sectionDescription"]}>
                A operar globalmente, a Hydrafacial pode transferir Dados
                Pessoais do EEE ou do Reino Unido para os Estados Unidos da
                América e outros países, incluindo Dados Pessoais que recebemos
                de indivíduos residentes no EEE ou no Reino Unido que visitam os
                nossos websites e/ou que podem comprar o nosso produto ou
                utilizar os nossos serviços, ou interagir de outra forma
                connosco.
              </p>
              <p className={styles["sectionDescription"]}>
                Sempre que a Hydrafacial se envolve em tais transferências de
                Dados Pessoais, fá-lo com base em:
              </p>
              <ul>
                <li className={styles["sectionDescription"]}>
                  Decisões de Adequação, conforme adotadas por::
                  <ul>
                    <li className={styles["sectionDescription"]}>
                      Comissão Europeia ("CE"), com base no artigo 45º do
                      Regulamento (UE) 2016/679 (RGPD) - para mais informações,
                      e para aceder à lista completa dos países considerados
                      adequados até à data, por favor visite
                      <a
                        href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions
                      </a>
                      .
                    </li>
                    <li className={styles["sectionDescription"]}>
                      Secretário de Estado do Reino Unido, com base no artigo
                      45º do GDPR do Reino Unido e no Artigo 17A da Lei de
                      Proteção de Dados de 2018 - para mais informações, e para
                      aceder à lista completa dos países considerados adequados
                      até à data, por favor visite
                      <a
                        href="https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-transfers/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-transfers/
                      </a>
                      ; or
                    </li>
                    <li className={styles["sectionDescription"]}>
                      As{" "}
                      <a
                        href={getModifiedFileName(
                          `/files/pt/${localString?.["standardContractualClauses"]}`
                        )}
                        style={{
                          color: "#0d6efd",
                          textDecoration: "underline",
                        }}
                        download
                        target="_blank"
                        rel="noreferrer"
                      >
                        cláusulas contratuais-tipo
                      </a>{" "}
                      &nbsp; da CE ("CCT") e a adenda do Gabinete do Comissário
                      de Informação do Reino Unido para a Transferência
                      Internacional de Dados ("IDTA"), conforme aplicável,
                      complementadas por medidas de segurança adicionais, tal
                      como recomendado pelo Conselho Europeu de Proteção de
                      Dados.
                    </li>
                  </ul>
                </li>
              </ul>
              {/*eslint-disable-next-line react/no-unescaped-entities*/}
              <p className={styles["sectionDescription"]}>
                O Gabinete do Comissário de Informação da CE e do Reino Unido
                ("ICO") determinaram que as CCT e o IDTA podem fornecer
                salvaguardas suficientes para proteger os dados pessoais
                transferidos para fora do EEE e do Reino Unido. Para mais
                informações, por favor visite
                <a
                  href="         https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en
                </a>{" "}
                e
                <a
                  href="  https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-data-transfer-agreement-and-guidance/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-data-transfer-agreement-and-guidance/
                </a>
                .
              </p>
              <p className={styles["sectionDescription"]}>
                A Hydrafacial realiza avaliações de impacto das transferências e
                monitoriza continuamente as circunstâncias que envolvem tais
                transferências, a fim de assegurar que estas mantenham, na
                prática, um nível de proteção que seja essencialmente
                equivalente ao garantido pelas leis europeias e britânicas de
                proteção de dados.
              </p>
              <p className={styles["sectionDescription"]}>
                Aplicamos as mesmas condições e requisitos descritos nesta
                Política de Privacidade para todas as transferências
                internacionais de dados, independentemente da sua localização,
                com salvaguardas adequadas e mantendo sempre as suas informações
                pessoais seguras, utilizando as ferramentas de transferência de
                dados internacionais mais convenientes, de acordo com o modelo
                de contrato preparado pelos reguladores.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Proteção dos seus dados
              </h3>
              <p>
                A Hydrafacial esforça-se por implementar medidas técnicas e
                organizacionais adequadas, a fim de proteger os seus dados
                pessoais contra destruição acidental ou ilegal, perda ou
                alteração acidental, divulgação ou acesso não autorizado e
                quaisquer outras formas ilegais de tratamento. O nosso objetivo
                é assegurar que o nível de segurança e as medidas adotadas para
                proteger os seus dados pessoais são adequados para os riscos
                inerentes à natureza e utilização dos seus dados pessoais.
                Seguimos práticas reconhecidas da indústria para proteger o
                nosso ambiente informático e as nossas instalações físicas.
                Algumas dessas medidas são:
              </p>
              <ul>
                <li>Gestão do acesso </li>
                <li>VPN (rede virtual privada) para acesso remoto</li>
                <li>Criptografia de dados em repouso e em movimento</li>
                <li>Capacidade de backup e recuperação</li>
                <li>Firewalls</li>
                <li>Antivirus software</li>
                <li>Autenticação multi-factor (AMF)</li>
                <li>Filtragem de segurança do correio eletrónico</li>
                <li>Formação em sensibilização para a segurança</li>
              </ul>
              <p>
                Nos nossos websites e aplicações, protegemos quaisquer dados que
                nos tenha fornecido, facultando-lhe um ID de utilizador e uma
                palavra-passe. Também utilizamos normas de segurança da
                indústria para encriptar dados sensíveis que transitam para os
                nossos servidores. O ID de Utilizador e a palavra-passe
                ajudam-nos a proteger os seus dados pessoais. Deve manter esta
                palavra-passe segura e não a deve divulgar a ninguém.
              </p>
              <p>
                Alguns e-mails suspeitos contêm anexos ou ligações a websites
                que tentam instalar software malicioso no seu computador. Se
                introduziu a sua palavra-passe no que pensa poder ser um website
                malicioso, por favor contacte-nos imediatamente e peça-nos para
                alterar a sua palavra-passe.
              </p>
              <p>
                Se tiver introduzido os dados do seu cartão de pagamento no que
                pensa poder ser um website malicioso, ou se responder a um
                e-mail com esses dados, deverá contactar imediatamente o emissor
                do seu cartão de crédito. Não se esqueça de nos contactar para
                atualizar os dados do seu cartão.
              </p>
              <p>
                Quando nos pedir uma cotação, trataremos os dados num servidor
                seguro. O seu navegador irá confirmar que se encontra numa área
                segura, exibindo uma chave ininterrupta ou bloqueio, no canto
                inferior direito da janela do seu navegador.
              </p>
              <p>
                Muitas organizações utilizam elementos de segurança, tais como
                firewalls, para proteger os seus sistemas informáticos. Estas
                firewalls podem impedi-lo de se ligar ao nosso servidor seguro.
                Se estiver a trabalhar e não conseguir ligar-se ao nosso site,
                fale por favor com o seu administrador de TI.
              </p>
              <p>
                Esteja ciente de que as comunicações através da Internet, tais
                como e-mails, não são seguras, a menos que tenham sido
                encriptadas. As suas comunicações podem passar por vários
                países, antes de serem entregues - esta é a natureza da
                Internet. Não podemos aceitar a responsabilidade por qualquer
                acesso não autorizado, ou perda de informação pessoal, que
                esteja fora do nosso controlo.
              </p>
              <p>
                Além disso, pode proteger o seu sistema através da instalação de
                anti-vírus e da execução de scans, tal como recomendado pelo
                fornecedor. Deverá também executar quaisquer atualizações /
                correções de segurança que receba do fornecedor para o seu
                sistema.
              </p>
              <p>
                Nunca responda a e-mails não solicitados de fontes
                desconhecidas. Tais e-mails podem ser fraudulentos e tentar
                levá-lo a fornecer os seus dados pessoais ou informações de
                pagamento
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Durante quanto tempo guardamos os seus dados
              </h3>
              <p>
                Não trataremos os seus Dados Pessoais por mais tempo do que o
                necessário, nem os trataremos para fins que ultrapassem aqueles
                para os quais foram recolhidos. Armazenamos os seus Dados
                Pessoais por diferentes períodos de tempo, dependendo da
                categoria de Dados Pessoais e da natureza da relação que tem
                connosco. Determinamos quanto tempo precisamos de Dados Pessoais
                caso a caso, mas o nosso objetivo é manter os seus Dados
                Pessoais por um período tão curto quanto possível, para atingir
                a finalidade para a qual os Dados Pessoais são recolhidos.
              </p>
              <p>
                Estamos sujeitos a vários requisitos legais relativos à retenção
                de dados, e temos os nossos próprios interesses legítimos na
                retenção dos seus dados durante um período de tempo. Estes
                incluem a defesa de quaisquer reclamações tardias ou atrasadas e
                a melhoria dos nossos produtos e serviços
              </p>
              <p>
                Se não tomar qualquer medida após receber um e-mail/SMS da
                Hydrafacial convidando-o a criar uma conta, porque recebeu um
                tratamento Hydrafacial (Syndeo), apagaremos automaticamente os
                seus dados dentro de um prazo razoável.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Privacidade de menores</h3>
              <p>
                Não recolhemos intencionalmente quaisquer dados pessoais de
                crianças menores de 13 anos, e os nossos produtos não se
                destinam à compra ou utilização por crianças. Os pais devem
                estar cientes de que existem ferramentas de controlo parental
                disponíveis online, que podem ser utilizadas para impedir que as
                crianças enviem informações online sem autorização parental, ou
                acedam a material que seja prejudicial para os menores.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Ligações a outros websites
              </h3>
              <p>
                Para melhorar a sua experiência com a Hydrafacial, o nosso
                website pode incluir ligações a outros sites. Esses websites
                terão as suas próprias políticas de privacidade que poderá
                querer rever. A Hydrafacial não tem qualquer responsabilidade
                pelo conteúdo alojado em websites de terceiros.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Os seus direitos </h3>
              <p>
                Poderá ter certos direitos relacionados com os seus Dados
                Pessoais, dependendo da sua localização e sujeito às leis locais
                aplicáveis. Estes direitos podem incluir, sem prejuízo de
                quaisquer exceções ou limitações:
              </p>
              <ul>
                <li>
                  O direito de saber que dados pessoais estão a ser recolhidos e
                  com que finalidade.
                </li>
                <li>
                  O direito de saber que dados pessoais estão a ser "vendidos"
                  ou "partilhados", para que finalidade e as categorias de
                  destinatários dos seus dados pessoais.
                </li>
                <li>O direito de aceder aos seus dados pessoais</li>
                <li>
                  O direito de ter os seus dados pessoais retificados,
                  corrigidos, ou atualizados
                </li>
                <li>
                  O direito de nos pedir para restringir o tratamento dos seus
                  dados em determinadas circunstâncias, como por exemplo quando
                  está preocupado com a precisão dos dados, ou como estes estão
                  a ser utilizados.
                </li>
                <li>
                  O direito a que os seus dados pessoais sejam apagados,
                  incluindo de quaisquer terceiros onde os seus dados pessoais
                  tenham sido vendidos, partilhados ou divulgados
                </li>
                <li>
                  O direito de não participar na "venda" ou "partilha" dos seus
                  dados pessoais.
                </li>
                <li>
                  O direito de nos solicitar a transferência da informação que
                  nos deu de uma organização para outra, ou de lha dar, quando
                  aplicável.
                </li>
                <li>
                  O direito de objetar ao tratamento dos seus dados pessoais.
                </li>
                <li>
                  O direito de não estar sujeito a qualquer tomada de decisão e
                  perfil automatizado
                </li>
              </ul>
              <p>
                Se desejar: aceder, rever, atualizar, corrigir e apagar
                quaisquer dados pessoais que tenhamos sobre si; ou exercer
                quaisquer outros direitos de privacidade à sua disposição, pode
                preencher este forrmulário de pedido. Por favor, esteja ciente
                de que estes direitos não se aplicam em todas as circunstâncias;
                no entanto, sempre que pudermos, fornecer-lhe-emos o que
                solicitou.
              </p>
              <p>
                A nossa equipa de privacidade irá rever o seu pedido de direitos
                de privacidade verificáveis ("Pedido de Direitos de
                Privacidade") e responder-lhe-á o mais rapidamente possível. Se
                não pudermos satisfazer o seu pedido devido a uma exceção ou
                limitação, explicá-lo-emos por escrito. Se precisarmos de mais
                tempo, informá-lo-emos por escrito da razão e do período de
                prorrogação.
              </p>
              <p>
                Se desejar que um agente autorizado faça um Pedido de Direitos
                de Privacidade em seu nome, o agente pode fazê-lo preenchendo
                este formulário de pedido. Pediremos a autorização escrita,
                assinada, de que o agente foi autorizado a agir em seu nome. Uma
                vez concedida a autorização por escrito, reveremos o seu Pedido
                de Direitos de Privacidade e responder-lhe-emos o mais
                rapidamente possível. Responderemos diretamente ao endereço de
                e-mail fornecido pelo agente autorizado, relativamente ao
                cumprimento do Pedido de Direitos de Privacidade.
              </p>
              <p>
                Recordamos-lhe que tem o direito de apresentar uma queixa junto
                de uma Autoridade de Proteção de Dados ("APD"), caso se sinta
                insatisfeito com o nosso tratamento dos seus dados pessoais.
              </p>
              <p>
                Lista de APD no EEE:
                <a
                  href="https://edpb.europa.eu/about-edpb/about-edpb/members_es#member-no"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://edpb.europa.eu/about-edpb/about-edpb/members_es#member-no
                </a>
              </p>
              <p>
                Lista de APD no Reino Unido:
                <a
                  href="https://ico.org.uk/global/contact-us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ico.org.uk/global/contact-us/
                </a>
              </p>
              <p>
                Lista de APD na Suíça:
                <a
                  href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.edoeb.admin.ch/edoeb/en/home.html
                </a>
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3
                className={`${styles["contentTitle"]} ${styles["contentSubTitle"]}`}
              >
                Informação Adicional para os Consumidores nos Estados Unidos da
                América
              </h3>
              <div className={styles["sectionDescription"]}>
                <p className={styles["sectionDescription"]}>
                  Ao abrigo da Lei dos Direitos de Privacidade da Califórnia
                  ('CPRA') e da Lei de Proteção de Dados da Comunidade da
                  Virgínia ('CDPA'), os residentes da Califórnia e da Virgínia
                  têm certos direitos relativamente aos Dados Pessoais que as
                  empresas recolhem e tratam sobre eles. Tal inclui o direito de
                  solicitar o acesso ou o apagamento dos seus dados pessoais,
                  bem como o direito de ordenar a uma empresa que deixe de
                  vender ou partilhar os seus dados pessoais.
                </p>
                <p className={styles["sectionDescription"]}>
                  Somos obrigados a detalhar as categorias de dados pessoais que
                  recolhemos e/ou partilhamos para os fins descritos na secção
                  "Como Utilizamos os Seus Dados" da presente Política de
                  Privacidade e, aos Subcontratantes, para os fins mencionados
                  na secção "Partilha de Dados".
                </p>
                <p className={styles["sectionDescription"]}>
                  Atualmente, e nos últimos 12 meses, recolhemos as seguintes
                  categorias de Dados Pessoais para os nossos fins comerciais:
                </p>
                <ul>
                  <li className={styles["sectionDescription"]}>
                    Identificadores Pessoais.
                  </li>
                  <li className={styles["sectionDescription"]}>
                    Informação recolhida através de cookies e outras
                    tecnologias, incluindo o endereço IP
                  </li>
                  <li className={styles["sectionDescription"]}>
                    Internet ou outra informação de atividade da rede
                    eletrónica, incluindo informação de registo de conta,
                    conteúdo que vê ou com o qual se envolve, e informação de
                    conta, navegador, e dispositivos.
                  </li>
                  <li className={styles["sectionDescription"]}>
                    Inferências retiradas de qualquer das categorias de Dados
                    Pessoais acima referidas.
                  </li>
                </ul>
                <p className={styles["sectionDescription"]}>
                  Embora a Hydrafacial não venda dados pessoais em troca de
                  qualquer contrapartida monetária, partilhamos dados pessoais
                  para outros benefícios, tal como definido no Art.
                  1798.140(Ad)(2) do Código Civil da Califórnia. Partilhámos,
                  nos últimos 12 meses, os dados pessoais necessários para "fins
                  comerciais" específicos, tal como definido no Art. 1798.140(e)
                  do Código Civil da Califórnia e especificado na secção
                  "Partilha de Dados". Isto inclui a partilha de identificadores
                  pessoais, informação comercial, Internet ou outra atividade de
                  rede eletrónica com fornecedores de processamento de
                  pagamentos, gestão de relações com clientes, consultoria,
                  e-mail, feedback de produtos, serviços de helpdesk, redes de
                  publicidade, empresas de análise de websites. Tem o direito de
                  ordenar à Hydrafacial que não venda ou partilhe os seus dados
                  pessoais.
                </p>
                <p className={styles["sectionDescription"]}>
                  Para mais informações sobre como exercer os seus direitos,
                  incluindo a lista dos direitos de privacidade que lhe estão
                  disponíveis, consulte a secção "Os seus direitos" da presente
                  Política de Privacidade. Se desejar aceder, rever, atualizar,
                  corrigir, apagar quaisquer dados pessoais que tenhamos sobre
                  si, ou exercer quaisquer outros direitos de privacidade à sua
                  disposição, incluindo o direito de não vender ou partilhar os
                  seus dados pessoais, preencha este forrmulário de pedido, ou
                  envie o seu pedido para:
                  <a
                    href="mailto:dpo@hydrafacial.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    dpo@hydrafacial.com
                  </a>
                </p>
                <p className={styles["sectionDescription"]}>
                  Esforçamo-nos por responder a um Pedido de Direitos de
                  Privacidade dentro dos prazos exigidos. Se precisarmos de mais
                  tempo, informá-lo-emos por escrito da razão e do período de
                  prorrogação. Se submeter o seu Pedido de Direitos de
                  Privacidade eletronicamente através do nosso formulário de
                  pedido, enviaremos a nossa resposta escrita ao e-mail
                  verificado, associado ao pedido. Se não nos enviar o pedido
                  através do formulário web online, enviaremos a nossa resposta
                  por escrito, por correio postal, ou por outro meio
                  electrónico, à sua escolha. Não cobramos uma taxa para
                  processar ou responder ao seu pedido verificável do
                  consumidor, a menos que seja excessivo, repetitivo, ou
                  manifestamente infundado. Se determinarmos que o pedido
                  justifica uma taxa, informá-lo-emos por que tomámos essa
                  decisão e fornecer-lhe-emos uma estimativa de custos, antes de
                  concluir o seu pedido.
                </p>
                <p className={styles["sectionDescription"]}>
                  Direito de Recurso - Califórnia
                </p>
                <p className={styles["sectionDescription"]}>
                  Se a Hydrafacial não tomar medidas sobre o seu Pedido de
                  Direitos de Privacidade no prazo de 45 dias de resposta, ou no
                  caso de uma prorrogação, no prazo máximo de 90 dias de
                  resposta, informá-lo-emos por escrito das razões para não
                  tomar medidas, bem como forneceremos uma explicação de
                  quaisquer direitos que tenha de recorrer da decisão.
                </p>
                <p className={styles["sectionDescription"]}>
                  Direito de Recurso - Virgínia
                </p>
                <p className={styles["sectionDescription"]}>
                  Tem o direito de recorrer da recusa de tomar medidas sobre um
                  Pedido de Direitos de Privacidade, dentro de um período de
                  tempo razoável, após a receção da nossa decisão. No prazo de
                  60 dias após a receção de um recurso, a Hydrafacial
                  informá-lo-á por escrito de qualquer ação tomada ou não tomada
                  em resposta ao recurso, incluindo uma explicação escrita dos
                  motivos das decisões. Se o recurso for negado, ser-lhe-á
                  fornecido um método através do qual poderá contactar o
                  Procurador-Geral da Virgínia para apresentar uma queixa.
                </p>
              </div>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Califórnia e Delaware "Não Rastrear Divulgações"
              </h3>
              <p>
                Os regulamentos de privacidade dos Estados Unidos da América,
                tais como as leis da Califórnia e Delaware, exigem que a
                Hydrafacial indique se honra as definições "Não Rastrear" do seu
                navegador, relativamente à publicidade direcionada. A
                Hydrafacial cumpre as normas estabelecidas na presente Política
                de Privacidade e não monitoriza nem responde aos pedidos do
                navegador "Não Rastrear".
              </p>
            </div>
            <h2 className={styles["title"]}>Termos de serviços</h2>
            <br />
            <div className={styles["contentContainer"]}>
              <p>
                LEIA ATENTAMENTE ESTES TERMOS DE UTILIZAÇÃO. ESTA CONTA
                HYDRAFACIAL™ (A "CONTA") É OPERADA PELA HYDRAFACIAL LLC
                ("Hydrafacial" ou "Nós"). OS PRESENTES TERMOS DE UTILIZAÇÃO
                ("TERMOS") CONSTITUEM UM ACORDO VINCULATIVO ENTRE O UTILIZADOR
                ("UTILIZADOR" ou "Você") E A HYDRAFACIAL E REGEM O ACESSO E
                UTILIZAÇÃO DA CONTA, CONTÊM CLÁUSULAS DE EXONERAÇÃO DE
                RESPONSABILIDADE E OUTRAS DISPOSIÇÕES QUE LIMITAM A NOSSA
                RESPONSABILIDADE PARA COM O UTILIZADOR, QUE PODEM SER REVISTOS
                PELA HYDRAFACIAL DE TEMPOS A TEMPOS. LEIA ATENTAMENTE ESTES
                TERMOS, ANTES DE COMEÇAR A UTILIZAR A CONTA. SE NÃO CONCORDAR
                COM TODOS OS TERMOS DESTE ACORDO, CLIQUE NO BOTÃO "NÃO ACEITO",
                OU DESCONTINUE A UTILIZAÇÃO E DESINSTALE IMEDIATAMENTE ESTA
                CONTA. ESTES TERMOS SÃO TAMBÉM INCORPORADOS, COMO REFERÊNCIA, NA
                NOSSA POLÍTICA DE PRIVACIDADE.
              </p>
              <div className={styles["contentTitle"]}>
                APENAS PARA OS RESIDENTES NORTE-AMERICANOS, CONFORME
                ESPECIFICADO MAIS ADIANTE:
              </div>
              <p>
                Estes Termos incluem uma disposição de Arbitragem que rege
                quaisquer disputas entre si e nós. Esta disposição deverá:
              </p>
              <ul>
                <li>Suprimir o seu direito a um julgamento pelo júri; e</li>
                <li>
                  Afetar substancialmente os seus direitos, inclusivamente
                  impedindo-o de intentar, integrar ou participar em processos
                  coletivos ou consolidados. O utilizador concorda que podemos
                  providenciar avisos, divulgações e emendas a estes Termos por
                  meios eletrónicos, incluindo a alteração destes Termos dentro
                  da Conta, ou a publicação de revisões no Website da
                  Hydrafacial.
                </li>
              </ul>
              <p>
                O utilizador concorda que podemos providenciar avisos,
                divulgações e emendas a estes Termos por meios eletrónicos,
                incluindo a alteração destes Termos dentro da Conta, ou a
                publicação de revisões no Website da Hydrafacial.
              </p>
              <div className={styles["contentTitle"]}>Elegibilidade</div>
              <p>
                A Conta não está indicada, nem se destina a ser utilizada por
                ninguém com idade inferior a 13 anos. UMA CONTA SÓ PODE SER
                ACEDIDA E UTILIZADA POR UM UTILIZADOR COM, PELO MENOS, 13 ANOS
                DE IDADE. Se o Utilizador tiver entre 13 e 18 anos de idade, só
                poderá utilizar a Conta sob a supervisão de um dos pais ou tutor
                legal que aceite estar vinculado por estes Termos. O utilizador
                representa e garante que (a) não está localizado num país
                sujeito a um embargo do governo dos EUA, ou que tenha sido
                designado pelo governo dos EUA como um país "apoiante do
                terrorismo"; e (b) não consta de nenhuma lista do governo dos
                EUA de entidades proibidas ou restritas.
              </p>
              <p>
                Para utilizar certas funções da nossa Conta, terá de se registar
                para criar uma conta. O utilizador concorda em (a) criar apenas
                uma conta; (b) fornecer informações precisas, verdadeiras,
                atuais e completas ao criar a sua conta; (c) manter e atualizar
                rapidamente as informações da sua conta; (d) manter a segurança
                da sua conta, não partilhando a sua palavra-passe com terceiros
                e restringindo o acesso à sua conta e ao seu computador; (e)
                notificar prontamente a Hydrafacial se descobrir ou suspeitar de
                qualquer outra forma de violação de segurança relacionada com a
                conta; e (f) assumir a responsabilidade por todas as atividades
                que ocorram no âmbito da sua conta e aceitar todos os riscos de
                acesso não autorizado.
              </p>
              <div className={styles["contentTitle"]}>Privacidade</div>
              <p>
                A sua utilização dos nossos Serviços Syndeo está sujeita à
                Política de Privacidade da Hydrafacial, disponível em{" "}
                <a
                  href={`/files/en/data_processing_agreement.docx`}
                  className="policyLink"
                  download
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Aviso de privacidade
                </a>
                . O Acordo de Tratamento de Dados está incorporado nestes Termos
                e aplica-se nos casos em que o utilizador é proprietário de uma
                empresa e acede a informações/dados pessoais através dos
                Serviços Syndeo, caso em que é considerado um Subcontratante e
                concorda em cumprir o Acordo de Tratamento de Dados, que está
                disponível em
                <a
                  href={`/files/en/data_processing_agreement.docx`}
                  className="policyLink"
                  download
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Acordo de Processamento de Dados
                </a>
                , relativamente a quaisquer informações/dados pessoais tratados
                através dos Serviços Syndeo.
              </p>
              <div className={styles["contentTitle"]}>
                Direitos de Autor, Marcas Registadas e Licença de Utilizador
              </div>
              <p>
                Salvo indicação em contrário, a Conta e todos os seus conteúdos
                e outros materiais, incluindo, sem limitação, o logótipo da
                Hydrafacial e todos os desenhos, ilustrações, textos, gráficos,
                imagens, videoclips, informações, dados, software, ficheiros de
                som, outros ficheiros e a seleção e disposição dos mesmos
                (coletivamente, "Materiais de Conta") são propriedade,
                controlados ou licenciados pela Hydrafacial ou pelos seus
                licenciantes ou utilizadores e estão protegidos por leis de
                direitos de autor, marcas registadas, patentes, segredos
                comerciais e outras leis de propriedade intelectual ou de
                direitos de propriedade. A Syndeo™, Hydrafacial LLC,
                Hydrafacial, o logótipo da Hydrafacial, e outras marcas
                Hydrafacial, marcas de serviço, gráficos, e logótipos utilizados
                em ligação com a Conta, são nomes comerciais, marcas comerciais
                ou marcas registadas, detidas, controladas ou licenciadas pela
                Hydrafacial (coletivamente "Marcas Hydrafacial"). Outras marcas
                comerciais, marcas de serviço, gráficos e logótipos utilizados
                em ligação com a Conta são as marcas comerciais, ou marcas
                registadas, dos seus respetivos proprietários (coletivamente
                "Marcas de Terceiros"). As Marcas Hydrafacial e as Marcas de
                Terceiros não podem ser copiadas, imitadas ou utilizadas, no
                todo ou em parte, sem a prévia autorização escrita da
                Hydrafacial ou do proprietário da marca aplicável. A Conta e o
                Conteúdo são protegidos por direitos de autor, marca registada,
                patente, segredo comercial, tratados internacionais, leis
                estaduais e federais, e outros direitos de propriedade, e também
                podem ter componentes de segurança que protegem a informação
                digital, apenas conforme autorizado pela Hydrafacial, ou pelo
                proprietário do Conteúdo. Todos os direitos não expressamente
                concedidos são reservados.
              </p>
              <p>
                A Conta e o seu Conteúdo destinam-se exclusivamente a uso
                pessoal e não comercial. Sujeito a estes Termos, a Hydrafacial
                concede ao Utilizador uma licença pessoal, não exclusiva,
                intransmissível, limitada e revogável para utilizar a Conta
                apenas para uso pessoal, de acordo com estes Termos ("Licença de
                Utilizador"). É proibida qualquer utilização da Conta de
                qualquer outra forma, incluindo, sem limitação, revenda,
                transferência, modificação ou distribuição da Conta ou texto,
                imagens, música, códigos de barras, vídeo, dados, hiperligações,
                e outros conteúdos associados à Conta ("Conteúdo"). A menos que
                aqui explicitamente declarado, nada nestes Termos será
                interpretado como conferindo de qualquer forma, seja por
                implicação, preclusão ou não, qualquer título ou propriedade de,
                ou direitos de uso exclusivo a, qualquer propriedade intelectual
                ou outro direito e qualquer fundo de comércio associado a Estes
                Termos e à Licença de Utilizador também regem quaisquer
                atualizações, ou suplementos ou substituições da Conta, a menos
                que termos separados acompanhem tais atualizações, suplementos,
                ou substituições, caso em que os termos separados serão
                aplicáveis.
              </p>
              <div className={styles["contentTitle"]}>Utilização Aceitável</div>
              <p>
                A utilização da Conta pelo Utilizador, qualquer Conteúdo, e
                qualquer informação fornecida pelo Utilizador, incluindo nomes
                de utilizador e senhas, endereços postais, endereços de e-mail,
                número de telefone, informações financeiras (tais como números
                de cartão de crédito) ("Informações do Utilizador") transmitidas
                em ligação com a Conta está limitada à funcionalidade
                contemplada na Conta. Em caso algum poderá a Conta ser utilizada
                de uma forma que (a) assedie, abuse, persiga, ameace, difame, ou
                de outra forma infrinja ou viole os direitos de qualquer outra
                parte (incluindo, mas não se limitando, aos direitos de
                publicidade ou outros direitos de propriedade); (b) seja ilegal,
                fraudulenta, ou enganosa; (c) forneça informações pessoais
                sensíveis, a menos que especificamente solicitado pela
                Hydrafacial , (d) inclua "spam" ou qualquer publicidade não
                solicitada; (e) utilize tecnologia ou outros meios para aceder à
                Hydrafacial ou a Conteúdo não autorizado pela Hydrafacial; (f)
                utilize ou lance qualquer sistema automatizado, incluindo sem
                limitação, "robôs", "aranhas" ou "leitores offline", para aceder
                à Hydrafacial ou ao Conteúdo; (g) tente introduzir vírus ou
                qualquer outro código informático, ficheiros ou programas que
                interrompam, destruam ou limitem a funcionalidade de qualquer
                software informático, hardware ou equipamento de
                telecomunicações; (h) tente obter acesso não autorizado à rede
                informática ou contas de utilizador da Hydrafacial; (i) encoraje
                condutas que constituam uma ofensa criminal ou que deem origem a
                responsabilidade civil; (j) viole estes Termos; (k) tente
                danificar, desativar, sobrecarregar ou prejudicar os servidores
                ou redes da Hydrafacial; (l) personifique qualquer pessoa ou
                entidade, ou de outra forma, deturpe a sua identidade ou
                afiliação com outra pessoa ou entidade; ou (m) não cumpra os
                termos aplicáveis de terceiros (coletivamente "Utilização
                Aceitável"). A Hydrafacial reserva-se o direito, a seu exclusivo
                critério, de rescindir qualquer Licença de Utilizador, ou de
                fazer valer ações legais relativamente ao Conteúdo ou utilização
                da Conta, que a Hydrafacial razoavelmente acredite constituir,
                ou poder vir a constituir, uma violação destes Termos, ou das
                políticas da Hydrafacial. A falha ou atraso da Hydrafacial em
                tomar tais ações não constitui uma renúncia aos seus direitos de
                aplicar estes Termos. A Hydrafacial solicita que os Utilizadores
                não utilizem a Conta enquanto conduzem ou operam maquinaria ou
                equipamento.
              </p>
              <div className={styles["contentTitle"]}>
                Material Gerado pelo Utilizador
              </div>
              <p>
                Se, e na medida em que, optarmos por aceitar material gerado
                pelo utilizador e sujeito às capacidades da Conta, o utilizador
                poderá ter a oportunidade de publicar, transmitir, submeter ou
                publicar opiniões, classificações, comentários, feedback ou
                outros materiais sobre a Conta ("Material Gerado pelo
                Utilizador") que possam ser acessíveis e visíveis pelo público.
                Com respeito ao Material Gerado pelo Utilizador submetido ou
                publicado pelo Utilizador, o Utilizador declara que (i) criou e
                detém os direitos sobre o conteúdo ou tem a permissão expressa
                do proprietário para publicar tal conteúdo, e (ii) o conteúdo
                não infringe os direitos de qualquer outra pessoa ou entidade
                (incluindo, sem limitação, direitos de autor, marcas registadas
                ou direitos de privacidade) ou viola quaisquer leis, regras ou
                regulamentos aplicáveis, estes Termos de Utilização ou qualquer
                outra das nossas políticas publicadas.
              </p>
              <div className={styles["contentSubTitle"]}>
                O Material Gerado pelo Utilizador não pode:
              </div>
              <ul>
                <li>
                  Conter qualquer material que seja falso, difamatório,
                  calunioso, obsceno, assediante, ameaçador, discriminatório,
                  intolerante, odioso, violento, vulgar, profano, pornográfico
                  ou de outra forma ofensivo, inapropriado, prejudicial, ilegal,
                  perturbador ou prejudicial;
                </li>
                <li>
                  Violate our or any other person’s legal rights (including the
                  rights of publicity and privacy), contain any material that
                  could give rise to any civil or criminal liability under
                  applicable laws or regulations or otherwise promote, advocate
                  or assist any illegal activity or unlawful act;
                </li>
                <li>
                  Causar, ou ameaçar causar, danos a qualquer pessoa, ou perda
                  ou dano a qualquer propriedade;
                </li>
                <li>
                  Incluir informações pessoais de outras pessoas, tais como
                  endereço, número de telefone, endereço eletrónico, número de
                  segurança social, número de cartão de crédito, informações
                  médicas, informações financeiras, ou qualquer outra informação
                  que possa ser utilizada para localizar, contactar, ou fazer-se
                  passar por esse indivíduo;
                </li>
                <li>
                  Infringir qualquer patente, marca registada, segredo
                  comercial, direito de autor, contrato ou outra propriedade
                  intelectual, ou outros direitos de propriedade da Hydrafacial,
                  ou de qualquer outra pessoa;
                </li>
                <li>
                  Procurar prejudicar ou explorar crianças, expondo-as a
                  conteúdos impróprios, pedindo informações pessoalmente
                  identificáveis ou de qualquer outra forma;
                </li>
                <li>
                  Desvirtuar a sua identidade ou filiação com qualquer pessoa ou
                  organização, incluindo a Hydrafacial;
                </li>
                <li>
                  Procurar recolher endereços de correio eletrónico de outros
                  utilizadores e/ou os seus nomes de utilizador ou senhas para
                  as suas contas, ou outros serviços, por meios eletrónicos ou
                  outros para qualquer finalidade, incluindo o envio de correio
                  eletrónico não solicitado, ou outras comunicações eletrónicas;
                </li>
                <li>
                  Procurar transmitir cartas em cadeia, correio eletrónico em
                  massa ou lixo, automatizado ou não, ou interferir com,
                  perturbar ou criar uma sobrecarga indevida para a Hydrafacial,
                  ou para as redes ou serviços ligados ao Website, ou instalar,
                  ou tentar instalar, ou promover spyware, malware ou outro
                  código informático, nos nossos computadores ou equipamentos,
                  ou nos computadores ou equipamentos de terceiros; ou
                </li>
                <li>
                  Envolver atividades comerciais, tais como concursos, sorteios
                  e/ou outras promoções de vendas, permutas, publicidade ou
                  ofertas de venda ou compra de bens e serviços; ou
                </li>
                <li>
                  Ser de outra forma censurável ou não-familiar conforme
                  determinado pela Hydrafacial a seu exclusivo critério.
                </li>
              </ul>
              <p>
                Não reclamamos a propriedade do Material Gerado pelo Utilizador.
                No entanto, ao submeter ou publicar Material Gerado pelo
                Utilizador, o Utilizador concede-nos irrevogavelmente, e aos
                nossos cessionários, agentes e licenciados e outros
                utilizadores, uma licença mundial, não exclusiva, irrevogável,
                livre de royalties, totalmente paga sob todos os direitos de
                autor, marcas registadas, patentes, segredos comerciais,
                direitos de privacidade e publicidade e outros direitos de
                propriedade intelectual que o Utilizador possui ou controla
                para: (i) utilizar, reproduzir, transmitir, modificar, indexar,
                adaptar, publicar, traduzir, criar obras derivadas, distribuir,
                exibir e de outra forma explorar esse conteúdo em todo o mundo,
                em qualquer meio de comunicação, seja agora conhecido ou
                doravante inventado, inclusive para todos e quaisquer fins,
                incluindo comerciais ou de marketing, tudo sem aviso prévio, com
                ou sem atribuição, e sem a exigência de qualquer permissão ou
                pagamento ao Utilizador ou a qualquer outra pessoa ou entidade,
                e (ii) utilizar o nome, pessoa ou semelhança do Utilizador,
                sozinho ou em ligação com tais utilizações, sem qualquer
                obrigação ou remuneração para o Utilizador. Sem limitação, os
                direitos concedidos incluem o direito de: (a) configurar,
                hospedar, indexar, fazer "cache", arquivar, armazenar,
                digitalizar, comprimir, otimizar, modificar, reformatar, editar,
                adaptar, publicar em formato pesquisável, e remover esse
                Material Gerado pelo Utilizador e combiná-lo com outros
                materiais, e (b) utilizar quaisquer ideias, conceitos, know-how,
                ou técnicas contidas em qualquer Material Gerado pelo Utilizador
                para quaisquer fins, incluindo o desenvolvimento, fabrico, e
                comercialização de produtos e/ou serviços. Exceto se proibido
                por lei, o Utilizador renuncia, e aceita renunciar a quaisquer
                direitos morais (incluindo atribuição e integridade) que possa
                ter em qualquer Material Gerado pelo Utilizador, mesmo que seja
                modificado ou alterado de uma forma contrária à vontade do
                Utilizador. Na medida em que não possa ser objeto de renúncia, o
                Utilizador concorda irrevogavelmente em não exercer tais
                direitos (se os houver) de uma forma que interfira com qualquer
                exercício dos direitos concedidos. O Utilizador compreende que
                não receberá quaisquer taxas, valores, retribuições ou
                remuneração por qualquer dos direitos concedidos nesta Secção. O
                Utilizador concorda em pagar todos os royalties, taxas e outros
                montantes devidos a qualquer pessoa ou entidade, em virtude do
                Material Gerado pelo Utilizador que colocar no Website.
              </p>
              <p>
                Se, e na medida em que, decidirmos aceitar material gerado pelo
                Utilizador e sujeito às capacidades da Conta, poderemos recusar,
                alterar, ou remover uma Transferência de Utilizador sem aviso
                prévio, por qualquer razão, a critério exclusivo da Hydrafacial,
                incluindo a nossa convicção de que uma Transferência de
                Utilizador pode violar estes Termos de Utilização ou ser
                censurável de qualquer outra forma. Se, e na medida em que,
                optarmos por aceitar Material Gerado pelo Utilizador, temos o
                direito, mas não a obrigação, de monitorizar, rever, analisar,
                examinar, publicar, remover, rejeitar, modificar e armazenar
                todo o Material Gerado pelo Utilizador publicado no Website, em
                qualquer altura e por qualquer motivo, sem aviso prévio,
                incluindo para assegurar que todo esse Material Gerado pelo
                Utilizador cumpra estes Termos de Utilização. Não subscrevemos
                qualquer Material Gerado pelo Utilizador e o Material Gerado
                pelo Utilizador publicado não reflete as nossas opiniões, pontos
                de vista ou conselhos. O Utilizador é o único responsável pelo
                Material Gerado pelo Utilizador e pelas consequências da sua
                publicação, e concorda que estamos a agir apenas como um canal
                passivo para a sua distribuição e publicação online do Material
                Gerado pelo Utilizador. Não assumimos qualquer responsabilidade
                e não nos obrigamos por qualquer Material Gerado pelo Utilizador
                que o Utilizador ou qualquer outro utilizador, ou terceiro,
                coloque ou envie no, ou através do, Website, nem assumimos
                qualquer responsabilidade por qualquer ação ou inação
                relativamente a transmissões, comunicações ou conteúdos
                fornecidos por qualquer utilizador ou terceiro.
              </p>
              <div className={styles["contentTitle"]}>Indemnização</div>
              <p>
                O Utilizador concorda em defender, indemnizar, e isentar a
                Hydrafacial, a sua empresa-mãe, subsidiárias e outras empresas
                afiliadas, contratantes independentes, prestadores de serviços e
                consultores, e os seus respetivos empregados, contratantes,
                agentes, funcionários, membros e administradores ("Indemnizados
                da Hydrafacial") de toda e qualquer reclamação, ações, danos,
                custos, processos, multas, penalidades, responsabilidades e
                despesas (incluindo honorários de advogados) (" Reclamações")
                que resultem, ou estejam relacionadas com, a utilização, ou má
                utilização, da Conta pelo Utilizador, violação destes Termos ou
                da lei aplicável, ou violação de quaisquer direitos de
                terceiros. A Hydrafacial reserva-se o direito de assumir a
                defesa e o controlo exclusivo de qualquer assunto sujeito a
                indemnização por parte do Utilizador, caso em que o Utilizador
                cooperará na afirmação de quaisquer defesas disponíveis. No caso
                de qualquer reclamação de terceiros de que a posse e utilização
                da Conta ou do Utilizador viola o direito de propriedade
                intelectual de terceiros, a Hydrafacial será a única responsável
                pela investigação, defesa, resolução e quitação de qualquer
                reclamação de violação de propriedade intelectual.
              </p>
              <div className={styles["contentTitle"]}>
                Garantias; Exoneração de Responsabilidade
              </div>
              <p>
                A HYDRAFACIAL FORNECE A CONTA AO UTILIZADOR "TAL COMO ESTÁ" E O
                UTILIZADOR UTILIZA-A POR SUA CONTA E RISCO. NA MEDIDA MÁXIMA
                PERMITIDA PELA LEGISLAÇÃO APLICÁVEL, A HYDRAFACIAL RENUNCIA A
                TODAS AS GARANTIAS, EXPRESSAS OU IMPLÍCITAS, INCLUINDO QUAISQUER
                GARANTIAS DE QUE A CONTA É COMERCIALIZÁVEL, FIÁVEL, DISPONÍVEL,
                EXATA, ADEQUADA A UM DETERMINADO FIM OU NECESSIDADE, NÃO
                INFRATORA, LIVRE DE DEFEITOS OU VÍRUS, CAPAZ DE OPERAR NUMA BASE
                ININTERRUPTA, QUE A UTILIZAÇÃO DA CONTA PELO UTILIZADOR ESTÁ EM
                CONFORMIDADE COM AS LEIS APLICÁVEIS AO UTILIZADOR, QUE AS
                INFORMAÇÕES DO UTILIZADOR OU AS ORDENS TRANSMITIDAS EM RELAÇÃO À
                CONTA SERÃO TRANSMITIDAS OU RECEBIDAS COM SUCESSO, COM EXATIDÃO,
                OU COM SEGURANÇA, QUE AS ORDENS ESTARÃO CONFORME COLOCADAS OU
                PRONTAS NO MOMENTO SUGERIDO, OU QUE QUALQUER ITEM EM PARTICULAR
                SOLICITADO ESTARÁ DISPONÍVEL. OS MATERIAIS E INFORMAÇÕES DA
                CONTA PODEM INCLUIR IMPRECISÕES TÉCNICAS OU ERROS TIPOGRÁFICOS.
                NÃO OBSTANTE O ACIMA EXPOSTO, NENHUMA DAS EXONERAÇÕES DE
                RESPONSABILIDADE PREVISTAS NESTE PARÁGRAFO SE APLICA ÀS
                GARANTIAS RELACIONADAS COM DANOS PESSOAIS.
              </p>
              <div className={styles["contentTitle"]}>
                Isenção de Responsabilidade
              </div>
              <p>
                SUJEITO À LEI APLICÁVEL, INCLUINDO NO QUE DIZ RESPEITO À
                RESPONSABILIDADE POR DANOS PESSOAIS OU DIREITOS ESTATUTÁRIOS NÃO
                PASSÍVEIS DE INDEMNIZAÇÃO AO ABRIGO DA LEI DE NEW JERSEY, EM
                CASO ALGUM A HYDRAFACIAL OU OS SEUS FUNCIONÁRIOS,
                ADMINISTRADORES, MEMBROS, EMPREGADOS, ACIONISTAS OU AGENTES (A)
                SERÃO RESPONSÁVEIS PERANTE O UTILIZADOR NO QUE DIZ RESPEITO À
                UTILIZAÇÃO DA CONTA, INCLUINDO, SEM LIMITAÇÃO, A PARTICIPAÇÃO NA
                FERRAMENTA DE AUTO-AVALIAÇÃO, O CONTEÚDO OU OS MATERIAIS
                CONTIDOS OU ACEDIDOS ATRAVÉS DA CONTA, OU QUAISQUER DANOS QUE
                RESULTEM DE ERROS, OMISSÕES, INTERRUPÇÕES, ELIMINAÇÃO DE
                FICHEIROS, ERROS, DEFEITOS, VÍRUS, ATRASOS NA OPERAÇÃO OU
                TRANSMISSÃO OU QUALQUER FALHA DE DESEMPENHO, RESULTANTES OU NÃO
                DE EVENTOS NATURAIS, FALHA DE COMUNICAÇÕES, ROUBO, DESTRUIÇÃO OU
                ACESSO NÃO AUTORIZADO A REGISTOS, PROGRAMAS OU SERVIÇOS DA
                HYDRAFACIAL; E (B) EM CASO ALGUM SERÃO RESPONSÁVEIS PERANTE O
                UTILIZADOR POR QUAISQUER DANOS INDIRETOS, ESPECIAIS,
                INCIDENTAIS, CONSEQUENTES, PUNITIVOS OU EXEMPLARES, INCLUINDO,
                SEM LIMITAÇÃO, DANOS POR PERDA DE BOA-VONTADE, LUCROS CESSANTES,
                PERDA, ROUBO OU CORRUPÇÃO DE INFORMAÇÕES DO UTILIZADOR,
                INCAPACIDADE DE UTILIZAR A CONTA OU QUALQUER DAS SUAS
                CARACTERÍSTICAS OU FALHA, OU MAU FUNCIONAMENTO DO DISPOSITIVO. A
                ÚNICA SOLUÇÃO DO UTILIZADOR É CESSAR A UTILIZAÇÃO DA CONTA. SE
                RESIDIR NUMA JURISDIÇÃO QUE NÃO NOVA JERSEY, ESTADOS UNIDOS DA
                AMÉRICA, A SUA JURISDIÇÃO PODE NÃO PERMITIR A LIMITAÇÃO DE
                RESPONSABILIDADE EM CONTRATOS COM CONSUMIDORES, PELO QUE ALGUMAS
                OU TODAS ESTAS LIMITAÇÕES DE RESPONSABILIDADE PODEM NÃO SE
                APLICAR AO UTILIZADOR.
              </p>
              <p>
                Conteúdo, Contas, Produtos e Serviços de Terceiros (incluindo
                Publicidade e Promoções) A Hydrafacial pode fornecer conteúdo de
                terceiros na Conta (incluindo conteúdo incorporado) ou links
                para conteúdo, Contas, Produtos e Serviços de terceiros,
                incluindo anúncios e promoções (coletivamente, "Conteúdo de
                Terceiros") como um serviço destinado aos interessados nesta
                informação. Não controlamos, endossamos ou adotamos qualquer
                Conteúdo de Terceiros, incluindo que a inclusão de qualquer link
                não implica afiliação, endosso ou adoção pela Hydrafacial de
                qualquer Conta ou qualquer informação nela contida, e não
                podemos dar qualquer garantia quanto à sua exatidão ou
                integralidade. O utilizador reconhece e concorda que a
                Hydrafacial não é responsável, nem está obrigada, de qualquer
                forma, por qualquer Conteúdo de Terceiros e não se
                responsabiliza pela atualização ou revisão de tal Conteúdo de
                Terceiros. O Utilizador concorda em utilizar o Conteúdo de
                Terceiros aí contido por sua própria conta e risco. Quando
                utilizar outras Contas através de Conteúdo de Terceiros, ou
                participar em promoções ou negócios com terceiros, deverá
                compreender que os nossos termos e políticas já não se aplicam,
                e que os termos e políticas dessas Contas de terceiros serão
                agora aplicáveis. O Utilizador deverá rever os termos e
                políticas aplicáveis, incluindo práticas de privacidade e
                recolha de dados, de qualquer Conta para a qual navegue a partir
                da nossa Conta. Ao utilizar a Conta, o utilizador deve cumprir
                quaisquer termos aplicáveis de terceiros.
              </p>
              <div className={styles["contentTitle"]}>Modificações à Conta</div>
              <p>
                A Hydrafacial reserva-se o direito de modificar ou descontinuar,
                temporária ou permanentemente, a Conta ou quaisquer
                funcionalidades, ou partes, da mesma, sem aviso prévio. O
                Utilizador concorda que a Hydrafacial não será responsável por
                qualquer modificação, suspensão ou descontinuação da Conta ou
                qualquer parte da mesma.
              </p>
              <div className={styles["contentTitle"]}>
                Exoneração de Responsabilidade por Inexatidão
              </div>
              <p>
                Pontualmente, pode haver informações no Site que contenham erros
                tipográficos, imprecisões, ou omissões. Reservamo-nos o direito
                de corrigir quaisquer erros, imprecisões ou omissões e de
                alterar ou atualizar a informação em qualquer altura, sem aviso
                prévio.
              </p>
              <div className={styles["contentTitle"]}>
                APENAS PARA RESIDENTES NA AMÉRICA DO NORTE
                <br />
                Arbitragem
              </div>
              <p>
                Por favor, leia atentamente esta secção. Afeta direitos que
                poderá ter de outra forma. Prevê a resolução da maioria das
                disputas através de arbitragem e não de julgamentos em tribunal
                e de ações coletivas. A arbitragem é mais informal do que um
                processo em tribunal, utiliza um árbitro neutro em vez de um
                juiz ou júri, e a instrução é mais limitada. A arbitragem é
                definitiva e vinculativa e está sujeita apenas a uma revisão
                muito limitada por um tribunal. A presente cláusula de
                arbitragem sobreviverá à cessação destes Termos.
              </p>
              <p>
                Arbitragem Vinculativa. Esta disposição destina-se a ser
                interpretada em sentido lato, de modo a abranger todas as
                disputas ou reclamações decorrentes de, ou relacionadas com
                estes Termos, a utilização da Conta pelo Utilizador, e a sua
                relação connosco. Qualquer disputa ou reclamação decorrente de,
                ou relacionada com, estes Termos ou com a utilização da Conta do
                Utilizador e a sua relação com a Hydrafacial ou qualquer
                subsidiária, sociedade-mãe ou empresa afiliada ou empresas (quer
                seja baseada em contrato, delito civil, estatuto, fraude,
                deturpação ou qualquer outra teoria jurídica) será resolvida por
                arbitragem vinculativa, exceto que qualquer de entre nós pode
                levar reclamações ao tribunal de pequenas causas, se estas se
                qualificarem para ser ouvidas por tal tribunal.
              </p>
              <div className={styles["contentTitle"]}>
                Procedimentos de Arbitragem.
              </div>
              <p>
                Procedimentos de Disputa Informal: Para todas as disputas, quer
                sejam levadas a cabo em tribunal ou arbitragem, deve primeiro
                enviar uma carta (por correio de expresso, ou por carta
                registada) com uma descrição escrita do seu pedido, dirigida ao
                nosso Departamento Jurídico Attn: Legal Dept., 2165 E. Spring
                St, Long Beach, CA 90806 para nos dar uma oportunidade de
                resolver o litígio. O Utilizador e a Hydrafacial concordam em
                negociar a sua reclamação de boa-fé. Tanto o Utilizador como a
                Hydrafacial concordam que o procedimento de resolução de
                litígios é uma condição prévia que deve ser satisfeita antes de
                iniciar qualquer arbitragem ou de apresentar qualquer reclamação
                contra a outra parte. O Utilizador pode solicitar a arbitragem
                se a sua reclamação ou disputa não puder ser resolvida no prazo
                de 60 dias.
              </p>
              <p>
                Na medida em que não possa resolver qualquer disputa através do
                procedimento informal de resolução de disputas acima descrito, a
                disputa deve ser resolvida através de arbitragem individual
                vinculativa. O Utilizador concorda que a arbitragem de qualquer
                disputa ou reclamação será conduzida de acordo com as regras da
                American Arbitration Association ("AAA"), incluindo as Normas de
                Arbitragem do Consumidor da AAA (conforme aplicável), tal como
                modificado por estes Termos. As Normas da AAA e informações
                sobre arbitragem e taxas estão disponíveis online em{" "}
                <a href="https://www.adr.org" target="_blank" rel="noreferrer">
                  www.adr.org
                </a>{" "}
                ou contactando a AAA através do telefone (800) 778-7879. O
                Utilizador e a Hydrafacial concordam que estes Termos comprovam
                uma transação no comércio interestadual e que esta disposição de
                arbitragem será interpretada e aplicada de acordo com a US
                Federal Arbitration Act e a lei de arbitragem federal, e não
                será regida pela lei estadual. Qualquer arbitragem será
                realizada num local razoavelmente conveniente, no Estado em que
                o Utilizador reside, ou noutro local acordado entre as partes. A
                arbitragem será conduzida em língua inglesa. Um árbitro pode
                conceder, numa base individual, qualquer medida que estaria
                disponível num tribunal, incluindo medidas cautelares ou
                declarativas, na medida necessária para satisfazer a sua
                reclamação individual, e deve seguir e aplicar estes Termos como
                um tribunal o faria. Qualquer arbitragem será confidencial, e
                nem o Utilizador nem nós poderemos revelar a existência,
                conteúdo ou resultados de qualquer arbitragem, exceto conforme
                exigido por lei, ou para efeitos de execução da sentença
                arbitral. A deliberação sobre qualquer sentença arbitral pode
                ser proferida em qualquer tribunal com jurisdição adequada.
              </p>
              <p>
                Custos da Arbitragem. O pagamento de todas as taxas de
                apresentação, administração e arbitragem será regido pelas
                Normas da AAA. Cada parte suportará os honorários e as despesas
                dos seus próprios advogados, peritos, testemunhas, bem como de
                preparação e apresentação de provas na arbitragem. No entanto,
                para reclamações inferiores a $10.000, em relação às quais o
                Utilizador tenha notificado e negociado de boa fé, tal como
                exigido supra, antes de iniciar a arbitragem, se o árbitro
                considerar que é a parte prevalecente na arbitragem, terá
                direito a uma recuperação dos honorários e custos razoáveis dos
                advogados. Exceto no caso de reclamações determinadas como sendo
                frívolas, de má-fé ou com um propósito impróprio, concordamos em
                não procurar obter uma concessão de honorários advocatícios em
                arbitragem, mesmo que uma concessão esteja de outra forma
                disponível nos termos da lei aplicável. Renúncia de Ação
                Coletiva e Renúncia do Júri. O Utilizador e nós concordamos que
                qualquer processo, seja em arbitragem ou em tribunal, será
                conduzido apenas numa base individual e não numa ação coletiva,
                consolidada ou representativa. Se um tribunal ou árbitro
                determinar numa ação entre si e nós que esta renúncia à ação
                coletiva é inaplicável, o acordo de arbitragem será nulo no que
                diz respeito a si. Se, por qualquer razão, uma reclamação
                prosseguir em tribunal e não através de arbitragem, o Utilizador
                e nós renunciamos a qualquer direito a um julgamento por júri.
              </p>
              <p>
                Se o Utilizador for cidadão de qualquer país da União Europeia
                ou do Reino Unido, Suíça, Noruega ou Islândia, a lei e o foro
                que o governa serão as leis e os tribunais do seu local de
                residência habitual.
              </p>
              <div className={styles["contentTitle"]}>
                APENAS PARA CIDADÃOS NORTE-AMERICANOS
                <br />
                Lei Aplicável e Jurisdição
              </div>
              <p>
                Estes Termos de Utilização, a utilização da Conta e qualquer
                disputa que possa surgir entre o Utilizador e a Hydrafacial
                serão regidos e interpretados de acordo com a Federal
                Arbitration Act, a lei federal aplicável e as leis do Estado da
                Califórnia, Estados Unidos da América, sem dar efeito a qualquer
                escolha ou conflito de disposição legal ou norma (seja do Estado
                da Califórnia ou de qualquer outra jurisdição). A Convenção das
                Nações Unidas para a Venda Internacional de Mercadorias não tem
                qualquer aplicabilidade. Se o acordo de arbitragem for
                considerado inaplicável ou nulo, ou se uma disputa entre as
                partes não for sujeita a arbitragem, o Utilizador consente
                irrevogavelmente na jurisdição exclusiva dos tribunais federais
                e estaduais localizados no condado de Los Angeles, Califórnia,
                Estados Unidos da América, para efeitos de qualquer ação legal
                resultante ou relacionada com a utilização da Conta ou destes
                Termos.
              </p>
              <div className={styles["contentTitle"]}>
                PARA TODOS OS RESIDENTES FORA DA AMÉRICA DO NORTE
              </div>
              <p>
                Se for residente fora da América do Norte, a lei e o foro que o
                governa serão as leis e os tribunais do seu local de residência
                habitual.
              </p>

              <div className={styles["contentTitle"]}>Rescisão</div>
              <p>
                Não obstante qualquer destes Termos, a Hydrafacial reserva-se o
                direito, sem aviso prévio e a seu exclusivo e absoluto critério,
                de terminar a licença de utilização da Conta do Utilizador e
                bloquear ou impedir o futuro acesso e utilização da Conta pelo
                Utilizador. A falha ou atraso da Hydrafacial em tomar tais ações
                não constitui uma renúncia aos seus direitos de aplicar estes
                Termos.
              </p>

              <div className={styles["contentTitle"]}>Alterações</div>
              <p>
                A Hydrafacial reserva-se o direito de alterar ou modificar estes
                Termos, ou quaisquer outras políticas da Hydrafacial,
                relacionadas com a utilização da Conta, em qualquer altura, e a
                seu exclusivo critério, alterando estes Termos dentro da Conta,
                ou colocando avisos de revisão no Website da Hydrafacial. A
                utilização continuada da Conta após tais alterações ou
                modificações dos Termos, ou outras políticas da Hydrafacial,
                constituirá a aceitação de tais alterações ou modificações. Se
                não concordar com tais alterações ou modificações, deverá
                desinstalar a Conta imediatamente.
              </p>

              <div className={styles["contentTitle"]}>Divisibilidade</div>
              <p>
                Se qualquer disposição destes Termos for considerada ilegal,
                nula ou por qualquer razão inaplicável, então essa disposição
                será considerada separável dos presentes Termos e não afetará a
                validade e a aplicabilidade de quaisquer disposições restantes.
              </p>

              <div className={styles["contentTitle"]}>
                Informação aos Residentes da Califórnia
              </div>
              <p>
                Ao abrigo do Artigo 1789.3 do Código Civil da Califórnia, os
                residentes da Califórnia têm direito às seguintes informações
                específicas sobre os direitos dos consumidores: o fornecedor da
                conta é a Hydrafacial LLC, 2165 E. Spring St, Long Beach, CA
                90806. Para apresentar uma reclamação relativa à Conta, ou para
                receber mais informações sobre a utilização da Conta, enviar uma
                carta para o endereço acima indicado, ou contactar a Hydrafacial
                via e-mail (colocando "California Resident Request" em
                "Assunto"). Pode também contactar o Complaint Assistance Unit of
                the Division of Consumer Services of the Department of Consumer
                Affairs por escrito para 1625 North Market Blvd., Suite N 112,
                Sacramento CA 95834, ou através do telefone 800.952.5210.
              </p>
              <div className={styles["contentTitle"]}>Contact</div>
              <div className={styles["contact"]}>
                <p>
                  Quaisquer perguntas, queixas, ou reclamações relativas à Conta
                  devem ser dirigidas a:
                </p>
                <p>The Hydrafacial Company</p>
                <p>Consumer Care</p>
                <p>
                  Email:
                  <a
                    href="mailto:help@Hydrafacial.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    help@Hydrafacial.com
                  </a>
                </p>
                <p>2165 E. Spring St, Long Beach, CA 90806</p>
                <p>Phone: 1-888-791-4888</p>
              </div>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Contacte-nos</h3>
              <p>
                Para os nossos clientes: por favor contacte a entidade
                Hydrafacial identificada no seu formulário de encomenda.
              </p>
              <p>
                Se desejar aceder, rever, atualizar, corrigir, apagar quaisquer
                dados pessoais que tenhamos sobre si, ou exercer quaisquer
                outros direitos de privacidade à sua disposição, preencha este
                forrmulário de pedido.
              </p>
              <p>Dados de Contacto do Responsável pelo Tratamento:</p>
              <div className={styles["tableWrapper"]}>
                <table className={styles["contactDetailsTable"]}>
                  <thead>
                    <tr>
                      <th>Estados Unidos da América</th>
                      <th>Reino Unido</th>
                      <th>Alemanha</th>
                      <th>França</th>
                      <th>Espanha</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hydrafacial LLC</td>
                      <td>HydraFacial UK Limited</td>
                      <td>Hydrafacial Germany GmbH</td>
                      <td>Hydrafacial France SAS</td>
                      <td>The Hydrafacial Company Iberia SL</td>
                    </tr>
                    <tr>
                      <td>2165 E. Spring Street, Long Beach, CA 90806</td>
                      <td>
                        3rd Floor 1 Ashley Road, Altrincham,Cheshire, WA14 2DT
                      </td>
                      <td>Stichlingstrasse 1 , 60327 Frankfurt </td>
                      <td>5 rue Tilsit, 75008 Paris</td>
                      <td>Claudio Coello 75, 1º A, 28001 Madrid </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={styles["contactDetails"]}>
                Encarregado da Proteção de Dados: Ignacio de la Corte
              </p>
              <p>
                <a
                  href="mailto:dpo@hydrafacial.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  dpo@hydrafacial.com
                </a>
              </p>
              <p>
                Quaisquer perguntas ou perguntas relacionadas com esta política,
                os seus dados pessoais, ou para conhecer e fazer valer os seus
                direitos, por favor diga-nos como podemos ajudá-lo.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPagePt;
