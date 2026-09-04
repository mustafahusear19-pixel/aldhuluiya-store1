/* =====================================================
   Ù„ÙˆØ­Ø© Ø§Ù„Ø¥Ø¯Ø§Ø±Ø© â€” Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø¶Ù„ÙˆØ¹ÙŠØ© (admin.js)
   Ø§Ù„Ø¯Ø®ÙˆÙ„ Ø¨Ø±Ù…Ø² Ø³Ø±ÙŠ + Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø·Ù„Ø¨Ø§Øª ÙˆØ§Ù„Ø³Ø§Ø¦Ù‚ÙŠÙ† + Ø§Ù„Ø¥Ø´Ø¹Ø§Ø±Ø§Øª
   ===================================================== */

const ADMIN_CODE = "44dd";
const STATUS_FLOW = ["received", "preparing", "onway", "delivered"];
const STATUS_LABELS = {
    pending: "â³ Ø¨Ø§Ù†ØªØ¸Ø§Ø± Ø§Ù„Ù…ÙˆØ§ÙÙ‚Ø©",
    received: "âœ… ØªÙ… Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù…",
    preparing: "ðŸ‘¨â€ðŸ³ Ø¬Ø§Ø±ÙŠ Ø§Ù„ØªØ­Ø¶ÙŠØ±",
    onway: "ðŸ›µ ÙÙŠ Ø§Ù„Ø·Ø±ÙŠÙ‚",
    delivered: "ðŸŽ‰ ØªÙ… Ø§Ù„ØªØ³Ù„ÙŠÙ…",
    rejected: "âŒ Ù…Ù„ØºÙŠ"
};
const STATUS_CLASS = {
    pending: "bg-amber-100 text-amber-700",
    received: "bg-blue-100 text-blue-700",
    preparing: "bg-purple-100 text-purple-700",
    onway: "bg-orange-100 text-orange-700",
    delivered: "bg-emerald-100 text-emerald-700",
    rejected: "bg-red-100 text-red-600"
};
const TYPE_ICONS = { cart: "ðŸ›’", taxi: "ðŸš•", pharmacy: "ðŸ’Š", maintenance: "ðŸ”§" };
const TYPE_LABELS = { cart: "Ø·Ù„Ø¨ Ù…Ø·Ø¹Ù…/Ù…Ø³ÙˆØ§Ùƒ", taxi: "Ø·Ù„Ø¨ ØªÙƒØ³ÙŠ (ÙˆØµÙ„Ù†ÙŠ)", pharmacy: "Ø·Ù„Ø¨ ØµÙŠØ¯Ù„ÙŠØ©", maintenance: "Ø·Ù„Ø¨ ØµÙŠØ§Ù†Ø©" };

function lsGet(key, fallback) {
    try {
        const v = JSON.parse(localStorage.getItem(key));
        return (v === null || v === undefined) ? fallback : v;
    } catch (e) { return fallback; }
}
function lsSet(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }

document.addEventListener("DOMContentLoaded", () => {
    const codeInput = document.getElementById("admin-code");
    if (codeInput) codeInput.addEventListener("keydown", (e) => { if (e.key === "Enter") tryLogin(); });
    if (sessionStorage.getItem("dhilo_admin_session") === "1") showPanel();
    // ØªØ­Ø¯ÙŠØ« ÙÙˆØ±ÙŠ Ø¹Ù†Ø¯ ØªØºÙŠÙ‘Ø± Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ù…Ù† ØªØ¨ÙˆÙŠØ¨ Ø¢Ø®Ø± (Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø²Ø¨ÙˆÙ†)
    window.addEventListener("storage", (e) => {
        if (["dhilo_admin_orders", "dhilo_drivers", "dhilo_notifications"].includes(e.key)) renderAll();
    });
    // ØªØ­Ø¯ÙŠØ« Ø¯ÙˆØ±ÙŠ ÙƒÙ„ 4 Ø«ÙˆØ§Ù†Ù
    setInterval(() => { if (sessionStorage.getItem("dhilo_admin_session") === "1") renderAll(); }, 4000);
});

