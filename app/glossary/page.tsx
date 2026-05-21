import Link from 'next/link';

export default function Glossary() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col lg:flex-row">
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
          <Link href="/glossary" className="flex items-center gap-4 bg-secondary text-on-secondary rounded-xl p-3 mx-2 transition-transform duration-200 translate-x-1 font-body text-label-lg">
            <span className="material-symbols-outlined filled">dictionary</span>
            Glossary
          </Link>
          <Link href="/case-studies" className="flex items-center gap-4 text-on-surface-variant p-3 mx-2 rounded-xl hover:bg-surface-container-high transition-all font-body text-label-lg">
            <span className="material-symbols-outlined">menu_book</span>
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

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen relative w-full">
        {/* Header */}
        <header className="fixed top-0 w-full lg:w-[calc(100%-16rem)] z-30 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-surface/90 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-4 lg:hidden">
            <span className="material-symbols-outlined text-primary text-3xl filled">dictionary</span>
            <h2 className="font-headline text-headline-md font-bold text-primary">Waras Digital</h2>
          </div>
          
          <div className="hidden lg:flex flex-1 justify-center max-w-xl mx-auto">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input 
                className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-full font-body text-body-md focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-on-surface-variant/70 outline-none" 
                placeholder="Search a term..." 
                type="text" 
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2 bg-primary-container text-on-primary-container rounded-full font-headline text-body-sm font-bold hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <div className="w-10 h-10 rounded-full bg-surface-variant border-2 border-primary-container overflow-hidden">
              <img 
                alt="User profile" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp0lDDsR9wQ8E5bDpuUFhZ4Ps13GpeOBy7lpSNyqoMdtxyLm0BSvGGXoo5kqxLJ43qHTruqpwxnrqjHrg5QS8HGBUaMpmTk5g4SLGKVO3TaBNRwguHcCFGrYRwngInAgtrVxLfRmXs-5EC6gqfX_1p61-C24TXgZvdiKasFqgkcY4Vu9drUnGojqldPGQ38s9Nt2R0aXAOp0vsa1XuDzB0qnInf5JsVbWqVkcsw5o0VN-UE9RcmFQWw4k0yrGPxOerewdL8gJWgEIX"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-[100px] pb-24">
          <div className="mb-stack-lg flex flex-col md:flex-row md:items-end justify-between gap-stack-md">
            <div className="max-w-2xl">
              <h1 className="font-headline text-headline-xl text-on-surface mb-stack-sm">Human-Language <span className="text-primary">Glossary</span></h1>
              <p className="font-body text-body-lg text-on-surface-variant">Security terms translated into everyday analogies. Because protection starts with clarity.</p>
            </div>
            <div className="lg:hidden w-full md:w-auto relative mt-4 md:mt-0">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input 
                className="w-full md:w-64 pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/30 rounded-full font-body text-body-md focus:ring-2 focus:ring-primary transition-all shadow-sm outline-none" 
                placeholder="Search..." 
                type="text" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter" id="glossary-grid">
            {/* Term Card 1 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-outline-variant/10 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl filled">vpn_key</span>
                </div>
                <div className="pt-1">
                  <span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface rounded-full font-body text-label-sm mb-2 uppercase tracking-wider font-bold">Technical Term</span>
                  <h2 className="font-headline text-headline-md text-on-surface font-bold">OTP</h2>
                  <p className="font-body text-body-sm text-on-surface-variant">One-Time Password</p>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-outline-variant/10">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <span className="material-symbols-outlined text-xl">translate</span>
                  <span className="font-body text-body-sm font-bold">Human Analogy</span>
                </div>
                <h3 className="font-headline text-headline-md text-on-surface mb-2">&quot;Kunci Rahasia Rumah&quot;</h3>
                <p className="font-body text-body-md text-on-surface-variant bg-surface-container-low p-4 rounded-xl border-l-4 border-primary">
                  Jangan kasih ke siapapun! Ini adalah kunci sementara yang hanya bisa dipakai sekali untuk membuka pintu akun Anda.
                </p>
              </div>
            </div>

            {/* Term Card 2 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-outline-variant/10 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-status-danger/5 rounded-bl-[100px] -z-10 group-hover:bg-status-danger/10 transition-colors"></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-error-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-error text-2xl filled">phishing</span>
                </div>
                <div className="pt-1">
                  <span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface rounded-full font-body text-label-sm mb-2 uppercase tracking-wider font-bold">Technical Term</span>
                  <h2 className="font-headline text-headline-md text-on-surface font-bold">Phishing</h2>
                  <p className="font-body text-body-sm text-on-surface-variant">Social Engineering Attack</p>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-outline-variant/10">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <span className="material-symbols-outlined text-xl">translate</span>
                  <span className="font-body text-body-sm font-bold">Human Analogy</span>
                </div>
                <h3 className="font-headline text-headline-md text-on-surface mb-2">&quot;Umpan Pancing Digital&quot;</h3>
                <p className="font-body text-body-md text-on-surface-variant bg-surface-container-low p-4 rounded-xl border-l-4 border-error">
                  Pesan palsu yang pura-pura jadi teman atau bank resmi. Tujuannya memancing Anda agar menyerahkan data pribadi secara sukarela.
                </p>
              </div>
            </div>

            {/* Term Card 3 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-outline-variant/10 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-status-warning/5 rounded-bl-[100px] -z-10 group-hover:bg-status-warning/10 transition-colors"></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-container text-2xl filled">lock</span>
                </div>
                <div className="pt-1">
                  <span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface rounded-full font-body text-label-sm mb-2 uppercase tracking-wider font-bold">Technical Term</span>
                  <h2 className="font-headline text-headline-md text-on-surface font-bold">Ransomware</h2>
                  <p className="font-body text-body-sm text-on-surface-variant">Malicious Software</p>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-outline-variant/10">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <span className="material-symbols-outlined text-xl">translate</span>
                  <span className="font-body text-body-sm font-bold">Human Analogy</span>
                </div>
                <h3 className="font-headline text-headline-md text-on-surface mb-2">&quot;Penyanderaan Data&quot;</h3>
                <p className="font-body text-body-md text-on-surface-variant bg-surface-container-low p-4 rounded-xl border-l-4 border-status-warning">
                  Pencuri diam-diam masuk, mengunci semua file penting Anda ke dalam brankas, dan meminta tebusan uang untuk memberikan kuncinya.
                </p>
              </div>
            </div>

            {/* Term Card 4 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-outline-variant/10 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-bl-[100px] -z-10 group-hover:bg-tertiary/10 transition-colors"></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-tertiary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-tertiary-container text-2xl filled">gpp_maybe</span>
                </div>
                <div className="pt-1">
                  <span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface rounded-full font-body text-label-sm mb-2 uppercase tracking-wider font-bold">Technical Term</span>
                  <h2 className="font-headline text-headline-md text-on-surface font-bold">Malware</h2>
                  <p className="font-body text-body-sm text-on-surface-variant">Malicious Software</p>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-outline-variant/10">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <span className="material-symbols-outlined text-xl">translate</span>
                  <span className="font-body text-body-sm font-bold">Human Analogy</span>
                </div>
                <h3 className="font-headline text-headline-md text-on-surface mb-2">&quot;Penyakit Menular Digital&quot;</h3>
                <p className="font-body text-body-md text-on-surface-variant bg-surface-container-low p-4 rounded-xl border-l-4 border-tertiary">
                  Kuman atau virus yang diam-diam menyusup ke HP atau laptop Anda untuk merusak sistem dari dalam atau mencuri informasi diam-diam.
                </p>
              </div>
            </div>

            {/* Term Card 5 (Large) */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-outline-variant/10 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group relative overflow-hidden xl:col-span-2">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
              <div className="flex flex-col md:flex-row md:items-start gap-6 h-full">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-2xl filled">verified_user</span>
                    </div>
                    <div className="pt-1">
                      <span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface rounded-full font-body text-label-sm mb-2 uppercase tracking-wider font-bold">Technical Term</span>
                      <h2 className="font-headline text-headline-md text-on-surface font-bold">2FA / MFA</h2>
                      <p className="font-body text-body-sm text-on-surface-variant">Multi-Factor Authentication</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-outline-variant/10">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <span className="material-symbols-outlined text-xl">translate</span>
                      <span className="font-body text-body-sm font-bold">Human Analogy</span>
                    </div>
                    <h3 className="font-headline text-headline-md text-on-surface mb-2">&quot;Gembok Ganda Penjaga Rumah&quot;</h3>
                    <p className="font-body text-body-md text-on-surface-variant bg-surface-container-low p-4 rounded-xl border-l-4 border-primary">
                      Bayangkan Anda mengunci pintu tidak hanya dengan kunci biasa (password), tapi juga gembok tambahan yang hanya Anda yang tahu kombinasinya (kode SMS/Aplikasi). Jauh lebih aman!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

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
        <Link className="flex flex-col items-center justify-center bg-secondary text-on-secondary rounded-full px-5 py-1 font-body text-label-md scale-90 transition-all" href="/glossary">
          <span className="material-symbols-outlined filled">dictionary</span>
          <span>Glossary</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-low p-2 rounded-lg font-body text-label-md" href="/case-studies">
          <span className="material-symbols-outlined">menu_book</span>
          <span>Case Studies</span>
        </Link>
      </nav>
    </div>
  );
}
