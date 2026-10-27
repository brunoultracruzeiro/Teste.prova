// Conteúdo de estudo — parte 2
window.MATERIAS = window.MATERIAS || [];

window.MATERIAS.push({
  id: "penal", nome: "Direito Penal Comum", curto: "Penal", questoes: 6, horas: 16, cor: "#dc2626",
  topicos: [
    { t: "Lei penal no tempo e no espaço", r: `
<ul>
<li><b>Tempo do crime (art. 4º):</b> teoria da <b>atividade</b>. Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado.</li>
<li><b>Lugar do crime (art. 6º):</b> teoria da <b>ubiquidade</b>. É tanto o lugar da ação quanto o do resultado. Macete: <b>LUTA</b> (Lugar = Ubiquidade; Tempo = Atividade).</li>
<li><b>Abolitio criminis (art. 2º):</b> lei posterior que deixa de considerar o fato crime. Cessam a execução e os efeitos <b>penais</b> da sentença (os efeitos civis permanecem).</li>
<li><b>Lei mais benéfica</b> retroage, mesmo após o trânsito em julgado. Lei mais grave não retroage.</li>
<li><b>Leis excepcionais e temporárias (art. 3º):</b> são <b>ultra-ativas</b>: continuam se aplicando aos fatos praticados durante sua vigência.</li>
</ul>` },
    { t: "Teoria do crime, tentativa e excludentes", r: `
<ul>
<li>Conceito analítico: crime é fato <b>típico</b>, <b>ilícito</b> e <b>culpável</b>.</li>
<li><b>Dolo direto:</b> quis o resultado. <b>Dolo eventual:</b> assumiu o risco de produzi-lo. <b>Culpa:</b> imprudência, negligência ou imperícia. Só se pune a culpa se a lei prever expressamente.</li>
<li><b>Tentativa (art. 14, II):</b> iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente. Pena do consumado <b>diminuída de 1/3 a 2/3</b>.</li>
<li><b>Desistência voluntária e arrependimento eficaz (art. 15):</b> o agente responde só pelos atos já praticados.</li>
<li><b>Arrependimento posterior (art. 16):</b> crime sem violência ou grave ameaça, dano reparado ou coisa restituída <b>até o recebimento da denúncia ou queixa</b>, por ato voluntário: pena reduzida de 1/3 a 2/3.</li>
<li><b>Crime impossível (art. 17):</b> ineficácia absoluta do meio ou impropriedade absoluta do objeto. Não se pune a tentativa.</li>
<li><b>Excludentes de ilicitude (art. 23):</b> estado de necessidade, legítima defesa, estrito cumprimento do dever legal e exercício regular de direito. O excesso doloso ou culposo é punível.</li>
<li><b>Legítima defesa (art. 25):</b> usar moderadamente os meios necessários para repelir injusta agressão, atual ou iminente, a direito seu ou de outrem. O parágrafo único inclui o <b>agente de segurança pública</b> que repele agressão ou risco de agressão a <b>vítima mantida refém</b> durante a prática de crimes.</li>
<li><b>Erro de tipo (art. 20):</b> exclui o dolo; permite punição por culpa se o erro era evitável. <b>Erro de proibição (art. 21):</b> se inevitável, isenta de pena; se evitável, diminui de 1/6 a 1/3.</li>
</ul>` },
    { t: "Culpabilidade e concurso de pessoas", r: `
<ul>
<li>Elementos da culpabilidade: <b>imputabilidade</b>, <b>potencial consciência da ilicitude</b> e <b>exigibilidade de conduta diversa</b>.</li>
<li><b>Menores de 18 anos</b> são penalmente inimputáveis (respondem pelo ECA).</li>
<li><b>Embriaguez</b> voluntária ou culposa <b>não</b> exclui a imputabilidade. A embriaguez completa por caso fortuito ou força maior isenta de pena.</li>
<li><b>Coação moral irresistível</b> e <b>obediência hierárquica</b> a ordem não manifestamente ilegal (art. 22): só é punível o autor da coação ou da ordem.</li>
<li><b>Concurso de pessoas (art. 29):</b> quem concorre para o crime incide nas penas a ele cominadas, na medida de sua culpabilidade (teoria monista). Participação de menor importância: redução de 1/6 a 1/3.</li>
</ul>` },
    { t: "Crimes contra a pessoa e contra o patrimônio", r: `
<ul>
<li><b>Homicídio qualificado (art. 121, §2º):</b> motivo torpe ou fútil, meio cruel, recurso que dificulte a defesa da vítima, contra agente de segurança pública no exercício da função ou em razão dela, entre outros. Pena de 12 a 30 anos.</li>
<li><b>Feminicídio:</b> desde a Lei 14.994/2024, é crime <b>autônomo (art. 121-A)</b>, com pena de 20 a 40 anos.</li>
<li><b>Furto (art. 155):</b> subtrair coisa alheia móvel, sem violência.</li>
<li><b>Roubo (art. 157):</b> subtrair mediante <b>grave ameaça ou violência</b> à pessoa, ou depois de reduzi-la à impossibilidade de resistência.</li>
<li><b>Extorsão (art. 158):</b> constranger alguém, com violência ou grave ameaça, a fazer, tolerar ou deixar de fazer algo, para obter vantagem econômica. A colaboração da vítima é indispensável.</li>
<li><b>Apropriação indébita (art. 168):</b> o agente já tinha a posse ou detenção lícita da coisa e passa a agir como dono.</li>
<li><b>Estelionato (art. 171):</b> obter vantagem ilícita mediante fraude. Em regra, a ação depende de <b>representação</b> da vítima, salvo se ela for a Administração Pública, criança ou adolescente, pessoa com deficiência mental, maior de 70 anos ou incapaz.</li>
<li><b>Escusas absolutórias (art. 181):</b> isento de pena quem comete crime patrimonial contra cônjuge, ascendente ou descendente. Não valem para roubo, extorsão, crimes com violência ou grave ameaça, nem quando a vítima tem 60 anos ou mais (art. 183).</li>
</ul>` },
    { t: "Crimes contra a administração pública e a fé pública", r: `
<ul>
<li><b>Peculato (art. 312):</b> o funcionário se apropria de dinheiro, valor ou bem de que tem a posse em razão do cargo, ou o desvia. <b>Peculato culposo:</b> a reparação do dano <b>antes da sentença irrecorrível</b> extingue a punibilidade; depois dela, reduz a pena pela metade.</li>
<li><b>Concussão (art. 316):</b> <b>EXIGIR</b> vantagem indevida.</li>
<li><b>Corrupção passiva (art. 317):</b> <b>SOLICITAR</b> ou <b>RECEBER</b> vantagem indevida, ou aceitar promessa dela.</li>
<li><b>Prevaricação (art. 319):</b> retardar ou deixar de praticar ato de ofício, ou praticá-lo contra a lei, para satisfazer <b>interesse ou sentimento pessoal</b>.</li>
<li><b>Crimes de particular:</b> resistência (opor-se a ato legal com violência ou ameaça), desobediência (desobedecer a ordem legal), desacato (desacatar funcionário no exercício da função ou em razão dela) e corrupção ativa (<b>OFERECER</b> ou <b>PROMETER</b> vantagem indevida).</li>
<li><b>Fé pública:</b> moeda falsa (art. 289); falsificação de documento público (art. 297) e particular (art. 298); falsidade ideológica (art. 299: documento verdadeiro na forma, com conteúdo falso); uso de documento falso (art. 304); falsa identidade (art. 307).</li>
</ul>` },
    { t: "Penas, extinção da punibilidade e crimes ambientais", r: `
<ul>
<li><b>Espécies de pena (art. 32):</b> privativas de liberdade (reclusão e detenção), restritivas de direitos e multa.</li>
<li><b>Substituição por restritiva de direitos (art. 44):</b> pena não superior a 4 anos e crime sem violência ou grave ameaça (ou crime culposo, qualquer que seja a pena); réu não reincidente em crime doloso; circunstâncias judiciais favoráveis.</li>
<li><b>Extinção da punibilidade (art. 107):</b> morte do agente; anistia, graça ou indulto; abolitio criminis; prescrição, decadência ou perempção; renúncia ou perdão aceito (ação privada); retratação, quando a lei admite; perdão judicial.</li>
<li><b>Crimes ambientais (Lei 9.605/98):</b> a <b>pessoa jurídica</b> pode ser responsabilizada penal, civil e administrativamente.</li>
</ul>` }
  ],
  flash: [
    ["Teoria adotada para o TEMPO do crime", "Atividade (art. 4º)."],
    ["Teoria adotada para o LUGAR do crime", "Ubiquidade (art. 6º). Macete: LUTA."],
    ["Efeitos da abolitio criminis", "Cessam a execução e os efeitos penais. Os efeitos civis permanecem."],
    ["Redução da pena na tentativa", "De 1/3 a 2/3."],
    ["Desistência voluntária: por que o agente responde?", "Apenas pelos atos já praticados (art. 15)."],
    ["Prazo do arrependimento posterior", "Até o recebimento da denúncia ou queixa. Só em crimes sem violência ou grave ameaça."],
    ["Excludentes de ilicitude (art. 23)", "Estado de necessidade, legítima defesa, estrito cumprimento do dever legal, exercício regular de direito."],
    ["Legítima defesa do agente de segurança (art. 25, parágrafo único)", "Repelir agressão ou risco de agressão a vítima mantida refém durante a prática de crimes."],
    ["Erro de proibição inevitável x evitável", "Inevitável isenta de pena. Evitável diminui de 1/6 a 1/3."],
    ["Concussão x corrupção passiva", "Concussão = EXIGIR. Corrupção passiva = SOLICITAR ou RECEBER (ou aceitar promessa)."],
    ["Prevaricação", "Retardar, deixar de praticar ou praticar ato de ofício contra a lei para satisfazer interesse ou sentimento pessoal."],
    ["Peculato culposo: efeito da reparação do dano", "Antes da sentença irrecorrível: extingue a punibilidade. Depois: reduz a pena pela metade."],
    ["Roubo x furto", "Roubo tem violência ou grave ameaça à pessoa. Furto, não."],
    ["Feminicídio hoje", "Crime autônomo, art. 121-A (Lei 14.994/2024), pena de 20 a 40 anos."],
    ["Pessoa jurídica comete crime?", "Sim, crime ambiental (Lei 9.605/98)."]
  ],
  quiz: [
    { q: "Quanto ao tempo e ao lugar do crime, o Código Penal adotou, respectivamente, as teorias:", o: ["do resultado e da atividade.", "da atividade e da ubiquidade.", "da ubiquidade e do resultado.", "mista e da atividade.", "da atividade e do resultado."], c: 1, e: "Art. 4º (tempo: atividade) e art. 6º (lugar: ubiquidade). Macete LUTA." },
    { q: "O policial que, para salvar uma vítima mantida refém durante um assalto, atinge o criminoso que a ameaçava age amparado por:", o: ["estado de necessidade.", "exercício regular de direito.", "legítima defesa.", "obediência hierárquica.", "coação moral irresistível."], c: 2, e: "Art. 25, parágrafo único, do CP (incluído pelo Pacote Anticrime)." },
    { q: "Funcionário público que EXIGE, para si, vantagem indevida em razão da função comete:", o: ["corrupção passiva.", "prevaricação.", "concussão.", "peculato.", "corrupção ativa."], c: 2, e: "O verbo exigir caracteriza a concussão (art. 316). Solicitar ou receber é corrupção passiva (art. 317)." },
    { q: "Nos crimes cometidos sem violência ou grave ameaça, reparado o dano ou restituída a coisa até o recebimento da denúncia, por ato voluntário do agente, ocorre:", o: ["desistência voluntária.", "arrependimento eficaz.", "arrependimento posterior, com redução de pena de 1/3 a 2/3.", "crime impossível.", "extinção da punibilidade."], c: 2, e: "Art. 16 do CP." },
    { q: "Sobre a abolitio criminis, é correto afirmar:", o: ["Faz cessar todos os efeitos da sentença, inclusive os civis.", "Não alcança fatos já julgados definitivamente.", "Faz cessar a execução e os efeitos penais da sentença condenatória.", "Só se aplica a contravenções.", "Depende de pedido da defesa para produzir efeitos."], c: 2, e: "Art. 2º do CP. Os efeitos civis (como o dever de indenizar) permanecem." },
    { q: "Para que haja substituição da pena privativa de liberdade por restritiva de direitos em crime doloso, a pena aplicada não pode ser superior a:", o: ["1 ano.", "2 anos.", "4 anos.", "6 anos.", "8 anos."], c: 2, e: "Art. 44, I, do CP, desde que o crime não tenha violência ou grave ameaça." },
    { q: "No peculato culposo, a reparação do dano, se anterior à sentença irrecorrível:", o: ["reduz a pena pela metade.", "extingue a punibilidade.", "não produz efeito.", "converte o crime em infração administrativa.", "reduz a pena de 1/6 a 1/3."], c: 1, e: "Art. 312, §3º. Se posterior, reduz a pena pela metade." }
  ]
});