function tryLogin() {
    const input = document.getElementById("admin-code");
    const val = input.value.trim();
    if (val === ADMIN_CODE) {
        sessionStorage.setItem("dhilo_admin_session", "1");
        input.value = "";
        document.getElementById("login-error").classList.add("hidden");
        showPanel();
    } else {
        document.getElementById("login-error").classList.remove("hidden");
        input.classList.add("shake");
        setTimeout(() => input.classList.remove("shake"), 350);
    }
}
function logout() {
    sessionStorage.removeItem("dhilo_admin_session");
    document.getElementById("admin-panel").classList.add("hidden");
    document.getElementById("login-screen").classList.remove("hidden");
}
function showPanel() {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("admin-panel").classList.remove("hidden");
    renderAll();
}

function switchTab(name) {
    ["orders", "drivers", "broadcast"].forEach(t => {
        document.getElementById("tab-" + t).classList.toggle("hidden", t !== name);
        document.getElementById("tabbtn-" + t).classList.toggle("active", t === name);
    });
}

function renderAll() {
    renderStats();
    renderOrders();
    renderDrivers();
    const s = document.getElementById("last-sync");
    if (s) s.innerText = new Date().toLocaleTimeString("ar");
}

function renderStats() {
    const orders = lsGet("dhilo_admin_orders", []);
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.innerText = v; };
    set("stat-pending", orders.filter(o => o.status === "pending").length);
    set("stat-active", orders.filter(o => STATUS_FLOW.includes(o.status)).length);
    set("stat-delivered", orders.filter(o => o.status === "delivered").length);
    set("stat-drivers", lsGet("dhilo_drivers", []).length);
}

