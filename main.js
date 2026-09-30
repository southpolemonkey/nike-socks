import { sockSVG, COLORWAYS } from "./sock.js";

/* ---------- ticker + marquee ---------- */
const tickerItems = [
  "Free shipping over $50",
  "★ 4.9 / 12,408 reviews",
  "Member early access",
  "Dri-FIT technology",
  "60-day no-blister guarantee",
];
document.getElementById("tickerTrack").innerHTML = Array(4)
  .fill(tickerItems.map((t) => `<span>${t}</span>`).join("<span>/</span>"))
  .join("<span>/</span>");

const marqueeWords = ["Max Cushion", "Dri-FIT", "Arch Lock", "Zero Blister", "Built For Miles"];
document.getElementById("marqueeTrack").innerHTML = Array(4)
  .fill(`<span>${marqueeWords.join("<em></em>")}<em></em></span>`)
  .join("");

/* ---------- hero sock ---------- */
const heroSock = document.getElementById("heroSock");
let current = 0;
function paintHero(i) {
  current = i;
  heroSock.innerHTML = sockSVG(COLORWAYS[i]);
  heroSock.animate(
    [{ transform: "scale(.9) rotate(-6deg)", opacity: 0 }, { transform: "none", opacity: 1 }],
    { duration: 450, easing: "cubic-bezier(.16,1,.3,1)" }
  );
}
paintHero(0);

/* parallax tilt on hero art */
const art = document.querySelector(".hero__art");
art.addEventListener("pointermove", (e) => {
  const r = art.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  heroSock.style.transform = `perspective(900px) rotateY(${x * 18}deg) rotateX(${-y * 14}deg) translateZ(20px)`;
  heroSock.style.animation = "none";
});
art.addEventListener("pointerleave", () => {
  heroSock.style.transform = "";
  heroSock.style.animation = "";
});

/* ---------- nav ---------- */
const nav = document.getElementById("nav");
addEventListener("scroll", () => nav.classList.toggle("is-stuck", scrollY > 40), { passive: true });

/* ---------- bag ---------- */
const bagCount = document.getElementById("bagCount");
const bagBtn = document.getElementById("bag");
const drawer = document.getElementById("drawer");
const scrim = document.getElementById("scrim");
const bagItems = document.getElementById("bagItems");
const bagTotal = document.getElementById("bagTotal");
const toast = document.getElementById("toast");
const cart = [];

function addToBag(item) {
  cart.push(item);
  renderBag();
  bagBtn.classList.remove("pop");
  void bagBtn.offsetWidth;
  bagBtn.classList.add("pop");
}

function renderBag() {
  bagCount.textContent = cart.length;
  bagTotal.textContent = "$" + cart.reduce((s, i) => s + i.price, 0);
  if (!cart.length) {
    bagItems.innerHTML = `<p class="bag-empty">Empty. <a href="#build" data-close-bag>Build a pack</a></p>`;
    return;
  }
  bagItems.innerHTML = cart
    .map(
      (i, n) => `<div class="bag-row">
        <span class="bag-sw" style="background:${i.hex}"></span>
        <div><h3>${i.name}</h3><p>${i.meta}</p></div>
        <div style="text-align:right"><b>$${i.price}</b><br><button data-rm="${n}">Remove</button></div>
      </div>`
    )
    .join("");
}

function openBag() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  scrim.hidden = false;
}
function closeBag() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  scrim.hidden = true;
}
function ping(msg) {
  toast.hidden = false;
  toast.textContent = msg;
  clearTimeout(ping.t);
  ping.t = setTimeout(() => (toast.hidden = true), 2200);
}

bagBtn.onclick = openBag;
document.getElementById("closeBag").onclick = closeBag;
scrim.onclick = () => {
  closeBag();
  closeMenu();
};
bagItems.addEventListener("click", (e) => {
  if (e.target.dataset.closeBag != null) closeBag();
  if (e.target.dataset.rm != null) {
    cart.splice(+e.target.dataset.rm, 1);
    renderBag();
  }
});
document.getElementById("checkout").onclick = () => {
  if (!cart.length) {
    ping("Bag is empty");
    return;
  }
  cart.length = 0;
  renderBag();
  closeBag();
  ping("Locked in · ships in 2 days");
};
renderBag();

