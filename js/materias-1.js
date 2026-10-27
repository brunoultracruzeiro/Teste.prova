// Conteúdo de estudo — parte 1
// Estrutura: { id, nome, curto, questoes, horas, cor, topicos:[{t, r(html)}], flash:[[frente, verso]], quiz:[{q, o:[A..E], c:índice certo, e:explicação}] }
window.MATERIAS = window.MATERIAS || [];

window.MATERIAS.push({
  id: "inst", nome: "Legislação Institucional", curto: "Institucional", questoes: 10, horas: 30, cor: "#1d4ed8",
  aviso: "É a matéria com mais questões (10) e a que a AOCP cobra mais na letra da lei. Os resumos abaixo são um roteiro de leitura. Estude pelo texto integral das leis (site da ALESC: leis.alesc.sc.gov.br e planalto.gov.br) e confira prazos, quóruns e números na lei seca.",
  topicos: [
    { t: "Base constitucional das PMs (CF arts. 42 e 144)", r: `
<ul>
<li><b>Art. 42 da CF:</b> os membros das Polícias Militares e dos Corpos de Bombeiros Militares, instituições organizadas com base na <b>hierarquia e disciplina</b>, são <b>militares dos Estados</b>, do DF e dos Territórios.</li>
<li><b>Art. 144, §5º:</b> às polícias militares cabem a <b>polícia ostensiva e a preservação da ordem pública</b>. Aos corpos de bombeiros, além das atribuições definidas em lei, cabem as atividades de defesa civil.</li>
<li><b>Art. 144, §6º:</b> as PMs e os CBMs são <b>forças auxiliares e reserva do Exército</b> e se subordinam, junto com as polícias civis e penais estaduais, aos <b>Governadores</b>.</li>
<li><b>Art. 142, §3º (aplicado aos militares estaduais pelo art. 42, §1º):</b> o militar não pode se sindicalizar nem fazer greve. Enquanto estiver no serviço ativo, também não pode ser filiado a partido político.</li>
<li><b>Art. 142, §2º:</b> não cabe habeas corpus contra punição disciplinar militar. O STF admite o HC só para examinar a <i>legalidade</i> da punição (competência, cerimonial, pena prevista), não o mérito.</li>
</ul>` },
    { t: "Estatuto da PMSC – Lei 6.218/1983", r: `
<p>O Estatuto regula a situação, as obrigações, os deveres, os direitos e as prerrogativas dos policiais militares de SC. Segue o modelo do Estatuto dos Militares federal (Lei 6.880/80). Na leitura, priorize:</p>
<ul>
<li><b>Hierarquia:</b> é a ordenação da autoridade em níveis diferentes dentro da estrutura da Corporação, por <b>postos</b> (oficiais) e <b>graduações</b> (praças). Dentro do mesmo posto ou graduação, a ordenação se faz pela <b>antiguidade</b>.</li>
<li><b>Disciplina:</b> é a rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições, traduzidos no perfeito cumprimento do dever.</li>
<li><b>Círculos hierárquicos:</b> âmbitos de convivência entre militares da mesma categoria (oficiais superiores, intermediários e subalternos; subtenentes e sargentos; cabos e soldados).</li>
<li><b>Situações do militar:</b> <b>ativa</b> e <b>inatividade</b> (reserva remunerada e reforma). Estude também agregação, reversão e exclusão do serviço ativo.</li>
<li><b>Valor e ética policial-militar:</b> são listas de deveres que a banca costuma copiar literalmente. Leia com atenção.</li>
<li><b>Direitos e prerrogativas:</b> uso de uniformes, honras, prisão especial etc.</li>
</ul>
<p class="dica">Dica: monte flashcards próprios com as listas de valores e deveres éticos. É desse tipo de lista que saem as questões "assinale a alternativa que NÃO corresponde".</p>` },
    { t: "Lei Orgânica Nacional – Lei 14.751/2023", r: `
<p>É a Lei Orgânica Nacional das Polícias Militares e dos Corpos de Bombeiros Militares dos Estados, do DF e dos Territórios. Ela traz normas gerais que valem para todas as corporações do país.</p>
<ul>
<li>Reafirma <b>hierarquia e disciplina</b> como base institucional e a subordinação ao Governador.</li>
<li>Define princípios, diretrizes e <b>competências</b> das PMs: polícia ostensiva, preservação da ordem pública, polícia judiciária militar, entre outras.</li>
<li>Traz normas gerais sobre <b>ingresso</b> (concurso público), <b>carreira</b>, garantias e direitos dos militares estaduais.</li>
<li>Estrutura básica das instituições: Comando-Geral, órgãos de direção, de apoio e de execução.</li>
</ul>
<p class="dica">Na lei seca, procure: a lista de competências da PM, os princípios e diretrizes, os requisitos de ingresso e as garantias. São os pontos mais prováveis de prova.</p>` },
    { t: "Ingresso, Conselho de Disciplina e PAD", r: `
<ul>
<li><b>LC 587/2013:</b> trata do ingresso nas carreiras militares de SC. Estude requisitos (escolaridade, idade, altura, CNH), etapas do concurso e o curso de formação.</li>
<li><b>Lei 5.209/1976 (Conselho de Disciplina):</b> julga se a <b>praça com estabilidade assegurada</b> (e o aspirante a oficial) tem condições de permanecer na ativa, garantindo a ela o direito de se justificar. Estude: quem nomeia, a composição (oficiais), as hipóteses de submissão, prazos e a decisão final.</li>
<li><b>Portaria 009/2001 (PAD):</b> processo administrativo disciplinar da PMSC. Estude: fases (instauração, instrução, defesa, relatório e decisão), prazos e garantias do contraditório e da ampla defesa.</li>
</ul>` },
    { t: "Promoção de praças e demais leis estaduais", r: `
<ul>
<li><b>LC 801/2022:</b> promoção de praças. Estude: critérios (antiguidade, merecimento, bravura, <i>post mortem</i>), interstícios, quadro de acesso e casos de impedimento.</li>
<li><b>LC 765/2020 e Decreto 1.601/2021:</b> leia o texto integral e anote competências, prazos e percentuais.</li>
<li><b>Constituição de SC:</b> capítulo da Segurança Pública (a partir do art. 105). Compare com o art. 144 da CF: a banca gosta de trocar uma palavra do texto.</li>
</ul>` }
  ],
  flash: [
    ["Base institucional das PMs (CF, art. 42)", "Hierarquia e disciplina. Os membros das PMs e CBMs são militares dos Estados."],
    ["O que cabe às PMs (CF, art. 144, §5º)?", "Polícia ostensiva e preservação da ordem pública."],
    ["A quem as PMs se subordinam?", "Aos Governadores dos Estados, do DF e dos Territórios (CF, art. 144, §6º)."],
    ["PMs e CBMs são forças ___ e reserva do ___", "Forças auxiliares e reserva do Exército."],
    ["Militar pode fazer greve ou se sindicalizar?", "Não. As duas condutas são proibidas (CF, art. 142, §3º, IV)."],
    ["Militar da ativa pode ser filiado a partido político?", "Não, enquanto estiver no serviço ativo (CF, art. 142, §3º, V)."],
    ["Cabe HC contra punição disciplinar militar?", "Não, pelo art. 142, §2º. O STF admite o HC só para analisar a legalidade (não o mérito)."],
    ["Definição de hierarquia", "Ordenação da autoridade em níveis diferentes, por postos ou graduações. No mesmo posto ou graduação, vale a antiguidade."],
    ["Definição de disciplina", "Rigorosa observância e acatamento integral das leis, regulamentos e normas, traduzidos no perfeito cumprimento do dever."],
    ["Posto x graduação", "Posto = grau hierárquico do oficial. Graduação = grau hierárquico da praça."],
    ["Situações do militar estadual", "Ativa ou inatividade (reserva remunerada e reforma)."],
    ["O que julga o Conselho de Disciplina (Lei 5.209/76)?", "Se a praça com estabilidade (e o aspirante a oficial) tem condições de permanecer na ativa, garantindo-lhe o direito de se justificar."]
  ],
  quiz: [
    { q: "Segundo a Constituição Federal, às polícias militares cabem:", o: ["a apuração de infrações penais, exceto as militares.", "a polícia ostensiva e a preservação da ordem pública.", "as funções de polícia judiciária da União.", "o patrulhamento ostensivo das rodovias federais.", "a segurança dos estabelecimentos penais."], c: 1, e: "CF, art. 144, §5º. Apurar infrações penais (exceto militares) é das polícias civis (§4º); polícia judiciária da União é da PF; patrulhar rodovias federais é da PRF; segurança dos presídios é das polícias penais." },
    { q: "As polícias militares e os corpos de bombeiros militares, forças auxiliares e reserva do Exército, subordinam-se:", o: ["ao Ministro da Defesa.", "ao Comandante do Exército.", "aos Governadores dos Estados, do DF e dos Territórios.", "ao Secretário Nacional de Segurança Pública.", "ao Presidente da República."], c: 2, e: "CF, art. 144, §6º." },
    { q: "Assinale a alternativa CORRETA sobre o militar estadual:", o: ["Pode se sindicalizar, mas não pode fazer greve.", "Pode fazer greve, desde que mantenha 30% do efetivo.", "Enquanto estiver no serviço ativo, não pode estar filiado a partido político.", "Não pode votar.", "Pode se filiar a partido político, desde que não esteja de serviço."], c: 2, e: "CF, art. 142, §3º, IV e V, aplicado aos militares estaduais pelo art. 42, §1º. Sindicalização e greve são proibidas. O militar vota normalmente (só o conscrito não se alista)." },
    { q: "Os membros das Polícias Militares e dos Corpos de Bombeiros Militares são instituições organizadas com base:", o: ["na legalidade e na eficiência.", "na hierarquia e na disciplina.", "na moralidade e na publicidade.", "na unidade e na indivisibilidade.", "na autonomia e na independência funcional."], c: 1, e: "CF, art. 42." },
    { q: "Sobre habeas corpus e punições disciplinares militares, é correto afirmar que:", o: ["cabe HC para discutir o mérito de qualquer punição.", "o texto constitucional veda o HC, mas o STF admite a análise da legalidade da punição.", "cabe mandado de injunção no lugar do HC.", "o HC só é admitido para oficiais.", "cabe HC apenas contra punição aplicada por praça."], c: 1, e: "O art. 142, §2º veda o HC. O STF interpreta que a vedação alcança o mérito, não os pressupostos de legalidade (competência, procedimento, pena prevista)." },
    { q: "Na estrutura hierárquica militar, a precedência entre militares do mesmo posto ou graduação é definida:", o: ["pela idade.", "pela antiguidade no posto ou graduação.", "pelo tempo de serviço público em geral.", "pela escolaridade.", "pela lotação."], c: 1, e: "Dentro do mesmo posto ou graduação, a ordenação se faz pela antiguidade. Confira a redação exata no Estatuto (Lei 6.218/83)." },
    { q: "O grau hierárquico da praça é denominado:", o: ["posto.", "patente.", "graduação.", "círculo.", "função."], c: 2, e: "Posto é o grau hierárquico do oficial. Graduação é o da praça." }
  ]
});