function fmtTime(ts) {
    return new Date(ts).toLocaleString("ar", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" });
}

function toast(msg) {
    let c = document.getElementById("admin-toast");
    if (!c) {
        c = document.createElement("div");
        c.id = "admin-toast";
        c.className = "fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2";
        document.body.appendChild(c);
    }
    const t = document.createElement("div");
    t.className = "bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xl pop";
    t.innerText = msg;
    c.appendChild(t);
    setTimeout(() => t.remove(), 2500);
}
// ADMIN-PART-2

function emptyBox(msg) {
    return `<div class="bg-white/60 border border-dashed border-slate-300 rounded-xl p-4 text-center text-[11px] font-bold text-slate-400">${msg}</div>`;
}

function renderOrders() {
    const orders = lsGet("dhilo_admin_orders", []);
    const pending = orders.filter(o => o.status === "pending");
    const active = orders.filter(o => STATUS_FLOW.includes(o.status));
    const done = orders.filter(o => o.status === "delivered" || o.status === "rejected").slice(0, 8);
    const p = document.getElementById("pending-orders");
    const a = document.getElementById("active-orders");
    const d = document.getElementById("done-orders");
    if (p) p.innerHTML = pending.map(o => orderCard(o, "pending")).join("") || emptyBox("Ù„Ø§ ØªÙˆØ¬Ø¯ Ø·Ù„Ø¨Ø§Øª Ø¬Ø¯ÙŠØ¯Ø© Ø¨Ø§Ù†ØªØ¸Ø§Ø± Ø§Ù„Ù…ÙˆØ§ÙÙ‚Ø©");
    if (a) a.innerHTML = active.map(o => orderCard(o, "active")).join("") || emptyBox("Ù„Ø§ ØªÙˆØ¬Ø¯ Ø·Ù„Ø¨Ø§Øª Ù‚ÙŠØ¯ Ø§Ù„ØªÙ†ÙÙŠØ°");
    if (d) d.innerHTML = done.map(o => orderCard(o, "done")).join("") || emptyBox("Ù„Ø§ ØªÙˆØ¬Ø¯ Ø·Ù„Ø¨Ø§Øª Ù…ÙƒØªÙ…Ù„Ø© Ø¨Ø¹Ø¯");
}

function orderCard(o, mode) {
    const icon = TYPE_ICONS[o.type] || "ðŸ“¦";
    const gps = o.gps ? `<a href="https://www.google.com/maps?q=${o.gps.lat},${o.gps.lon}" target="_blank" class="text-blue-600 font-bold underline">ðŸ“ Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø²Ø¨ÙˆÙ†</a>` : "";
    const wa = o.phone ? `<a href="https://wa.me/${String(o.phone).replace(/[^0-9]/g, "").replace(/^0/, "964")}" target="_blank" class="text-emerald-600 font-bold underline">ðŸ’¬ Ù…Ø±Ø§Ø³Ù„Ø© Ø§Ù„Ø²Ø¨ÙˆÙ†</a>` : "";
    let html = `
        <div class="flex justify-between items-start">
            <div>
                <span class="font-black text-sm">${icon} ${TYPE_LABELS[o.type] || o.type} <span class="text-slate-400 text-[10px]">#${o.id}</span></span>
                <p class="text-[11px] font-bold text-slate-500 mt-0.5">${o.customer || "Ø²Ø¨ÙˆÙ†"}${o.phone ? " â€¢ " + o.phone : ""} â€¢ ${fmtTime(o.ts)}</p>
            </div>
            <span class="text-[10px] font-black px-2 py-1 rounded-lg ${STATUS_CLASS[o.status]}">${STATUS_LABELS[o.status]}</span>
        </div>
        <p class="text-[11px] font-bold text-slate-600 bg-slate-50 dark:bg-slate-50 rounded-lg p-2 mt-2 whitespace-pre-line">${o.summary}</p>
        <div class="flex flex-wrap items-center gap-3 mt-2 text-[11px] font-bold">
            <span class="text-brand-700">ðŸ’µ ${o.total}</span>
            ${gps}${wa}
        </div>`;
    if (mode === "pending") {
        html += `
        <div class="flex gap-2 mt-3">
            <button onclick="approveOrder('${o.id}')" class="flex-1 bg-emerald-600 text-white font-black text-xs py-2 rounded-xl hover:bg-emerald-700 transition">âœ… Ù…ÙˆØ§ÙÙ‚Ø© ÙˆØ¨Ø¯Ø¡ Ø§Ù„ØªØ­Ø¶ÙŠØ±</button>
            <button onclick="rejectOrder('${o.id}')" class="bg-red-50 text-red-500 font-black text-xs px-3 py-2 rounded-xl hover:bg-red-100 transition">âŒ Ø±ÙØ¶</button>
        </div>`;
    } else if (mode === "active") {
        const idx = STATUS_FLOW.indexOf(o.status);
        const next = STATUS_FLOW[idx + 1];
        const dots = STATUS_FLOW.map(s => `<span class="h-1.5 flex-1 rounded-full ${idx >= STATUS_FLOW.indexOf(s) ? "bg-brand-600" : "bg-slate-200"}"></span>`).join("");
        html += `
        <div class="flex gap-1 mt-3">${dots}</div>
        <div class="flex gap-2 mt-2">
            ${next ? `<button onclick="advanceOrder('${o.id}')" class="flex-1 bg-brand-600 text-white font-black text-xs py-2 rounded-xl hover:bg-brand-700 transition">Ø§Ù„ØªØ§Ù„ÙŠ: ${STATUS_LABELS[next]}</button>` : ""}
            <button onclick="rejectOrder('${o.id}')" class="bg-red-50 text-red-500 font-black text-xs px-3 py-2 rounded-xl hover:bg-red-100 transition">Ø¥Ù„ØºØ§Ø¡</button>
        </div>`;
    }
    return `<div class="bg-white rounded-2xl shadow p-3 pop">${html}</div>`;
}

function setOrderStatus(id, status) {
    const orders = lsGet("dhilo_admin_orders", []);
    const o = orders.find(x => x.id === id);
    if (!o) return;
    o.status = status;
    o.statusTs = Date.now();
    lsSet("dhilo_admin_orders", orders);
    notifyCustomer(o);
    // Ù…Ø²Ø§Ù…Ù†Ø© Ø´Ø±ÙŠØ· Ø§Ù„ØªØªØ¨Ø¹ Ù„Ø¯Ù‰ Ø§Ù„Ø²Ø¨ÙˆÙ†
    const map = { received: 1, preparing: 2, onway: 3, delivered: 4 };
    if (map[status]) lsSet("dhilo_tracking", { step: map[status], ts: Date.now() });
    renderAll();
    toast("ØªÙ… ØªØ­Ø¯ÙŠØ« Ø­Ø§Ù„Ø© Ø§Ù„Ø·Ù„Ø¨ #" + id);
}
function approveOrder(id) { setOrderStatus(id, "received"); }
function advanceOrder(id) {
    const orders = lsGet("dhilo_admin_orders", []);
    const o = orders.find(x => x.id === id);
    if (!o) return;
    const idx = STATUS_FLOW.indexOf(o.status);
    if (idx >= 0 && idx < STATUS_FLOW.length - 1) setOrderStatus(id, STATUS_FLOW[idx + 1]);
}
function rejectOrder(id) {
    if (!confirm("Ù‡Ù„ ØªØ±ÙŠØ¯ Ø¥Ù„ØºØ§Ø¡ Ù‡Ø°Ø§ Ø§Ù„Ø·Ù„Ø¨ØŸ Ø³ÙŠØªÙ… Ø¥Ø´Ø¹Ø§Ø± Ø§Ù„Ø²Ø¨ÙˆÙ†.")) return;
    setOrderStatus(id, "rejected");
}

function notifyCustomer(o) {
    const notes = lsGet("dhilo_notifications", []);
    const msgs = {
        received: `âœ… ØªÙ… Ø§Ø³ØªÙ„Ø§Ù… Ø·Ù„Ø¨Ùƒ #${o.id} Ù…Ù† Ø§Ù„Ø¥Ø¯Ø§Ø±Ø© ÙˆØ¨Ø¯Ø£Ù†Ø§ Ø¨ØªØ­Ø¶ÙŠØ±Ù‡ Ø§Ù„Ø¢Ù†!`,
        preparing: `ðŸ‘¨â€ðŸ³ Ø·Ù„Ø¨Ùƒ #${o.id} Ù‚ÙŠØ¯ Ø§Ù„ØªØ­Ø¶ÙŠØ± Ø§Ù„Ø¢Ù† ÙÙŠ Ø§Ù„Ù…Ø·Ø¨Ø®`,
        onway: `ðŸ›µ Ø·Ù„Ø¨Ùƒ #${o.id} ÙÙŠ Ø§Ù„Ø·Ø±ÙŠÙ‚ Ø¥Ù„ÙŠÙƒ Ø§Ù„Ø¢Ù† â€” Ø§Ø³ØªØ¹Ø¯!`,
        delivered: `ðŸŽ‰ ØªÙ… ØªØ³Ù„ÙŠÙ… Ø·Ù„Ø¨Ùƒ #${o.id} Ø¨Ù†Ø¬Ø§Ø­ â€” Ø¨Ø§Ù„Ø¹Ø§ÙÙŠØ©!`,
        rejected: `âŒ Ù†Ø¹ØªØ°Ø±ØŒ ØªÙ… Ø¥Ù„ØºØ§Ø¡ Ø·Ù„Ø¨Ùƒ #${o.id}. ÙŠØ±Ø¬Ù‰ Ø§Ù„ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§ Ù„Ù„ØªÙØ§ØµÙŠÙ„.`
    };
    const icon = TYPE_ICONS[o.type] || "";
    notes.unshift({ text: (msgs[o.status] || "") + " " + icon, ts: Date.now(), read: false });
    lsSet("dhilo_notifications", notes.slice(0, 30));
}
// ADMIN-PART-3

// ---------- Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø³Ø§Ø¦Ù‚ÙŠÙ† ----------
function addDriver(event) {
    event.preventDefault();
    const name = document.getElementById("drv-name").value.trim();
    const phone = document.getElementById("drv-phone").value.trim();
    const type = document.getElementById("drv-type").value;
    const vehicle = document.getElementById("drv-vehicle").value.trim();
    if (!name || !phone) return;
    const drivers = lsGet("dhilo_drivers", []);
    drivers.unshift({ id: "DRV" + Date.now().toString().slice(-6), name, phone, type, vehicle, ts: Date.now() });
    lsSet("dhilo_drivers", drivers);
    document.getElementById("driver-form").reset();
    renderDrivers();
    renderStats();
    toast((type === "taxi" ? "ðŸš• ØªÙ…Øª Ø¥Ø¶Ø§ÙØ© Ø³Ø§Ø¦Ù‚ Ø§Ù„ØªÙƒØ³ÙŠ: " : "ðŸ›µ ØªÙ…Øª Ø¥Ø¶Ø§ÙØ© Ø³Ø§Ø¦Ù‚ Ø§Ù„Ø¯ÙŠÙ„ÙŠÙØ±ÙŠ: ") + name + " âœ…");
}
function renderDrivers() {
    const drivers = lsGet("dhilo_drivers", []);
    const box = document.getElementById("drivers-list");
    const cntEl = document.getElementById("drv-count");
    if (cntEl) cntEl.innerText = drivers.length;
    const availCount = drivers.filter(d => d.status !== "busy").length;
    const availEl = document.getElementById("drv-avail-count");
    if (availEl) availEl.innerText = availCount;
    if (!box) return;
    if (!drivers.length) {
        box.innerHTML = "<div class='bg-white/60 border border-dashed border-slate-300 rounded-xl p-4 text-center text-[11px] font-bold text-slate-400'>لا سائقون بعد — أضف أول سائق من النموذج أعلاه</div>";
        return;
    }
    box.innerHTML = drivers.map(d => {
        const isAvail = d.status !== "busy";
        const statusLabel = isAvail ? "متاح" : "مشغول";
        const statusClass = isAvail ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500";
        return "<div class='bg-white rounded-2xl shadow p-3 flex justify-between items-center pop'>" +
            "<div><p class='font-black text-sm'>" + (d.type === "taxi" ? "🚕" : "🛵") + " " + d.name + "</p>" +
            "<p class='text-[10px] font-bold text-slate-400'>" + d.phone + (d.vehicle ? " • " + d.vehicle : "") + " • " + (d.type === "taxi" ? "سائق تكسي" : "سائق ديليفري") + "</p></div>" +
            "<div class='flex items-center gap-1.5'>" +
            "<span class='text-[10px] font-black px-2 py-1 rounded-lg " + statusClass + ">" + statusLabel + "</span>" +
            "<button onclick='toggleDriverStatus(\"" + d.id + "\")' class='bg-slate-100 text-slate-600 font-black text-[10px] px-2 py-1.5 rounded-lg hover:bg-slate-200' title='تبديل الحالة'>🔄</button>" +
            "<a href='https://wa.me/" + String(d.phone).replace(/[^0-9]/g, "").replace(/^0/, "964") + "' target='_blank' class='bg-emerald-50 text-emerald-600 font-black text-[10px] px-2.5 py-1.5 rounded-lg hover:bg-emerald-100'>واتساب</a>" +
            "<button onclick='removeDriver(\"" + d.id + "\")' class='bg-red-50 text-red-500 font-black text-[10px] px-2.5 py-1.5 rounded-lg hover:bg-red-100'>حذف</button>" +

// =========================================================
// توجيه الطلبات تلقائياً إلى سائق متاح
// =========================================================

/**
 * يبحث عن سائق متاح حسب النوع ويعيد رقمه، أو null إذا لم يتوفر سائق.
 * @param {string} type - "delivery" (مطاعم/مسواك/صيدلية/صيانة) أو "taxi" (تكسي)
 * @returns {object|null} السائق المتاح أو null
 */
function findAvailableDriver(type) {
    const drivers = loadStoredArray ? loadStoredArray("dhilo_drivers") : JSON.parse(localStorage.getItem("dhilo_drivers") || "[]");
    // فلترة: السائق متاح (حالته ليست busy) ونوعه يطلب الطلب
    const pool = drivers.filter(d => {
        const statusOk = d.status !== "busy";
        if (type === "taxi") return statusOk && d.type === "taxi";
        // الطلبات الأخرى (مطاعم/مسواك/صيدلية/صيانة) تذهب لسائق ديليفري
        return statusOk && d.type === "delivery";
    });
    if (!pool.length) return null;
    // اختيار عشوائي من السائقين المتاحين لتوزيع العمل
    return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * يبني رقم هاتف الوجهة للطلب:
 * - إذا وجد سائق متاح من نفس النوع → يعيد رقمه
 * - وإلا → يعيد الرقم الرئيسي
 */
function resolveOrderPhoneNumber(orderType) {
    const mainNumber = "9647857381803";
    let driverType = "delivery";
    if (orderType === "taxi") driverType = "taxi";

    let driver = null;
    try {
        const drivers = JSON.parse(localStorage.getItem("dhilo_drivers") || "[]");
        const pool = drivers.filter(d => d.status !== "busy" && d.type === driverType);
        if (pool.length) driver = pool[Math.floor(Math.random() * pool.length)];
    } catch (e) {}

    if (driver && driver.phone) {
        let phone = String(driver.phone).replace(/[^0-9]/g, "");
        if (phone.startsWith("0")) phone = "964" + phone.substring(1);
        else if (!phone.startsWith("964")) phone = "964" + phone;
        return { phone, driverName: driver.name, driverType: driver.type };
    }
    return { phone: mainNumber, driverName: null, driverType: null };
}
// ADMIN-ROUTING-DONE
            "</div></div>";
    }).join("");
}
function toggleDriverStatus(id) {
    const drivers = lsGet("dhilo_drivers", []);
    const d = drivers.find(x => x.id === id);
    if (!d) return;
    d.status = d.status === "busy" ? "available" : "busy";
    lsSet("dhilo_drivers", drivers);
    renderDrivers();
    logActivity("تغيير حالة السائق " + d.name + " → " + (d.status === "busy" ? "مشغول" : "متاح"));
    toast(d.name + " → " + (d.status === "busy" ? "مشغول" : "متاح"));
}function removeDriver(id) {
    if (!confirm("Ø­Ø°Ù Ù‡Ø°Ø§ Ø§Ù„Ø³Ø§Ø¦Ù‚ Ù…Ù† Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©ØŸ")) return;
    lsSet("dhilo_drivers", lsGet("dhilo_drivers", []).filter(d => d.id !== id));
    renderDrivers();
    renderStats();
}

// ---------- Ø¥Ø´Ø¹Ø§Ø± Ø¬Ù…Ø§Ø¹ÙŠ ----------
function sendBroadcast() {
    const ta = document.getElementById("broadcast-text");
    const text = ta.value.trim();
    if (!text) { alert("Ø§ÙƒØªØ¨ Ù†Øµ Ø§Ù„Ø¥Ø´Ø¹Ø§Ø± Ø£ÙˆÙ„Ø§Ù‹!"); return; }
    const notes = lsGet("dhilo_notifications", []);
    notes.unshift({ text: "ðŸ“¢ " + text, ts: Date.now(), read: false });
    lsSet("dhilo_notifications", notes.slice(0, 30));
    ta.value = "";
    toast("ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø¥Ø´Ø¹Ø§Ø± Ø§Ù„Ø¬Ù…Ø§Ø¹ÙŠ Ù„Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø²ÙˆØ§Ø± ðŸ“£");
}

// =========================================================
// 7 Ø¥Ø¶Ø§ÙØ§Øª Ø¬Ø¯ÙŠØ¯Ø© Ù„Ù„ÙˆØ­Ø© Ø§Ù„Ø¥Ø¯Ø§Ø±Ø©
// =========================================================

// ---------- (1) Ø¥Ø­ØµØ§Ø¦ÙŠØ§Øª Ù…ØªÙ‚Ø¯Ù…Ø© + Ø±Ø³Ù… Ø¨ÙŠØ§Ù†ÙŠ Ù„Ù„Ø·Ù„Ø¨Ø§Øª ----------
function renderStats() {
    const orders = lsGet("dhilo_admin_orders", []);
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.innerText = v; };
    set("stat-pending", orders.filter(o => o.status === "pending").length);
    set("stat-active", orders.filter(o => STATUS_FLOW.includes(o.status)).length);
    set("stat-delivered", orders.filter(o => o.status === "delivered").length);
    set("stat-drivers", lsGet("dhilo_drivers", []).length);

    const delivered = orders.filter(o => o.status === "delivered");
    const revenue = delivered.reduce((s, o) => s + (parseFloat(String(o.total).replace(/[^\d.]/g, "")) || 0), 0);
    set("stat-revenue", revenue.toLocaleString() + " Ø¯.Ø¹");
    set("stat-avg", delivered.length ? Math.round(revenue / delivered.length).toLocaleString() + " Ø¯.Ø¹" : "0");

    const today = new Date().toDateString();
    set("stat-today", orders.filter(o => new Date(o.ts).toDateString() === today).length);
    renderChart(orders);
}

function renderChart(orders) {
    const bars = document.getElementById("chart-bars");
    const labels = document.getElementById("chart-labels");
    if (!bars || !labels) return;
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        days.push({ date: d.toDateString(), label: d.toLocaleDateString("ar", { weekday: "short" }), count: 0 });
    }
    orders.forEach(o => {
        const day = days.find(da => da.date === new Date(o.ts).toDateString());
        if (day) day.count++;
    });
    const max = Math.max(...days.map(d => d.count), 1);
    bars.innerHTML = days.map(d =>
        '<span class="flex-1 bg-brand-500 rounded-t" style="height:' + ((d.count / max) * 100) + '%"></span>'
    ).join("");
    labels.innerHTML = days.map(d =>
        '<span class="flex-1 text-[8px] text-slate-400 text-center">' + d.label + '</span>'
    ).join("");
}

