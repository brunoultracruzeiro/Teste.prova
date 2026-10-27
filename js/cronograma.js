// Cronograma extraído do doc "Cronograma PMSC 2026 – Soldado"
// m1/m2 = id da matéria ligada a cada bloco (para abrir o resumo direto)
window.CRONOGRAMA = [
  { fase: "Arrancada", periodo: "28/10 a 01/11", dias: [
    { d: "2026-10-28", b1: "Estatuto (Lei 6.218/83)", m1: "inst", b2: "Português: interpretação", m2: "port" },
    { d: "2026-10-29", b1: "Estatuto", m1: "inst", b2: "CF: teoria da Constituição e poder constituinte", m2: "const" },
    { d: "2026-10-30", b1: "Estatuto", m1: "inst", b2: "CF arts. 1º–4º", m2: "const" },
    { d: "2026-10-31", b1: "Redação diagnóstica", m1: "red", b2: "CF art. 5º", m2: "const" },
    { d: "2026-11-01", b1: "Revisão + questões do Estatuto", m1: "inst", b2: "Português", m2: "port" }
  ]},
  { fase: "Semana 1", periodo: "02 a 08/11", dias: [
    { d: "2026-11-02", b1: "Lei 14.751/23 (Lei Orgânica Nacional)", m1: "inst", b2: "CF arts. 5º–6º", m2: "const" },
    { d: "2026-11-03", b1: "Lei 14.751/23", m1: "inst", b2: "Penal: lei penal no tempo e no espaço", m2: "penal" },
    { d: "2026-11-04", b1: "LC 587/13 (ingresso)", m1: "inst", b2: "Penal: teoria do crime", m2: "penal" },
    { d: "2026-11-05", b1: "Lei 5.209/76 (Conselho de Disciplina)", m1: "inst", b2: "Português: classes de palavras, crase", m2: "port" },
    { d: "2026-11-06", b1: "CF arts. 37–42 (administração pública e militares estaduais)", m1: "const", b2: "Penal: erro, tentativa, excludentes", m2: "penal" },
    { d: "2026-11-07", b1: "Redação 2", m1: "red", b2: "CF arts. 7º–17", m2: "const" },
    { d: "2026-11-08", b1: "Revisão semanal + questões", m1: null, b2: "Português", m2: "port" }
  ]},
  { fase: "Semana 2", periodo: "09 a 15/11", alerta: "Inscrições e pagamento até 16/11, às 16h", dias: [
    { d: "2026-11-09", b1: "CPM: Parte Geral (art. 9º, crime militar)", m1: "pmil", b2: "Processo Penal: princípios e inquérito", m2: "ppenal" },
    { d: "2026-11-10", b1: "CPM: Parte Geral (cont.)", m1: "pmil", b2: "Processo Penal: ANPP e ação penal", m2: "ppenal" },
    { d: "2026-11-11", b1: "CPM: crimes contra a autoridade, a disciplina, o serviço e o dever militar", m1: "pmil", b2: "Trânsito: arts. 1º–4º, 23 e 26–67", m2: "trans" },
    { d: "2026-11-12", b1: "Processo Penal: competência", m1: "ppenal", b2: "Português: concordância e regência", m2: "port" },
    { d: "2026-11-13", b1: "CF arts. 44–100 (Poderes)", m1: "const", b2: "Trânsito: habilitação (arts. 140–160)", m2: "trans" },
    { d: "2026-11-14", b1: "Redação 3", m1: "red", b2: "Penal: concurso de pessoas, culpabilidade", m2: "penal" },
    { d: "2026-11-15", b1: "Revisão semanal + questões", m1: null, b2: "Português", m2: "port" }
  ]},
  { fase: "Semana 3", periodo: "16 a 22/11", dias: [
    { d: "2026-11-16", b1: "Processo Penal: prisões e cautelares", m1: "ppenal", b2: "Lei de Drogas", m2: "esp" },
    { d: "2026-11-17", b1: "Processo Penal: provas, Lei 7.960 (prisão temporária)", m1: "ppenal", b2: "Estatuto do Desarmamento", m2: "esp" },
    { d: "2026-11-18", b1: "Abuso de Autoridade + Tortura", m1: "esp", b2: "Penal: crimes contra a pessoa", m2: "penal" },
    { d: "2026-11-19", b1: "Hediondos + Maria da Penha", m1: "esp", b2: "Penal: crimes contra o patrimônio", m2: "penal" },
    { d: "2026-11-20", b1: "PAD (Portaria 009/2001)", m1: "inst", b2: "Trânsito: arts. 256–280", m2: "trans" },
    { d: "2026-11-21", b1: "Redação 4", m1: "red", b2: "CPM: crimes contra a administração militar", m2: "pmil" },
    { d: "2026-11-22", b1: "Simulado 1 (5h)", m1: "sim", b2: "—", m2: null, destaque: true }
  ]},
  { fase: "Semana 4", periodo: "23 a 29/11", dias: [
    { d: "2026-11-23", b1: "Correção do simulado 1", m1: null, b2: "LC 801/22 (promoção de praças)", m2: "inst" },
    { d: "2026-11-24", b1: "CF arts. 122–144 (Justiça Militar, segurança pública)", m1: "const", b2: "Crimes de trânsito (arts. 291–312-B)", m2: "trans" },
    { d: "2026-11-25", b1: "Constituição de SC", m1: "inst", b2: "Penal: crimes contra a administração pública e a fé pública", m2: "penal" },
    { d: "2026-11-26", b1: "LC 765/20 + Decreto 1.601/21", m1: "inst", b2: "Informática: Windows 11 e LibreOffice", m2: "info" },
    { d: "2026-11-27", b1: "ECA, Idoso, Leis 7.716, 12.850 e 12.037", m1: "esp", b2: "Processo Penal: procedimentos, nulidades, recursos, Leis 9.099 e 9.296", m2: "ppenal" },
    { d: "2026-11-28", b1: "Redação 5", m1: "red", b2: "Penal: penas, extinção da punibilidade, crimes ambientais", m2: "penal" },
    { d: "2026-11-29", b1: "Simulado 2 (5h)", m1: "sim", b2: "—", m2: null, destaque: true }
  ]},
  { fase: "Semana 5 – reforço dirigido", periodo: "30/11 a 06/12", dias: [
    { d: "2026-11-30", b1: "Correção do simulado 2", m1: null, b2: "Informática: navegadores, nuvem, LGPD, segurança", m2: "info" },
    { d: "2026-12-01", b1: "Legislação Institucional: lei seca, revisão integral", m1: "inst", b2: "As 3 matérias com pior desempenho nos simulados", m2: "erros" },
    { d: "2026-12-02", b1: "Legislação Institucional: lei seca, revisão integral", m1: "inst", b2: "As 3 matérias com pior desempenho nos simulados", m2: "erros" },
    { d: "2026-12-03", b1: "Legislação Institucional: lei seca, revisão integral", m1: "inst", b2: "As 3 matérias com pior desempenho nos simulados", m2: "erros" },
    { d: "2026-12-04", b1: "Legislação Institucional: lei seca, revisão integral", m1: "inst", b2: "As 3 matérias com pior desempenho nos simulados", m2: "erros" },
    { d: "2026-12-05", b1: "Redação 6", m1: "red", b2: "Revisão de flashcards", m2: "flash" },
    { d: "2026-12-06", b1: "Simulado 3 (5h)", m1: "sim", b2: "—", m2: null, destaque: true }
  ]},
  { fase: "Semana final", periodo: "07 a 12/12", dias: [
    { d: "2026-12-07", b1: "Legislação Institucional", m1: "inst", b2: "", m2: null },
    { d: "2026-12-08", b1: "Constitucional + CE/SC", m1: "const", b2: "", m2: null },
    { d: "2026-12-09", b1: "Penal + Penal Militar + Redação 7", m1: "penal", b2: "", m2: null },
    { d: "2026-12-10", b1: "Processo Penal + Legislação Especial", m1: "ppenal", b2: "", m2: null },
    { d: "2026-12-11", b1: "Trânsito + Informática + Português", m1: "trans", b2: "", m2: null },
    { d: "2026-12-12", b1: "No máximo 2h de flashcards; separar documento com foto e caneta transparente de tinta azul ou preta; dormir cedo", m1: "flash", b2: "", m2: null }
  ]}
];

window.ESTRUTURA_DIA = {
  util: [
    ["1h30", "Matéria principal: teoria + lei seca"],
    ["1h15", "Matéria secundária"],
    ["45min", "Questões das duas matérias do dia"],
    ["30min", "Revisão espaçada com flashcards (D+1, D+7, D+21) + 1 texto de interpretação"]
  ],
  sabado: [
    ["1h15", "Redação cronometrada"],
    ["30min", "Reescrita a partir da correção"],
    ["2h", "Matéria indicada no cronograma"],
    ["1h15", "Questões mistas"]
  ],
  domingo: [
    ["2h", "Revisão semanal pelo caderno de erros"],
    ["2h", "Questões"],
    ["1h", "Português"]
  ]
};