window.MATERIAS.push({
  id: "const", nome: "Direito Constitucional (CF + CE/SC)", curto: "Constitucional", questoes: 8, horas: 22, cor: "#7c3aed",
  topicos: [
    { t: "Teoria da Constituição e poder constituinte", r: `
<ul>
<li><b>Poder constituinte originário:</b> cria a Constituição. É <b>inicial</b>, <b>ilimitado</b> (juridicamente), <b>incondicionado</b> e permanente.</li>
<li><b>Derivado reformador:</b> altera a CF por emendas (art. 60). É limitado e condicionado.</li>
<li><b>Derivado decorrente:</b> permite aos Estados elaborar suas constituições (ex.: Constituição de SC), respeitando a CF.</li>
<li><b>Cláusulas pétreas (art. 60, §4º):</b> não se admite proposta de emenda <i>tendente a abolir</i>: a forma federativa de Estado; o voto direto, secreto, universal e periódico; a separação dos Poderes; os direitos e garantias individuais.</li>
<li>A CF/88 é <b>escrita, promulgada (democrática), rígida, analítica e dogmática</b>.</li>
</ul>` },
    { t: "Princípios fundamentais (arts. 1º a 4º)", r: `
<ul>
<li><b>Fundamentos (art. 1º) — SO-CI-DI-VA-PLU:</b> SOberania, CIdadania, DIgnidade da pessoa humana, VAlores sociais do trabalho e da livre iniciativa, PLUralismo político.</li>
<li><b>Art. 2º:</b> os Poderes Legislativo, Executivo e Judiciário são <b>independentes e harmônicos</b> entre si.</li>
<li><b>Objetivos (art. 3º)</b> — todos começam com verbo: <b>construir</b> uma sociedade livre, justa e solidária; <b>garantir</b> o desenvolvimento nacional; <b>erradicar</b> a pobreza e a marginalização e <b>reduzir</b> as desigualdades sociais e regionais; <b>promover</b> o bem de todos, sem preconceitos.</li>
<li><b>Relações internacionais (art. 4º):</b> independência nacional, prevalência dos direitos humanos, autodeterminação dos povos, não intervenção, igualdade entre os Estados, defesa da paz, solução pacífica dos conflitos, repúdio ao terrorismo e ao racismo, cooperação entre os povos, concessão de asilo político.</li>
</ul>
<p class="dica">Pegadinha clássica: trocar fundamento (substantivo) por objetivo (verbo). "Erradicar a pobreza" é <b>objetivo</b>, não fundamento.</p>` },
    { t: "Direitos e garantias (art. 5º)", r: `
<ul>
<li><b>Casa (XI):</b> é asilo inviolável. Pode-se entrar sem consentimento do morador em caso de <b>flagrante delito, desastre ou para prestar socorro</b> (a qualquer hora), ou <b>durante o dia, por determinação judicial</b>.</li>
<li><b>Prisão (LXI):</b> só em <b>flagrante delito</b> ou por <b>ordem escrita e fundamentada</b> de autoridade judiciária competente, salvo nos casos de <b>transgressão militar ou crime propriamente militar</b> definidos em lei.</li>
<li><b>Sigilo das comunicações telefônicas (XII):</b> só pode ser quebrado por <b>ordem judicial</b>, para investigação criminal ou instrução processual penal.</li>
<li><b>Reunião (XVI):</b> pacífica, sem armas, em locais abertos ao público, <b>independe de autorização</b>, exigindo apenas <b>prévio aviso</b>.</li>
<li><b>Associação:</b> é vedada a de caráter paramilitar. A dissolução compulsória exige decisão judicial <b>transitada em julgado</b>; a suspensão, apenas decisão judicial.</li>
<li><b>Inafiançáveis e imprescritíveis:</b> racismo e ação de grupos armados contra a ordem constitucional e o Estado Democrático.</li>
<li><b>Inafiançáveis e insuscetíveis de graça ou anistia:</b> tortura, tráfico, terrorismo (TTT) e hediondos.</li>
<li><b>Remédios:</b> HC (liberdade de locomoção); HD (informações sobre a própria pessoa); MS (direito líquido e certo não amparado por HC/HD); MI (falta de norma regulamentadora); ação popular (qualquer <b>cidadão</b>).</li>
<li>Preso tem direito à identificação dos responsáveis pela prisão e a permanecer calado; a prisão será comunicada imediatamente ao juiz e à família.</li>
</ul>` },
    { t: "Direitos sociais, nacionalidade e direitos políticos (arts. 6º a 17)", r: `
<ul>
<li><b>Direitos sociais (art. 6º):</b> educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância, assistência aos desamparados.</li>
<li><b>Voto:</b> obrigatório dos 18 aos 70 anos. Facultativo para analfabetos, maiores de 70 e quem tem entre 16 e 18. <b>Conscritos</b> (no serviço militar obrigatório) não podem se alistar.</li>
<li><b>Militar alistável é elegível (art. 14, §8º):</b> com <b>menos de 10 anos</b> de serviço, afasta-se da atividade; com <b>mais de 10 anos</b>, é agregado pela autoridade superior e, se eleito, passa para a inatividade no ato da diplomação.</li>
<li><b>Cargos privativos de brasileiro nato:</b> Presidente e Vice, Presidente da Câmara e do Senado, Ministro do STF, carreira diplomática, oficial das Forças Armadas, Ministro de Estado da Defesa.</li>
</ul>` },
    { t: "Administração pública e militares (arts. 37 a 42)", r: `
<ul>
<li><b>Princípios (art. 37) — LIMPE:</b> Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência.</li>
<li><b>Concurso público:</b> validade de <b>até 2 anos, prorrogável uma vez, por igual período</b>.</li>
<li>Cargos em comissão: só para direção, chefia e assessoramento.</li>
<li><b>Art. 37, §6º:</b> responsabilidade <b>objetiva</b> do Estado por danos causados por seus agentes, com direito de regresso contra o agente nos casos de dolo ou culpa.</li>
<li><b>Art. 42:</b> PMs e CBMs, organizados com base na hierarquia e disciplina, são militares dos Estados.</li>
</ul>` },
    { t: "Poderes, Justiça Militar e segurança pública (arts. 44 a 144)", r: `
<ul>
<li><b>Legislativo federal:</b> bicameral. Deputados (representantes do povo, mandato de 4 anos, sistema proporcional); Senadores (representantes dos Estados, 3 por Estado, mandato de 8 anos, sistema majoritário).</li>
<li><b>Justiça Militar estadual (art. 125, §4º):</b> processa e julga os militares dos Estados nos <b>crimes militares</b> definidos em lei e as ações judiciais contra <b>atos disciplinares</b> militares, ressalvada a competência do <b>júri quando a vítima for civil</b>.</li>
<li><b>Art. 125, §5º:</b> o juiz de direito do juízo militar julga <b>sozinho</b> os crimes militares cometidos contra civis e as ações contra atos disciplinares. O <b>Conselho de Justiça</b>, presidido pelo juiz de direito, julga os demais crimes militares.</li>
<li><b>Segurança pública (art. 144):</b> dever do Estado, direito e responsabilidade de todos. Órgãos: PF, PRF, PFF, polícias civis, <b>polícias militares e corpos de bombeiros militares</b> e polícias penais.</li>
<li>Guardas municipais (§8º): proteção de bens, serviços e instalações do município.</li>
</ul>
<p class="dica">Confira no texto atualizado da CF se houve emenda recente ao art. 144 (Planalto, versão compilada).</p>` }
  ],
  flash: [
    ["Fundamentos da República (art. 1º)", "SO-CI-DI-VA-PLU: soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, pluralismo político."],
    ["Como reconhecer um objetivo do art. 3º?", "Começa com verbo: construir, garantir, erradicar/reduzir, promover."],
    ["Características do poder constituinte originário", "Inicial, ilimitado, incondicionado e permanente."],
    ["Cláusulas pétreas (art. 60, §4º)", "Forma federativa; voto direto, secreto, universal e periódico; separação dos Poderes; direitos e garantias individuais."],
    ["Quando se pode entrar na casa sem consentimento?", "Flagrante delito, desastre ou prestar socorro (a qualquer hora); por determinação judicial, só durante o dia."],
    ["Prisão sem flagrante e sem ordem judicial é possível?", "Sim, nos casos de transgressão militar ou crime propriamente militar definidos em lei (art. 5º, LXI)."],
    ["Direito de reunião exige autorização?", "Não. Basta prévio aviso à autoridade competente. Deve ser pacífica e sem armas."],
    ["Crimes inafiançáveis e imprescritíveis", "Racismo e ação de grupos armados contra a ordem constitucional e o Estado Democrático."],
    ["Inafiançáveis e insuscetíveis de graça ou anistia", "Tortura, tráfico, terrorismo (TTT) e hediondos."],
    ["Validade do concurso público", "Até 2 anos, prorrogável uma vez por igual período (art. 37, III)."],
    ["Princípios da Administração (art. 37)", "LIMPE: legalidade, impessoalidade, moralidade, publicidade, eficiência."],
    ["Militar elegível com menos de 10 anos de serviço", "Deve afastar-se da atividade (art. 14, §8º, I)."],
    ["Militar elegível com mais de 10 anos de serviço", "É agregado; se eleito, passa para a inatividade no ato da diplomação."],
    ["Crime doloso contra a vida de civil cometido por PM: quem julga?", "O Tribunal do Júri (art. 125, §4º)."],
    ["Quem julga sozinho na Justiça Militar estadual?", "O juiz de direito: crimes militares contra civis e ações contra atos disciplinares (art. 125, §5º)."]
  ],
  quiz: [
    { q: "Constitui FUNDAMENTO da República Federativa do Brasil:", o: ["erradicar a pobreza e a marginalização.", "a prevalência dos direitos humanos.", "o pluralismo político.", "garantir o desenvolvimento nacional.", "a defesa da paz."], c: 2, e: "Art. 1º, V. Erradicar a pobreza e garantir o desenvolvimento nacional são objetivos (art. 3º); prevalência dos direitos humanos e defesa da paz são princípios das relações internacionais (art. 4º)." },
    { q: "De acordo com a CF, a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:", o: ["por determinação judicial, a qualquer hora.", "em caso de flagrante delito, apenas durante o dia.", "em caso de flagrante delito, desastre ou para prestar socorro, ou, durante o dia, por determinação judicial.", "por ordem do delegado de polícia, durante o dia.", "por determinação do comandante da unidade, em qualquer horário."], c: 2, e: "Art. 5º, XI. Flagrante, desastre e socorro valem a qualquer hora. A ordem judicial só pode ser cumprida durante o dia." },
    { q: "Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo nos casos de:", o: ["crime hediondo.", "transgressão militar ou crime propriamente militar, definidos em lei.", "crime de trânsito.", "prisão para averiguação.", "contravenção penal."], c: 1, e: "Art. 5º, LXI. Não existe prisão para averiguação no ordenamento atual." },
    { q: "Sobre o direito de reunião, é correto afirmar que:", o: ["depende de autorização prévia da autoridade policial.", "pode ser armada, se for para legítima defesa.", "independe de autorização, desde que pacífica, sem armas e com prévio aviso à autoridade competente.", "só pode ocorrer em locais fechados.", "pode frustrar outra reunião convocada anteriormente para o mesmo local."], c: 2, e: "Art. 5º, XVI. A reunião não pode frustrar outra anteriormente convocada para o mesmo local." },
    { q: "O prazo de validade do concurso público será de:", o: ["até 1 ano, improrrogável.", "até 2 anos, prorrogável uma vez, por igual período.", "2 anos, prorrogável por até 4 anos.", "até 4 anos, improrrogável.", "1 ano, prorrogável duas vezes."], c: 1, e: "Art. 37, III. Atenção: o edital da PMSC fixa 1 ano, prorrogável por mais 1, o que está dentro do limite constitucional." },
    { q: "Compete à Justiça Militar estadual processar e julgar os militares dos Estados nos crimes militares definidos em lei, ressalvada a competência:", o: ["da Justiça Federal, quando o crime ocorrer em serviço.", "do júri, quando a vítima for civil.", "da Justiça Eleitoral, em qualquer caso.", "do STM, nos crimes contra superiores.", "dos Juizados Especiais Criminais."], c: 1, e: "Art. 125, §4º. A ressalva do júri se refere aos crimes dolosos contra a vida de civil." },
    { q: "NÃO é cláusula pétrea da Constituição Federal:", o: ["a forma federativa de Estado.", "o voto direto, secreto, universal e periódico.", "a separação dos Poderes.", "a forma republicana de governo.", "os direitos e garantias individuais."], c: 3, e: "A forma republicana não está no art. 60, §4º. Ela é princípio sensível (art. 34, VII, a), mas não cláusula pétrea expressa." },
    { q: "O militar alistável é elegível. Se contar mais de dez anos de serviço:", o: ["deverá afastar-se da atividade.", "será agregado pela autoridade superior e, se eleito, passará automaticamente, no ato da diplomação, para a inatividade.", "será excluído do serviço ativo no registro da candidatura.", "é inelegível.", "poderá exercer o mandato e continuar na ativa."], c: 1, e: "Art. 14, §8º, II. Com menos de 10 anos, afasta-se da atividade (inciso I)." }
  ]
});