// ---------- (2) Ø¨Ø­Ø« ÙˆØªØµÙÙŠØ© Ù…ØªÙ‚Ø¯Ù…Ø© ----------
function applyFilters() {
    const text = (document.getElementById("search-text").value || "").trim().toLowerCase();
    const type = document.getElementById("filter-type").value;
    const status = document.getElementById("filter-status").value;
    const date = document.getElementById("filter-date").value;
    const box = document.getElementById("filtered-results");

    let orders = lsGet("dhilo_admin_orders", []);
    if (text) {
        orders = orders.filter(o =>
            (o.customer || "").toLowerCase().includes(text) ||
            (o.phone || "").includes(text) ||
            (o.id || "").toLowerCase().includes(text)
        );
    }
    if (type) orders = orders.filter(o => o.type === type);
    if (status) orders = orders.filter(o => o.status === status);
    if (date) orders = orders.filter(o => new Date(o.ts).toDateString() === new Date(date).toDateString());

    if (!box) return;
    if (!orders.length) {
        box.innerHTML = '<p class="text-center text-slate-400 text-[11px] py-4">Ù„Ø§ ØªÙˆØ¬Ø¯ Ù†ØªØ§Ø¦Ø¬ Ù…Ø·Ø§Ø¨Ù‚Ø©</p>';
        return;
    }
    box.innerHTML = orders.slice(0, 25).map(o => {
        const icon = TYPE_ICONS[o.type] || "ðŸ“¦";
        return '<div class="bg-slate-50 rounded-lg p-2 text-[10px] flex justify-between items-center">' +
            '<div><span class="font-black">' + icon + ' #' + o.id + '</span> ' +
            '<span class="text-slate-400">' + (o.customer || "â€”") + '</span></div>' +
            '<span class="font-black px-2 py-0.5 rounded ' + STATUS_CLASS[o.status] + '">' + STATUS_LABELS[o.status] + '</span>' +
            '</div>';
    }).join("");
    logActivity("Ø¨Ø­Ø« Ù…ØªÙ‚Ø¯Ù…: " + orders.length + " Ù†ØªÙŠØ¬Ø©");
}