window.MATERIAS.push({
  id: "ppenal", nome: "Direito Processual Penal", curto: "Proc. Penal", questoes: 6, horas: 16, cor: "#ea580c",
  topicos: [
    { t: "Princípios e inquérito policial", r: `
<ul>
<li><b>Princípios:</b> presunção de inocência, contraditório e ampla defesa, juiz natural, vedação das provas ilícitas, sistema <b>acusatório</b> (art. 3º-A: o juiz não substitui o órgão acusador na produção de provas).</li>
<li><b>Características do inquérito:</b> procedimento administrativo, escrito, inquisitivo, sigiloso, <b>dispensável</b> e <b>indisponível</b>.</li>
<li><b>Indisponível (art. 17):</b> a autoridade policial <b>não pode mandar arquivar</b> autos de inquérito.</li>
<li><b>Prazo (art. 10):</b> <b>10 dias</b> com indiciado preso (contados da prisão) e <b>30 dias</b> com indiciado solto (prorrogável).</li>
<li><b>Arquivamento:</b> é promovido pelo Ministério Público, com controle judicial, conforme a interpretação do STF ao novo art. 28.</li>
</ul>` },
    { t: "Ação penal e ANPP", r: `
<ul>
<li><b>Pública incondicionada:</b> é a regra. O MP oferece denúncia sem depender de ninguém.</li>
<li><b>Pública condicionada:</b> depende de <b>representação</b> da vítima ou de requisição do Ministro da Justiça. A representação é <b>irretratável depois de oferecida a denúncia</b> (art. 25).</li>
<li><b>Privada:</b> a vítima oferece <b>queixa-crime</b>.</li>
<li><b>Prazo decadencial (art. 38):</b> 6 meses, contados do dia em que a vítima souber quem é o autor do crime.</li>
<li><b>ANPP (art. 28-A):</b> cabível quando não é caso de arquivamento, o investigado <b>confessa formal e circunstancialmente</b>, a infração não tem violência ou grave ameaça e a <b>pena mínima é inferior a 4 anos</b>. Não cabe se for possível a transação penal, se o investigado for reincidente ou em violência doméstica ou contra a mulher.</li>
</ul>` },
    { t: "Competência", r: `
<ul>
<li><b>Regra (art. 70):</b> lugar onde se <b>consumou</b> a infração. Na tentativa, o lugar do último ato de execução.</li>
<li>Se o lugar da infração for desconhecido, vale o <b>domicílio ou residência do réu</b>.</li>
<li><b>Tribunal do Júri:</b> crimes dolosos contra a vida (homicídio, infanticídio, aborto, induzimento ao suicídio) e os conexos.</li>
<li>Crimes militares de PM: Justiça Militar estadual, exceto os dolosos contra a vida de civil (júri).</li>
</ul>` },
    { t: "Prisões e medidas cautelares", r: `
<ul>
<li><b>Flagrante (art. 301):</b> <b>qualquer do povo poderá</b> e as <b>autoridades policiais e seus agentes deverão</b> prender quem esteja em flagrante delito.</li>
<li><b>Espécies (art. 302):</b> <b>próprio</b> (está cometendo ou acabou de cometer); <b>impróprio</b> (é perseguido logo após, em situação que faça presumir a autoria); <b>presumido</b> (é encontrado logo depois com instrumentos, armas ou objetos que façam presumir a autoria).</li>
<li><b>Audiência de custódia:</b> até <b>24 horas</b> após a prisão (art. 310).</li>
<li><b>Preventiva (arts. 311 a 316):</b> decretada pelo juiz a requerimento do MP, do querelante ou do assistente, ou por representação da autoridade policial. É <b>vedada de ofício</b>. Exige prova da existência do crime, indício suficiente de autoria e perigo gerado pela liberdade do acusado, para garantir a ordem pública ou econômica, a instrução criminal ou a aplicação da lei penal. Cabe, entre outros casos, em crimes dolosos com pena máxima <b>superior a 4 anos</b>. Deve ser revisada a cada <b>90 dias</b>.</li>
<li><b>Temporária (Lei 7.960/89):</b> só na fase de investigação. Prazo de <b>5 dias, prorrogável por mais 5</b> em caso de extrema e comprovada necessidade. Nos crimes hediondos e equiparados: <b>30 + 30 dias</b>.</li>
</ul>` },
    { t: "Provas, Leis 9.099 e 9.296, recursos", r: `
<ul>
<li><b>Provas ilícitas (art. 157):</b> são inadmissíveis, assim como as delas derivadas, salvo quando não há nexo de causalidade ou quando puderem ser obtidas por fonte independente.</li>
<li><b>Cadeia de custódia (art. 158-A):</b> conjunto de procedimentos para manter e documentar a história cronológica do vestígio coletado.</li>
<li><b>Lei 9.099/95 – menor potencial ofensivo:</b> contravenções e crimes com pena máxima <b>não superior a 2 anos</b>. Lavra-se termo circunstanciado. Se o autor for encaminhado ao juizado ou assumir o compromisso de comparecer, <b>não se impõe prisão em flagrante</b> nem se exige fiança.</li>
<li><b>Suspensão condicional do processo (art. 89):</b> crimes com pena <b>mínima</b> igual ou inferior a 1 ano. Período de prova de 2 a 4 anos.</li>
<li><b>Lei 9.296/96 – interceptação telefônica:</b> depende de ordem do juiz. Não é admitida se não houver indícios razoáveis de autoria ou participação, se a prova puder ser feita por outros meios ou se o crime for punido, no máximo, com <b>detenção</b>. Prazo de <b>15 dias</b>, renovável.</li>
<li><b>Recursos:</b> apelação e recurso em sentido estrito têm prazo de interposição de <b>5 dias</b>.</li>
</ul>` }
  ],
  flash: [
    ["Prazo do inquérito com indiciado preso / solto", "10 dias preso; 30 dias solto (art. 10 do CPP)."],
    ["A autoridade policial pode arquivar o inquérito?", "Não (art. 17). O inquérito é indisponível para ela."],
    ["Quem deve e quem pode prender em flagrante?", "Autoridades policiais e seus agentes DEVEM; qualquer do povo PODE (art. 301)."],
    ["Flagrante impróprio", "Perseguido logo após o crime, em situação que faça presumir a autoria."],
    ["Flagrante presumido", "Encontrado logo depois com instrumentos, armas ou objetos que façam presumir a autoria."],
    ["Prazo da audiência de custódia", "24 horas."],
    ["Juiz pode decretar preventiva de ofício?", "Não. Depende de requerimento ou representação."],
    ["Revisão da preventiva", "A cada 90 dias."],
    ["Prazo da prisão temporária", "5 + 5 dias; em hediondos e equiparados, 30 + 30 dias."],
    ["Requisitos do ANPP", "Confissão formal e circunstanciada, sem violência ou grave ameaça, pena mínima inferior a 4 anos."],
    ["Prazo decadencial para representação ou queixa", "6 meses, contados do conhecimento da autoria."],
    ["Infração de menor potencial ofensivo", "Contravenções e crimes com pena máxima não superior a 2 anos."],
    ["Quando NÃO cabe interceptação telefônica?", "Sem indícios razoáveis; prova possível por outros meios; crime punido no máximo com detenção."],
    ["Prazo da interceptação telefônica", "15 dias, renovável por igual período."]
  ],
  quiz: [
    { q: "De acordo com o CPP, em relação à prisão em flagrante:", o: ["qualquer do povo deverá e as autoridades policiais poderão prender.", "qualquer do povo poderá e as autoridades policiais e seus agentes deverão prender quem quer que seja encontrado em flagrante delito.", "só a autoridade policial pode prender em flagrante.", "o flagrante depende de mandado judicial.", "o militar estadual só pode prender em flagrante quando estiver de serviço."], c: 1, e: "Art. 301 do CPP: flagrante facultativo (qualquer do povo) e obrigatório (autoridades e agentes)." },
    { q: "O agente que, logo após praticar um roubo, é perseguido pela guarnição em situação que faça presumir ser ele o autor, encontra-se em flagrante:", o: ["próprio.", "impróprio.", "presumido.", "preparado.", "esperado."], c: 1, e: "Art. 302, III: flagrante impróprio (ou quase flagrante)." },
    { q: "O inquérito policial deverá terminar, estando o indiciado preso, no prazo de:", o: ["5 dias.", "10 dias.", "15 dias.", "30 dias.", "60 dias."], c: 1, e: "Art. 10 do CPP: 10 dias com indiciado preso; 30 dias se estiver solto." },
    { q: "Sobre o inquérito policial, assinale a alternativa CORRETA:", o: ["É indispensável para o oferecimento da denúncia.", "A autoridade policial pode determinar seu arquivamento.", "É procedimento administrativo, inquisitivo e dispensável.", "Nele são obrigatórios o contraditório e a ampla defesa plenos.", "É conduzido pelo juiz."], c: 2, e: "O inquérito é dispensável (a denúncia pode se basear em outras peças) e a autoridade policial não pode arquivá-lo (art. 17)." },
    { q: "A prisão temporária, nos crimes não hediondos, tem prazo de:", o: ["24 horas.", "5 dias, prorrogável por igual período em caso de extrema e comprovada necessidade.", "10 dias, improrrogável.", "30 dias, prorrogável por igual período.", "prazo indeterminado."], c: 1, e: "Art. 2º da Lei 7.960/89. Nos hediondos, 30 + 30 dias." },
    { q: "Consideram-se infrações penais de menor potencial ofensivo as contravenções e os crimes a que a lei comine pena máxima:", o: ["não superior a 1 ano.", "não superior a 2 anos.", "inferior a 4 anos.", "não superior a 4 anos.", "de detenção, qualquer que seja."], c: 1, e: "Art. 61 da Lei 9.099/95." },
    { q: "NÃO será admitida a interceptação de comunicações telefônicas quando:", o: ["houver indícios razoáveis de autoria.", "o fato investigado constituir infração penal punida, no máximo, com pena de detenção.", "o crime for de tráfico de drogas.", "for determinada pelo juiz.", "o pedido vier da autoridade policial."], c: 1, e: "Art. 2º, III, da Lei 9.296/96." }
  ]
});

