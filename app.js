(function () {
  const pages = document.querySelectorAll(".page");
  const links = document.querySelectorAll(".nav a");

  function show(id) {
    pages.forEach((p) => p.classList.toggle("on", p.id === id));
    links.forEach((a) => a.classList.toggle("active", a.dataset.page === id));
    if (id === "deck") renderSlide();
    window.scrollTo(0, 0);
  }

  function route() {
    const id = (location.hash || "#overview").slice(1);
    show(["overview", "deck", "prototype", "prd", "model"].includes(id) ? id : "overview");
  }
  window.addEventListener("hashchange", route);
  route();

  /* ---------- deck ---------- */
  const stage = document.getElementById("stage");
  const dots = document.getElementById("dots");
  let i = 0;

  SLIDES.forEach((_, n) => {
    const d = document.createElement("i");
    d.addEventListener("click", () => { i = n; renderSlide(); });
    dots.appendChild(d);
  });

  function renderSlide() {
    const s = SLIDES[i];
    stage.classList.toggle("dark", !!s.dark);
    stage.innerHTML = `<div class="slide on">${s.html}</div>`;
    document.getElementById("counter").textContent =
      String(i + 1).padStart(2, "0") + " / " + String(SLIDES.length).padStart(2, "0");
    document.getElementById("slide-title").textContent = s.title;
    [...dots.children].forEach((d, n) => d.classList.toggle("on", n === i));
  }

  document.getElementById("prev").onclick = () => { i = (i + SLIDES.length - 1) % SLIDES.length; renderSlide(); };
  document.getElementById("next").onclick = () => { i = (i + 1) % SLIDES.length; renderSlide(); };

  window.addEventListener("keydown", (e) => {
    if (!document.getElementById("deck").classList.contains("on")) return;
    if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); i = (i + 1) % SLIDES.length; renderSlide(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); i = (i + SLIDES.length - 1) % SLIDES.length; renderSlide(); }
  });
  renderSlide();

  /* ---------- live model ---------- */
  const FIELDS = [
    ["mau", "SG MAU [A-13]", 600000, 1],
    ["ad", "Lens adoption [A-2]", 0.22, 0.01],
    ["sub", "Submissions / user [A-3]", 3.2, 0.1],
    ["match", "Match rate [A-4]", 0.78, 0.01],
    ["co", "Match → click-out [A-6]", 0.46, 0.01],
    ["cv", "Click-out → order [A-7]", 0.095, 0.005],
    ["inc", "Incrementality [A-8]", 0.55, 0.01],
    ["aov", "AOV SGD [A-12]", 95, 1],
    ["take", "Net take [P-2]", 0.024, 0.001],
    ["ret", "Retention orders / user [A-11]", 0.015, 0.001],
    ["book", "SG tracked GMV [A-15]", 400000000, 1000000],
    ["part", "Smart Rates participation [A-9]", 0.35, 0.01],
    ["fee", "Platform fee bps [A-16]", 0.0071, 0.0001],
    ["mult", "MY+TW multiple [A-18]", 3.2, 0.1],
    ["cost", "Cost / resolution [A-10]", 0.02, 0.01],
    ["team", "Team cost [A-17]", 2600000, 10000],
  ];

  const box = document.getElementById("inputs");
  const state = {};
  FIELDS.forEach(([k, label, v]) => {
    state[k] = v;
    const wrap = document.createElement("div");
    wrap.style.marginBottom = "10px";
    wrap.innerHTML = `<label for="f-${k}">${label}</label>`;
    const inp = document.createElement("input");
    inp.id = "f-" + k;
    inp.type = "number";
    inp.step = "any";
    inp.value = v;
    inp.addEventListener("input", () => {
      const n = parseFloat(inp.value);
      if (!Number.isNaN(n)) { state[k] = n; paint(); }
    });
    wrap.appendChild(inp);
    box.appendChild(wrap);
  });

  function sgd(n) {
    const abs = Math.abs(n);
    const sign = n < 0 ? "-" : "";
    if (abs >= 1e6) return sign + "S$" + (abs / 1e6).toFixed(2) + "M";
    if (abs >= 1e3) return sign + "S$" + Math.round(abs).toLocaleString("en-SG");
    return sign + "S$" + abs.toFixed(0);
  }
  function num(n) { return Math.round(n).toLocaleString("en-SG"); }

  function compute(a) {
    const lens = a.mau * a.ad;
    const subs = lens * a.sub;
    const matched = subs * a.match;
    const clicks = matched * a.co;
    const orders = clicks * a.cv;
    const incr = orders * a.inc;
    const gmvMo = incr * a.aov;
    const gmv = gmvMo * 12;
    const retention = lens * a.ret * a.aov * 12;
    const totalGmv = gmv + retention;
    const lensRev = totalGmv * a.take;
    const sr = a.book * a.part * a.fee;
    const total = lensRev + sr;
    const resolve = subs * 12 * a.cost;
    const year1 = total - resolve - a.team;
    const exit = total * a.mult;
    return { lens, subs, matched, clicks, orders, incr, gmvMo, gmv, retention, totalGmv, lensRev, sr, total, resolve, year1, exit };
  }

  function paint() {
    const r = compute(state);
    const rows = [
      ["SG MAU", num(state.mau), 1],
      ["Lens users", num(r.lens), state.ad],
      ["Submissions", num(r.subs), Math.min(1, r.subs / (state.mau * 4))],
      ["Matches", num(r.matched), state.match * state.ad],
      ["Click-outs", num(r.clicks), state.match * state.ad * state.co],
      ["Orders", num(r.orders), 0.22],
      ["Incremental orders / month", num(r.incr), 0.16],
      ["Incremental GMV / month", sgd(r.gmvMo), 0.16],
      ["Annualised Lens + retention GMV", sgd(r.totalGmv), 0.5],
      ["Lens net revenue", sgd(r.lensRev), 0.5],
      ["Smart Rates platform fee", sgd(r.sr), 0.5],
    ];
    document.getElementById("funnel").innerHTML = rows.map(([l, v, w]) =>
      `<li><span>${l}<div class="bar"><i style="width:${Math.max(8, w * 100)}%"></i></div></span><strong>${v}</strong></li>`
    ).join("");
    document.getElementById("rev").textContent = sgd(r.total);
    document.getElementById("exit").textContent = sgd(r.exit);
    document.getElementById("year1").textContent =
      "Year-1 contribution after resolution + team cost: " + sgd(r.year1) +
      ". Negative in year one is expected — year one buys the run-rate.";

    const sc = [
      ["Conservative", { ...state, ad: 0.10, match: 0.62, inc: 0.35, part: 0.15 }],
      ["Base", { ...state, ad: 0.22, match: 0.78, inc: 0.55, part: 0.35 }],
      ["Aggressive", { ...state, ad: 0.35, match: 0.88, inc: 0.70, part: 0.55 }],
    ];
    document.getElementById("scenarios").innerHTML = sc.map(([name, a]) => {
      const x = compute(a);
      return `<div class="card"><h3>${name}</h3>
        <p>Incremental GMV <b>${sgd(x.totalGmv)}</b></p>
        <p>SG net revenue <b>${sgd(x.total)}</b></p>
        <p style="margin:0">M12 exit <b>${sgd(x.exit)}</b></p></div>`;
    }).join("");
  }
  paint();

  if (window.PRD_HTML) document.getElementById("prd-body").innerHTML = window.PRD_HTML;
})();