// ---------- (3) Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¹Ø±ÙˆØ¶ ÙˆØ§Ù„Ø®ØµÙˆÙ…Ø§Øª ----------
function loadOffers() { return lsGet("dhilo_offers", []); }
function saveOffers(list) { lsSet("dhilo_offers", list); renderOffers(); }

function addOffer() {
    const codeInput = document.getElementById("offer-code");
    const discInput = document.getElementById("offer-discount");
    const code = (codeInput.value || "").trim().toUpperCase();
    const discount = parseInt(discInput.value) || 0;
    if (!code || discount < 1) { alert("Ø£Ø¯Ø®Ù„ ÙƒÙˆØ¯ Ø§Ù„Ø®ØµÙ… ÙˆØ§Ù„Ù†Ø³Ø¨Ø©!"); return; }
    const offers = loadOffers();
    if (offers.some(o => o.code === code)) { alert("Ù‡Ø°Ø§ Ø§Ù„ÙƒÙˆØ¯ Ù…ÙˆØ¬ÙˆØ¯ Ù…Ø³Ø¨Ù‚Ø§Ù‹!"); return; }
    offers.unshift({ code, discount, ts: Date.now() });
    saveOffers(offers);
    codeInput.value = "";
    discInput.value = "";
    logActivity("Ø¥Ø¶Ø§ÙØ© ÙƒÙˆØ¨ÙˆÙ†: " + code + " (-" + discount + "%)");
    toast("ØªÙ…Øª Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ø¹Ø±Ø¶");
}

