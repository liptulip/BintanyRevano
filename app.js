/**
 * ==========================================================================
 * LOGIKA & KOMPONEN RENDER (REACT-LIKE MAPPING)
 * File: app.js
 * Deskripsi: Mengolah data dari datas.js dan melakukan dynamic mapping ke DOM.
 * ==========================================================================
 */

// 1. Inisialisasi Konfigurasi Tailwind CSS (Jika menggunakan Tailwind CDN)
if (typeof tailwind !== "undefined") {
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          display: ['"Space Grotesk"', "sans-serif"],
          body: ['"Plus Jakarta Sans"', "sans-serif"],
        },
        colors: {
          brandYellow: "#FFDE59",
          brandBlue: "#0EA5E9",
          brandCyan: "#38BDF8",
          brandOffWhite: "#FAFAFA",
          brandBlack: "#111111",
        },
        boxShadow: {
          brutal: "4px 4px 0px #111111",
          "brutal-lg": "7px 7px 0px #111111",
          "brutal-sm": "2.5px 2.5px 0px #111111",
        },
      },
    },
  };
}

// 2. State & Data Akses
const data = window.SITE_DATA || {};

// ==========================================================================
// RENDER FUNCTIONS (MAPPING SEPERTI REACT)
// ==========================================================================

/**
 * Render Link Navigasi Header (Desktop & Mobile)
 */
function renderNav() {
  const desktopContainer = document.getElementById("nav-links-container");
  const mobileContainer = document.getElementById("mobile-nav-links-container");
  if (!data.header?.navLinks) return;

  // Render Desktop Navigation
  if (desktopContainer) {
    desktopContainer.innerHTML = data.header.navLinks
      .map(
        (link) => `
        <a class="hover:underline underline-offset-4 decoration-2 text-brandBlack font-extrabold text-sm" href="${link.href}">
          ${link.label}
        </a>
      `
      )
      .join("");
  }

  // Render Mobile Navigation
  if (mobileContainer) {
    mobileContainer.innerHTML = data.header.navLinks
      .map(
        (link) => `
        <a 
          href="${link.href}" 
          class="mobile-nav-link flex items-center justify-between px-4 py-2.5 bg-white neo-border-sm neo-shadow-sm font-extrabold text-sm uppercase text-brandBlack hover:bg-brandCyan transition-colors active:translate-x-0.5 active:translate-y-0.5"
        >
          <span>${link.label}</span>
          <span class="text-xs font-black">→</span>
        </a>
      `
      )
      .join("");
  }
}

/**
 * Inisialisasi Hamburger Menu Toggle pada Mobile
 */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuBtn || !mobileMenu) return;

  function closeMenu() {
    mobileMenu.classList.add("hidden");
    menuBtn.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const isExpanded = menuBtn.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", String(isExpanded));
    mobileMenu.classList.toggle("hidden", !isExpanded);
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Tutup menu otomatis jika user mengklik salah satu link navigasi di mobile
  mobileMenu.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      closeMenu();
    }
  });

  // Tutup jika user mengklik area di luar header
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  // Tutup jika menekan tombol Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
}

/**
 * Render Tabs dan Kartu Profil Kandidat
 */
