"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { musicData, RubabStringSpec } from "@/data/music";
import { socials } from "@/data/socials";
import {
  Volume2,
  VolumeX,
  Play,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Activity,
  Radio,
  Sliders,
  CheckCircle,
  Download,
  Smartphone,
} from "lucide-react";
import { InstagramIcon } from "./SocialIcons";

export default function RubabSection() {
  const [activeString, setActiveString] = useState<RubabStringSpec>(
    musicData.rubabTunerProject.strings[2]
  );
  const [isPlayingTone, setIsPlayingTone] = useState(false);
  const [centsDeviation, setCentsDeviation] = useState(0);
  const [currentFreq, setCurrentFreq] = useState(261.63);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const playRubabTone = (freq: number, noteName: string) => {
    try {
      if (!audioContextRef.current) {
        const AudioContextClass =
          window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioContextClass();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.28, ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 2.25);

      oscillatorRef.current = osc;
      gainRef.current = gain;
      setIsPlayingTone(true);

      setTimeout(() => {
        setIsPlayingTone(false);
      }, 2200);
    } catch (e) {
      console.warn("Web Audio gesture required:", e);
    }
  };

  const handleSelectString = (str: RubabStringSpec) => {
    setActiveString(str);
    setCurrentFreq(str.frequency);
    setCentsDeviation(0);
    playRubabTone(str.frequency, str.note);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let phase = 0;

    const render = () => {
      phase += 0.05;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(37, 37, 40, 0.4)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      const numBars = 48;
      const barWidth = width / numBars - 2;

      for (let i = 0; i < numBars; i++) {
        const freqRatio = (currentFreq - 100) / 320;
        const targetBin = Math.floor(freqRatio * numBars);
        const dist = Math.abs(i - targetBin);

        let barHeight = Math.max(
          6,
          Math.sin(phase * 2 + i * 0.3) * 12 +
            (dist < 5 ? (5 - dist) * 14 : 2) +
            (isPlayingTone ? 18 : 6)
        );

        const x = i * (barWidth + 2);
        const y = height - barHeight;

        const grad = ctx.createLinearGradient(0, height, 0, y);
        grad.addColorStop(0, "rgba(201, 168, 106, 0.2)");
        grad.addColorStop(1, i === targetBin ? "#DFBA73" : "#C9A86A");

        ctx.fillStyle = grad;
        ctx.fillRect(x, y, barWidth, barHeight);
      }

      ctx.beginPath();
      ctx.strokeStyle = "#DFBA73";
      ctx.lineWidth = 2;
      for (let x = 0; x < width; x++) {
        const y =
          height / 2 +
          Math.sin((x * 0.03 * currentFreq) / 100 + phase) *
            (isPlayingTone ? 24 : 10) *
            Math.cos(x * 0.01);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [currentFreq, isPlayingTone]);

  return (
    <section
      id="rubab-tuner-showcase"
      className="relative py-24 sm:py-32 bg-[#181819] border-t border-[#252528] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="w-6 h-[1px] bg-[#C9A86A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium">
                The Intersection
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#EDEDEE] tracking-tight mb-4">
              From Rubab to Code
            </h2>
            <p className="text-sm sm:text-base text-[#D2D2D4] leading-relaxed font-light">
              {musicData.fromRubabToCode.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {musicData.fromRubabToCode.flow.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-sm bg-[#1D1D20] border border-[#252528] hover:border-[#C9A86A]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] text-[#C9A86A] block mb-2 font-bold">
                    STEP 0{idx + 1}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#EDEDEE] mb-2 leading-snug">
                    {item.label}
                  </h4>
                </div>
                <p className="text-[11px] text-[#8E8E93] leading-relaxed font-light">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-sm bg-[#1A1A1E] border border-[#252528] p-6 sm:p-10 lg:p-12 mb-24 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 pb-8 border-b border-[#252528]">
            <div className="max-w-xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#222226] border border-[#252528] text-xs text-[#DFBA73] mb-4">
                <Activity className="w-3.5 h-3.5 text-[#C9A86A]" />
                <span className="font-mono">LIVE AUDIO DSP ENGINE</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#EDEDEE] mb-3">
                {musicData.rubabTunerProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D2D2D4] leading-relaxed font-light">
                {musicData.rubabTunerProject.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/downloads/rubab-tuner-v1.0.apk"
                download
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#22C55E]/15 hover:bg-[#22C55E]/25 text-[#4ADE80] border border-[#22C55E]/40 rounded-sm text-xs uppercase tracking-wider font-bold transition-all shadow-[0_2px_15px_rgba(34,197,94,0.15)] group"
              >
                <Smartphone className="w-4 h-4 text-[#4ADE80] group-hover:scale-110 transition-transform" />
                <span>Download Android APK (3.7 MB)</span>
                <Download className="w-3.5 h-3.5 text-[#4ADE80]" />
              </a>
              <a
                href="https://github.com/carlitobarcha/rubab-chromatic-tuner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#202024] hover:bg-[#282830] text-[#EDEDEE] border border-[#252528] rounded-sm text-xs uppercase tracking-wider font-semibold transition-all"
              >
                <span>GitHub Engine</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#DFBA73]" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-sm bg-[#151517] border border-[#252528]">
              
              <div className="w-full flex items-center justify-between text-xs text-[#8E8E93] mb-4 font-mono">
                <span>YIN_PITCH_DETECT</span>
                <span className="text-[#DFBA73]">A4 = 440.0 Hz</span>
                <span>±50 CENTS</span>
              </div>

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="#222226"
                    strokeWidth="10"
                    fill="none"
                  />
                  <path
                    d="M 90 20 A 80 80 0 0 1 110 20"
                    stroke="#4ADE80"
                    strokeWidth="12"
                    fill="none"
                  />
                  <line
                    x1="100"
                    y1="100"
                    x2={100 + 72 * Math.cos(((centsDeviation - 90) * Math.PI) / 180)}
                    y2={100 + 72 * Math.sin(((centsDeviation - 90) * Math.PI) / 180)}
                    stroke="#DFBA73"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                  <circle cx="100" cy="100" r="7" fill="#C9A86A" />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  <span className="font-serif text-5xl sm:text-6xl font-bold text-[#DFBA73] tracking-tight">
                    {activeString.note}
                  </span>
                  <span className="font-mono text-sm sm:text-base font-semibold text-[#EDEDEE] mt-1">
                    {currentFreq.toFixed(2)} Hz
                  </span>
                  <span className="text-[11px] font-mono text-[#4ADE80] mt-1 tracking-wider uppercase">
                    ● IN TUNE ({centsDeviation} CENTS)
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => playRubabTone(activeString.frequency, activeString.note)}
                className="mt-4 inline-flex items-center space-x-2 px-6 py-2.5 rounded-sm bg-[#C9A86A] text-[#181819] font-bold text-xs uppercase tracking-wider hover:bg-[#DFBA73] transition-all shadow-md"
              >
                <Volume2 className="w-4 h-4" />
                <span>Pluck {activeString.note} String</span>
              </button>
            </div>

            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8E8E93] font-medium block mb-3">
                  Click String to Pluck &amp; Inspect Frequency:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {musicData.rubabTunerProject.strings.map((str) => {
                    const isSelected = activeString.name === str.name;
                    return (
                      <button
                        key={str.name}
                        onClick={() => handleSelectString(str)}
                        className={`p-3 rounded-sm text-left transition-all border ${
                          isSelected
                            ? "bg-[#C9A86A]/20 border-[#C9A86A] text-[#DFBA73] shadow-[0_0_12px_rgba(201,168,106,0.2)]"
                            : "bg-[#181819] border-[#252528] text-[#D2D2D4] hover:border-[#38383D]"
                        }`}
                      >
                        <span className="font-serif text-xl font-bold block mb-0.5">
                          {str.note}
                        </span>
                        <span className="font-mono text-[11px] text-[#8E8E93] block">
                          {str.frequency} Hz
                        </span>
                        <span className="text-[9px] uppercase tracking-wider text-[#C9A86A] block mt-1 truncate">
                          {str.role.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 rounded-sm bg-[#141416] border border-[#252528]">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8E8E93] mb-2">
                  <span>2048-BIN FFT SPECTRUM &amp; WAVEFORM</span>
                  <span className="text-[#C9A86A]">AUDIO_SAMPLE 48kHz</span>
                </div>
                <div className="w-full h-28 bg-[#101012] rounded-sm overflow-hidden border border-[#202024]">
                  <canvas
                    ref={canvasRef}
                    width={500}
                    height={112}
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#D2D2D4]">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C9A86A]" />
                  <span>Autocorrelation Pitch Estimation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C9A86A]" />
                  <span>Sub-Cent Parabolic Interpolation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C9A86A]" />
                  <span>Sympathetic Tarab Resonance Filter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C9A86A]" />
                  <span>Mobile &amp; Web Audio Cross-Platform</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="rounded-sm bg-[#1A1815] border border-[#C9A86A]/40 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Codes &amp; Chords Musical Identity</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#EDEDEE]">
                {musicData.rubabjonBrand.name}
              </h3>

              <p className="font-serif text-xl text-[#DFBA73] italic">
                &ldquo;{musicData.rubabjonBrand.tagline}&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-[#D2D2D4] leading-relaxed font-light max-w-2xl">
                {musicData.rubabjonBrand.mission}
              </p>

              <div className="pt-2">
                <a
                  href={musicData.rubabjonBrand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#25221B] hover:bg-[#C9A86A] text-[#DFBA73] hover:text-[#181819] border border-[#C9A86A]/50 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Connect with {musicData.rubabjonBrand.handle}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl border border-[#C9A86A]/40 bg-[#151412] overflow-hidden shadow-[0_0_30px_rgba(201,168,106,0.15)] group">
                <Image
                  src="/images/music/rubab-stage-solo.jpg"
                  alt="Khalid Abbas Barcha playing Rubab live on stage"
                  fill
                  className="object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121213] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-2 inset-x-2 text-center text-[10px] font-mono text-[#DFBA73] bg-[#121213]/80 backdrop-blur-sm py-1 rounded">
                  Live Stage Performance
                </div>
              </div>
            </div>

          </div>

          {/* Performance & Studio Showcase Strip */}
          <div className="mt-10 pt-8 border-t border-[#252528] grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#252528] group">
              <Image
                src="/images/music/rubab-studio-sanctuary.jpg"
                alt="Khalid Abbas Barcha studio sanctuary"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121213] via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-2 left-3 right-3 text-xs font-mono text-[#EDEDEE]">
                <p className="font-semibold text-[#DFBA73]">Studio Sanctuary</p>
                <p className="text-[10px] text-[#8E8E93]">Multi-instrument workstation</p>
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#252528] group">
              <Image
                src="/images/music/rubab-live-band.jpg"
                alt="Khalid Abbas Barcha live band ensemble"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121213] via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-2 left-3 right-3 text-xs font-mono text-[#EDEDEE]">
                <p className="font-semibold text-[#DFBA73]">Concert Jam</p>
                <p className="text-[10px] text-[#8E8E93]">Center stage on Rubab</p>
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#252528] group">
              <Image
                src="/images/music/rubab-mountain-jam.jpg"
                alt="High-altitude acoustic jam in Karakoram"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121213] via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-2 left-3 right-3 text-xs font-mono text-[#EDEDEE]">
                <p className="font-semibold text-[#DFBA73]">Mountain Acoustic Jam</p>
                <p className="text-[10px] text-[#8E8E93]">Glacial valley duet</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