function removeOffer(code) {
    if (!confirm("Ø­Ø°Ù Ù‡Ø°Ø§ Ø§Ù„Ø¹Ø±Ø¶ØŸ")) return;
    saveOffers(loadOffers().filter(o => o.code !== code));
    logActivity("Ø­Ø°Ù ÙƒÙˆØ¨ÙˆÙ†: " + code);
    toast("ØªÙ… Ø­Ø°Ù Ø§Ù„Ø¹Ø±Ø¶");
}

function renderOffers() {
    const box = document.getElementById("offers-list");
    if (!box) return;
    const offers = loadOffers();
    if (!offers.length) {
        box.innerHTML = '<p class="text-slate-400 text-[11px] text-center py-2">Ù„Ø§ Ø¹Ø±ÙˆØ¶ Ø­Ø§Ù„ÙŠØ§Ù‹</p>';
        return;
    }
    box.innerHTML = offers.map(o =>
        '<div class="flex justify-between items-center bg-amber-50 rounded-lg px-2 py-1.5">' +
        '<span class="text-xs font-black">' + o.code + ' <span class="text-emerald-600">-' + o.discount + '%</span></span>' +
        '<button onclick="removeOffer(\'' + o.code + '\')" class="text-red-400 text-xs">âœ•</button>' +
        '</div>'
    ).join("");
}
// ADMIN-TOOLS-PART2