window.MATERIAS.push({
  id: "port", nome: "Língua Portuguesa", curto: "Português", questoes: 8, horas: 18, cor: "#059669",
  topicos: [
    { t: "Interpretação de texto", r: `
<ul>
<li><b>Compreender</b> é identificar o que está escrito. <b>Interpretar</b> é concluir o que o texto permite inferir.</li>
<li>Desconfie de alternativas com termos absolutos (<i>sempre, nunca, todos, somente</i>) e das que extrapolam o texto.</li>
<li>Questões de <b>referência</b>: descubra a que termo um pronome (<i>que, o qual, este, isso</i>) se refere voltando ao trecho.</li>
<li>Questões de <b>reescrita</b>: a nova frase precisa manter o sentido e a correção gramatical.</li>
<li>Faça 1 texto de interpretação por dia (bloco 4 do cronograma).</li>
</ul>` },
    { t: "Classes de palavras e conectivos", r: `
<ul>
<li>São 10 classes: substantivo, adjetivo, artigo, numeral, pronome, verbo, advérbio, preposição, conjunção e interjeição.</li>
<li><b>Adversativas</b> (oposição): mas, porém, contudo, todavia, entretanto, no entanto.</li>
<li><b>Conclusivas:</b> logo, portanto, por isso, assim, pois (quando vem <i>depois</i> do verbo).</li>
<li><b>Explicativas:</b> porque, que, pois (<i>antes</i> do verbo).</li>
<li><b>Concessivas</b> (ideia contrária que não impede): embora, ainda que, mesmo que, conquanto, apesar de que. Pedem subjuntivo.</li>
<li><b>Condicionais:</b> se, caso, desde que (com subjuntivo).</li>
<li><b>Causais:</b> porque, como (no início), já que, visto que.</li>
</ul>` },
    { t: "Crase", r: `
<p>Crase é a fusão da preposição <b>a</b> com o artigo <b>a</b> (ou com <i>aquele, aquela, aquilo</i>).</p>
<ul>
<li><b>Obrigatória:</b> antes de palavra feminina que admite artigo, depois de termo que exige preposição <i>a</i> ("Fui à delegacia"); nas horas exatas ("às 14h"); em locuções femininas (<i>às pressas, à noite, à medida que</i>); com a expressão "à moda de" subentendida ("bife à milanesa").</li>
<li><b>Proibida:</b> antes de palavra masculina, de verbo, de pronomes pessoais e da maioria dos pronomes de tratamento; antes de "a" no singular seguido de palavra no plural ("a pessoas"); entre palavras repetidas ("cara a cara").</li>
<li><b>Facultativa:</b> antes de pronome possessivo feminino no singular ("à/a sua mãe"), antes de nome próprio feminino ("à/a Maria") e depois de "até".</li>
<li><b>Truque:</b> troque a palavra feminina por uma masculina. Se aparecer "ao", há crase. ("Fui à escola" → "Fui ao colégio".)</li>
</ul>` },
    { t: "Concordância", r: `
<ul>
<li><b>Haver</b> no sentido de existir ou de tempo decorrido é impessoal e fica no singular: "<b>Havia</b> muitos candidatos". O auxiliar também: "<b>Deve haver</b> problemas".</li>
<li><b>Fazer</b> indicando tempo é impessoal: "<b>Faz</b> dois anos".</li>
<li><b>Existir, ocorrer, acontecer</b> são pessoais e concordam: "<b>Existem</b> falhas".</li>
<li><b>Voz passiva sintética:</b> o verbo concorda com o sujeito. "<b>Vendem-se</b> casas" (casas são vendidas).</li>
<li><b>Índice de indeterminação do sujeito:</b> verbo com preposição fica no singular. "<b>Precisa-se</b> de soldados".</li>
<li><b>Sujeito posposto</b> também concorda: "<b>Chegaram</b> os novos policiais".</li>
<li><b>Coletivo partitivo</b> ("a maioria dos alunos"): verbo no singular ou no plural.</li>
</ul>` },
    { t: "Regência", r: `
<ul>
<li><b>Assistir</b> (ver) exige a preposição a: "assistir <b>ao</b> jogo". No sentido de ajudar, não exige: "assistir o ferido".</li>
<li><b>Aspirar</b> (desejar) e <b>visar</b> (pretender) exigem a preposição a: "aspirar <b>ao</b> cargo", "visar <b>ao</b> bem comum".</li>
<li><b>Obedecer/desobedecer</b> exigem a preposição a: "obedecer <b>ao</b> regulamento".</li>
<li><b>Preferir</b> algo <b>a</b> algo (nunca "do que", nem "mais"): "Prefiro estudar <b>a</b> sair".</li>
<li><b>Chegar, ir</b> pedem a preposição a: "chegar <b>ao</b> quartel" (não "no quartel").</li>
<li><b>Implicar</b> (acarretar) não leva preposição: "A falta <b>implica</b> punição".</li>
<li><b>Namorar</b> não leva preposição: "namorar alguém" (não "com alguém").</li>
</ul>` },
    { t: "Pontuação", r: `
<ul>
<li><b>Não</b> se separa com vírgula o sujeito do verbo nem o verbo de seus complementos.</li>
<li>O <b>aposto explicativo</b> e o <b>vocativo</b> ficam entre vírgulas.</li>
<li><b>Adjunto adverbial deslocado:</b> a vírgula é obrigatória se ele for longo e facultativa se for curto.</li>
<li><b>Oração adjetiva explicativa</b> vai entre vírgulas; a <b>restritiva</b>, não. "Os policiais, que estavam de serviço, foram elogiados" (todos estavam de serviço) × "Os policiais que estavam de serviço foram elogiados" (só alguns).</li>
<li>Vírgula antes de <i>mas, porém, contudo</i>; e antes de "e" quando os sujeitos forem diferentes.</li>
</ul>` }
  ],
  flash: [
    ["\"___ muitos candidatos\" — havia ou haviam?", "Havia. O verbo haver no sentido de existir é impessoal."],
    ["\"___-se casas\" — vende ou vendem?", "Vendem-se casas (voz passiva sintética: casas são vendidas)."],
    ["\"___-se de soldados\" — precisa ou precisam?", "Precisa-se. É índice de indeterminação do sujeito (verbo com preposição)."],
    ["Truque para saber se há crase", "Troque por uma palavra masculina. Se der \"ao\", tem crase."],
    ["Crase antes de verbo?", "Nunca. Ex.: \"começou a chover\"."],
    ["Crase nas horas", "Sim, nas horas exatas: \"às 14h\". Exceção: depois de outra preposição não há crase (\"desde as 8h\")."],
    ["Assistir (ver) — regência", "Exige a preposição a: \"assistir ao jogo\"."],
    ["Preferir — regência", "Preferir algo A algo. Não se usa \"do que\" nem \"mais\"."],
    ["Conjunções adversativas", "Mas, porém, contudo, todavia, entretanto, no entanto."],
    ["\"Pois\" antes e depois do verbo", "Antes do verbo = explicativa. Depois do verbo (entre vírgulas) = conclusiva."],
    ["Conjunções concessivas", "Embora, ainda que, mesmo que, conquanto (pedem subjuntivo)."],
    ["Vírgula entre sujeito e verbo?", "Proibida."],
    ["Oração adjetiva explicativa x restritiva", "Explicativa vem entre vírgulas (generaliza). Restritiva vem sem vírgula (delimita)."]
  ],
  quiz: [
    { q: "Assinale a alternativa em que a concordância verbal está CORRETA:", o: ["Haviam muitos candidatos na sala.", "Fazem dois anos que estudo para concursos.", "Devem haver soluções para o problema.", "Vendem-se apartamentos no centro.", "Precisam-se de policiais."], c: 3, e: "\"Vendem-se apartamentos\" está na voz passiva sintética (apartamentos são vendidos). Haver (existir) e fazer (tempo) são impessoais. \"Precisa-se de\" fica no singular." },
    { q: "Assinale a frase em que o acento grave (crase) foi empregado CORRETAMENTE:", o: ["Começou à chover forte.", "Entreguei o relatório à Vossa Senhoria.", "O soldado chegou às 7h ao quartel.", "Fiquei cara à cara com o suspeito.", "Referiu-se à pessoas desconhecidas."], c: 2, e: "Horas exatas levam crase. Não há crase antes de verbo (\"a chover\"), de pronome de tratamento como Vossa Senhoria, entre palavras repetidas (\"cara a cara\") nem com \"a\" singular antes de plural (\"a pessoas\")." },
    { q: "Quanto à regência verbal, está CORRETA a frase:", o: ["Prefiro estudar do que sair.", "Os soldados assistiram o desfile.", "Ele aspira ao posto de sargento.", "Chegamos no batalhão cedo.", "Todos devem obedecer o regulamento."], c: 2, e: "Aspirar (desejar) exige a preposição a. O certo nas outras: prefiro estudar A sair; assistiram AO desfile; chegamos AO batalhão; obedecer AO regulamento." },
    { q: "Em \"Estudou muito; não conseguiu, porém, a aprovação\", a conjunção \"porém\" expressa ideia de:", o: ["conclusão.", "explicação.", "oposição.", "causa.", "condição."], c: 2, e: "Porém é conjunção adversativa: expressa oposição/contraste." },
    { q: "Assinale a alternativa em que a pontuação está CORRETA:", o: ["Os candidatos aprovados, farão o teste físico.", "O comandante, entregou as medalhas.", "Florianópolis, capital de Santa Catarina, receberá a prova.", "Os policiais, que trabalham de noite recebem adicional.", "O soldado, disse que voltaria."], c: 2, e: "O aposto explicativo \"capital de Santa Catarina\" fica entre vírgulas. Nas demais há vírgula separando sujeito e verbo, ou, na oração explicativa sobre os policiais, vírgula aberta e não fechada." },
    { q: "Na frase \"Embora estivesse cansado, o soldado concluiu a ronda\", a oração destacada exprime:", o: ["causa.", "concessão.", "consequência.", "finalidade.", "tempo."], c: 1, e: "Embora introduz oração concessiva: um fato contrário que não impede a ação principal." },
    { q: "\"Os policiais que estavam de folga foram convocados.\" Retirando a vírgula, a oração adjetiva é restritiva. Isso significa que:", o: ["todos os policiais estavam de folga.", "apenas os policiais que estavam de folga foram convocados.", "nenhum policial foi convocado.", "a frase está gramaticalmente errada.", "o sentido é o mesmo da oração explicativa."], c: 1, e: "A oração restritiva delimita o grupo: só os que estavam de folga. Com vírgulas (explicativa), a frase diria que todos estavam de folga." }
  ]
});

