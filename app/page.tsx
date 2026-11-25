"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Clock,
  ShieldCheck,
  Sparkles,
  Calendar,
  FileText,
  Sliders,
  MessageSquare,
  Award,
  Layers,
  X,
} from "lucide-react";

const SERVICES = [
  {
    id: "brand-arch",
    code: "01",
    category: "Brand Architecture",
    title: "Executive Brand Identity & Visual Positioning",
    description:
      "Perancangan ulang identitas visual menyeluruh, sistem tipografi editorial, panduan merek komprehensif, dan narasi strategis kelas atas.",
    basePrice: 18500000,
    duration: "3 – 4 Minggu",
    deliverables: [
      "Brand Strategy & Positioning Blueprint",
      "Bespoke Logotype & Monogram System",
      "60-Page Executive Brand Guidelines",
      "Stationery & Pitch Deck Master Kit",
    ],
  },
  {
    id: "digital-flagship",
    code: "02",
    category: "Digital Flagship",
    title: "Bespoke Web Experience & Interactive Platform",
    description:
      "Pengembangan website flagship berkecepatan tinggi dengan animasi mikro presisi, arsitektur konversi premium, dan optimasi SEO teknis.",
    basePrice: 28000000,
    duration: "4 – 6 Minggu",
    deliverables: [
      "Custom UI/UX Art Direction (Desktop & Mobile)",
      "Next.js High-Performance Architecture",
      "Interactive Scope / Booking Integration",
      "90-Day Priority Technical Concierge",
    ],
  },
  {
    id: "growth-advisory",
    code: "03",
    category: "Growth Advisory",
    title: "High-Ticket Funnel & Go-To-Market Strategy",
    description:
      "Penyusunan ekosistem akuisisi klien bernilai tinggi, audit perjalanan pelanggan, serta naskah penawaran eksekutif.",
    basePrice: 15000000,
    duration: "2 – 3 Minggu",
    deliverables: [
      "High-Ticket Offer Restructuring",
      "Executive Sales Deck & Proposal Copy",
      "Automated Lead Qualification Flow",
      "Weekly 1-on-1 Partner Advisory",
    ],
  },
  {
    id: "retainer-partner",
    code: "04",
    category: "Private Retainer",
    title: "Dedicated Creative & Tech Partner (Monthly)",
    description:
      "Akses prioritas langsung ke tim direktur kreatif dan arsitek teknologi untuk eksekusi berkelanjutan tanpa merekrut tim internal.",
    basePrice: 35000000,
    duration: "Bulanan (Fleksibel)",
    deliverables: [
      "Unlimited Strategic & Design Requests",
      "48-Hour Priority Turnaround",
      "Dedicated Slack / Private Channel",
      "Bi-Weekly Executive Review",
    ],
  },
];

const TIMELINES = [
  {
    id: "standard",
    label: "Standard Pace",
    sub: "Jadwal normal sesuai estimasi",
    multiplier: 1,
  },
  {
    id: "priority",
    label: "Priority Sprint (+25%)",
    sub: "Percepatan pengiriman 35% lebih cepat",
    multiplier: 1.25,
  },
  {
    id: "executive",
    label: "Executive Fast-Track (+50%)",
    sub: "Tim khusus dedikasi penuh 7 hari",
    multiplier: 1.5,
  },
];

