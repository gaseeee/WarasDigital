"use client";

import { useState } from "react";
import Link from "next/link";

export default function SimulationLab() {
  const [isDanger, setIsDanger] = useState(false);
  const [analysisType, setAnalysisType] = useState<"default" | "sender" | "file" | "message">("default");

  const showAnalysis = (type: "sender" | "file" | "message") => {
    setAnalysisType(type);
  };

  return (
    <div className="flex h-screen w-full">
      {/* Shared Component: SideNavBar */}
      <nav className="hidden lg:flex flex-col h-screen border-r border-outline-variant bg-surface w-64 flex-shrink-0">
        {/* Header */}
        <div className="p-margin-desktop pb-stack-lg flex flex-col gap-stack-sm">
          <div className="font-headline text-headline-md font-bold text-primary">
            Waras Digital
          </div>
          <div className="text-body-sm text-on-surface-variant">
            Your Security Advisor
          </div>
        </div>
        {/* Primary Nav Links */}
        <div className="flex-1 flex flex-col gap-unit px-2">
          <Link className="flex items-center gap-4 text-on-surface-variant p-3 mx-2 rounded-lg hover:bg-surface-container-high transition-all text-body-md font-medium" href="/">
            <span className="material-symbols-outlined" data-icon="home">home</span>
            <span>Home</span>
          </Link>
          {/* ACTIVE TAB: Simulations */}
          <Link className="flex items-center gap-4 bg-secondary text-on-secondary rounded-lg p-3 mx-2 transition-transform duration-200 text-body-md font-medium" href="/simulations">
            <span className="material-symbols-outlined filled" data-icon="security">security</span>
            <span>Simulations</span>
          </Link>
          <Link className="flex items-center gap-4 text-on-surface-variant p-3 mx-2 rounded-lg hover:bg-surface-container-high transition-all text-body-md font-medium" href="/glossary">
            <span className="material-symbols-outlined" data-icon="dictionary">dictionary</span>
            <span>Glossary</span>
          </Link>
          <Link className="flex items-center gap-4 text-on-surface-variant p-3 mx-2 rounded-lg hover:bg-surface-container-high transition-all text-body-md font-medium" href="/case-studies">
            <span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
            <span>Case Studies</span>
          </Link>
          <Link className="flex items-center gap-4 text-on-surface-variant p-3 mx-2 rounded-lg hover:bg-surface-container-high transition-all text-body-md font-medium" href="/dashboard">
            <span className="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
            <span>Dashboard</span>
          </Link>
        </div>
        {/* CTA & Footer Nav */}
        <div className="p-4 flex flex-col gap-stack-md mt-auto">
          <button className="w-full bg-primary text-on-primary text-label-md py-3 rounded-lg hover:opacity-90 transition-opacity uppercase">
            Start Simulation
          </button>
          <div className="flex flex-col gap-unit pt-stack-sm border-t border-outline-variant">
            <a className="flex items-center gap-4 text-on-surface-variant p-3 rounded-lg hover:bg-surface-container-high transition-all text-body-md" href="#">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
              <span>Settings</span>
            </a>
            <a className="flex items-center gap-4 text-on-surface-variant p-3 rounded-lg hover:bg-surface-container-high transition-all text-body-md" href="#">
              <span className="material-symbols-outlined" data-icon="help">help</span>
              <span>Help</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background relative">
        {/* Header Area */}
        <header className="px-margin-desktop py-stack-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-stack-md z-10">
          <div>
            <h1 className="font-headline text-headline-lg text-on-background">Simulation Lab</h1>
            <p className="text-body-md text-on-surface-variant mt-1">Scenario: The Fake Wedding Invitation</p>
          </div>
          {/* Visual Warning Meter */}
          <div className={`px-6 py-3 rounded-full border flex items-center gap-4 shadow-sm transition-all duration-500 ${isDanger ? 'border-status-danger/50 bg-error-container/10' : 'bg-surface-container-lowest border-outline-variant'}`} id="warning-meter-container">
            <span className="text-label-md text-on-surface-variant whitespace-nowrap">Threat Level</span>
            <div className="flex items-center gap-1">
              <div className="h-3 w-8 rounded-full bg-status-safe opacity-20 transition-all duration-300"></div>
              <div className={`h-3 w-8 rounded-full bg-status-warning transition-all duration-300 ${isDanger ? 'opacity-20' : 'opacity-100 shadow-[0_0_8px_rgba(202,138,4,0.5)]'}`}></div>
              <div className={`h-3 w-8 rounded-full bg-status-danger transition-all duration-300 ${isDanger ? 'opacity-100 shadow-[0_0_8px_rgba(220,38,38,0.5)]' : 'opacity-20'}`}></div>
            </div>
            <span className={`material-symbols-outlined transition-colors duration-300 ${isDanger ? 'text-status-danger' : 'text-status-warning'}`}>
              {isDanger ? 'dangerous' : 'warning'}
            </span>
          </div>
        </header>

        {/* Workspace Grid */}
        <div className="flex-1 flex flex-col lg:flex-row gap-gutter px-margin-desktop pb-margin-desktop overflow-hidden">
          {/* Left: Chat Simulator */}
          <section className="flex-1 flex justify-center h-full relative">
            {/* Phone Frame Simulation */}
            <div className="w-full max-w-md h-full bg-surface-container-lowest rounded-3xl border-[8px] border-surface-container shadow-lg flex flex-col overflow-hidden relative">
              {/* App Header */}
              <div className="bg-surface-container-low px-4 py-3 flex items-center gap-3 border-b border-outline-variant cursor-pointer hover:bg-surface-container-high transition-colors group" onClick={() => showAnalysis('sender')}>
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant flex-shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <h3 className="text-body-md font-semibold text-on-surface truncate group-hover:text-primary transition-colors">+62 812-9988-7766</h3>
                  <p className="text-label-sm text-on-surface-variant truncate">Unknown Number</p>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">info</span>
              </div>
              
              {/* Chat Canvas */}
              <div className="flex-1 bg-[#F1F3F5] p-4 flex flex-col gap-stack-md overflow-y-auto relative">
                {/* Date Chip */}
                <div className="flex justify-center mb-2">
                  <span className="bg-surface-container-lowest text-on-surface-variant text-label-sm px-3 py-1 rounded-full shadow-sm">Today</span>
                </div>
                
                {/* Incoming Message Bubble 1 */}
                <div className="flex justify-start">
                  <div className="bg-surface-container-lowest text-on-surface p-3 rounded-r-xl rounded-bl-xl shadow-sm max-w-[85%] relative border border-transparent hover:border-primary/20 cursor-pointer transition-colors" onClick={() => showAnalysis('message')}>
                    <p className="text-body-sm leading-relaxed">
                      Yth. Bpk/Ibu,<br/>
                      Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bpk/Ibu untuk hadir di acara pernikahan putra putri kami.
                    </p>
                    <div className="text-right mt-1">
                      <span className="text-[10px] text-outline font-medium">10:42 AM</span>
                    </div>
                  </div>
                </div>
                
                {/* Incoming Message Bubble 2 (The Malicious File) */}
                <div className="flex justify-start mt-2">
                  <div 
                    className="bg-surface-container-lowest p-2 rounded-r-xl rounded-bl-xl shadow-sm max-w-[85%] border-2 border-transparent hover:border-status-danger cursor-pointer transition-all duration-300 group" 
                    onClick={() => showAnalysis('file')}
                    onMouseEnter={() => setIsDanger(true)}
                    onMouseLeave={() => setIsDanger(false)}
                  >
                    {/* File UI */}
                    <div className="flex items-center gap-3 bg-surface-container-low p-3 rounded-lg group-hover:bg-error-container/20 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-status-warning/10 flex items-center justify-center text-status-warning group-hover:bg-status-danger/10 group-hover:text-status-danger transition-colors">
                        <span className="material-symbols-outlined filled">apk_install</span>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="text-body-sm font-semibold text-on-surface truncate group-hover:text-status-danger transition-colors">Undangan_Digital_Pernikahan.apk</p>
                        <p className="text-label-sm text-on-surface-variant">15 MB • APK Document</p>
                      </div>
                    </div>
                    <div className="text-right mt-1 px-1">
                      <span className="text-[10px] text-outline font-medium">10:42 AM</span>
                    </div>
                    {/* Overlay Hint */}
                    <div className="absolute -top-12 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                      <div className="bg-inverse-surface text-inverse-on-surface text-label-sm px-3 py-2 rounded-lg shadow-lg flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-status-danger">warning</span>
                        Click to inspect
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Input Bar Mockup */}
              <div className="bg-surface-container-lowest p-3 flex gap-2 items-center border-t border-outline-variant">
                <div className="flex-1 bg-surface-container-low rounded-full h-10 flex items-center px-4 opacity-50 cursor-not-allowed">
                  <span className="text-body-sm text-on-surface-variant">Type a message</span>
                </div>
              </div>
            </div>
          </section>

          {/* Right: Analysis Panel (Bento Grid Style) */}
          <section className="w-full lg:w-[450px] flex flex-col gap-stack-lg overflow-y-auto pb-4 pr-2 custom-scrollbar h-full">
            {/* Persistent Educational Anchor */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-10">
                <span className="material-symbols-outlined text-9xl">security</span>
              </div>
              <h2 className="font-headline text-headline-md text-on-surface mb-2 relative z-10">Analogi Sederhana</h2>
              <p className="text-body-lg text-on-surface italic leading-snug relative z-10">
                &quot;Jangan buka pintu untuk orang yang tidak dikenal.&quot;
              </p>
              <p className="text-body-md text-on-surface-variant mt-4 relative z-10">
                Sama seperti dunia nyata, di dunia digital kita tidak boleh sembarangan menerima &apos;paket&apos; atau &apos;membuka pintu&apos; (mengunduh file) dari nomor yang tidak kita simpan.
              </p>
            </div>

            {/* Dynamic Analysis Content Area */}
            <div className="flex flex-col gap-stack-md transition-opacity duration-300">
              {/* Default State (Instructional) */}
              {analysisType === 'default' && (
                <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-outline-variant rounded-2xl bg-surface-container-lowest/50">
                  <span className="material-symbols-outlined text-4xl text-outline-variant mb-4">touch_app</span>
                  <h3 className="text-body-md font-semibold text-on-surface mb-2">Mulai Pemeriksaan</h3>
                  <p className="text-body-sm text-on-surface-variant max-w-xs">
                    Klik pada pengirim, pesan teks, atau file di layar obrolan untuk melihat analisis keamanan.
                  </p>
                </div>
              )}

              {/* State: Sender Analysis */}
              {analysisType === 'sender' && (
                <div className="flex flex-col gap-stack-sm bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant shadow-sm animate-in fade-in zoom-in duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-status-warning/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-status-warning text-sm">person_off</span>
                    </div>
                    <h3 className="text-body-md font-semibold text-on-surface">Analisis Pengirim</h3>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-xl">
                    <p className="text-body-md font-bold text-on-surface mb-1">+62 812-9988-7766</p>
                    <p className="text-body-sm text-on-surface-variant">Nomor ini tidak ada dalam daftar kontak Anda. Penipu sering menggunakan nomor acak atau nomor prabayar sekali pakai.</p>
                  </div>
                  <div className="flex items-start gap-2 mt-2">
                    <span className="material-symbols-outlined text-status-safe text-[20px]">check_circle</span>
                    <p className="text-body-sm text-on-surface"><strong>Saran:</strong> Abaikan pesan atau blokir nomor jika merasa curiga.</p>
                  </div>
                </div>
              )}

              {/* State: File/Message Analysis */}
              {(analysisType === 'file' || analysisType === 'message') && (
                <div className="flex flex-col gap-stack-sm bg-surface-container-lowest rounded-2xl p-5 border border-status-danger/30 shadow-md relative overflow-hidden animate-in fade-in zoom-in duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-status-danger"></div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-status-danger/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-status-danger text-sm">gpp_bad</span>
                    </div>
                    <h3 className="text-body-md font-semibold text-status-danger">Bahaya Utama Terdeteksi</h3>
                  </div>
                  <div className="bg-error-container/20 p-4 rounded-xl border border-error-container/30">
                    <p className="text-body-md font-bold text-on-error-container mb-1">Format File .APK</p>
                    <p className="text-body-sm text-on-surface-variant">
                      File berakhiran <strong>.APK</strong> adalah aplikasi Android. Undangan pernikahan asli biasanya berupa tautan web atau gambar (.JPG/.PDF), <strong>bukan aplikasi</strong>.
                    </p>
                  </div>
                  <p className="text-body-sm text-on-surface mt-2 bg-surface-container-low p-3 rounded-lg">
                    Jika diunduh dan dipasang, aplikasi palsu ini bisa mencuri data pribadi, membaca SMS OTP, dan menguras rekening bank Anda.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
