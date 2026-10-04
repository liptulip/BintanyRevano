/**
 * ==========================================================================
 * DATA RESMI PASLON 02 MPK SMAN 29 JAKARTA (2026/2027)
 * File: datas.js
 * Keterangan: Seluruh konten dan informasi website tersimpan di sini.
 * Anda dapat mengedit teks, visi, misi, proker, dan profil tanpa
 * perlu mengubah struktur HTML!
 * ==========================================================================
 */

const SITE_DATA = {
  // 1. INFORMASI HEADER & NAVIGASI
  header: {
    schoolName: "SMAN 29 Jakarta",
    paslonTitle: "PASLON 02 MPK",
    ctaButton: {
      text: "⚡ Coblos 02!",
      href: "#countdown",
    },
    navLinks: [
      { label: "Profil", href: "#profil" },
      { label: "Visi & Misi", href: "#visimisi" },
      { label: "Program Kerja", href: "#proker" },
      { label: "Adiwiyata", href: "#adiwiyata" },
      { label: "Hitung Mundur", href: "#countdown" },
      { label: "FAQ", href: "#faq" },
    ],
  },

  // 2. KONTEN HERO SECTION
  hero: {
    badges: [
      { text: "Pemilihan MPK 2026/2027", color: "bg-brandYellow", rotate: "-rotate-2" },
      { text: "SMAN 29 Jakarta", color: "bg-brandCyan", rotate: "rotate-1" },
      { text: "#KawalAspirasi", color: "bg-white", rotate: "" },
    ],
    title: {
      part1: "Terikat Dalam",
      highlight1: "Aspirasi,",
      part2: "Bergerak Dalam",
      highlight2: "Aksi!",
    },
    sloganKANE: {
      title: "🚀 Semangat KANE :",
      acronym: "KANE",
      fullText:
        "Kawal Aspirasi, Nyatakan Eksistensi! Saatnya perwakilan kelas menjadi jembatan nyata antara siswa, ekskul, dan sekolah.",
    },
    nomorUrut: "02",
    ctaAspirasiText: "Uji Gagasan Paslon 💬",
    candidatePoster: {
      image:
        "./asset/paslon_foto.jpeg",
      titleBadge: "PASLON 02 • SIAP BERAKSI",
      schoolBadge: "SMAN 29 JAKARTA",
      candidateTitle: "KANDIDAT",
      candidateNames: "BINTANY & REVANO",
      periodText: "SMAN 29 JAKARTA • PERIODE 2026/2027",
    },
  },

  // 3. PROFIL KANDIDAT (KETUA & WAKIL)
  candidates: [
    {
      id: "ketua",
      tabButtonText: "Calon Ketua: Bintany",
      roleBadge: "Ketua MPK",
      tagLabel: "CALON KETUA",
      number: "02",
      badgeColor: "bg-brandYellow",
      activeTabBg: "bg-brandYellow",
      name: "Bintany Zhafira Rahma",
      class: "Kelas XI-7",
      photo:
        "./asset/ketua_foto.jpeg",
      bio: "Halo! Aku Bintany Zhafira Rahma, siswi kelas XI-7 SMA Negeri 29 Jakarta yang punya ketertarikan besar pada organisasi, komunikasi, dan kegiatan sosial. Aku senang bekerja sama dengan orang lain, menyampaikan aspirasi, berdiskusi, dan mencari solusi dari berbagai permasalahan di lingkungan sekolah. Pengalamanku sebagai Wakil Ketua OSIS saat SMP dan Calon Ketua MPK di SMA membuatku semakin ingin berkembang menjadi pribadi yang lebih bertanggung jawab, aktif, dan mampu membawa perubahan yang positif. Di luar organisasi, aku juga suka bernyanyi, makeup, menonton film atau series, serta mencoba hal-hal baru. Bagiku, setiap pengalaman adalah kesempatan untuk belajar, berkembang, dan menjadi versi diriku yang lebih baik.",
      instagram: {
        handle: "📷 @binbintny",
        url: "https://instagram.com/binbintny",
        buttonColor: "bg-brandCyan",
      },
      section1: {
        tag: "VISI",
        tagColor: "bg-brandYellow",
        title: "Visi Personal & Fokus:",
        desc: "⁠Menjadi pribadi yang berani bertumbuh, mampu membawa pengaruh positif bagi orang di sekitar, dan tetap menjadi diri sendiri dalam setiap prosesnya.",
      },
      section2: {
        tag: "NILAI",
        tagColor: "bg-brandCyan",
        title: "Nilai Kepemimpinan:",
        items: [
          "Empathy — Memahami sebelum memimpin",
          "Responsibility — Berani bertanggung jawab",
          "Growth — Terus belajar dan berkembang tidak harus selalu sempurna.",
        ],
      },
      quote:
        '“Listen, Lead, Make an Impact.”',
      quoteBg: "bg-brandYellow",
    },
    {
      id: "wakil",
      tabButtonText: "Calon Wakil: Revano",
      roleBadge: "Wakil Ketua MPK",
      tagLabel: "CALON WAKIL",
      number: "02",
      badgeColor: "bg-brandCyan",
      activeTabBg: "bg-brandCyan",
      name: "Revano Alfaridzi",
      class: "Kelas XI-4",
      photo:
        "./asset/wakil_foto.jpeg",
      bio: "Bismillah, halo semuanya nama ku Revano Alfaridzi saya adalah siswa dari SMA Negeri 29 Jakarta. Dengan berbagai pengalaman saya saat berorganisasi saat SMP seperti osis, pramuka, dan di SMA seperti paskibra dan rohis saya merasa siap untuk menjadi calon wakil ketua MPK periode 2026/2027. Dan saya sendiri mempunyai kebiasaan yaitu suka menggambar, suka mencari hal baru, dan juga suka untuk berkegiatan. Dari setiap perjalanan yang saya jalanin pasti memiliki arti didalamnya, karena sejatinya manusia ialah belajar dan terus belajar setiap yang ia lalui. Saya ingin menjadi pribadi yang lebih baik dari sebelumnya dan bisa menjadi contoh baik untuk sekolah dan lingkungan sekitar. ",
      instagram: {
        handle: "📷 @revvalfrdzzz_",
        url: "https://instagram.com/revvalfrdzzz_",
        buttonColor: "bg-brandYellow",
      },
      section1: {
        tag: "FOKUS",
        tagColor: "bg-brandCyan",
        title: "Fokus Strategis Lapangan:",
        desc: "Menjadi pribadi yang tidak hanya membebani orang lain melainkan pribadi yang selalu membantu dan juga menjadi pribadi yang baik dari sebelumnya.",
      },
      section2: {
        tag: "KOMITMEN",
        tagColor: "bg-brandYellow",
        title: "Keunggulan & Komitmen:",
        items: [
          "Komunikasi — engan komunikasi yang baik antara anggota dan warga sekolah",
          "Mendengar — seorang pemimpin harus mampu mendengar suara dan aspirasi dari anggota maupun warga sekolah. ",
          "Tanggung Jawab — berani bertanggung jawab atas setiap tindakan yang dilakukan",
        ],
      },
      quote:
        '"Berusaha lah menjadi pribadi yang lebih baik dari hari sebelumnya"',
      quoteBg: "bg-brandCyan",
    },
  ],

  // 4. VISI UTAMA
  visi: {
    badge: "⭐ Visi Utama Paslon 02",
    statementPrefix:
      "Mewujudkan inklusivitas dan progresivitas bagi SMAN 29 Jakarta dengan membangun semangat",
    highlightTag: "KANE (Kawal Aspirasi, Nyatakan Eksistensi)",
    statementSuffix:
      "sehingga menciptakan warga sekolah yang berkarakter, berprestasi, serta berkontribusi bagi sekolah dan lingkungan.",
  },

  // 5. MISI (4 PILAR)
  misi: [
    {
      id: "01",
      numberColor: "bg-brandYellow",
      title: "Ruang Dialog Inklusif",
      desc: "Menciptakan ruang dialog yang inklusif antara perwakilan kelas, OSIS, dan ekstrakurikuler dengan pihak sekolah untuk membedah solusi bersama secara setara.",
    },
    {
      id: "02",
      numberColor: "bg-brandCyan",
      title: "Aksi Terstruktur & Objektif",
      desc: "Merealisasikan aksi yang terstruktur dan objektif guna mengoptimalkan potensi bakat, prestasi akademik maupuan non-akademik, serta kreativitas warga sekolah.",
    },
    {
      id: "03",
      numberColor: "bg-brandYellow",
      title: "Pengawalan Responsif (KANE)",
      desc: "Mewujudkan semangat KANE melalui pengawalan, pengawasan ketat, serta evaluasi program kerja warga sekolah dan OSIS secara berkala, terbuka, dan responsif.",
    },
    {
      id: "04",
      numberColor: "bg-brandCyan",
      title: "Wadah Gagasan & Kontribusi",
      desc: "Menjadi wadah pendukung bagi warga sekolah untuk mengekspresikan gagasan baru, berani bersuara kritis, dan berkontribusi aktif dalam kegiatan internal maupun eksternal masyarakat.",
    },
  ],

  // 6. PROGRAM KERJA UNGGULAN
  proker: [
    {
      id: 1,
      badge: "Proker 1",
      icon: "📂",
      iconBg: "bg-brandCyan",
      title: "TWINE OPEN FILE",
      desc: "Sistem aspirasi yang memungkinkan perwakilan kelas menyampaikan aspirasi melalui Google Form. Aspirasi akan dikelompokkan berdasarkan permasalahan, disampaikan kepada pihak terkait, kemudian dikawal tindak lanjutnya. Perkembangannya dapat dipantau melalui Google Sheets.",
      tag: "🎯 Akuntabel & Terbuka",
      tagBg: "bg-brandCyan",
    },
    {
      id: 2,
      badge: "Proker 2",
      icon: "🎨",
      iconBg: "bg-brandYellow",
      title: "EKSISTEN",
      desc: "Program satu kali setiap semester untuk melihat perkembangan, keaktifan, prestasi, kendala, dan kebutuhan ekstrakurikuler. Terdapat apresiasi Most Improved Ekskul, serta advokasi terhadap kebutuhan ekskul kepada pihak sekolah.",
      tag: "🔥 Nyatakan Eksistensi",
      tagBg: "bg-brandYellow",
    },
  ],

  // 7. SEKSI KHUSUS DUKUNGAN PROGRAM ADIWIYATA SEKOLAH
  adiwiyata: {
    badge: "🌱 Aksi Nyata Lingkungan Hidup",
    title: "Dukungan Penuh Program Adiwiyata",
    subtitle: "Paslon 02 berkomitmen penuh dan siap bergerak nyata mendukung kesuksesan program Adiwiyata SMAN 29 Jakarta menuju sekolah hijau, bersih, dan berkelanjutan.",
    declaration: "Sebagai calon pemimpin MPK, Bintany & Revano menyatakan komitmen teguh untuk mengawal budaya peduli lingkungan hidup di lingkungan sekolah melalui 2 fokus utama:",
    pillars: [
      {
        id: "01",
        badge: "Fokus 1",
        icon: "🌿",
        iconBg: "bg-emerald-300",
        title: "Konservasi Keanekaragaman Hayati",
        desc: "Dukungan penuh terhadap pelestarian keanekaragaman hayati di lingkungan sekolah melalui pemeliharaan taman kelas, perluasan sudut hijau, dan kampanye kepedulian terhadap flora ekosistem SMAN 29.",
        tag: "🌿 Konservasi Keanekaragaman Hayati",
        tagBg: "bg-emerald-300",
        points: [
          "Mendorong pemeliharaan tanaman & sudut hijau di setiap kelas",
          "Keterlibatan aktif siswa dalam perawatan taman & ruang terbuka hijau",
          "Kampanye edukatif mengenai kekayaan flora sekolah demi iklim belajar yang asri"
        ]
      },
      {
        id: "02",
        badge: "Fokus 2",
        icon: "♻️",
        iconBg: "bg-brandCyan",
        title: "Program Pilah Sampah",
        desc: "Optimalisasi pembiasaan pilah sampah organik dan anorganik secara terpadu di seluruh lingkungan SMAN 29 Jakarta, disertai edukasi pengurangan limbah plastik sekali pakai.",
        tag: "♻️ Program Pilah Sampah",
        tagBg: "bg-brandCyan",
        points: [
          "Optimalisasi fasilitas pemilahan sampah organik dan anorganik",
          "Gerakan pengurangan sampah plastik sekali pakai (Zero Waste Habit)",
          "Edukasi dan aksi kolaboratif daur ulang bernilai guna di kalangan siswa"
        ]
      }
    ],
    motto: "🌱 Sekolah Hijau, Siswa Berkarakter — Paslon 02 Siap Mengawal Adiwiyata SMAN 29!"
  },

  // 7. HITUNG MUNDUR (COUNTDOWN)
  countdown: {
    badge: "Waktu Menuju Pemilihan",
    title: "Hitung Mundur Pemilihan MPK SMAN 29",
    // Target waktu: 5 Oktober 2026 pukul 11:00 WIB
    targetDate: "2026-10-05T11:00:00+07:00",
    labels: {
      days: "Hari",
      hours: "Jam",
      minutes: "Menit",
      seconds: "Detik",
    },
    footerNote: "Pastikan suaramu terdaftar di TPS Sekolah! Jangan Golput!",
  },

  // 8. PERTANYAAN UMUM (FAQ)
  faq: [
    {
      id: "faq-1",
      question: "Kenapa kita harus memilih Paslon Nomor Urut 02?",
      answer:
        "Paslon 02 (Bintany & Revano) menghadirkan kepemimpinan kolaboratif dengan semangat KANE (Kawal Aspirasi, Nyatakan Eksistensi). Kami fokus pada aksi konkret yang terukur, akuntabilitas terbuka lewat TWINE OPEN FILE, serta dukungan penuh untuk potensi siswa dan ekskul melalui EKSISTEN.",
    },
    {
      id: "faq-2",
      question: "Apa itu program TWINE OPEN FILE dan bagaimana cara kerjanya?",
      answer:
        "TWINE OPEN FILE adalah sistem transparansi dokumen dan advokasi siswa. Seluruh ringkasan rapat legislatif MPK, notulensi koordinasi dengan pihak sekolah, serta evaluasi program kerja OSIS dapat diakses terbuka oleh seluruh perwakilan kelas tanpa birokrasi berbelit.",
    },
    {
      id: "faq-3",
      question: "Bagaimana MPK Paslon 02 mendukung ekstrakurikuler melalui program EKSISTEN?",
      answer:
        "Lewat program EKSISTEN, MPK berperan aktif menjembatani perwakilan ekskul dengan guru kesiswaan, mempermudah advokasi sarana-prasarana latihan, izin dispensasi kejuaraan, serta membuka panggung kolaboratif unjuk karya bagi seluruh komunitas minat dan bakat di SMAN 29.",
    },
    {
      id: "faq-4",
      question: "Apakah kritik dan aspirasi yang dikirimkan dijamin kerahasiaannya?",
      answer:
        "Tentu saja! Kotak Aspirasi & Suara Siswa menyediakan opsi pengisian dengan nama samaran/alias. Tim Paslon 02 hanya berfokus pada substansi masalah untuk dicarikan jalan keluar bersama pihak sekolah tanpa mempermasalahkan privasi pengirim.",
    },
    {
      id: "faq-5",
      question: "Bagaimana siswa bisa memantau tindak lanjut dari aspirasi yang sudah dikirim?",
      answer:
        "Setiap aspirasi, saran, dan pertanyaan yang masuk dikurasi dan dipublikasikan secara transparan pada Database & Portal Rekap Aspirasi resmi kami (terintegrasi via Notion). Status tindak lanjut diperbarui secara berkala sehingga siswa tahu perkembangan masalahnya.",
    },
    {
      id: "faq-6",
      question: "Apa bedanya fungsi MPK dengan OSIS di SMAN 29 Jakarta?",
      answer:
        "OSIS bertindak sebagai lembaga eksekutif yang merancang dan mengeksekusi kegiatan/acara kesiswaan, sedangkan MPK (Musyawarah Perwakilan Kelas) bertindak sebagai lembaga legislatif perwakilan siswa yang mengawasi kinerja OSIS, menampung aspirasi tiap kelas, dan mengadvokasikan kebijakan sekolah.",
    },
    {
      id: "faq-7",
      question: "Bagaimana Paslon 02 memastikan suara seluruh kelas (X, XI, XII) didengar secara adil?",
      answer:
        "Kami membangun forum komunikasi rutin dan terbuka dengan setiap perwakilan kelas. MPK tidak akan menjadi menara gading; Bintany & Revano berkomitmen turun langsung menjemput bola ke tiap kelas secara bersahabat dan proaktif.",
    },
    {
      id: "faq-8",
      question: "Kapan dan di mana pemungutan suara pemilihan MPK berlangsung?",
      answer:
        "Pemilihan akan berlangsung serentak di TPS Sekolah SMAN 29 Jakarta sesuai jadwal KPU/Panitia Pemilihan. Pastikan menggunakan hak suaramu dan coblos Paslon Nomor Urut 02!",
    },
  ],

  // 9. Q&A GAGASAN DIGITAL & ARSIP RESPON PASLON 02
  aspirasi: {
    sectionBadge: "Tanya Jawab Gagasan Digital",
    title: "Uji Gagasan & Q&A Paslon 02",
    subtitle:
      "Punya pertanyaan kritis mengenai program kerja, tanggapan visi-misi, atau gagasan baru untuk SMAN 29? Mari berdialog dan uji gagasan kami secara digital!",
    formTitle: "Ajukan Pertanyaan Gagasan",
    formSubtitle: "Tantang program kami dengan pertanyaan dan gagasan kritis kamu!",
    
    // URL Google Apps Script Web App untuk integrasi Google Spreadsheet
    googleScriptUrl: "https://script.google.com/macros/s/AKfycbwH4C1MXbZoQzu3f38eEqdoggqhmUL02LKImEvyN-7hDIb8twAoVkvp04Z_jr0QtWny/exec",
    
    portalBadge: "PORTAL JAWABAN & ARSIP UJI GAGASAN",
    portalStatus: "STATUS: TERBUKA UNTUK UMUM",
    portalTitle: "Arsip Jawaban & Respon Terbuka Paslon 02",
    portalDesc:
      "Setiap pertanyaan, kritik konstruktif, dan uji gagasan dari warga sekolah akan kami rangkum dan jawab secara terbuka tanpa sensor. Cek status pertanyaanmu dan baca argumentasi lengkap langsung dari Bintany & Revano!",
    portalButtonText: "Buka Portal Arsip Jawaban Gagasan ↗",
    portalUrl: "https://notion.so",
    updateNotice: "Diperbarui berkala setiap 24 jam oleh Tim Paslon 02",
    features: [
      {
        title: "💡 Uji Gagasan Terbuka",
        desc: "Ruang tukar pikiran kritis dan rasional demi kemajuan sekolah.",
      },
      {
        title: "⚡ Respon 100% Transparan",
        desc: "Jawaban langsung dan notulensi terbuka dari Bintany & Revano.",
      },
    ],
  },

  // 10. FOOTER
  footer: {
    schoolName: "SMAN 29",
    paslonName: "PASLON 02 MPK",
    slogan:
      '"Terikat Dalam Aspirasi, Bergerak Dalam Aksi!"\nKawal terus pesta demokrasi sekolah yang jujur, santun, dan bermartabat.',
    quickLinksTitle: "Navigasi Cepat",
    quickLinks: [
      { label: "Profil Calon", href: "#profil" },
      { label: "Visi & Misi", href: "#visimisi" },
      { label: "Program Kerja Unggulan", href: "#proker" },
      { label: "FAQ", href: "#faq" },
    ],
    voteBadge: "COBLOS 02",
    candidatesNames: "Bintany & Revano",
    copyright: "© 2026/2027 Tim Sukses 02 MPK",
  },
};

// Global expose agar bisa dibuka langsung tanpa module bundler (CORS-safe untuk file://)
if (typeof window !== "undefined") {
  window.SITE_DATA = SITE_DATA;
}

// Module export jika digunakan dalam environment modern Node/Bundler
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_DATA;
}
