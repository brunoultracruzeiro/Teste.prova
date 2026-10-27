(function () {
  "use strict";

  /* ---------- Dados ---------- */
  const PROVA = "2026-12-13";
  const MAT = (window.MATERIAS || []).slice().sort((a, b) => (b.questoes || 0) - (a.questoes || 0));
  const MAT_BY = Object.fromEntries(MAT.map(m => [m.id, m]));
  const CRONO = window.CRONOGRAMA || [];
  const DIAS = CRONO.flatMap(f => f.dias.map(d => Object.assign({ fase: f.fase }, d)));
  const INTERVALOS = [1, 7, 21, 45]; // D+1, D+7, D+21 (do seu cronograma) e manutenção
  const LETRAS = ["A", "B", "C", "D", "E"];
  const DOW = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  /* ---------- Estado salvo ---------- */
  const KEY = "pmsc26-estudos-v1";
  const vazio = () => ({ blocos: {}, topicos: {}, cards: {}, respostas: {}, simulados: [], erros: {}, theme: null });
  let S = vazio();
  try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(vazio(), JSON.parse(raw)); } catch (e) { /* sem storage */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignora */ } }

  /* ---------- Utilidades ---------- */
  const $ = (sel, el = document) => el.querySelector(sel);
  const app = $("#app");
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  function hojeISO() { const d = new Date(); return iso(d); }
  function iso(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function parse(s) { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); }
  function addDias(s, n) { const d = parse(s); d.setDate(d.getDate() + n); return iso(d); }
  function diff(a, b) { return Math.round((parse(b) - parse(a)) / 86400000); }
  function fmt(s) { const d = parse(s); return String(d.getDate()).padStart(2, "0") + "/" + String(d.getMonth() + 1).padStart(2, "0"); }
  function dow(s) { return DOW[parse(s).getDay()]; }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }

  /* ---------- Tema ---------- */
  function aplicaTema() { if (S.theme) document.documentElement.setAttribute("data-theme", S.theme); else document.documentElement.removeAttribute("data-theme"); }
  aplicaTema();
  $("#themeBtn").addEventListener("click", () => {
    const escuro = S.theme ? S.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    S.theme = escuro ? "light" : "dark"; save(); aplicaTema();
  });

  /* ---------- Contagem regressiva ---------- */
  function contagem() {
    const n = diff(hojeISO(), PROVA);
    $("#countdown").innerHTML = n > 0 ? `<b>${n} dias</b>até a prova (13/12)` : n === 0 ? `<b>É hoje!</b>Boa prova` : `<b>Prova feita</b>13/12/2026`;
  }
  contagem();

  /* ---------- Métricas ---------- */
  function totalBlocos() { return DIAS.reduce((n, d) => n + (d.b2 && d.b2 !== "—" ? 2 : 1), 0); }
  function blocosFeitos() { return Object.values(S.blocos).filter(Boolean).length; }
  function topicosLidos(m) { return m.topicos.filter((_, i) => S.topicos[m.id + "|" + i]).length; }
  function statsMateria(m) {
    let ok = 0, tot = 0;
    m.quiz.forEach((_, i) => { const r = S.respostas[m.id + "|" + i]; if (r) { ok += r.ok; tot += r.tot; } });
    return { ok, tot };
  }
  function todosCards(filtro) {
    const out = [];
    MAT.forEach(m => { if (filtro && filtro !== "todas" && filtro !== m.id) return; m.flash.forEach((f, i) => out.push({ id: m.id + "|" + i, m, f })); });
    return out;
  }
  function cardsPendentes(filtro) {
    const h = hojeISO();
    const all = todosCards(filtro);
    const rev = all.filter(c => S.cards[c.id] && S.cards[c.id].due <= h);
    const novos = all.filter(c => !S.cards[c.id]);
    return { rev, novos };
  }

  /* ---------- Roteamento ---------- */
  let timerId = null;
  function go(hash) { location.hash = hash; }
  function rota() {
    if (timerId) { clearInterval(timerId); timerId = null; }
    const parts = (location.hash.replace(/^#\/?/, "") || "hoje").split("/");
    const view = parts[0];
    document.querySelectorAll("#tabs button").forEach(b => b.classList.toggle("active", b.dataset.view === (view === "materia" ? "materias" : view)));
    const r = { hoje: vHoje, cronograma: vCrono, materias: vMaterias, materia: () => vMateria(parts[1]), flash: () => vFlash(parts[1]), questoes: () => vQuestoes(parts[1]), progresso: () => vProgresso(parts[1]) }[view] || vHoje;
    r();
    window.scrollTo(0, 0);
  }
  document.querySelectorAll("#tabs button").forEach(b => b.addEventListener("click", () => go("/" + b.dataset.view)));
  window.addEventListener("hashchange", rota);

  /* ---------- Componentes ---------- */
  function linkMat(id, label) {
    if (!id) return "";
    if (id === "sim") return `<button class="linklike" data-go="/questoes/simulado">Abrir simulado</button>`;
    if (id === "flash") return `<button class="linklike" data-go="/flash">Abrir flashcards</button>`;
    if (id === "erros") return `<button class="linklike" data-go="/progresso/erros">Ver caderno de erros</button>`;
    const m = MAT_BY[id]; if (!m) return "";
    return `<button class="linklike" data-go="/materia/${id}">${label || "Resumo de " + esc(m.curto)}</button>`;
  }
  function bindGo(root) { root.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); go(b.dataset.go); })); }
  function bindChecks(root, redraw) {
    root.querySelectorAll("[data-bloco]").forEach(b => b.addEventListener("click", () => {
      const k = b.dataset.bloco; S.blocos[k] = !S.blocos[k]; if (!S.blocos[k]) delete S.blocos[k]; save(); redraw();
    }));
  }

  /* ---------- HOJE ---------- */
  function vHoje() {
    const h = hojeISO();
    let dia = DIAS.find(d => d.d === h);
    let titulo = "Plano de hoje";
    if (!dia && h < DIAS[0].d) { dia = DIAS[0]; titulo = "Começa em " + fmt(dia.d); }
    const nProva = diff(h, PROVA);
    const { rev, novos } = cardsPendentes();
    const feitos = blocosFeitos(), total = totalBlocos();
    const tipo = dia ? (parse(dia.d).getDay() === 6 ? "sabado" : parse(dia.d).getDay() === 0 ? "domingo" : "util") : "util";
    const estrutura = (window.ESTRUTURA_DIA || {})[tipo] || [];
    const simDomingo = dia && dia.m1 === "sim";

    let blocosHtml = "";
    if (dia) {
      [["1", dia.b1, dia.m1], ["2", dia.b2, dia.m2]].forEach(([n, txt, m]) => {
        if (!txt || txt === "—") return;
        const k = dia.d + "|" + n, on = !!S.blocos[k];
        blocosHtml += `<div class="block ${on ? "done" : ""}">
          <button class="check ${on ? "on" : ""}" data-bloco="${k}" aria-label="Marcar como feito">${on ? "✓" : ""}</button>
          <div><div class="block-title">${esc(txt)}</div><div class="meta">Bloco ${n === "1" ? "principal" : "secundário"} · ${linkMat(m)}</div></div>
        </div>`;
      });
    }

    app.innerHTML = `
      <section class="card hero">
        <div class="row">
          <div>
            <div class="muted small">${dia ? dow(dia.d) + ", " + fmt(dia.d) + " · " + esc(dia.fase) : "Fim do cronograma"}</div>
            <h1>${nProva > 0 ? titulo : nProva === 0 ? "Dia da prova" : "Cronograma concluído"}</h1>
          </div>
          <div class="spacer"></div>
          <div style="text-align:right"><div class="big">${Math.max(nProva, 0)}</div><div class="muted small">dias para 13/12</div></div>
        </div>
        <div style="margin-top:12px"><div class="bar"><i style="width:${pct(feitos, total)}%"></i></div>
        <div class="muted small" style="margin-top:6px">${feitos} de ${total} blocos do cronograma concluídos (${pct(feitos, total)}%)</div></div>
      </section>

      ${h <= "2026-11-16" ? `<div class="aviso"><b>Prazo crítico:</b> inscrição e pagamento até <b>16/11, às 16h</b>, no site do Instituto AOCP.</div>` : ""}

      <section class="card">
        <h2>Blocos do dia</h2>
        ${blocosHtml || `<p class="muted">Sem blocos para hoje. Use o tempo para flashcards e questões.</p>`}
        ${!simDomingo && estrutura.length ? `<details class="small" style="margin-top:8px"><summary class="muted" style="cursor:pointer">Como dividir as horas hoje</summary>
          <table class="t" style="margin-top:6px">${estrutura.map(e => `<tr><td style="width:70px"><b>${e[0]}</b></td><td>${esc(e[1])}</td></tr>`).join("")}</table></details>` : ""}
      </section>

      <div class="grid two">
        <section class="card">
          <h3>Flashcards</h3>
          <p class="muted small">${rev.length} para revisar hoje · ${novos.length} ainda não vistos</p>
          <button class="btn primary" data-go="/flash">Revisar agora</button>
        </section>
        <section class="card">
          <h3>Questões</h3>
          <p class="muted small">Treine as matérias do dia ou faça um simulado misto com cronômetro.</p>
          <div class="row">
            ${dia && MAT_BY[dia.m1] && MAT_BY[dia.m1].quiz.length ? `<button class="btn primary" data-go="/questoes/${dia.m1}">${esc(MAT_BY[dia.m1].curto)}</button>` : ""}
            ${dia && MAT_BY[dia.m2] && MAT_BY[dia.m2].quiz.length ? `<button class="btn primary" data-go="/questoes/${dia.m2}">${esc(MAT_BY[dia.m2].curto)}</button>` : ""}
            <button class="btn" data-go="/questoes/simulado">Simulado</button>
          </div>
        </section>
      </div>`;
    bindGo(app); bindChecks(app, vHoje);
  }

  /* ---------- CRONOGRAMA ---------- */
  function vCrono() {
    const h = hojeISO();
    const feitos = blocosFeitos(), total = totalBlocos();
    app.innerHTML = `
      <section class="card">
        <h1>Cronograma</h1>
        <p class="muted">Cerca de 195 horas entre 28/10 e 12/12: 4h nos dias úteis e 5h no sábado e no domingo. A partir de 22/11, o domingo vira simulado completo de 5h. Marque cada bloco ao concluir.</p>
        <div class="bar"><i style="width:${pct(feitos, total)}%"></i></div>
        <div class="muted small" style="margin-top:6px">${feitos}/${total} blocos concluídos</div>
      </section>
      ${CRONO.map(f => `
        <section class="card phase">
          <h3>${esc(f.fase)} <span class="pill">${esc(f.periodo)}</span></h3>
          ${f.alerta ? `<div class="aviso small" style="margin:6px 0 8px">${esc(f.alerta)}</div>` : ""}
          ${f.dias.map(d => {
            const itens = [["1", d.b1, d.m1], ["2", d.b2, d.m2]].filter(x => x[1] && x[1] !== "—");
            return `<div class="day ${d.d === h ? "today" : ""}" ${d.d === h ? 'id="hoje"' : ""}>
              <div class="date"><span>${dow(d.d)}</span>${fmt(d.d)}</div>
              <div class="items">${itens.map(([n, t, m]) => { const k = d.d + "|" + n, on = !!S.blocos[k];
                return `<div class="mini ${on ? "done" : ""}"><button class="check ${on ? "on" : ""}" data-bloco="${k}" aria-label="Marcar">${on ? "✓" : ""}</button>
                <div><span class="${d.destaque ? "destaque" : ""}">${esc(t)}</span> ${linkMat(m, "→")}</div></div>`; }).join("")}</div>
            </div>`; }).join("")}
        </section>`).join("")}
      <section class="card">
        <h3>Regras que fazem o plano funcionar</h3>
        <ul>
          <li><b>Caderno de erros:</b> cada questão errada vira uma linha com o assunto, o motivo do erro e a regra correta. O site já monta isso sozinho em <button class="linklike" data-go="/progresso/erros">Progresso → Caderno de erros</button>.</li>
          <li><b>Lei seca primeiro</b> nas matérias de legislação.</li>
          <li><b>Redação todo sábado:</b> vale 20 pontos, o mesmo que 20 questões da objetiva.</li>
        </ul>
      </section>`;
    bindGo(app); bindChecks(app, vCrono);
    const el = $("#hoje"); if (el) setTimeout(() => el.scrollIntoView({ block: "center" }), 50);
  }

  /* ---------- MATÉRIAS ---------- */
  function vMaterias() {
    app.innerHTML = `
      <section class="card"><h1>Matérias</h1><p class="muted">60 questões objetivas + redação de 20 pontos. Para passar, é preciso ter pelo menos 50% dos pontos e não zerar nenhuma disciplina.</p></section>
      <div class="grid two">${MAT.map(m => {
        const lidos = topicosLidos(m), st = statsMateria(m);
        return `<button class="card subj" style="--c:${m.cor}" data-go="/materia/${m.id}">
          <h3>${esc(m.nome)}</h3>
          <div class="row small muted"><span class="pill">${m.questoes ? m.questoes + " questões" : esc(m.pontos || "")}</span><span>~${m.horas}h no plano</span></div>
          <div style="margin:10px 0 4px" class="bar"><i style="width:${pct(lidos, m.topicos.length)}%;background:${m.cor}"></i></div>
          <div class="small muted">${lidos}/${m.topicos.length} resumos lidos${st.tot ? " · " + pct(st.ok, st.tot) + "% de acerto" : ""}</div>
        </button>`; }).join("")}</div>`;
    bindGo(app);
  }

  function vMateria(id) {
    const m = MAT_BY[id]; if (!m) return vMaterias();
    const draw = () => {
      app.innerHTML = `
        <button class="btn ghost" data-go="/materias">← Matérias</button>
        <section class="card" style="border-left:5px solid ${m.cor};margin-top:10px">
          <h1>${esc(m.nome)}</h1>
          <div class="row small muted"><span class="pill">${m.questoes ? m.questoes + " questões na prova" : esc(m.pontos || "")}</span><span>${topicosLidos(m)}/${m.topicos.length} lidos</span></div>
          <div class="row" style="margin-top:12px">
            ${m.flash.length ? `<button class="btn primary" data-go="/flash/${m.id}">Flashcards (${m.flash.length})</button>` : ""}
            ${m.quiz.length ? `<button class="btn primary" data-go="/questoes/${m.id}">Questões (${m.quiz.length})</button>` : ""}
          </div>
        </section>
        ${m.aviso ? `<div class="aviso">${esc(m.aviso)}</div>` : ""}
        ${m.topicos.map((t, i) => { const k = m.id + "|" + i, lido = !!S.topicos[k];
          return `<details class="topic ${lido ? "read" : ""}">
            <summary>${lido ? '<span class="tick">✓</span>' : ""}${esc(t.t)}</summary>
            <div class="body">${t.r}
              <div class="row" style="margin-top:12px"><button class="btn ${lido ? "" : "ok"}" data-lido="${k}">${lido ? "Marcar como não lido" : "Marcar como lido"}</button></div>
            </div></details>`; }).join("")}`;
      bindGo(app);
      app.querySelectorAll("[data-lido]").forEach(b => b.addEventListener("click", () => {
        const k = b.dataset.lido; S.topicos[k] = !S.topicos[k]; if (!S.topicos[k]) delete S.topicos[k]; save();
        const open = [...app.querySelectorAll("details")].map(d => d.open); draw();
        app.querySelectorAll("details").forEach((d, i) => { d.open = open[i] && !S.topicos[m.id + "|" + i]; });
      }));
    };
    draw();
  }

  /* ---------- FLASHCARDS ---------- */
  let fs = null; // sessão
  function vFlash(filtroInicial) {
    const filtro = filtroInicial || "todas";
    const { rev, novos } = cardsPendentes(filtro);
    const total = todosCards(filtro).length;
    const dominados = todosCards(filtro).filter(c => S.cards[c.id] && S.cards[c.id].lvl >= 3).length;
    app.innerHTML = `
      <section class="card">
        <h1>Flashcards</h1>
        <p class="muted">Revisão espaçada do seu cronograma: quem você acerta volta em <b>D+1</b>, depois <b>D+7</b> e <b>D+21</b>. Quem você erra volta no dia seguinte.</p>
        <label class="field">Matéria
          <select id="fsel"><option value="todas">Todas as matérias</option>${MAT.filter(m => m.flash.length).map(m => `<option value="${m.id}" ${m.id === filtro ? "selected" : ""}>${esc(m.nome)}</option>`).join("")}</select>
        </label>
        <div class="grid stats" style="margin-top:12px">
          <div class="stat"><b>${rev.length}</b><span>para revisar hoje</span></div>
          <div class="stat"><b>${novos.length}</b><span>novos</span></div>
          <div class="stat"><b>${dominados}/${total}</b><span>bem fixados</span></div>
        </div>
        <div class="row" style="margin-top:14px">
          <button class="btn primary" id="fgo" ${rev.length + novos.length ? "" : "disabled"}>Começar (${Math.min(rev.length + Math.min(novos.length, 20), 999)} cartões)</button>
          <button class="btn" id="fall">Rever todos desta seleção</button>
        </div>
      </section>`;
    $("#fsel").addEventListener("change", e => go("/flash/" + e.target.value));
    $("#fgo").addEventListener("click", () => iniciaFlash(shuffle(rev).concat(shuffle(novos).slice(0, 20)), filtro));
    $("#fall").addEventListener("click", () => iniciaFlash(shuffle(todosCards(filtro)), filtro, true));
  }
  function iniciaFlash(fila, filtro, livre) { fs = { fila, i: 0, filtro, livre, certo: 0, errado: 0 }; desenhaCard(); }
  function desenhaCard() {
    if (fs.i >= fs.fila.length) {
      app.innerHTML = `<section class="card" style="text-align:center"><h1>Sessão concluída</h1>
        <p class="muted">${fs.certo} lembrei · ${fs.errado} não lembrei</p>
        <div class="row" style="justify-content:center"><button class="btn primary" data-go="/flash/${fs.filtro}">Voltar</button><button class="btn" data-go="/hoje">Hoje</button></div></section>`;
      bindGo(app); return;
    }
    const c = fs.fila[fs.i];
    app.innerHTML = `
      <div class="row"><button class="btn ghost" id="fsair">← Sair</button><div class="spacer"></div><span class="muted small">${fs.i + 1} / ${fs.fila.length}</span></div>
      <div class="bar" style="margin-top:8px"><i style="width:${pct(fs.i, fs.fila.length)}%"></i></div>
      <div class="flashcard" id="fc">
        <div class="inner">
          <div class="face front"><small>${esc(c.m.curto)}</small>${esc(c.f[0])}<span class="hint">Toque para virar</span></div>
          <div class="face back"><small>Resposta</small>${esc(c.f[1])}</div>
        </div>
      </div>
      <div class="row" id="fbtns" style="justify-content:center;visibility:hidden">
        <button class="btn bad" id="fno">Não lembrei</button>
        <button class="btn ok" id="fyes">Lembrei</button>
      </div>`;
    $("#fsair").addEventListener("click", () => go("/flash/" + fs.filtro));
    $("#fc").addEventListener("click", () => { $("#fc").classList.toggle("flipped"); $("#fbtns").style.visibility = "visible"; });
    $("#fyes").addEventListener("click", () => responde(true));
    $("#fno").addEventListener("click", () => responde(false));
  }
  function responde(ok) {
    const c = fs.fila[fs.i], h = hojeISO();
    const cur = S.cards[c.id] || { lvl: 0 };
    if (ok) { fs.certo++; const lvl = Math.min(cur.lvl + 1, INTERVALOS.length); S.cards[c.id] = { lvl, due: addDias(h, INTERVALOS[lvl - 1]) }; }
    else { fs.errado++; S.cards[c.id] = { lvl: 0, due: addDias(h, 1) }; if (!fs.livre && !c.repetido) fs.fila.push(Object.assign({}, c, { repetido: true })); }
    save(); fs.i++; desenhaCard();
  }

  /* ---------- QUESTÕES ---------- */
  let qs = null;
  function bancoQuestoes(filtro) {
    const out = [];
    MAT.forEach(m => { if (filtro && filtro !== "simulado" && filtro !== "misto" && filtro !== m.id) return; m.quiz.forEach((q, i) => out.push({ id: m.id + "|" + i, m, q })); });
    return out;
  }
  function vQuestoes(filtro) {
    filtro = filtro || "misto";
    const simulado = filtro === "simulado";
    const banco = bancoQuestoes(filtro);
    const nErros = Object.keys(S.erros).length;
    app.innerHTML = `
      <section class="card">
        <h1>Questões</h1>
        <p class="muted">Questões de múltipla escolha no estilo da AOCP (5 alternativas), com explicação e referência à lei. Cada erro vai para o seu caderno de erros.</p>
        <div class="grid two">
          <label class="field">Matéria
            <select id="qsel">
              <option value="misto" ${filtro === "misto" ? "selected" : ""}>Todas (misto)</option>
              <option value="simulado" ${simulado ? "selected" : ""}>Simulado cronometrado</option>
              ${MAT.filter(m => m.quiz.length).map(m => `<option value="${m.id}" ${m.id === filtro ? "selected" : ""}>${esc(m.nome)} (${m.quiz.length})</option>`).join("")}
            </select>
          </label>
          <label class="field">Quantidade
            <input type="number" id="qn" min="1" max="${banco.length}" value="${Math.min(simulado ? banco.length : 10, banco.length)}">
          </label>
        </div>
        ${simulado ? `<p class="small muted" style="margin-top:8px">O simulado mistura todas as matérias e marca o tempo. Na prova real são 60 questões + redação em 5 horas (cerca de 3 min por questão, reservando 1h30 para a redação).</p>` : ""}
        <div class="row" style="margin-top:12px">
          <button class="btn primary" id="qgo" ${banco.length ? "" : "disabled"}>Começar</button>
          ${nErros ? `<button class="btn" id="qerr">Refazer meus erros (${nErros})</button>` : ""}
        </div>
      </section>
      <section class="card">
        <h3>Desempenho por matéria</h3>
        <table class="t"><tr><th>Matéria</th><th>Respondidas</th><th>Acerto</th></tr>
        ${MAT.filter(m => m.quiz.length).map(m => { const s = statsMateria(m); return `<tr><td>${esc(m.curto)}</td><td>${s.tot}</td><td>${s.tot ? pct(s.ok, s.tot) + "%" : "—"}</td></tr>`; }).join("")}
        </table>
      </section>`;
    $("#qsel").addEventListener("change", e => go("/questoes/" + e.target.value));
    $("#qgo").addEventListener("click", () => {
      const n = Math.max(1, Math.min(parseInt($("#qn").value, 10) || 10, banco.length));
      iniciaQuiz(shuffle(banco).slice(0, n), simulado ? "Simulado" : (MAT_BY[filtro] ? MAT_BY[filtro].curto : "Misto"), simulado, filtro);
    });
    const be = $("#qerr");
    if (be) be.addEventListener("click", () => {
      const lista = bancoQuestoes("misto").filter(x => S.erros[x.id]);
      iniciaQuiz(shuffle(lista), "Caderno de erros", false, filtro);
    });
  }
  function iniciaQuiz(lista, nome, cronometro, origem) {
    lista = lista.map(x => Object.assign({}, x, { ordem: shuffle(x.q.o.map((_, k) => k)) }));
    qs = { lista, i: 0, nome, cronometro, origem, inicio: Date.now(), acertos: 0, respondida: null, erradas: [] };
    desenhaQ();
  }
  function tempo(ms) { const s = Math.floor(ms / 1000); return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); }
  function desenhaQ() {
    if (timerId) { clearInterval(timerId); timerId = null; }
    if (qs.i >= qs.lista.length) return fimQuiz();
    const { m, q, id, ordem } = qs.lista[qs.i];
    const r = qs.respondida; // índice original marcado
    const certaPos = ordem.indexOf(q.c);
    app.innerHTML = `
      <div class="row"><button class="btn ghost" id="qsair">← Sair</button><div class="spacer"></div>
        ${qs.cronometro ? `<span class="timer" id="tm">${tempo(Date.now() - qs.inicio)}</span>` : ""}
        <span class="muted small">${qs.i + 1} / ${qs.lista.length}</span></div>
      <div class="bar" style="margin:8px 0 12px"><i style="width:${pct(qs.i, qs.lista.length)}%"></i></div>
      <section class="card">
        <div class="qhead"><span class="pill" style="background:${m.cor};color:#fff">${esc(m.curto)}</span><span class="muted small">${esc(qs.nome)}</span></div>
        <p style="font-weight:600;font-size:1.02rem">${esc(q.q)}</p>
        ${ordem.map((k, pos) => {
          let cls = "";
          if (r !== null) { if (k === q.c) cls = "right"; else if (k === r) cls = "wrong"; }
          return `<button class="opt ${cls}" data-k="${k}" ${r !== null ? "disabled" : ""}><span class="letter">${LETRAS[pos]}</span><span>${esc(q.o[k])}</span></button>`;
        }).join("")}
        ${r !== null ? `<div class="explain"><b>${r === q.c ? "Correto." : "Resposta: " + LETRAS[certaPos] + "."}</b> ${esc(q.e)}</div>
          <div class="row"><div class="spacer"></div><button class="btn primary" id="qnext">${qs.i + 1 < qs.lista.length ? "Próxima" : "Ver resultado"}</button></div>` : ""}
      </section>`;
    $("#qsair").addEventListener("click", () => go("/questoes/" + qs.origem));
    app.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => {
      if (qs.respondida !== null) return;
      const k = +b.dataset.k; qs.respondida = k;
      const ok = k === q.c;
      const rr = S.respostas[id] || { ok: 0, tot: 0 };
      rr.tot++; if (ok) rr.ok++; rr.last = ok; S.respostas[id] = rr;
      if (ok) { qs.acertos++; } else { qs.erradas.push(id); if (!S.erros[id]) S.erros[id] = { data: hojeISO(), motivo: "", marcou: k }; else S.erros[id].marcou = k; }
      save(); desenhaQ();
    }));
    const nx = $("#qnext"); if (nx) nx.addEventListener("click", () => { qs.i++; qs.respondida = null; desenhaQ(); });
    if (qs.cronometro && r === null) timerId = setInterval(() => { const t = $("#tm"); if (t) t.textContent = tempo(Date.now() - qs.inicio); }, 1000);
  }
  function fimQuiz() {
    const dur = Date.now() - qs.inicio;
    S.simulados.unshift({ data: hojeISO(), nome: qs.nome, acertos: qs.acertos, total: qs.lista.length, tempo: Math.round(dur / 1000) });
    S.simulados = S.simulados.slice(0, 100); save();
    const p = pct(qs.acertos, qs.lista.length);
    app.innerHTML = `
      <section class="card" style="text-align:center">
        <div class="muted small">${esc(qs.nome)}</div>
        <h1 style="font-size:3rem;margin:6px 0">${p}%</h1>
        <p>${qs.acertos} de ${qs.lista.length} certas · tempo ${tempo(dur)}</p>
        <p class="muted small">${p >= 50 ? "Acima dos 50% exigidos pelo edital. Continue assim." : "Abaixo dos 50% exigidos pelo edital. Revise os resumos e o caderno de erros."}</p>
        <div class="row" style="justify-content:center">
          <button class="btn primary" data-go="/questoes/${qs.origem}">Fazer outra</button>
          ${qs.erradas.length ? `<button class="btn" data-go="/progresso/erros">Caderno de erros (${qs.erradas.length} novos)</button>` : ""}
        </div>
      </section>`;
    bindGo(app);
  }

  /* ---------- PROGRESSO ---------- */
  function vProgresso(sec) {
    const feitos = blocosFeitos(), total = totalBlocos();
    const totTop = MAT.reduce((n, m) => n + m.topicos.length, 0), lidos = MAT.reduce((n, m) => n + topicosLidos(m), 0);
    const totCards = todosCards().length, vistos = Object.keys(S.cards).length;
    let ok = 0, tot = 0; Object.values(S.respostas).forEach(r => { ok += r.ok; tot += r.tot; });
    const erros = bancoQuestoes("misto").filter(x => S.erros[x.id]);
    app.innerHTML = `
      <section class="card">
        <h1>Progresso</h1>
        <div class="grid stats">
          <div class="stat"><b>${pct(feitos, total)}%</b><span>do cronograma (${feitos}/${total} blocos)</span></div>
          <div class="stat"><b>${lidos}/${totTop}</b><span>resumos lidos</span></div>
          <div class="stat"><b>${vistos}/${totCards}</b><span>flashcards estudados</span></div>
          <div class="stat"><b>${tot ? pct(ok, tot) + "%" : "—"}</b><span>acerto em ${tot} respostas</span></div>
        </div>
      </section>

      <section class="card">
        <h3>Desempenho por matéria</h3>
        <table class="t"><tr><th>Matéria</th><th>Resumos</th><th>Acerto</th></tr>
        ${MAT.map(m => { const s = statsMateria(m); return `<tr><td>${esc(m.curto)}</td><td>${topicosLidos(m)}/${m.topicos.length}</td><td>${s.tot ? pct(s.ok, s.tot) + "% (" + s.tot + ")" : "—"}</td></tr>`; }).join("")}
        </table>
        <p class="small muted" style="margin-top:8px">Na semana 5 (01 a 04/12), o bloco 2 é para as 3 matérias com pior desempenho. Use esta tabela para escolher.</p>
      </section>

      <section class="card" id="erros">
        <h3>Caderno de erros (${erros.length})</h3>
        <p class="small muted">Cada questão errada entra aqui automaticamente. Anote o motivo do erro: é ele que guia a revisão de domingo e o reforço da semana 5.</p>
        ${erros.length ? `<button class="btn" id="refaz">Refazer todos os erros</button>` : ""}
        <div style="margin-top:10px">
        ${erros.map(({ id, m, q }) => `
          <div class="erro">
            <div class="row small"><span class="pill" style="background:${m.cor};color:#fff">${esc(m.curto)}</span><span class="muted">${fmt(S.erros[id].data)}</span><div class="spacer"></div>
              <button class="linklike" data-rm="${id}">Já domino, remover</button></div>
            <p style="margin:8px 0 4px;font-weight:600">${esc(q.q)}</p>
            ${S.erros[id].marcou != null && S.erros[id].marcou !== q.c ? `<div class="small" style="color:var(--bad)">Você marcou: ${esc(q.o[S.erros[id].marcou])}</div>` : ""}
            <div class="small" style="color:var(--ok)">Correta: ${esc(q.o[q.c])}</div>
            <div class="explain small">${esc(q.e)}</div>
            <textarea data-motivo="${id}" placeholder="Por que errei? (ex.: confundi concussão com corrupção passiva)">${esc(S.erros[id].motivo || "")}</textarea>
          </div>`).join("") || `<p class="muted">Nenhum erro registrado ainda.</p>`}
        </div>
      </section>

      <section class="card">
        <h3>Histórico de questões e simulados</h3>
        ${S.simulados.length ? `<table class="t"><tr><th>Data</th><th>Tipo</th><th>Acertos</th><th>Tempo</th></tr>
          ${S.simulados.slice(0, 30).map(s => `<tr><td>${fmt(s.data)}</td><td>${esc(s.nome)}</td><td>${s.acertos}/${s.total} (${pct(s.acertos, s.total)}%)</td><td>${tempo(s.tempo * 1000)}</td></tr>`).join("")}</table>`
          : `<p class="muted">Nenhuma sessão ainda.</p>`}
      </section>

      <section class="card">
        <h3>Backup do progresso</h3>
        <p class="small muted">Seu progresso fica salvo neste navegador. Para continuar em outro celular ou computador, exporte aqui e importe lá.</p>
        <div class="row">
          <button class="btn" id="exp">Exportar progresso</button>
          <label class="btn" style="cursor:pointer">Importar progresso<input type="file" id="imp" accept="application/json" hidden></label>
          <div class="spacer"></div>
          <button class="btn ghost" id="rst" style="color:var(--bad)">Zerar tudo</button>
        </div>
      </section>`;
    bindGo(app);
    const rf = $("#refaz"); if (rf) rf.addEventListener("click", e => { e.stopPropagation(); iniciaQuiz(shuffle(erros), "Caderno de erros", false, "misto"); });
    app.querySelectorAll("[data-rm]").forEach(b => b.addEventListener("click", () => { delete S.erros[b.dataset.rm]; save(); vProgresso("erros"); }));
    app.querySelectorAll("[data-motivo]").forEach(t => t.addEventListener("input", () => { S.erros[t.dataset.motivo].motivo = t.value; save(); }));
    $("#exp").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "progresso-pmsc-" + hojeISO() + ".json"; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
    $("#imp").addEventListener("change", e => {
      const f = e.target.files[0]; if (!f) return;
      f.text().then(t => { try { S = Object.assign(vazio(), JSON.parse(t)); save(); aplicaTema(); vProgresso(); } catch (err) { alert("Arquivo inválido."); } });
    });
    let armado = false;
    $("#rst").addEventListener("click", e => {
      if (!armado) { armado = true; e.target.textContent = "Toque de novo para confirmar"; return; }
      S = vazio(); save(); aplicaTema(); vProgresso();
    });
    if (sec === "erros") setTimeout(() => $("#erros").scrollIntoView(), 50);
  }

  rota();
})();