window.MATERIAS.push({
  id: "red", nome: "Redação", curto: "Redação", questoes: 0, pontos: "20 pontos", horas: 12, cor: "#db2777",
  topicos: [
    { t: "Como a redação é avaliada", r: `
<ul>
<li>Texto <b>dissertativo</b> de <b>20 a 30 linhas</b>, no mesmo dia da objetiva (5 horas de prova no total).</li>
<li>Vale <b>20 pontos</b>, o mesmo que 20 questões da objetiva. Por isso o cronograma tem redação todo sábado.</li>
<li>Critérios do edital: <b>aspectos formais</b> (ortografia, regência, concordância), <b>estrutura</b> (introdução, desenvolvimento, conclusão) e <b>consistência da argumentação</b> diante do tema.</li>
<li>Fora do tema, abaixo do mínimo de linhas ou ilegível: risco de nota zero. Confira as hipóteses de anulação no edital.</li>
</ul>` },
    { t: "Estrutura em 4 ou 5 parágrafos", r: `
<ol>
<li><b>Introdução (4 a 5 linhas):</b> contextualize o tema e apresente a tese (a sua posição).</li>
<li><b>Desenvolvimento 1 (6 a 8 linhas):</b> primeiro argumento + exemplo, dado ou fato.</li>
<li><b>Desenvolvimento 2 (6 a 8 linhas):</b> segundo argumento + exemplo.</li>
<li><b>Conclusão (4 a 5 linhas):</b> retome a tese e feche com uma proposta ou síntese.</li>
</ol>
<p><b>Conectivos úteis:</b> Em primeiro lugar · Além disso · Por outro lado · Nesse sentido · Dessa forma · Portanto · Diante do exposto.</p>` },
    { t: "Temas prováveis para PM e checklist da reescrita", r: `
<ul>
<li>Temas comuns em concursos policiais: segurança pública e participação da comunidade; violência doméstica; tecnologia e crimes digitais; uso de câmeras corporais; saúde mental dos policiais; drogas e juventude; trânsito e mortes nas rodovias.</li>
<li><b>Checklist da reescrita (sábado, bloco 2):</b> a tese está clara na introdução? Cada parágrafo tem um único argumento? Há repetição de palavras? Há frases longas demais? A conclusão retoma a tese? A letra está legível?</li>
<li>Evite gírias, primeira pessoa em excesso, clichês ("desde os primórdios") e perguntas retóricas.</li>
</ul>` }
  ],
  flash: [
    ["Quantas linhas tem a redação da PMSC?", "De 20 a 30 linhas."],
    ["Quanto vale a redação?", "20 pontos, o mesmo que 20 questões da objetiva."],
    ["Três critérios de correção", "Aspectos formais da língua, estrutura (introdução, desenvolvimento, conclusão) e consistência da argumentação."],
    ["O que vai na introdução?", "Contextualização do tema + tese (a sua posição)."],
    ["O que vai na conclusão?", "Retomada da tese + proposta ou síntese final."]
  ],
  quiz: []
});
