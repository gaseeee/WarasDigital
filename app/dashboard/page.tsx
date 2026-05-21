import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="bg-background text-on-surface font-body text-body-md antialiased flex w-full min-h-screen">
      {/* SideNavBar */}
      <aside className="hidden lg:flex flex-col h-screen border-r border-outline-variant bg-surface left-0 w-64 fixed top-0 overflow-y-auto z-40">
        <div className="p-6 pb-2">
          <div className="font-headline text-headline-md font-extrabold text-primary mb-1">
            Waras Digital
          </div>
          <div className="font-body text-label-lg text-on-surface-variant mb-stack-lg">
            Your Security Advisor
          </div>
          <button className="w-full bg-secondary text-on-secondary font-body text-label-lg py-3 rounded-lg shadow-sm hover:opacity-90 transition-opacity mb-stack-lg flex items-center justify-center gap-2">
            <span className="material-symbols-outlined filled">play_circle</span>
            Start Simulation
          </button>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/" className="flex items-center gap-4 text-on-surface-variant p-3 mx-2 rounded-xl hover:bg-surface-container-high transition-all font-body text-label-lg">
            <span className="material-symbols-outlined">home</span>
            Home
          </Link>
          <Link href="/simulations" className="flex items-center gap-4 text-on-surface-variant p-3 mx-2 rounded-xl hover:bg-surface-container-high transition-all font-body text-label-lg">
            <span className="material-symbols-outlined">security</span>
            Simulations
          </Link>
          <Link href="/glossary" className="flex items-center gap-4 text-on-surface-variant p-3 mx-2 rounded-xl hover:bg-surface-container-high transition-all font-body text-label-lg">
            <span className="material-symbols-outlined">dictionary</span>
            Glossary
          </Link>
          <Link href="/case-studies" className="flex items-center gap-4 text-on-surface-variant p-3 mx-2 rounded-xl hover:bg-surface-container-high transition-all font-body text-label-lg">
            <span className="material-symbols-outlined">menu_book</span>
            Case Studies
          </Link>
          <Link href="/dashboard" className="flex items-center gap-4 bg-secondary text-on-secondary rounded-xl p-3 mx-2 transition-transform duration-200 translate-x-1 font-body text-label-lg">
            <span className="material-symbols-outlined filled">leaderboard</span>
            Dashboard
          </Link>
        </nav>
        <div className="p-4 border-t border-outline-variant/20 space-y-2 mt-auto">
          <a className="flex items-center gap-4 text-on-surface-variant p-3 mx-2 rounded-xl hover:bg-surface-container-high transition-all font-body text-label-lg" href="#">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
          <a className="flex items-center gap-4 text-on-surface-variant p-3 mx-2 rounded-xl hover:bg-surface-container-high transition-all font-body text-label-lg" href="#">
            <span className="material-symbols-outlined">help</span>
            Help
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 min-h-screen lg:ml-64 pb-24 lg:pb-0 overflow-x-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-stack-lg pb-stack-lg flex flex-col gap-stack-lg">
          {/* Page Header */}
          <header>
            <h1 className="font-headline text-headline-xl text-on-surface mb-unit md:mb-0">Dashboard Anda</h1>
            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mt-2">
              Pantau perkembangan Anda dalam mengenali penipuan. Semakin sering berlatih, semakin aman Anda di dunia maya.
            </p>
          </header>

          {/* Main Traffic Light Status Indicator (Bento Layout Style) */}
          <section className="bg-surface-container-lowest rounded-3xl p-gutter md:p-stack-lg shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-stack-lg">
            {/* Background decorative element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-surface-container-highest rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            {/* The Traffic Light */}
            <div className="bg-on-surface rounded-full p-4 flex md:flex-col gap-4 items-center shrink-0 shadow-xl z-10">
              {/* Red (Off) */}
              <div className="w-16 h-16 rounded-full bg-status-danger/20 border-2 border-status-danger/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-status-danger/40 text-[32px]">warning</span>
              </div>
              {/* Yellow (Active/Warning) */}
              <div className="w-16 h-16 rounded-full bg-status-warning shadow-[0_0_20px_rgba(202,138,4,0.6)] border-2 border-status-warning flex items-center justify-center animate-soft-pulse">
                <span className="material-symbols-outlined filled text-on-surface text-[32px]">error</span>
              </div>
              {/* Green (Off) */}
              <div className="w-16 h-16 rounded-full bg-status-safe/20 border-2 border-status-safe/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-status-safe/40 text-[32px]">check_circle</span>
              </div>
            </div>

            {/* Status Context */}
            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full font-body text-label-sm text-on-surface-variant mb-stack-sm uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-status-warning"></span>
                Status Kewaspadaan Saat Ini
              </div>
              <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface mb-stack-sm">Perlu Perhatian (Waspada)</h2>
              <p className="font-body text-body-lg text-on-surface-variant mb-stack-md">
                Kemampuan Anda mendeteksi penipuan sudah baik, namun ada taktik baru yang beredar minggu ini. Kami menyarankan Anda mengambil latihan singkat untuk menyegarkan ingatan.
              </p>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-on-surface text-surface font-body text-label-lg rounded-xl hover:bg-on-surface/90 transition-all active:scale-95 shadow-md">
                <span className="material-symbols-outlined text-[20px]">psychology</span>
                Lihat Detail Analisis
              </button>
            </div>
          </section>

          {/* Detailed Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Stat 1: Last Score */}
            <div className="bg-surface-container-lowest rounded-2xl p-gutter shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-outline-variant/10 flex flex-col justify-between hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-shadow">
              <div className="flex justify-between items-start mb-stack-md">
                <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[28px]">sports_score</span>
                </div>
                <span className="font-body text-label-sm text-status-safe flex items-center gap-1 bg-status-safe/10 px-2 py-1 rounded-md">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> Naik 5 poin
                </span>
              </div>
              <div>
                <h3 className="font-body text-label-lg text-on-surface-variant mb-1">Skor Simulasi Terakhir</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline text-headline-xl text-on-surface">85</span>
                  <span className="font-body text-body-md text-on-surface-variant">/ 100</span>
                </div>
              </div>
            </div>

            {/* Stat 2: Newly Learned Terms */}
            <div className="bg-surface-container-lowest rounded-2xl p-gutter shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-outline-variant/10 flex flex-col justify-between hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-shadow">
              <div className="flex justify-between items-start mb-stack-md">
                <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[28px]">menu_book</span>
                </div>
              </div>
              <div>
                <h3 className="font-body text-label-lg text-on-surface-variant mb-1">Istilah Baru Dipelajari</h3>
                <div className="flex items-baseline gap-2 mb-stack-sm">
                  <span className="font-headline text-headline-xl text-on-surface">12</span>
                  <span className="font-body text-body-md text-on-surface-variant">istilah</span>
                </div>
                <p className="font-body text-body-sm text-on-surface-variant truncate">Termasuk: Phishing, OTP, Malware</p>
              </div>
            </div>

            {/* Stat 3: Detected Scenarios */}
            <div className="bg-surface-container-lowest rounded-2xl p-gutter shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-outline-variant/10 flex flex-col justify-between hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-shadow">
              <div className="flex justify-between items-start mb-stack-md">
                <div className="w-12 h-12 rounded-full bg-status-safe/10 flex items-center justify-center text-status-safe">
                  <span className="material-symbols-outlined text-[28px]">gpp_good</span>
                </div>
              </div>
              <div>
                <h3 className="font-body text-label-lg text-on-surface-variant mb-1">Skenario Berhasil Dideteksi</h3>
                <div className="flex items-baseline gap-2 mb-stack-sm">
                  <span className="font-headline text-headline-xl text-on-surface">8</span>
                  <span className="font-body text-body-md text-on-surface-variant">dari 10</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                  <div className="bg-status-safe h-full rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
          </section>

          {/* Recommendations Section */}
          <section className="mt-stack-sm">
            <div className="flex items-center justify-between mb-stack-md">
              <h2 className="font-headline text-headline-md text-on-surface">Rekomendasi Latihan</h2>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-gutter border-2 border-primary/10 shadow-sm flex flex-col md:flex-row items-center gap-gutter relative overflow-hidden">
              {/* Accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary"></div>
              
              <div className="w-20 h-20 shrink-0 bg-primary-container/10 rounded-2xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[40px]">local_shipping</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-headline text-headline-md text-on-surface mb-1">Simulasi Penipuan Kurir Paket</h3>
                <p className="font-body text-body-md text-on-surface-variant mb-stack-md md:mb-0">
                  Modus ini sedang marak. Pelajari cara mengenali pesan WhatsApp palsu yang berpura-pura mengantarkan paket namun meminta Anda mengklik tautan berbahaya (APK).
                </p>
              </div>
              <button className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-body text-label-lg rounded-xl hover:bg-surface-tint shadow-md transition-all active:scale-95">
                Coba Simulasi Ini
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* BottomNavBar for Mobile */}
      <nav className="fixed lg:hidden bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-[env(safe-area-inset-bottom)] bg-surface/95 backdrop-blur-sm shadow-[0_-2px_10px_rgba(0,0,0,0.05)] rounded-t-xl border-t border-outline-variant/20">
        <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-low p-2 rounded-lg font-body text-label-md" href="/">
          <span className="material-symbols-outlined">home</span>
          <span>Home</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-low p-2 rounded-lg font-body text-label-md" href="/simulations">
          <span className="material-symbols-outlined">biotech</span>
          <span>Labs</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-low p-2 rounded-lg font-body text-label-md" href="/glossary">
          <span className="material-symbols-outlined">dictionary</span>
          <span>Glossary</span>
        </Link>
        <Link className="flex flex-col items-center justify-center bg-secondary text-on-secondary rounded-full px-5 py-1 font-body text-label-md scale-90 transition-all" href="/dashboard">
          <span className="material-symbols-outlined filled">leaderboard</span>
          <span>Dashboard</span>
        </Link>
      </nav>
    </div>
  );
}