/* ---------- mobile menu ---------- */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
function closeMenu() {
  navLinks.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}
menuBtn.onclick = () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
};
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

/* ---------- CONFIGURATOR ---------- */
const stageA = document.getElementById("stageSockA");
const stageB = document.getElementById("stageSockB");
const stage = document.querySelector(".build__stage");
const cwName = document.getElementById("cwName");
const swatches = document.getElementById("swatches");
const stockEl = document.getElementById("stock");

const SIZES = [
  { label: "M", note: "US 6–8" },
  { label: "L", note: "US 8–10" },
  { label: "XL", note: "US 10–12" },
  { label: "XXL", note: "US 12–14" },
];
const PACKS = [
  { label: "3 pairs", price: 28, note: "Starter" },
  { label: "6 pairs", price: 48, note: "Save 14%" },
  { label: "12 pairs", price: 84, note: "Save 25%" },
];

let sel = { cw: 0, size: 1, pack: 0 };

COLORWAYS.forEach((c, i) => {
  const b = document.createElement("button");
  b.className = "sw" + (i === 0 ? " on" : "");
  b.style.background = `linear-gradient(135deg,${c.body} 0 66%,${c.accent} 66% 100%)`;
  b.style.color = c.hex;
  b.title = c.name;
  b.setAttribute("aria-label", c.name);
  b.onclick = () => {
    sel.cw = i;
    [...swatches.children].forEach((el, j) => el.classList.toggle("on", j === i));
    paintStage();
    paintHero(i);
  };
  swatches.appendChild(b);
});

const sizesEl = document.getElementById("sizes");
SIZES.forEach((s, i) => {
  const b = document.createElement("button");
  b.className = "chip" + (i === sel.size ? " on" : "");
  b.innerHTML = `${s.label}<small>${s.note}</small>`;
  b.onclick = () => {
    sel.size = i;
    [...sizesEl.children].forEach((el, j) => el.classList.toggle("on", j === i));
  };
  sizesEl.appendChild(b);
});

const packsEl = document.getElementById("packs");
PACKS.forEach((p, i) => {
  const b = document.createElement("button");
  b.className = "chip" + (i === sel.pack ? " on" : "");
  b.innerHTML = `${p.label}<small>${p.note}</small>`;
  b.onclick = () => {
    sel.pack = i;
    [...packsEl.children].forEach((el, j) => el.classList.toggle("on", j === i));
    updateTotal();
  };
  packsEl.appendChild(b);
});

function updateTotal() {
  document.getElementById("total").textContent = "$" + PACKS[sel.pack].price;
}