const formatIDR = (amount: number) => {
  return "Rp " + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default function OpusBespoke() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "brand-arch",
    "digital-flagship",
  ]);
  const [timelineId, setTimelineId] = useState<string>("standard");
  const [includeAdvisory, setIncludeAdvisory] = useState<boolean>(true);
  const [clientName, setClientName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [selectedBrief, setSelectedBrief] = useState<
    (typeof SERVICES)[0] | null
  >(null);

  const toggleService = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedServices = SERVICES.filter((s) => selectedIds.includes(s.id));
  const currentTimeline =
    TIMELINES.find((t) => t.id === timelineId) || TIMELINES[0];

  const baseSum = selectedServices.reduce((acc, item) => acc + item.basePrice, 0);
  const advisoryFee = includeAdvisory && selectedServices.length > 0 ? 5000000 : 0;
  const totalEstimate = Math.round(
    (baseSum + advisoryFee) * currentTimeline.multiplier
  );

  const generateWhatsAppLink = () => {
    const serviceList =
      selectedServices.length > 0
        ? selectedServices.map((s) => `- ${s.title}`).join("\n")
        : "- Konsultasi Khusus (Custom Scope)";

    const message = `Halo Partner Opus Bespoke, saya ingin menjadwalkan Private Discovery Call.

Nama: ${clientName || "Calon Klien"}
Perusahaan / Brand: ${companyName || "-"}

Lingkup Layanan Pilihan:
${serviceList}

Kecepatan Eksekusi: ${currentTimeline.label}
Pendampingan Strategis: ${includeAdvisory ? "Ya (Included)" : "Tidak"}
Estimasi Investasi: ${formatIDR(totalEstimate)}

Mohon info jadwal yang tersedia minggu ini.`;

    return `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-[#F4F1EA] selection:bg-[#C6A87C] selection:text-[#070B14]">
      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#070B14]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A87C]/50 bg-[#C6A87C]/10 text-[#C6A87C]">
              <span className="font-serif text-lg font-semibold">O</span>
            </div>
            <div>
              <span className="font-serif text-lg tracking-widest uppercase text-white">
                Opus <span className="text-[#C6A87C]">Bespoke</span>
              </span>
              <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400">
                Advisory & Digital Flagship
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-xs tracking-widest uppercase text-slate-300 md:flex">
            <a href="#kapabilitas" className="transition hover:text-[#C6A87C]">
              Kapabilitas
            </a>
            <a href="#kalkulator" className="transition hover:text-[#C6A87C]">
              Scope Builder
            </a>
            <a href="#standar" className="transition hover:text-[#C6A87C]">
              Standar Eksekutif
            </a>
          </nav>

          <a
            href="#kalkulator"
            className="flex items-center gap-2 rounded-full border border-[#C6A87C] bg-[#C6A87C] px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#070B14] transition hover:bg-transparent hover:text-[#C6A87C]"
          >
            Simulasi Proyek
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-[#C6A87C]/10 blur-3xl" />

        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C6A87C]/30 bg-[#C6A87C]/5 px-4 py-1.5 text-xs tracking-[0.18em] uppercase text-[#C6A87C]">
            <Sparkles className="h-3.5 w-3.5" />
            Q4 / 2026 Client Intake — Terbatas 3 Slot Klien Baru
          </div>

          <h1 className="font-serif text-4xl leading-tight font-normal tracking-tight text-white sm:text-6xl">
            Arsitektur Merek & Teknologi untuk{" "}
            <span className="italic text-[#C6A87C]">Pemimpin Industri.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Kami merancang identitas digital berwibawa dan sistem akuisisi klien
            bernilai tinggi bagi firma konsultasi, pengembang properti, dan
            perusahaan visioner.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#kalkulator"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C6A87C] px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-[#070B14] transition hover:bg-[#d8be96] sm:w-auto"
            >
              Susun Estimasi Investasi
              <Sliders className="h-4 w-4" />
            </a>
            <a
              href="#kapabilitas"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-semibold tracking-widest uppercase text-white transition hover:border-[#C6A87C]/60 sm:w-auto"
            >
              Eksplorasi Layanan
            </a>
          </div>

          {/* METRICS BAR */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
            <div>
              <p className="font-serif text-2xl text-[#C6A87C] sm:text-3xl">
                Rp 42M+
              </p>
              <p className="mt-1 text-xs tracking-wider uppercase text-slate-400">
                Valuasi Klien Terdampak
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-white sm:text-3xl">98%</p>
              <p className="mt-1 text-xs tracking-wider uppercase text-slate-400">
                Retensi Klien Tahunan
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-white sm:text-3xl">
                14 Hari
              </p>
              <p className="mt-1 text-xs tracking-wider uppercase text-slate-400">
                Rata-Rata Peluncuran MVP
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-[#C6A87C] sm:text-3xl">
                1-on-1
              </p>
              <p className="mt-1 text-xs tracking-wider uppercase text-slate-400">
                Akses Langsung Partner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KAPABILITAS / KATALOG LAYANAN */}
      <section id="kapabilitas" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-[#C6A87C]">
              Core Capabilities
            </p>
            <h2 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
              Pilar Layanan Eksekutif
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Pilih satu atau kombinasikan beberapa pilar di bawah ini ke dalam
            simulasi investasi proyek Anda.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service) => {
            const isSelected = selectedIds.includes(service.id);
            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between rounded-2xl border p-7 transition duration-300 ${
                  isSelected
                    ? "border-[#C6A87C] bg-[#0D1322]"
                    : "border-white/10 bg-[#0B101D]/70 hover:border-white/25"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-sm tracking-widest text-[#C6A87C]">
                      {service.code} / {service.category.toUpperCase()}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                      <Clock className="h-3.5 w-3.5 text-[#C6A87C]" />
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-xs text-slate-300">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <Check className="h-4 w-4 shrink-0 text-[#C6A87C]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-[11px] tracking-wider uppercase text-slate-400">
                      Mulai Dari
                    </p>
                    <p className="font-serif text-xl text-white">
                      {formatIDR(service.basePrice)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedBrief(service)}
                      className="rounded-full border border-white/15 px-3.5 py-2 text-xs text-slate-300 transition hover:border-white/40 hover:text-white"
                    >
                      Detail Brief
                    </button>
                    <button
                      onClick={() => toggleService(service.id)}
                      className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${
                        isSelected
                          ? "bg-[#C6A87C] text-[#070B14]"
                          : "border border-[#C6A87C]/50 text-[#C6A87C] hover:bg-[#C6A87C] hover:text-[#070B14]"
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          Terpilih
                        </>
                      ) : (
                        "+ Pilih Pilar"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE PROJECT SCOPE & INVESTMENT CALCULATOR */}
      <section
        id="kalkulator"
        className="border-y border-white/10 bg-[#0A0F1C] px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs tracking-[0.22em] uppercase text-[#C6A87C]">
              Interactive Scope Builder
            </p>
            <h2 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
              Simulasi Investasi & Jadwal Proyek
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
              Sesuaikan kebutuhan lingkup pekerjaan dan kecepatan eksekusi untuk
              mendapatkan estimasi transparan sebelum sesi konsultasi.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* PANEL KONFIGURASI KIRI */}
            <div className="space-y-8 rounded-2xl border border-white/10 bg-[#070B14] p-7 lg:col-span-7">
              {/* 1. PILIH LAYANAN */}
              <div>
                <h3 className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C6A87C]">
                  <Layers className="h-4 w-4" />
                  1. Pilih Lingkup Layanan ({selectedServices.length} Dipilih)
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {SERVICES.map((srv) => {
                    const active = selectedIds.includes(srv.id);
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => toggleService(srv.id)}
                        className={`flex items-start justify-between rounded-xl border p-4 text-left transition ${
                          active
                            ? "border-[#C6A87C] bg-[#C6A87C]/10"
                            : "border-white/10 bg-white/[0.02] hover:border-white/25"
                        }`}
                      >
                        <div>
                          <p className="text-xs font-semibold text-white">
                            {srv.category}
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            {formatIDR(srv.basePrice)}
                          </p>
                        </div>
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            active
                              ? "border-[#C6A87C] bg-[#C6A87C] text-[#070B14]"
                              : "border-white/25"
                          }`}
                        >
                          {active && <Check className="h-3 w-3" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. KECEPATAN EKSEKUSI */}
              <div>
                <h3 className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C6A87C]">
                  <Clock className="h-4 w-4" />
                  2. Kecepatan & Prioritas Eksekusi
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {TIMELINES.map((tl) => {
                    const active = timelineId === tl.id;
                    return (
                      <button
                        key={tl.id}
                        type="button"
                        onClick={() => setTimelineId(tl.id)}
                        className={`rounded-xl border p-3.5 text-left transition ${
                          active
                            ? "border-[#C6A87C] bg-[#C6A87C]/10"
                            : "border-white/10 bg-white/[0.02] hover:border-white/25"
                        }`}
                      >
                        <p className="text-xs font-semibold text-white">
                          {tl.label}
                        </p>
                        <p className="mt-1 text-[11px] leading-snug text-slate-400">
                          {tl.sub}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. OPSI PENDAMPINGAN EKSEKUTIF */}
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div>
                  <p className="text-sm font-medium text-white">
                    Executive Boardroom Advisory (+Rp 5.000.000)
                  </p>
                  <p className="text-xs text-slate-400">
                    Sesi presentasi langsung ke jajaran direksi & pelatihan tim
                    internal pasca-peluncuran.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIncludeAdvisory(!includeAdvisory)}
                  className={`h-6 w-11 shrink-0 rounded-full p-1 transition ${
                    includeAdvisory ? "bg-[#C6A87C]" : "bg-slate-700"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-[#070B14] transition ${
                      includeAdvisory ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* 4. DATA SINGKAT KLIEN */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs text-slate-400">
                    Nama Lengkap / Jabatan
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Hendra Wijaya (CEO)"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-[#0B101D] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-[#C6A87C] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-slate-400">
                    Nama Perusahaan / Institusi
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Nusantara Capital"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-[#0B101D] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-[#C6A87C] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* PANEL RINGKASAN PENAWARAN KANAN */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#C6A87C]/40 bg-gradient-to-b from-[#111829] to-[#070B14] p-7 lg:col-span-5">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A87C]">
                    Executive Proposal Summary
                  </span>
                  <FileText className="h-4 w-4 text-[#C6A87C]" />
                </div>

                <div className="mt-5 space-y-3 text-sm">
                  {selectedServices.length === 0 ? (
                    <p className="text-xs italic text-slate-400">
                      Belum ada pilar layanan dipilih. Pilih minimal satu layanan
                      di samping untuk menghitung estimasi.
                    </p>
                  ) : (
                    selectedServices.map((s) => (
                      <div
                        key={s.id}
                        className="flex items-center justify-between text-slate-200"
                      >
                        <span className="text-xs">{s.category}</span>
                        <span className="font-mono text-xs">
                          {formatIDR(s.basePrice)}
                        </span>
                      </div>
                    ))
                  )}

                  {includeAdvisory && selectedServices.length > 0 && (
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-xs">Boardroom Advisory</span>
                      <span className="font-mono text-xs">
                        {formatIDR(5000000)}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs text-slate-400">
                    <span>Jadwal Eksekusi</span>
                    <span className="text-white">{currentTimeline.label}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-xs tracking-wider uppercase text-slate-400">
                  Estimasi Total Investasi
                </p>
                <p className="mt-1 font-serif text-3xl text-[#C6A87C] sm:text-4xl">
                  {formatIDR(totalEstimate)}
                </p>
                <p className="mt-2 text-[11px] text-slate-400">
                  *Termasuk perjanjian kerahasiaan (NDA) dan hak kepemilikan
                  penuh atas seluruh aset kode & desain.
                </p>

                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#C6A87C] py-3.5 text-xs font-bold tracking-widest uppercase text-[#070B14] transition hover:bg-[#dec39b]"
                >
                  <Calendar className="h-4 w-4" />
                  Kunci Jadwal Discovery Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STANDAR EKSEKUTIF / GARANSI */}
      <section id="standar" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#0B101D] p-6">
            <ShieldCheck className="h-7 w-7 text-[#C6A87C]" />
            <h3 className="mt-4 font-serif text-xl text-white">
              Strict NDA & Confidentiality
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Seluruh data strategis, struktur bisnis, dan kekayaan intelektual
              klien dilindungi perjanjian kerahasiaan resmi sejak hari pertama.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0B101D] p-6">
            <Award className="h-7 w-7 text-[#C6A87C]" />
            <h3 className="mt-4 font-serif text-xl text-white">
              Senior Partner Execution
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Proyek Anda tidak didelegasikan ke pekerja magang—ditangani
              langsung oleh principal architect dengan standar estetika global.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0B101D] p-6">
            <MessageSquare className="h-7 w-7 text-[#C6A87C]" />
            <h3 className="mt-4 font-serif text-xl text-white">
              Private Concierge Line
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Komunikasi langsung tanpa birokrasi berbelit dengan pembaruan
              progres terukur setiap 48 jam.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-xs text-slate-500">
        <p className="font-serif text-sm tracking-widest uppercase text-slate-300">
          Opus <span className="text-[#C6A87C]">Bespoke</span>
        </p>
        <p className="mt-2">
          Jakarta • Singapore • Private Client Advisory. All Rights Reserved.
        </p>
      </footer>

      {/* MODAL DETAIL BRIEF LAYANAN */}
      {selectedBrief && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-[#C6A87C]/40 bg-[#0B101D] p-7 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs tracking-widest uppercase text-[#C6A87C]">
                  {selectedBrief.category}
                </span>
                <h3 className="mt-1 font-serif text-2xl text-white">
                  {selectedBrief.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedBrief(null)}
                className="rounded-full p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {selectedBrief.description}
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-[#070B14] p-4">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#C6A87C]">
                Deliverables Utama:
              </p>
              <ul className="mt-3 space-y-2 text-xs text-slate-200">
                {selectedBrief.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#C6A87C]" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase text-slate-400">
                  Investasi Dasar
                </p>
                <p className="font-serif text-xl text-white">
                  {formatIDR(selectedBrief.basePrice)}
                </p>
              </div>
              <button
                onClick={() => {
                  if (!selectedIds.includes(selectedBrief.id)) {
                    toggleService(selectedBrief.id);
                  }
                  setSelectedBrief(null);
                }}
                className="rounded-full bg-[#C6A87C] px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-[#070B14] hover:bg-[#dec39b]"
              >
                Tambahkan ke Simulasi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}