window.MATERIAS.push({
  id: "pmil", nome: "Direito Penal Militar", curto: "Penal Militar", questoes: 6, horas: 14, cor: "#4d7c0f",
  topicos: [
    { t: "Crime militar (art. 9º do CPM)", r: `
<p>O CPM é o Decreto-Lei 1.001/1969. Em tempo de paz, são crimes militares:</p>
<ul>
<li><b>Inciso I:</b> os crimes do CPM definidos de modo diverso na lei penal comum ou nela não previstos.</li>
<li><b>Inciso II</b> (redação da Lei 13.491/2017): os crimes do CPM <b>e os da legislação penal comum</b> quando praticados:
  <ul>
  <li>a) por militar da ativa contra militar na mesma situação;</li>
  <li>b) por militar da ativa, em lugar sujeito à administração militar, contra militar da reserva, reformado ou civil;</li>
  <li>c) por militar em serviço ou atuando em razão da função, em comissão de natureza militar ou em formatura, ainda que fora de lugar sujeito à administração militar, contra militar da reserva, reformado ou civil;</li>
  <li>d) por militar durante manobras ou exercício, contra militar da reserva, reformado ou civil;</li>
  <li>e) por militar da ativa contra o patrimônio sob administração militar ou a ordem administrativa militar.</li>
  </ul></li>
<li><b>§1º:</b> crimes <b>dolosos contra a vida</b> cometidos por militares contra <b>civil</b> são da competência do <b>Tribunal do Júri</b>.</li>
<li><b>Crime propriamente militar:</b> só o militar pode cometer (deserção, dormir em serviço, abandono de posto). <b>Impropriamente militar:</b> também existe na lei comum (peculato, homicídio).</li>
</ul>` },
    { t: "Parte Geral do CPM: diferenças para o CP", r: `
<ul>
<li><b>Tentativa (art. 30):</b> pena do crime consumado diminuída de 1/3 a 2/3. Em caso de <b>excepcional gravidade</b>, o juiz pode aplicar a pena do crime consumado (o CP não permite isso).</li>
<li><b>Estado de necessidade:</b> o CPM adota a teoria <b>diferenciadora</b>. Há o estado de necessidade <b>justificante</b> (art. 43, exclui o crime) e o <b>exculpante</b> (art. 39, exclui a culpabilidade).</li>
<li><b>Excludentes do crime (art. 42):</b> estado de necessidade, legítima defesa, estrito cumprimento do dever legal e exercício regular de direito. O parágrafo único inclui o comandante que, em perigo ou grave calamidade, compele subalternos a executar serviços para salvar a unidade, vidas ou evitar desânimo, terror, desordem, rendição, revolta ou saque.</li>
<li><b>Penas principais (art. 55):</b> morte (só em guerra), reclusão, detenção, prisão, impedimento, suspensão do exercício do posto, graduação, cargo ou função, e reforma.</li>
<li>Menores de 18 anos são inimputáveis (CF, art. 228).</li>
</ul>` },
    { t: "Crimes contra a autoridade, a disciplina, o serviço e o dever militar", r: `
<ul>
<li><b>Motim (art. 149):</b> militares reunidos agindo contra a ordem recebida de superior ou negando-se a cumpri-la, entre outras condutas. Se os agentes estão <b>armados</b>, é <b>revolta</b>.</li>
<li><b>Recusa de obediência (art. 163):</b> recusar obedecer a ordem do superior sobre assunto ou matéria de serviço, ou a dever imposto em lei, regulamento ou instrução.</li>
<li><b>Deserção (art. 187):</b> ausentar-se sem licença da unidade ou do lugar onde deve permanecer <b>por mais de 8 dias</b>.</li>
<li><b>Abandono de posto (art. 195):</b> abandonar, sem ordem superior, o posto ou lugar de serviço que lhe foi designado, ou o serviço que lhe cumpria, antes de terminá-lo.</li>
<li><b>Embriaguez em serviço (art. 202)</b> e <b>dormir em serviço (art. 203)</b>.</li>
</ul>` },
    { t: "Crimes contra a administração militar", r: `
<ul>
<li><b>Desacato a superior (art. 298)</b> e <b>desacato a militar (art. 299)</b>.</li>
<li><b>Peculato (art. 303), concussão (art. 305), corrupção passiva (art. 308), corrupção ativa (art. 309) e prevaricação (art. 319).</b> Os verbos seguem a lógica do CP: concussão = exigir; corrupção passiva = receber ou aceitar promessa.</li>
</ul>
<p class="dica">Estude estes artigos pela lei seca: a banca costuma copiar a descrição do tipo e trocar o nome do crime nas alternativas.</p>` }
  ],
  flash: [
    ["Diploma do Código Penal Militar", "Decreto-Lei 1.001/1969."],
    ["O que a Lei 13.491/2017 mudou no art. 9º do CPM?", "Crimes da legislação penal comum também passaram a ser crimes militares quando praticados nas hipóteses do inciso II."],
    ["PM mata civil dolosamente em serviço: quem julga?", "Tribunal do Júri (art. 9º, §1º, do CPM e art. 125, §4º, da CF)."],
    ["Crime propriamente militar", "Só militar pode cometer. Ex.: deserção, dormir em serviço, abandono de posto."],
    ["Tentativa no CPM: o que muda?", "Em caso de excepcional gravidade, o juiz pode aplicar a pena do crime consumado (art. 30, parágrafo único)."],
    ["Teoria do estado de necessidade no CPM", "Diferenciadora: justificante (art. 43) e exculpante (art. 39)."],
    ["Prazo de ausência que configura deserção", "Mais de 8 dias (art. 187)."],
    ["Motim x revolta", "Revolta é o motim praticado por agentes armados."],
    ["Penas principais do CPM", "Morte, reclusão, detenção, prisão, impedimento, suspensão do exercício do posto/graduação/cargo/função e reforma."]
  ],
  quiz: [
    { q: "Considera-se crime de deserção ausentar-se o militar, sem licença, da unidade em que serve ou do lugar em que deve permanecer, por mais de:", o: ["24 horas.", "3 dias.", "8 dias.", "15 dias.", "30 dias."], c: 2, e: "Art. 187 do CPM." },
    { q: "Os crimes dolosos contra a vida cometidos por militar estadual contra civil serão julgados:", o: ["pela Justiça Militar estadual, pelo Conselho de Justiça.", "pelo Tribunal do Júri.", "pelo juiz de direito do juízo militar, singularmente.", "pela Justiça Federal.", "pelo Superior Tribunal Militar."], c: 1, e: "Art. 9º, §1º, do CPM e art. 125, §4º, da CF." },
    { q: "Sobre a tentativa no Código Penal Militar, é correto afirmar:", o: ["Não é punível.", "É punida com a pena do crime consumado, sempre.", "É punida com a pena do crime diminuída de 1/3 a 2/3, podendo o juiz, em caso de excepcional gravidade, aplicar a pena do crime consumado.", "É punida com metade da pena.", "Só é punida nos crimes propriamente militares."], c: 2, e: "Art. 30, parágrafo único, do CPM." },
    { q: "Quanto ao estado de necessidade, o CPM adotou a teoria:", o: ["unitária, apenas como excludente da ilicitude.", "unitária, apenas como excludente da culpabilidade.", "diferenciadora, prevendo estado de necessidade justificante e exculpante.", "da equivalência dos antecedentes.", "da ubiquidade."], c: 2, e: "Arts. 39 (exculpante) e 43 (justificante) do CPM." },
    { q: "Militares que se reúnem, armados, agindo contra a ordem recebida de superior cometem:", o: ["motim.", "revolta.", "conspiração.", "insubordinação.", "deserção."], c: 1, e: "Art. 149, parágrafo único, do CPM: se os agentes estavam armados, o motim é chamado de revolta." },
    { q: "É exemplo de crime propriamente militar:", o: ["homicídio.", "peculato.", "dormir em serviço.", "lesão corporal.", "furto."], c: 2, e: "Dormir em serviço (art. 203) só pode ser cometido por militar. Os demais também existem na lei penal comum (impropriamente militares)." }
  ]
});