function paintStage() {
  const c = COLORWAYS[sel.cw];
  stageA.innerHTML = sockSVG(c);
  stageB.innerHTML = sockSVG(c, { flip: true });
  cwName.textContent = c.name;
  stage.style.background = `radial-gradient(60% 55% at 50% 55%,${c.hex}33,#101014 72%)`;
  stockEl.textContent = 120 + sel.cw * 47;
  [stageA, stageB].forEach((el, k) =>
    el.animate(
      [{ transform: `translateY(24px) scale(.94)`, opacity: 0 }, { transform: "none", opacity: 1 }],
      { duration: 520, delay: k * 70, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" }
    )
  );
}
paintStage();
updateTotal();

document.getElementById("addBtn").onclick = (e) => {
  const c = COLORWAYS[sel.cw];
  const p = PACKS[sel.pack];
  addToBag({
    name: c.name,
    meta: `${p.label} · ${SIZES[sel.size].label}`,
    price: p.price,
    hex: c.hex,
  });
  const b = e.currentTarget;
  const t = b.textContent;
  b.textContent = "Added ✓";
  setTimeout(() => (b.textContent = t), 1100);
};

/* ---------- PRODUCTS ---------- */
const PRODUCTS = [
  { cw: 0, name: "Elite Crew — Volt Strike", meta: "Max cushion · 3 pairs", price: 28, badge: "Best seller", bc: "hot" },
  { cw: 1, name: "Elite Crew — Hyper Pink", meta: "Max cushion · 3 pairs", price: 28, badge: "New", bc: "new" },
  { cw: 2, name: "Everyday — Laser Cyan", meta: "Light cushion · 3 pairs", price: 24, badge: "", bc: "" },
  { cw: 3, name: "Trail — Solar Flare", meta: "Max cushion · 3 pairs", price: 32, badge: "Limited", bc: "hot" },
  { cw: 4, name: "Elite Crew — Ultraviolet", meta: "Max cushion · 3 pairs", price: 28, badge: "New", bc: "new" },
  { cw: 5, name: "Everyday — Blackout", meta: "Light cushion · 3 pairs", price: 22, badge: "", bc: "" },
];

document.getElementById("products").innerHTML = PRODUCTS.map((p, i) => {
  const c = COLORWAYS[p.cw];
  return `<article class="prod reveal" style="--c:${c.hex};transition-delay:${i * 60}ms">
    ${p.badge ? `<span class="prod__badge prod__badge--${p.bc}">${p.badge}</span>` : ""}
    <div class="prod__media">${sockSVG(c)}</div>
    <div class="prod__body">
      <h3 class="prod__name">${p.name}</h3>
      <p class="prod__meta">${p.meta}</p>
      <div class="prod__foot">
        <span class="prod__price">$${p.price}</span>
        <button class="prod__add" data-add="${i}">Add</button>
      </div>
    </div>
  </article>`;
}).join("");

document.querySelectorAll("[data-add]").forEach((b) =>
  b.addEventListener("click", () => {
    const p = PRODUCTS[+b.dataset.add];
    const c = COLORWAYS[p.cw];
    addToBag({ name: p.name, meta: p.meta, price: p.price, hex: c.hex });
    b.classList.add("done");
    b.textContent = "Added";
    setTimeout(() => {
      b.classList.remove("done");
      b.textContent = "Add";
    }, 1100);
  })
);

/* ---------- QUOTES ---------- */
const QUOTES = [
  { t: "I bought three packs and threw every other sock I own in the bin. The arch band is witchcraft.", n: "Marcus D.", r: "Verified — size XL", c: "#d8ff00" },
  { t: "12-hour warehouse shifts, no hot spots, no slipping down the heel. That never happens.", n: "Tev A.", r: "Verified — size L", c: "#ff1f8f" },
  { t: "Bright enough that my group ride actually asked where I got them. Cushion is unreal.", n: "Jonah R.", r: "Verified — size M", c: "#00e9ff" },
  { t: "Washed them maybe forty times. Still thick, still loud, still no holes in the toe.", n: "Priyan S.", r: "Verified — size XXL", c: "#ff5c00" },
];
document.getElementById("quotes").innerHTML = QUOTES.map((q, i) =>
  `<blockquote class="quote reveal" style="transition-delay:${i * 70}ms">
    <div class="quote__stars">★★★★★</div>
    <p>“${q.t}”</p>
    <footer><span class="avatar" style="background:${q.c}">${q.n[0]}</span><span>${q.n}<br>${q.r}</span></footer>
  </blockquote>`
).join("");

/* ---------- CTA socks ---------- */
document.getElementById("ctaSocks").innerHTML = [1, 2, 4, 5]
  .map((i) => `<div>${sockSVG(COLORWAYS[i])}</div>`)
  .join("");

/* ---------- REVEAL ---------- */
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
setTimeout(() => document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in")), 1800);

/* ---------- SCROLL PROGRESS ---------- */
const prog = document.getElementById("progress");
addEventListener(
  "scroll",
  () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    prog.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
  },
  { passive: true }
);