function renderCandidates() {
  const tabsContainer = document.getElementById("candidate-tabs-container");
  const cardsContainer = document.getElementById("candidate-cards-container");
  if (!tabsContainer || !cardsContainer || !data.candidates) return;

  // Render Tombol Tab
  tabsContainer.innerHTML = data.candidates
    .map((c, index) => {
      const isActive = index === 0;
      const bgClass = isActive ? c.activeTabBg : "bg-white";
      return `
      <button
        id="tab-btn-${c.id}"
        class="neo-btn px-6 py-2.5 font-black text-sm uppercase neo-border neo-shadow ${bgClass} text-brandBlack"
        onclick="switchTab('${c.id}')"
      >
        ${c.tabButtonText}
      </button>
    `;
    })
    .join("");

  // Render Kartu Kandidat
  cardsContainer.innerHTML = data.candidates
    .map((c, index) => {
      const isHidden = index === 0 ? "" : "hidden";
      const rotateStyle = c.id === "ketua" ? "-rotate-2" : "rotate-2";

      // Render Nilai / Komitmen Bullet Points
      const listItems = c.section2.items
        .map((item) => `<li>${item}</li>`)
        .join("");

      return `
      <div class="${isHidden} transition-all" id="tab-${c.id}">
        <div class="bg-brandOffWhite neo-border neo-shadow-lg p-6 md:p-10 max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            <!-- Foto & Bio Singkat -->
            <div class="md:col-span-5 flex flex-col items-center text-center">
              <div class="inline-block ${c.badgeColor} p-3 neo-border neo-shadow ${rotateStyle} mb-4 text-brandBlack">
                <span class="heading-font text-5xl font-black">${c.number}</span>
                <p class="text-xs font-black tracking-widest uppercase">${c.roleBadge}</p>
              </div>

              <div class="w-48 h-56 bg-white neo-border neo-shadow mb-3 overflow-hidden relative group">
                <img
                  alt="${c.name} - ${c.roleBadge}"
                  class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  src="${c.photo}"
                />
                <span class="absolute bottom-2 left-2 ${c.badgeColor} text-brandBlack font-black text-[10px] px-2 py-0.5 neo-border-sm uppercase">
                  ${c.tagLabel}
                </span>
              </div>

              <h3 class="heading-font text-2xl font-black uppercase text-brandBlack">
                ${c.name}
              </h3>
              <p class="font-bold text-sm text-brandBlack bg-white neo-border-sm inline-block px-3 py-1 mt-1">
                ${c.class}
              </p>

              <div class="mt-3 bg-white p-3 neo-border-sm text-left">
                <p class="text-xs font-semibold text-neutral-700 leading-relaxed">
                  ${c.bio}
                </p>
              </div>

              <div class="mt-3 w-full">
                <a
                  class="neo-btn block w-full text-center ${c.instagram.buttonColor} text-brandBlack font-extrabold text-xs px-3 py-2 neo-border-sm neo-shadow"
                  href="${c.instagram.url}"
                  rel="noreferrer"
                  target="_blank"
                >
                  ${c.instagram.handle}
                </a>
              </div>
            </div>

            <!-- Detail Visi, Nilai & Kutipan -->
            <div class="md:col-span-7 space-y-4">
              <div class="bg-white p-4 neo-border neo-shadow">
                <h4 class="font-black text-sm uppercase text-brandBlack flex items-center gap-1.5">
                  <span class="${c.section1.tagColor} px-1 border border-brandBlack text-xs">
                    ${c.section1.tag}
                  </span>
                  ${c.section1.title}
                </h4>
                <p class="text-sm font-semibold text-neutral-700 mt-1">
                  ${c.section1.desc}
                </p>
              </div>

              <div class="bg-white p-4 neo-border neo-shadow">
                <h4 class="font-black text-sm uppercase text-brandBlack flex items-center gap-1.5">
                  <span class="${c.section2.tagColor} px-1 border border-brandBlack text-xs">
                    ${c.section2.tag}
                  </span>
                  ${c.section2.title}
                </h4>
                <ul class="text-xs md:text-sm font-semibold text-neutral-700 space-y-1 mt-1 list-disc list-inside">
                  ${listItems}
                </ul>
              </div>

              <div class="p-3 ${c.quoteBg} neo-border-sm text-center">
                <p class="font-black italic text-xs md:text-sm text-brandBlack">
                  ${c.quote}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

/**
 * Handle Pergantian Tab Kandidat
 */
function switchTab(roleId) {
  if (!data.candidates) return;

  data.candidates.forEach((c) => {
    const card = document.getElementById(`tab-${c.id}`);
    const btn = document.getElementById(`tab-btn-${c.id}`);
    if (c.id === roleId) {
      if (card) card.classList.remove("hidden");
      if (btn) {
        btn.className = `neo-btn px-6 py-2.5 font-black text-sm uppercase neo-border neo-shadow ${c.activeTabBg} text-brandBlack`;
      }
    } else {
      if (card) card.classList.add("hidden");
      if (btn) {
        btn.className = `neo-btn px-6 py-2.5 font-black text-sm uppercase neo-border neo-shadow bg-white text-brandBlack`;
      }
    }
  });
}

/**
 * Render Misi (4 Pilar)
 */
function renderMisi() {
  const container = document.getElementById("misi-container");
  if (!container || !data.misi) return;

  container.innerHTML = data.misi
    .map(
      (item) => `
      <div class="bg-white p-6 neo-border neo-shadow">
        <div class="flex items-center gap-3 mb-3">
          <span class="${item.numberColor} text-brandBlack font-black text-lg px-3 py-1 neo-border-sm">
            ${item.id}
          </span>
          <h4 class="heading-font font-black text-base uppercase text-brandBlack">
            ${item.title}
          </h4>
        </div>
        <p class="text-sm font-semibold text-neutral-700 leading-relaxed">
          ${item.desc}
        </p>
      </div>
    `
    )
    .join("");
}

/**
 * Render Program Kerja Unggulan (Proker Cards)
 */
function renderProker() {
  const container = document.getElementById("proker-container");
  if (!container || !data.proker) return;

  container.innerHTML = data.proker
    .map(
      (item) => `
      <div class="bg-brandOffWhite p-6 neo-border neo-shadow-lg flex flex-col justify-between relative group">
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 ${item.iconBg} neo-border-sm flex items-center justify-center font-black text-xl neo-shadow">
              ${item.icon}
            </div>
            <span class="text-xs font-black bg-brandBlack text-brandYellow px-2.5 py-1 neo-border-sm uppercase tracking-wide">
              ${item.badge}
            </span>
          </div>
          <h3 class="heading-font text-2xl font-black uppercase mb-3 text-brandBlack">
            ${item.title}
          </h3>
          <p class="text-sm font-semibold text-neutral-700 leading-relaxed">
            ${item.desc}
          </p>
        </div>
        <div class="mt-6 pt-4 border-t-2 border-brandBlack">
          <span class="text-xs font-black uppercase ${item.tagBg} px-2 py-1.5 neo-border-sm block text-center text-brandBlack">
            ${item.tag}
          </span>
        </div>
      </div>
    `
    )
    .join("");
}

/**
 * Render Seksi Khusus Dukungan Program Adiwiyata
 */
function renderAdiwiyata() {
  const container = document.getElementById("adiwiyata-container");
  if (!container || !data.adiwiyata) return;

  const a = data.adiwiyata;

  const pillarsHtml = a.pillars
    .map(
      (p) => `
      <div class="bg-white p-6 md:p-8 neo-border neo-shadow-lg flex flex-col justify-between adiwiyata-card">
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 ${p.iconBg} neo-border-sm flex items-center justify-center font-black text-2xl neo-shadow">
              ${p.icon}
            </div>
            <span class="text-xs font-black bg-brandBlack text-brandYellow px-2.5 py-1 neo-border-sm uppercase tracking-wide">
              ${p.badge}
            </span>
          </div>

          <h3 class="heading-font text-2xl font-black uppercase mb-3 text-brandBlack">
            ${p.title}
          </h3>

          <p class="text-sm font-semibold text-neutral-700 leading-relaxed mb-4">
            ${p.desc}
          </p>

          <div class="space-y-2 mt-4 pt-4 border-t-2 border-brandBlack/20">
            <p class="text-xs font-black uppercase text-brandBlack tracking-wider mb-2 flex items-center gap-1.5">
              <span>📌</span> Rencana Aksi Nyata:
            </p>
            ${p.points
              .map(
                (pt) => `
              <div class="flex items-start gap-2 text-xs font-semibold text-neutral-700">
                <span class="text-emerald-600 font-black mt-0.5">✔</span>
                <span>${pt}</span>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <div class="mt-6 pt-4 border-t-2 border-brandBlack">
          <span class="text-xs font-black uppercase ${p.tagBg} px-2 py-1.5 neo-border-sm block text-center text-brandBlack">
            ${p.tag}
          </span>
        </div>
      </div>
    `
    )
    .join("");

  container.innerHTML = `
    <!-- Banner Deklarasi Kesiapan Dukung Adiwiyata -->
    <div class="bg-emerald-300 p-6 md:p-8 neo-border neo-shadow-lg mb-10 relative overflow-hidden">
      <div class="relative z-10 max-w-3xl">
        <span class="inline-block bg-brandBlack text-white font-extrabold text-xs uppercase px-3 py-1 neo-border-sm mb-3">
          Komitmen Hijau Paslon 02
        </span>
        <h3 class="heading-font text-2xl md:text-3xl font-black uppercase text-brandBlack leading-tight mb-2">
          Siap Mendukung Penuh Gerakan Adiwiyata Sekolah!
        </h3>
        <p class="text-sm md:text-base font-semibold text-brandBlack leading-relaxed">
          ${a.declaration}
        </p>
      </div>
      <div class="absolute -right-4 -bottom-6 heading-font text-8xl md:text-9xl font-black text-brandBlack/10 select-none pointer-events-none">
        ECO
      </div>
    </div>

    <!-- 2 Pilar Adiwiyata Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      ${pillarsHtml}
    </div>

    <!-- Motto Footer Adiwiyata -->
    <div class="mt-8 bg-brandBlack text-white p-4 md:p-5 neo-border neo-shadow text-center">
      <p class="heading-font font-black text-sm md:text-base tracking-wide text-brandYellow">
        ${a.motto}
      </p>
    </div>
  `;
}

/**
 * Render FAQ Accordion
 */
let isFaqExpanded = false;

function renderFaq() {
  const container = document.getElementById("faq-container");
  const actionContainer = document.getElementById("faq-action-container");
  if (!container || !data.faq) return;

  container.innerHTML = data.faq
    .map((item, index) => {
      const isExtra = index >= 3;
      const extraClass = isExtra ? "faq-extra-item hidden" : "";
      return `
      <div class="neo-border neo-shadow bg-brandOffWhite overflow-hidden ${extraClass}">
        <button
          class="w-full text-left p-4 md:p-5 flex justify-between items-center font-black text-base md:text-lg uppercase text-brandBlack hover:bg-brandYellow/30 transition-colors"
          onclick="toggleFaq('${item.id}')"
          type="button"
        >
          <span>${item.question}</span>
          <span class="text-xl font-black ml-2" id="icon-${item.id}">+</span>
        </button>
        <div
          class="hidden p-4 md:p-5 pt-0 border-t-2 border-brandBlack/20 text-sm font-semibold text-neutral-700 leading-relaxed bg-white"
          id="${item.id}"
        >
          ${item.answer}
        </div>
      </div>
    `;
    })
    .join("");

  // Tampilkan tombol "Lihat Lebih Banyak" jika jumlah FAQ > 3
  if (actionContainer) {
    if (data.faq.length > 3) {
      actionContainer.classList.remove("hidden");
      const toggleText = document.getElementById("faq-toggle-text");
      if (toggleText) {
        toggleText.textContent = `Lihat Lebih Banyak (${data.faq.length - 3} Pertanyaan)`;
      }
    } else {
      actionContainer.classList.add("hidden");
    }
  }
}

/**
 * Toggle Tampilkan Semua / Sebagian FAQ
 */
function toggleShowMoreFaq() {
  isFaqExpanded = !isFaqExpanded;
  const extraItems = document.querySelectorAll(".faq-extra-item");
  const toggleText = document.getElementById("faq-toggle-text");
  const toggleIcon = document.getElementById("faq-toggle-icon");

  extraItems.forEach((el) => {
    if (isFaqExpanded) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });

  if (toggleText && toggleIcon) {
    if (isFaqExpanded) {
      toggleText.textContent = "Tampilkan Lebih Sedikit";
      toggleIcon.textContent = "▴";
    } else {
      const remainingCount = data.faq ? Math.max(0, data.faq.length - 3) : 0;
      toggleText.textContent = `Lihat Lebih Banyak (${remainingCount} Pertanyaan)`;
      toggleIcon.textContent = "▾";
    }
  }
}

/**
 * Toggle Accordion FAQ
 */
function toggleFaq(id) {
  const content = document.getElementById(id);
  const icon = document.getElementById("icon-" + id);
  if (!content || !icon) return;

  const isHidden = content.classList.contains("hidden");
  if (isHidden) {
    content.classList.remove("hidden");
    icon.textContent = "−";
  } else {
    content.classList.add("hidden");
    icon.textContent = "+";
  }
}

/**
 * Render Fitur Portal Aspirasi
 */
function renderAspirasiFeatures() {
  const container = document.getElementById("aspirasi-features-container");
  if (!container || !data.aspirasi?.features) return;

  container.innerHTML = data.aspirasi.features
    .map(
      (f) => `
      <div class="bg-brandOffWhite p-3 neo-border-sm">
        <div class="text-xs font-black uppercase text-brandBlack">
          ${f.title}
        </div>
        <p class="text-xs text-neutral-600 font-semibold mt-0.5">
          ${f.desc}
        </p>
      </div>
    `
    )
    .join("");
}

/**
 * Render Link Navigasi Footer
 */
function renderFooterNav() {
  const container = document.getElementById("footer-links-container");
  if (!container || !data.footer?.quickLinks) return;

  container.innerHTML = data.footer.quickLinks
    .map(
      (link) => `
      <a class="hover:text-brandYellow transition-colors" href="${link.href}">
        ${link.label}
      </a>
    `
    )
    .join("");
}

// ==========================================================================
// HITUNG MUNDUR (COUNTDOWN TIMER)
// ==========================================================================
// Target: 5 Oktober 2026, pukul 11:00 WIB
const TARGET_COUNTDOWN_DATE = data.countdown?.targetDate
  ? new Date(data.countdown.targetDate).getTime()
  : new Date("2026-10-05T11:00:00+07:00").getTime();

function initCountdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  let timerInterval = null;

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = TARGET_COUNTDOWN_DATE - now;

    if (distance <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      if (timerInterval) clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  timerInterval = setInterval(updateCountdown, 1000);
}

// ==========================================================================
// FORMULIR ASPIRASI INTERAKTIF & INTEGRASI GOOGLE SPREADSHEET
// ==========================================================================
async function handleAspirationSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById("student-name");
  const classInput = document.getElementById("student-class");
  const messageInput = document.getElementById("student-message");
  const submitBtn = document.getElementById("aspiration-submit-btn");
  const submitText = document.getElementById("aspiration-submit-text");
  const successBanner = document.getElementById("submit-success");
  const errorBanner = document.getElementById("submit-error");
  const form = document.getElementById("aspiration-form");

  if (!nameInput || !classInput || !messageInput) return;

  const nama = nameInput.value.trim();
  const kelas = classInput.value.trim();
  const pesan = messageInput.value.trim();

  if (!nama || !kelas || !pesan) return;

  // Sembunyikan notifikasi sebelumnya
  if (successBanner) successBanner.classList.add("hidden");
  if (errorBanner) errorBanner.classList.add("hidden");

  // Aktifkan status loading pada tombol
  if (submitBtn) submitBtn.disabled = true;
  if (submitText) submitText.textContent = "⏳ Mengirimkan Pertanyaan...";

  const scriptUrl = data.aspirasi?.googleScriptUrl?.trim();

  const payload = {
    timestamp: new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }),
    nama: nama,
    kelas: kelas,
    pesan: pesan,
  };

  try {
    if (scriptUrl && scriptUrl.startsWith("http")) {
      // Mengirimkan data via Google Apps Script Web App
      // Menggunakan mode no-cors agar lolos dari batasan CORS redirect Google Script
      const formData = new URLSearchParams();
      formData.append("timestamp", payload.timestamp);
      formData.append("nama", payload.nama);
      formData.append("kelas", payload.kelas);
      formData.append("pesan", payload.pesan);

      await fetch(scriptUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      console.log("Pertanyaan gagasan berhasil dikirim ke Google Spreadsheet:", payload);
    } else {
      console.warn(
        "Google Apps Script URL belum diisi di datas.js. " +
        "Data pertanyaan tersimpan secara lokal pada sesi ini. " +
        "Buka PANDUAN_GOOGLE_SHEETS.md untuk menyambungkan ke Google Sheets Anda."
      );
    }

    // Tampilkan notifikasi sukses
    if (successBanner) {
      successBanner.classList.remove("hidden");
      setTimeout(() => {
        successBanner.classList.add("hidden");
      }, 5000);
    }

    // Reset formulir
    if (form) form.reset();
  } catch (error) {
    console.error("Gagal mengirim pertanyaan gagasan:", error);
    if (errorBanner) {
      errorBanner.classList.remove("hidden");
      setTimeout(() => {
        errorBanner.classList.add("hidden");
      }, 5000);
    }
  } finally {
    // Kembalikan tombol ke status aktif
    if (submitBtn) submitBtn.disabled = false;
    if (submitText) submitText.textContent = "🚀 Kirim Pertanyaan ke Paslon 02";
  }
}

// ==========================================================================
// INISIALISASI SAAT DOM SIAP
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  initMobileMenu();
  renderCandidates();
  renderMisi();
  renderProker();
  renderAdiwiyata();
  renderFaq();
  renderAspirasiFeatures();
  renderFooterNav();
  initCountdown();
});
