import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background text-on-surface font-body text-body-md antialiased min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 bg-surface/90 backdrop-blur-md shadow-sm">
        {/* Brand Logo */}
        <Link className="font-headline text-headline-md font-bold text-primary" href="/">
          Waras Digital
        </Link>
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-gutter">
          <Link className="text-on-surface-variant font-body text-label-md hover:text-secondary transition-colors duration-200" href="/simulations">
            Simulations
          </Link>
          <Link className="text-on-surface-variant font-body text-label-md hover:text-secondary transition-colors duration-200" href="/glossary">
            Glossary
          </Link>
          <Link className="text-on-surface-variant font-body text-label-md hover:text-secondary transition-colors duration-200" href="/case-studies">
            Case Studies
          </Link>
          <Link className="text-on-surface-variant font-body text-label-md hover:text-secondary transition-colors duration-200" href="/dashboard">
            Progress
          </Link>
        </nav>
        {/* Trailing Action */}
        <div className="flex items-center gap-stack-sm">
          <Link href="/dashboard" className="bg-secondary text-on-secondary font-body text-label-md px-6 py-2 rounded-lg hover:opacity-90 transition-colors shadow-sm">
            Get Started
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-[80px]">
        {/* Hero Section */}
        <section className="relative max-w-container-max mx-auto px-margin-desktop py-20 md:py-32 flex flex-col md:flex-row items-center gap-stack-lg">
          <div className="flex-1 flex flex-col items-start gap-stack-md z-10">
            <div className="inline-flex items-center gap-2 bg-status-safe/10 text-status-safe px-3 py-1 rounded-full font-body text-label-sm mb-2">
              <span className="material-symbols-outlined filled text-[16px]">verified_user</span>
              Pendekatan Ramah Keluarga
            </div>
            <h1 className="font-headline text-headline-xl text-on-surface max-w-2xl">
              Belajar Keamanan Siber Tanpa Pusing
            </h1>
            <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
              Lindungi data dan keluarga Anda dengan panduan yang jelas, bebas jargon teknis. Kami hadir sebagai penasihat keamanan digital tepercaya Anda.
            </p>
            <div className="mt-4">
              <Link href="/dashboard" className="bg-secondary text-on-secondary font-body text-label-md px-8 py-4 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                Mulai Simulasi Aman
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-outline-variant/20 relative bg-surface-container">
            <img 
              alt="A calming, bright, modern workspace scene." 
              className="w-full h-full object-cover opacity-90" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgaqCr44YVdRuu3CPc4-_d5aJQsOzUTtbf22a5qBW8ZuPGbi80ix347f4zyZX28Vw7JQ0tOZg3et2nVFWLnHClmZX5Lzz3GZQP07018n62DMAMvR34905aeQWZsDXW9MTQVOjG4sgo2mCoUNzdPqiWM83n2J9Rg9L-M8Yrj1T1z3E2M3PmGKU2LQSy6xGkUDL-1ptIwRLxq3LlXUJdA49Pqgpiwxf7YjJ6BTYuJaBie5u0MP00yZtwwEUECdepOcM-SIb1lNm-iWQL"
            />
          </div>
        </section>

        {/* Features Section (Bento Grid) */}
        <section className="max-w-container-max mx-auto px-margin-desktop py-16">
          <div className="text-center mb-12">
            <h2 className="font-headline text-headline-lg text-on-surface">Fitur Pendukung Ketenangan Anda</h2>
            <p className="font-body text-body-md text-on-surface-variant mt-2 max-w-lg mx-auto">
              Kami merancang setiap alat untuk memberikan kejelasan dan perlindungan maksimal dengan usaha minimal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Feature Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-status-safe/10 flex items-center justify-center text-status-safe">
                <span className="material-symbols-outlined text-[24px]">security</span>
              </div>
              <h3 className="font-headline text-headline-md text-on-surface">Simulasi Aman</h3>
              <p className="font-body text-body-md text-on-surface-variant flex-grow">
                Praktikkan cara menghadapi ancaman digital di lingkungan (Safe-to-Fail Lab) yang sepenuhnya tertutup. Tidak ada risiko nyata, hanya pembelajaran yang efektif.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">dictionary</span>
              </div>
              <h3 className="font-headline text-headline-md text-on-surface">Kamus Bahasa Manusia</h3>
              <p className="font-body text-body-md text-on-surface-variant flex-grow">
                Ucapkan selamat tinggal pada jargon rumit (Zero-Jargon Glossary). Kami menerjemahkan istilah keamanan siber menjadi bahasa sehari-hari yang mudah dipahami.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-status-warning/10 text-status-warning flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">traffic</span>
              </div>
              <h3 className="font-headline text-headline-md text-on-surface">Dashboard Sinyal Waspada</h3>
              <p className="font-body text-body-md text-on-surface-variant flex-grow">
                Pantau status keamanan Anda dengan indikator lampu lalu lintas (Traffic Light Indicators) yang intuitif. Hijau berarti aman, merah berarti perlu tindakan.
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof / Differentiation Section */}
        <section className="bg-surface-container-low py-20 mt-12 border-t border-outline-variant/10">
          <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row items-center gap-stack-lg">
            <div className="flex-1 order-2 md:order-1">
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20 shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-status-safe rounded-full flex items-center justify-center text-on-tertiary shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <h4 className="font-body text-label-md text-on-surface mb-2">Skor Keamanan Anda</h4>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-grow h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-status-safe w-[85%] rounded-full"></div>
                  </div>
                  <span className="font-headline text-headline-md text-status-safe">85%</span>
                </div>
                <p className="font-body text-body-sm text-on-surface-variant">
                  Status saat ini: <strong className="text-status-safe">Aman terkendali</strong>. Teruskan kebiasaan baik Anda!
                </p>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2 flex flex-col gap-stack-sm">
              <h2 className="font-headline text-headline-lg text-on-surface">Mengapa Kami Beda?</h2>
              <p className="font-body text-body-lg text-on-surface-variant mb-4">
                Kami menolak pendekatan berbasis ketakutan. Keamanan siber tidak seharusnya terasa seperti tugas yang menakutkan.
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-status-safe mt-1">check_circle</span>
                  <span className="font-body text-body-md text-on-surface-variant">Fokus pada <strong>bahasa sederhana</strong>, bukan istilah teknis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-status-safe mt-1">check_circle</span>
                  <span className="font-body text-body-md text-on-surface-variant">Lingkungan praktik yang <strong>bebas risiko</strong> untuk mencoba tanpa takut salah.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-status-safe mt-1">check_circle</span>
                  <span className="font-body text-body-md text-on-surface-variant">Desain antarmuka yang <strong>terang dan menenangkan</strong>, bukan gelap dan agresif.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-stack-lg px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-gutter bg-surface-container-low border-t border-outline-variant/10 mt-auto">
        {/* Copyright & Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-headline text-headline-md text-on-surface">
            Waras Digital
          </span>
          <span className="font-body text-body-sm text-on-surface-variant">
            © 2024 Waras Digital. Patience, Clarity, Protection.
          </span>
        </div>
        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-gutter">
          <a className="font-body text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a>
          <a className="font-body text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</a>
          <a className="font-body text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Accessibility Statement</a>
          <a className="font-body text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Contact Advisor</a>
        </nav>
      </footer>
    </div>
  );
}