// ---------- (4) Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù…ÙˆÙ‚Ø¹ ----------
function saveSettings() {
    const settings = {
        announcement: document.getElementById("setting-announcement").value,
        hours: document.getElementById("setting-hours").value,
        minOrder: document.getElementById("setting-minorder").value
    };
    lsSet("dhilo_settings", settings);
    logActivity("ØªØ­Ø¯ÙŠØ« Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù…ÙˆÙ‚Ø¹");
    toast("ØªÙ… Ø­ÙØ¸ Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø¨Ù†Ø¬Ø§Ø­");
}

function loadSettings() {
    const s = lsGet("dhilo_settings", {});
    const a = document.getElementById("setting-announcement");
    const h = document.getElementById("setting-hours");
    const m = document.getElementById("setting-minorder");
    if (a) a.value = s.announcement || "";
    if (h) h.value = s.hours || "";
    if (m) m.value = s.minOrder || "";
}

// ---------- (5) Ø³Ø¬Ù„ Ø§Ù„Ù†Ø´Ø§Ø·Ø§Øª ----------
function logActivity(action) {
    const log = lsGet("dhilo_activity", []);
    log.unshift({ action, ts: Date.now() });
    lsSet("dhilo_activity", log.slice(0, 50));
    renderActivityLog();
}

