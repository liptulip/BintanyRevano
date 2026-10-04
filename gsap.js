/**
 * ==========================================================================
 * SMAN 29 JAKARTA - PASLON 02 MPK (BINTANY & REVANO)
 * File: gsap.js
 * Deskripsi: Logika Animasi On-Scroll & On-Hover (GSAP & ScrollTrigger)
 * Tema: Neo-Brutalisme Rapi & Terstruktur (HANYA On-Scroll & On-Hover)
 * ==========================================================================
 */

(function () {
  "use strict";

  // Cek ketersediaan GSAP
  if (typeof gsap === "undefined") {
    console.warn("GSAP tidak terdeteksi. Pastikan CDN GSAP termuat dengan benar.");
    return;
  }

  // Daftarkan plugin ScrollTrigger jika tersedia
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Deteksi preferensi user (Reduced Motion untuk aksesibilitas)
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /**
   * ========================================================================
   * 1. INISIALISASI UTAMA ANIMASI
   * ========================================================================
   */
  function initAllAnimations() {
    if (prefersReducedMotion) {
      console.info("Pengguna mengaktifkan prefers-reduced-motion. Animasi diminimalkan.");
      return;
    }

    initScrollProgressBar();
    initHeaderEntrance();
    initHeroAnimations();
    initSectionScrollTriggers();
    initHoverInteractions();

    // Refresh ScrollTrigger setelah seluruh layout DOM siap
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  }

  /**
   * ========================================================================
   * 2. PROGRESS BAR DI ATAS HALAMAN (ON-SCROLL SCRUB)
   * ========================================================================
   */
  function initScrollProgressBar() {
    const progressBar = document.getElementById("scroll-progress-bar");
    if (!progressBar || typeof ScrollTrigger === "undefined") return;

    gsap.to(progressBar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.25,
      },
    });
  }

  /**
   * ========================================================================
   * 3. HEADER ENTRANCE & PERIODIC CTA PULSE
   * ========================================================================
   */
  function initHeaderEntrance() {
    const header = document.querySelector("header");
    if (!header) return;

    // Entrance Header meluncur dari atas dengan jeda awal
    gsap.from(header, {
      y: -75,
      opacity: 0,
      duration: 0.9,
      delay: 0.25,
      ease: "power3.out",
    });

    // Badge Logo bergoyang santai setelah header selesai muncul
    const logoBadge = header.querySelector("a span:first-child");
    if (logoBadge) {
      gsap.from(logoBadge, {
        rotation: -12,
        scale: 0.8,
        duration: 0.7,
        delay: 0.7,
        ease: "back.out(2.5)",
      });
    }

    // Micro-animasi: Tombol CTA di navbar berdenyut dengan interval jeda santai
    const ctaBtns = document.querySelectorAll('header a[href="#countdown"]');
    ctaBtns.forEach((cta) => {
      gsap.to(cta, {
        scale: 1.05,
        rotation: -2,
        duration: 0.25,
        yoyo: true,
        repeat: 3,
        repeatDelay: 6,
        delay: 4.5,
        ease: "power1.inOut",
      });
    });
  }

  /**
   * ========================================================================
   * 4. HERO SECTION ANIMATIONS (ON-LOAD ENTRANCE)
   * ========================================================================
   */
  function initHeroAnimations() {
    const heroSection = document.querySelector("main section:first-of-type");
    if (!heroSection) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Floating badges: Pop-in membal satu per satu
    const badges = heroSection.querySelectorAll(".flex.flex-wrap.gap-2 span");
    if (badges.length > 0) {
      tl.from(
        badges,
        {
          scale: 0,
          rotation: -15,
          opacity: 0,
          duration: 0.65,
          stagger: 0.22,
          ease: "back.out(2.2)",
        },
        0.45
      );
    }

    // 2. Judul Utama (H1)
    const heroTitle = heroSection.querySelector("h1");
    if (heroTitle) {
      tl.from(
        heroTitle,
        {
          y: 45,
          opacity: 0,
          duration: 0.9,
        },
        0.95
      );

      // Kata kunci yang di-highlight ("Aspirasi,", "Aksi!")
      const highlights = heroTitle.querySelectorAll("span");
      if (highlights.length > 0) {
        tl.from(
          highlights,
          {
            scale: 0.75,
            rotation: (i) => (i === 0 ? -6 : 6),
            duration: 0.75,
            stagger: 0.28,
            ease: "back.out(2.5)",
          },
          1.35
        );
      }
    }

    // 3. Poster Paslon di Kolom Kanan
    const posterCard = heroSection.querySelector(".w-full.max-w-md");
    if (posterCard) {
      tl.from(
        posterCard,
        {
          scale: 0.88,
          opacity: 0,
          duration: 1.0,
          ease: "power3.out",
        },
        1.55
      );

      // Inisialisasi efek 3D Tilt interaktif pada Poster saat hover
      initPoster3DTilt(posterCard);
    }

    // 4. Kotak Slogan KANE
    const sloganBox = heroSection.querySelector(".bg-white.p-4.neo-border");
    if (sloganBox) {
      tl.from(
        sloganBox,
        {
          x: -50,
          opacity: 0,
          duration: 0.85,
        },
        1.85
      );
    }

    // 5. Kotak NOMOR URUT 02
    const nomorUrut = heroSection.querySelector(".bg-brandBlack.text-brandYellow");
    if (nomorUrut) {
      tl.from(
        nomorUrut,
        {
          scale: 0.55,
          opacity: 0,
          duration: 1.0,
          ease: "elastic.out(1, 0.65)",
        },
        2.2
      );
    }

    // Aksen lingkaran dekoratif di latar belakang melayang halus (Ambient Drift)
    const circleYellow = heroSection.querySelector(".rounded-full");
    const circleCyan = heroSection.querySelector(".rotate-12");

    if (circleYellow) {
      gsap.to(circleYellow, {
        y: 18,
        x: -12,
        rotation: 10,
        duration: 5.0,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    if (circleCyan) {
      gsap.to(circleCyan, {
        y: -16,
        x: 14,
        rotation: -8,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }

  /**
   * Efek 3D Magnetic Perspective Tilt pada Poster Kandidat saat Hover
   */
  function initPoster3DTilt(card) {
    if (!card) return;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 900,
        ease: "power2.out",
        duration: 0.35,
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        ease: "elastic.out(1, 0.6)",
        duration: 0.9,
      });
    });
  }

  /**
   * ========================================================================
   * 5. SCROLLTRIGGER UNTUK SETIAP SECTION (ON-SCROLL)
   * ========================================================================
   */
  function initSectionScrollTriggers() {
    if (typeof ScrollTrigger === "undefined") return;

    // A. Animasi Judul & Badge Tiap Seksi saat Masuk Viewport
    const sections = document.querySelectorAll("main section");
    sections.forEach((sec, idx) => {
      if (idx === 0) return; // Lewati hero karena sudah dianimasikan saat load

      const badge = sec.querySelector(".text-center span");
      const title = sec.querySelector(".text-center h2");
      const desc = sec.querySelector(".text-center p");

      if (title) {
        const secTl = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        if (badge) {
          secTl.from(badge, {
            scale: 0.65,
            opacity: 0,
            duration: 0.55,
            delay: 0.25,
            ease: "back.out(2)",
          });
        }

        secTl.from(
          title,
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "+=0.1"
        );

        if (desc) {
          secTl.from(
            desc,
            {
              y: 25,
              opacity: 0,
              duration: 0.55,
              ease: "power2.out",
            },
            "+=0.1"
          );
        }
      }
    });

    // B. Profil Kandidat Section (#profil)
    const profileSection = document.getElementById("profil");
    if (profileSection) {
      const tabBtns = profileSection.querySelectorAll("#candidate-tabs-container button");
      if (tabBtns.length > 0) {
        gsap.from(tabBtns, {
          scrollTrigger: {
            trigger: "#candidate-tabs-container",
            start: "top 82%",
          },
          scale: 0.75,
          opacity: 0,
          stagger: 0.25,
          duration: 0.65,
          delay: 0.35,
          ease: "back.out(2)",
        });
      }

      const cardsContainer = document.getElementById("candidate-cards-container");
      if (cardsContainer) {
        gsap.from(cardsContainer, {
          scrollTrigger: {
            trigger: cardsContainer,
            start: "top 78%",
          },
          y: 50,
          opacity: 0,
          duration: 0.9,
          delay: 0.45,
          ease: "power3.out",
        });
      }
    }

    // C. Visi & Misi Section (#visimisi)
    const visimisiSection = document.getElementById("visimisi");
    if (visimisiSection) {
      // Banner VISI Utama meluncur dari kiri dengan jeda
      const visiBanner = visimisiSection.querySelector(".bg-brandYellow.p-6");
      if (visiBanner) {
        gsap.from(visiBanner, {
          scrollTrigger: {
            trigger: visiBanner,
            start: "top 80%",
          },
          x: -60,
          opacity: 0,
          duration: 0.9,
          delay: 0.35,
          ease: "power3.out",
        });
      }

      // Parallax scrub watermark "VISI" raksasa
      const watermarkVisi = visimisiSection.querySelector(".select-none");
      if (watermarkVisi) {
        gsap.to(watermarkVisi, {
          scrollTrigger: {
            trigger: visimisiSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
          x: -50,
          ease: "none",
        });
      }

      // 4 Pilar Misi: HANYA scale dari kecil membesar saat on-scroll (murni scale, tanpa pergeseran y atau x)
      const misiCards = document.querySelectorAll("#misi-container > div");
      if (misiCards.length > 0) {
        gsap.from(misiCards, {
          scrollTrigger: {
            trigger: "#misi-container",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          scale: 0.35,
          opacity: 0,
          stagger: 0.18,
          duration: 0.85,
          delay: 0.2,
          ease: "back.out(1.7)",
          transformOrigin: "center center",
          clearProps: "transform",
        });
      }
    }

    // D. Program Kerja Unggulan Section (#proker)
    // HANYA scale dari kecil membesar saat on-scroll (murni scale, tanpa pergeseran y atau x)
    const prokerSection = document.getElementById("proker");
    if (prokerSection) {
      const prokerCards = document.querySelectorAll("#proker-container > div");
      if (prokerCards.length > 0) {
        gsap.from(prokerCards, {
          scrollTrigger: {
            trigger: "#proker-container",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          scale: 0.35,
          opacity: 0,
          stagger: 0.22,
          duration: 0.85,
          delay: 0.2,
          ease: "back.out(1.7)",
          transformOrigin: "center center",
          clearProps: "transform",
        });
      }
    }

    // E. Hitung Mundur Section (#countdown)
    const countdownSection = document.getElementById("countdown");
    if (countdownSection) {
      const timerTiles = countdownSection.querySelectorAll(".grid > div");
      if (timerTiles.length > 0) {
        gsap.from(timerTiles, {
          scrollTrigger: {
            trigger: countdownSection.querySelector(".grid"),
            start: "top 82%",
          },
          y: -50,
          scale: 0.75,
          opacity: 0,
          stagger: 0.22,
          duration: 0.85,
          delay: 0.35,
          ease: "back.out(2.2)",
        });
      }

      const countdownNote = countdownSection.querySelector("p");
      if (countdownNote) {
        gsap.from(countdownNote, {
          scrollTrigger: {
            trigger: countdownNote,
            start: "top 88%",
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.7,
          delay: 1.1,
          ease: "back.out(2)",
        });
      }
    }

    // F. Pertanyaan Umum Section (#faq)
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      const faqItems = document.querySelectorAll("#faq-container > div");
      if (faqItems.length > 0) {
        gsap.from(faqItems, {
          scrollTrigger: {
            trigger: "#faq-container",
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          stagger: 0.18,
          duration: 0.75,
          delay: 0.35,
          ease: "power2.out",
        });
      }
    }

    // G. Footer
    const footer = document.querySelector("footer");
    if (footer) {
      const footerCols = footer.querySelectorAll(".grid > div");
      if (footerCols.length > 0) {
        gsap.from(footerCols, {
          scrollTrigger: {
            trigger: footer,
            start: "top 88%",
          },
          y: 45,
          opacity: 0,
          stagger: 0.25,
          duration: 0.85,
          delay: 0.3,
          ease: "power3.out",
        });
      }

      const voteBadge = footer.querySelector(".bg-brandYellow.p-3");
      if (voteBadge) {
        gsap.from(voteBadge, {
          scrollTrigger: {
            trigger: footer,
            start: "top 88%",
          },
          scale: 0.7,
          rotation: -14,
          duration: 0.8,
          delay: 0.6,
          ease: "back.out(2.5)",
        });
      }
    }
  }

  /**
   * ========================================================================
   * 6. ON-HOVER INTERACTIVE MICRO-ANIMATIONS (HANYA SAAT HOVER)
   * ========================================================================
   */
  function initHoverInteractions() {
    // A. Interaksi Hover untuk Semua Tombol Neo-Brutalist (.neo-btn)
    const buttons = document.querySelectorAll(".neo-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          x: -3,
          y: -3,
          boxShadow: "6px 6px 0px #111111",
          duration: 0.22,
          ease: "power2.out",
        });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          clearProps: "transform,boxShadow",
          duration: 0.22,
          ease: "power2.out",
        });
      });
    });

    // B. Kartu Program Kerja Unggulan Hover Animation (HANYA scale membesar, TIDAK naik)
    const prokerCards = document.querySelectorAll("#proker-container > div");
    prokerCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.25,
          ease: "power2.out",
          transformOrigin: "center center",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
          clearProps: "transform",
        });
      });
    });

    // C. Kartu 4 Pilar Misi Hover Animation (HANYA scale membesar, TIDAK naik)
    const misiCards = document.querySelectorAll("#misi-container > div");
    misiCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.25,
          ease: "power2.out",
          transformOrigin: "center center",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
          clearProps: "transform",
        });
      });
    });

    // D. Balok Digital Timer Countdown Hover (Hanya scale membesar, tidak naik)
    const timerTiles = document.querySelectorAll("#countdown .grid > div");
    timerTiles.forEach((tile) => {
      tile.addEventListener("mouseenter", () => {
        gsap.to(tile, {
          scale: 1.04,
          duration: 0.25,
          ease: "power2.out",
        });
      });

      tile.addEventListener("mouseleave", () => {
        gsap.to(tile, {
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
          clearProps: "transform",
        });
      });
    });

    // E. Floating Badges Jiggle on Hover
    const badges = document.querySelectorAll(
      ".neo-border-sm, .neo-border"
    );
    badges.forEach((b) => {
      if (b.tagName === "SPAN" && !b.closest(".neo-btn")) {
        b.addEventListener("mouseenter", () => {
          gsap.to(b, {
            scale: 1.1,
            rotation: "+=6",
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          });
        });
      }
    });
  }

  /**
   * ========================================================================
   * 7. RUN KETIKA DOM SIAP
   * ========================================================================
   */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(initAllAnimations, 100);
    });
  } else {
    setTimeout(initAllAnimations, 100);
  }

  // Window load fallback untuk memastikan layout gambar & viewport telah dihitung sempurna
  window.addEventListener("load", () => {
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  });
})();
