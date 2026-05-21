import Link from 'next/link';

export default function CaseStudies() {
  return (
    <div className="bg-background text-on-surface font-body text-body-md antialiased min-h-screen flex flex-col md:flex-row">
      {/* TopNavBar for Mobile */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile py-4 bg-surface/90 backdrop-blur-md md:hidden shadow-sm font-headline text-headline-md">
        <div className="font-headline text-headline-md font-bold text-primary">
          Waras Digital
        </div>
        <button className="text-on-surface-variant p-2 rounded-full hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      {/* SideNavBar */}
      <aside className="hidden lg:flex flex-col h-screen border-r border-outline-variant bg-surface left-0 w-64 fixed top-0 overflow-y-auto">
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
          <Link href="/case-studies" className="flex items-center gap-4 bg-secondary text-on-secondary rounded-xl p-3 mx-2 transition-transform duration-200 translate-x-1 font-body text-label-lg">
            <span className="material-symbols-outlined filled">menu_book</span>
            Case Studies
          </Link>
          <Link href="/dashboard" className="flex items-center gap-4 text-on-surface-variant p-3 mx-2 rounded-xl hover:bg-surface-container-high transition-all font-body text-label-lg">
            <span className="material-symbols-outlined">leaderboard</span>
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
      <main className="flex-1 lg:ml-64 w-full flex flex-col min-h-screen pt-20 md:pt-0 pb-24 md:pb-0">
        {/* Case Study Header */}
        <header className="w-full px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface border-b border-outline-variant/10">
          <div className="max-w-container-max mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high text-secondary rounded-full font-body text-label-lg mb-stack-sm">
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
              Studi Kasus
            </div>
            <h1 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface mb-stack-sm">
              Ransomware (Penyanderaan Data)
            </h1>
            <p className="font-body text-body-lg text-on-surface-variant max-w-3xl">
              Belajar dari kisah nyata bagaimana penjahat digital &apos;mengunci&apos; rumah digital Anda.
            </p>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="w-full px-margin-mobile md:px-margin-desktop py-stack-lg flex-1">
          <div className="max-w-container-max mx-auto space-y-stack-lg">
            {/* Bento Grid for Visuals and Narrative */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
              {/* Narrative Box */}
              <div className="lg:col-span-1 bg-surface-container-lowest rounded-xl p-stack-md shadow-sm border border-outline-variant/20 flex flex-col justify-between">
                <div>
                  <h2 className="font-headline text-headline-md text-on-surface mb-stack-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">history_edu</span>
                    Kisah Budi
                  </h2>
                  <p className="font-body text-body-md text-on-surface-variant mb-4">
                    Budi sedang menunggu paket. Suatu pagi, ia menerima email mendesak yang mengatakan pengirimannya tertunda dan meminta ia untuk mengklik tombol &quot;Lacak Paket&quot; untuk mengonfirmasi alamat.
                  </p>
                  <p className="font-body text-body-md text-on-surface-variant">
                    Tanpa pikir panjang, ia mengklik. Tidak ada halaman pelacakan yang muncul, hanya layar berkedip. Keesokan harinya, semua foto keluarga dan dokumen pentingnya berubah menjadi file dengan akhiran aneh (.locked).
                  </p>
                </div>
              </div>

              {/* Comparison Section */}
              <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl p-stack-md shadow-sm border border-outline-variant/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter h-full">
                  {/* The Bait */}
                  <div className="flex flex-col">
                    <h3 className="font-body text-label-lg text-on-surface-variant mb-stack-sm uppercase tracking-wider">Umpan (The Bait)</h3>
                    <div className="flex-1 bg-surface-container-low rounded-lg p-4 border border-outline-variant/20 relative overflow-hidden flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 bg-error-container text-error rounded-full flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined filled text-[24px]">mail</span>
                      </div>
                      <div className="font-headline text-headline-md text-on-surface mb-2">Paket Tertunda!</div>
                      <div className="font-body text-body-md text-on-surface-variant mb-4">Harap konfirmasi alamat Anda segera atau paket akan dikembalikan.</div>
                      <button className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-body text-label-lg opacity-70 cursor-not-allowed">
                        Lacak Paket
                      </button>
                    </div>
                  </div>

                  {/* The Consequence */}
                  <div className="flex flex-col">
                    <h3 className="font-body text-label-lg text-on-surface-variant mb-stack-sm uppercase tracking-wider">Akibat (The Consequence)</h3>
                    <div className="flex-1 bg-surface-dim rounded-lg p-4 border border-outline-variant/20 relative overflow-hidden flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 bg-status-danger text-on-error rounded-xl flex items-center justify-center mb-4 shadow-lg rotate-3">
                        <span className="material-symbols-outlined filled text-[32px]">lock</span>
                      </div>
                      <div className="font-headline text-headline-md text-status-danger mb-2">Semua File Terenkripsi</div>
                      <div className="font-body text-body-md text-on-surface-variant">
                        foto_liburan.locked<br />
                        laporan_keuangan.locked
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Analogy Section */}
            <section className="bg-secondary-fixed rounded-xl p-stack-lg border border-secondary-fixed-dim relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <span className="material-symbols-outlined" style={{ fontSize: '200px' }}>house</span>
              </div>
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-headline text-headline-md text-on-secondary-fixed-variant mb-stack-sm flex items-center gap-2">
                  <span className="material-symbols-outlined filled">lightbulb</span>
                  Analogi Dunia Nyata
                </h2>
                <p className="font-body text-body-lg text-on-secondary-fixed leading-relaxed">
                  Bayangkan sebuah <strong>Ransomware</strong> seperti seorang penyusup yang masuk ke rumah Anda. Alih-alih mencuri barang, mereka <strong>mengganti semua gembok pintu</strong> di rumah Anda saat Anda sedang tidur. 
                </p>
                <p className="font-body text-body-lg text-on-secondary-fixed leading-relaxed mt-4">
                  Saat Anda bangun, Anda tidak bisa masuk ke kamar tidur, dapur, atau garasi. Penyusup itu lalu meninggalkan catatan: <em>&quot;Bayar uang tebusan, dan saya akan berikan kunci barunya.&quot;</em> Data Anda masih ada di sana, tapi Anda terkunci dari luar.
                </p>
              </div>
            </section>

            {/* Actionable Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Red Flags */}
              <section className="bg-surface-container-lowest rounded-xl p-stack-md shadow-sm border border-outline-variant/20">
                <h2 className="font-headline text-headline-md text-on-surface mb-stack-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-status-warning">warning</span>
                  Tanda-Tanda Bahaya
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-error-container text-error rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[14px]">close</span>
                    </div>
                    <div>
                      <div className="font-body text-label-lg text-on-surface">Desakan Waktu (Urgency)</div>
                      <div className="font-body text-body-md text-on-surface-variant">Pesan yang memaksa Anda bertindak &apos;SEKARANG JUGA&apos; atau akun ditutup.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-error-container text-error rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[14px]">close</span>
                    </div>
                    <div>
                      <div className="font-body text-label-lg text-on-surface">Alamat Pengirim Aneh</div>
                      <div className="font-body text-body-md text-on-surface-variant">Nama pengirim &apos;Kurir&apos; tapi emailnya &apos;budi99@domain-aneh.com&apos;.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-error-container text-error rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[14px]">close</span>
                    </div>
                    <div>
                      <div className="font-body text-label-lg text-on-surface">Lampiran Mencurigakan</div>
                      <div className="font-body text-body-md text-on-surface-variant">File berakhiran .exe, .zip, atau dokumen yang meminta &apos;Enable Macros&apos;.</div>
                    </div>
                  </li>
                </ul>
              </section>

              {/* What to Do */}
              <section className="bg-surface-container-lowest rounded-xl p-stack-md shadow-sm border border-outline-variant/20">
                <h2 className="font-headline text-headline-md text-on-surface mb-stack-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-status-safe">check_circle</span>
                  Apa yang Harus Dilakukan
                </h2>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary-container text-on-primary-container rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-bold text-[12px]">
                      1
                    </div>
                    <div>
                      <div className="font-body text-label-lg text-on-surface">Jangan Bayar</div>
                      <div className="font-body text-body-md text-on-surface-variant">Membayar tidak menjamin data kembali dan malah mendanai kejahatan.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary-container text-on-primary-container rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-bold text-[12px]">
                      2
                    </div>
                    <div>
                      <div className="font-body text-label-lg text-on-surface">Putuskan Koneksi</div>
                      <div className="font-body text-body-md text-on-surface-variant">Segera matikan Wi-Fi atau cabut kabel internet agar virus tidak menyebar.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-primary-container text-on-primary-container rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-bold text-[12px]">
                      3
                    </div>
                    <div>
                      <div className="font-body text-label-lg text-on-surface">Minta Bantuan Ahli</div>
                      <div className="font-body text-body-md text-on-surface-variant">Hubungi profesional IT. Kadang ada &apos;kunci cadangan&apos; (decryptor) yang tersedia gratis.</div>
                    </div>
                  </li>
                </ol>
              </section>
            </div>

            {/* Primary CTA */}
            <div className="flex justify-center pt-stack-md">
              <button className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-headline text-headline-md shadow-lg hover:shadow-none hover:translate-y-1 transition-all flex items-center gap-3">
                <span className="material-symbols-outlined filled">science</span>
                Coba Simulasi Ransomware
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-stack-lg px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-gutter bg-surface-container-low border-t border-outline-variant/10 mt-auto">
          <div className="font-headline text-headline-md text-on-surface">
            Waras Digital
          </div>
          <div className="font-body text-body-md text-on-surface-variant text-center md:text-left">
            © 2024 Waras Digital. Patience, Clarity, Protection.
          </div>
          <div className="flex flex-wrap justify-center gap-4 font-body text-label-md">
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Accessibility Statement</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Contact Advisor</a>
          </div>
        </footer>
      </main>

      {/* BottomNavBar for Mobile */}
      <nav className="fixed lg:hidden bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-[env(safe-area-inset-bottom)] bg-surface/95 backdrop-blur-sm shadow-[0_-2px_10px_rgba(0,0,0,0.05)] rounded-t-xl">
        <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-low p-2 rounded-lg font-body text-label-md" href="/">
          <span className="material-symbols-outlined">home</span>
          <span>Home</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-low p-2 rounded-lg font-body text-label-md" href="/simulations">
          <span className="material-symbols-outlined">biotech</span>
          <span>Labs</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-low p-2 rounded-lg font-body text-label-md" href="/glossary">
          <span className="material-symbols-outlined">book_2</span>
          <span>Glossary</span>
        </Link>
        <Link className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-5 py-1 font-body text-label-md scale-90 transition-all" href="/case-studies">
          <span className="material-symbols-outlined filled">menu_book</span>
          <span>Case Studies</span>
        </Link>
      </nav>
    </div>
  );
}