function renderActivityLog() {
    const box = document.getElementById("activity-log");
    if (!box) return;
    const log = lsGet("dhilo_activity", []);
    if (!log.length) {
        box.innerHTML = '<p class="text-slate-400 text-[11px] text-center py-3">Ù„Ø§ Ù†Ø´Ø§Ø·Ø§Øª Ø¨Ø¹Ø¯</p>';
        return;
    }
    box.innerHTML = log.map(l =>
        '<div class="flex justify-between items-center text-[10px] border-b border-slate-50 pb-1">' +
        '<span class="font-bold text-slate-600">' + l.action + '</span>' +
        '<span class="text-slate-400">' + fmtTime(l.ts) + '</span>' +
        '</div>'
    ).join("");
}

// ---------- (6) ØªØµØ¯ÙŠØ± Ø§Ù„Ø·Ù„Ø¨Ø§Øª ÙƒÙ…Ù„Ù CSV ----------
function exportCSV() {
    const orders = lsGet("dhilo_admin_orders", []);
    if (!orders.length) { alert("Ù„Ø§ ØªÙˆØ¬Ø¯ Ø·Ù„Ø¨Ø§Øª Ù„Ù„ØªØµØ¯ÙŠØ±!"); return; }
    const header = ["Ø§Ù„Ø±Ù‚Ù…", "Ø§Ù„Ù†ÙˆØ¹", "Ø§Ù„Ø§Ø³Ù…", "Ø§Ù„Ù‡Ø§ØªÙ", "Ø§Ù„ØªÙØ§ØµÙŠÙ„", "Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹", "Ø§Ù„Ø­Ø§Ù„Ø©", "Ø§Ù„ØªØ§Ø±ÙŠØ®"];
    const rows = orders.map(o => [
        o.id,
        TYPE_LABELS[o.type] || o.type,
        o.customer || "",
        o.phone || "",
        (o.summary || "").replace(/[\n,]/g, " "),
        o.total || "",
        STATUS_LABELS[o.status] || o.status,
        fmtTime(o.ts)
    ]);
    const csv = "ï»¿" + [header, ...rows].map(r => r.map(c => '"' + c + '"').join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "orders_" + new Date().toISOString().slice(0, 10) + ".csv";
    link.click();
    logActivity("ØªØµØ¯ÙŠØ± " + orders.length + " Ø·Ù„Ø¨ CSV");
    toast("ØªÙ… ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù…Ù„Ù");
}

// ---------- (7) Ø±Ø¨Ø· ØªØ¨ÙˆÙŠØ¨ Ø§Ù„Ø£Ø¯ÙˆØ§Øª ----------
const _origSwitchTab = switchTab;
switchTab = function(name) {
    _origSwitchTab(name);
    if (name === "tools") {
        renderStats();
        renderOffers();
        loadSettings();
        renderActivityLog();
        applyFilters();
    }
};
// ADMIN-TOOLS-DONE