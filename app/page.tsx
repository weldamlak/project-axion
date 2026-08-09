"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Smartphone,
  Eye,
  Hand,
  Camera,
  Sun,
  Award,
  Zap,
  ChevronRight,
  Sparkles,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

export default function AxionPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Gallery image generation (1.jpg to 9.jpg)
  const projectGallery = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/images/${i + 1}.jpg`,
    alt: `AXION Smart Wheelchair Prototype Image ${i + 1}`,
  }));

  // Competition results images
  const competitionGallery = [
    {
      id: "res1",
      src: "/images/result1.jpg",
      title: "Competition Winner",
      subtitle: "First Place Project Presentation & Live Demo",
    },
    {
      id: "res2",
      src: "/images/result2.jpg",
      title: "Award Ceremony",
      subtitle: "Recognition for Innovation in Assistive Technology",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Accent Gradients */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500 to-blue-600 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12 space-y-24">
        {/* Navigation Bar */}
        <header className="flex items-center justify-between border-b border-slate-800/80 pb-6">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="font-bold tracking-tight text-lg">AXION</h1>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-400 font-medium">
            <a href="#features" className="hover:text-cyan-400 transition-colors">
              Features
            </a>
            <a href="#presentation" className="hover:text-cyan-400 transition-colors">
              Deck
            </a>
            <a href="#results" className="hover:text-cyan-400 transition-colors">
              Results
            </a>
            <a href="#gallery" className="hover:text-cyan-400 transition-colors">
              Gallery
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="text-center space-y-6 pt-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />By Weldamlak Ayenew
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            AXION Smart Wheelchair
          </h1>
          
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed font-light">
            An intelligent mobility solution engineered to provide independence, enhanced safety, and seamless everyday comfort for individuals with disabilities.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <a
              href="#presentation"
              className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
            >
              View Presentation <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="https://axionet.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-sm hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              Previous Prototype <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Core Capabilities / Features */}
        <section id="features" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Key Innovations</h2>
            <p className="text-sm text-slate-400">Integrated hardware & AI multi-sensor network</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mobile Control */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg">AXION Mobile App</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Full wireless remote control, telemetry feedback, and customized movement modes directly from your smartphone.
              </p>
            </div>

            {/* Object Following & Protection */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg">Smart Navigation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Autonomous object-following within 20–100 cm and immediate collision avoidance backed by precise ultrasonic distance measurement.
              </p>
            </div>

            {/* Touchless Push */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Hand className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg">Touchless Assistance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Detects simulated pushing gestures from 5 cm behind, automatically driving forward with side sensors actively protecting boundaries.
              </p>
            </div>

            {/* AI CCTV Monitoring */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg">AI CCTV & Audio Speech</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                ESP32-CAM streams live video to family members while computer vision detects 80+ objects with real-time positional voice output.
              </p>
            </div>

            {/* Multi-Energy System */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all space-y-3 md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Sun className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Tri-Source Hybrid Power</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Designed for absolute reliability with three power inputs: direct AC charging, high-efficiency solar harvesting, and self-generating kinetic power backup.
              </p>
            </div>
          </div>
        </section>

        {/* Embedded Canva Presentation */}
        <section id="presentation" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Presentation Deck</h2>
              <p className="text-sm text-slate-400">Interactive slide overview of the project</p>
            </div>
            <a
              href="https://www.canva.com/design/DAHRx7IohHo/DI0X16uc7283oRzeY0biZA/view?utm_content=DAHRx7IohHo&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
            >
              Open in Canva <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
            <iframe
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.canva.com/design/DAHRx7IohHo/DI0X16uc7283oRzeY0biZA/view?embed"
              allowFullScreen
              allow="fullscreen"
              title="DRAFT PRESENTATION.pptx by Weldamlak Ayenew"
            />
          </div>
        </section>

        {/* Competition Results */}
        <section id="results" className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Competition Results</h2>
              <p className="text-sm text-slate-400">Recognition & showcase awards</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitionGallery.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video cursor-pointer"
                onClick={() => setActiveImage(item.src)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                    Award Win
                  </span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prototype Gallery */}
        <section id="gallery" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Hardware Gallery</h2>
            <p className="text-sm text-slate-400">Build process, microcontrollers, and prototype photos</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {projectGallery.map((img) => (
              <div
                key={img.id}
                className="group relative aspect-square rounded-xl overflow-hidden border border-slate-800 bg-slate-900 cursor-pointer"
                onClick={() => setActiveImage(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-medium text-white">
                  View Image
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Creator Info Section */}
        <section className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Weldamlak Ayenew</h3>
              <p className="text-sm text-cyan-400 font-medium">
                Creator & Hardware Innovator
              </p>
            </div>
            <a
              href="mailto:weldamlak.ae@gmail.com"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
            AXION was engineered to bridge the gap between low-cost hardware accessibility and high-performance assistive robotics. Combining custom Arduino circuitry, AI edge vision, and multi-power redundancy, it redefines affordable independent mobility.
          </p>
        </section>

        {/* Minimal Footer */}
        <footer className="border-t border-slate-800/80 pt-8 text-center text-xs text-slate-500 space-y-2">
          <p>© {new Date().getFullYear()} AXION Smart Wheelchair. Designed by Weldamlak Ayenew.</p>
          <p className="text-slate-600">Built with Next.js, Tailwind CSS & Arduino Engineering</p>
        </footer>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={activeImage}
              alt="Expanded view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}