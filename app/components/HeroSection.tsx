"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useIsMobile } from "../hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const TOKENS = [
  "attention","transformer","token","RAG","vector","agent","inference",
  "LangGraph","vLLM","LoRA","PEFT","embed","gradient","softmax","pipeline",
  "retrieval","prompt","context","logit","residual","KV-cache","fine-tune",
  "chunk","rerank","router","chain","memory","stream","tool-call","RLHF",
  "Pinecone","Weaviate","FAISS","cosine","OpenAI","Anthropic","LangChain",
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const rafRef     = useRef<number>(0);
  const isMobile   = useIsMobile();

  /* ── Token stream canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    type Row = { t: string; y: number; a: number; s: number };
    type Col = { x: number; rows: Row[] };
    let cols: Col[] = [];

    const init = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const GAP = 108;
      const n   = Math.ceil(canvas.width / GAP);
      cols = Array.from({ length: n }, (_, i) => ({
        x: i * GAP + 10,
        rows: Array.from({ length: 10 }, (_, j) => ({
          t: TOKENS[Math.floor(Math.random() * TOKENS.length)],
          y: -j * 95 - Math.random() * 200,
          a: 0.02 + Math.random() * 0.055,
          s: 0.18 + Math.random() * 0.36,
        })),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '10px "JetBrains Mono","Fira Code",monospace';
      ctx.fillStyle = "#1C1917";
      for (const col of cols) {
        for (const r of col.rows) {
          ctx.globalAlpha = r.a;
          ctx.fillText(r.t, col.x, r.y);
          r.y += r.s;
          if (r.y > canvas.height + 50) {
            r.y = -60 - Math.random() * 100;
            r.t = TOKENS[Math.floor(Math.random() * TOKENS.length)];
            r.a = 0.02 + Math.random() * 0.055;
          }
        }
      }
      ctx.globalAlpha = 1;
      rafRef.current  = requestAnimationFrame(draw);
    };

    init(); draw();
    const onResize = () => { cancelAnimationFrame(rafRef.current); init(); draw(); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", onResize); };
  }, []);

  /* ── GSAP entrance + scroll ── */
  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {

      gsap.from(".h-rule", {
        scaleX: 0, duration: 1.8, ease: "expo.out",
        transformOrigin: "left", stagger: 0.1,
      });

      gsap.from(".hl-mask > span", {
        yPercent: 108, duration: 1.15, ease: "power4.out", stagger: 0.1, delay: 0.2,
      });

      gsap.from(".hero-fade", {
        opacity: 0, y: 20, duration: 0.9, ease: "power3.out", stagger: 0.07, delay: 0.85,
      });

      gsap.from(".hero-meta", {
        opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.05, delay: 0.1,
      });

      // Soham figure: rises from bottom
      gsap.from(".soham-figure", {
        y: 70, opacity: 0, duration: 1.5, ease: "power3.out", delay: 0.3,
      });

      // Atmospheric glow expand
      gsap.from(".atm-glow", {
        scale: 0.55, opacity: 0, duration: 1.8, ease: "power2.out", delay: 0.15, transformOrigin: "center bottom",
      });

      // Floating badges stagger
      gsap.from(".float-badge", {
        opacity: 0, scale: 0.82, duration: 0.7, ease: "back.out(1.5)", stagger: 0.16, delay: 1.2,
      });

      // Decorative rings
      gsap.from(".deco-ring", {
        scale: 0, opacity: 0, duration: 1.2, ease: "power2.out", stagger: 0.2, delay: 0.5, transformOrigin: "center center",
      });

      // Scroll pin — desktop only
      if (isMobile) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=60%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });
      tl
        .to(".hero-text-col", { y: -44, ease: "none" }, 0)
        .to(".soham-figure",  { y: -30, ease: "none" }, 0)
        .to(".hero-top-bar",  { opacity: 0.2, ease: "none" }, 0)
        .to(".hero-btm-bar",  { opacity: 0.35, y: 14, ease: "none" }, 0)
        .to(canvasRef.current, { scale: 1.04, ease: "none" }, 0);

    }, sectionRef);
    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{ position: "relative", width: "100%", height: "100svh", minHeight: "700px", overflow: "hidden", background: "#F0EBE1" }}
    >
      {/* Canvas */}
      <canvas ref={canvasRef} aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />

      {/* ════════════════════════════════════════
          SOHAM — PNG floating figure, no box
          Absolutely positioned right → full-height
          ════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          right: isMobile ? 0 : "15%",
          bottom: 0,
          width: isMobile ? "clamp(160px, 52%, 240px)" : "clamp(260px, 34%, 460px)",
          height: isMobile ? "70%" : "100%",
          zIndex: 4,
          pointerEvents: "none",
        }}
      >
        {/* Layer 1: Ground-level atmospheric warmth */}
        <div className="atm-glow" aria-hidden style={{
          position: "absolute", inset: 0,
          background: [
            "radial-gradient(ellipse 85% 50% at 50% 100%, rgba(139,58,38,0.16) 0%, transparent 65%)",
            "radial-gradient(ellipse 65% 65% at 55% 68%,  rgba(28,25,23,0.055) 0%, transparent 58%)",
          ].join(","),
        }} />

        {/* Layer 2: Dot-grid texture, fades at edges */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(28,25,23,0.11) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 78% 88% at 50% 50%, black 25%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse 78% 88% at 50% 50%, black 25%, transparent 78%)",
        }} />

        {/* Layer 3: Outer decorative circle */}
        <div className="deco-ring" aria-hidden style={{
          position: "absolute",
          bottom: "-10%", left: "50%",
          transform: "translateX(-50%)",
          width: "82%", aspectRatio: "1",
          border: "1px solid rgba(139,58,38,0.12)", borderRadius: "50%",
        }} />

        {/* Layer 4: Inner dashed arc */}
        <div className="deco-ring" aria-hidden style={{
          position: "absolute",
          bottom: "-2%", left: "50%",
          transform: "translateX(-50%)",
          width: "54%", aspectRatio: "1",
          border: "1px dashed rgba(139,58,38,0.09)", borderRadius: "50%",
        }} />

        {/* Layer 5: Subtle horizon line at feet */}
        <div aria-hidden style={{
          position: "absolute",
          bottom: "0", left: "10%", right: "10%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(139,58,38,0.22) 30%, rgba(139,58,38,0.22) 70%, transparent)",
        }} />

        {/* Layer 6: The actual PNG — no background, no clipping */}
        <div className="soham-figure" style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/sohamsir.png"
            alt="Soham Sharma — Founder, GenAI Academy"
            fill
            priority
            style={{ objectFit: "contain", objectPosition: "bottom center" }}
          />
        </div>

        {/* ── Floating annotation badges — desktop only ── */}

        {/* Badge 1: Placement — top-left of figure */}
        <div className="float-badge" style={{
          position: "absolute", top: "16%", left: "-10%",
          display: isMobile ? "none" : undefined,
          zIndex: 8, pointerEvents: "all",
          background: "rgba(240,235,225,0.94)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(28,25,23,0.11)",
          padding: "11px 16px",
          boxShadow: "0 4px 28px rgba(28,25,23,0.07)",
        }}>
          <p style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(1.35rem,1.9vw,1.7rem)", letterSpacing: "-0.04em", color: "#1C1917", lineHeight: 1 }}>94%</p>
          <p style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "8px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#8B3A26", marginTop: "5px" }}>Placement Rate</p>
        </div>

        {/* Badge 2: Package — mid-right of figure */}
        <div className="float-badge" style={{
          position: "absolute", top: "38%", right: "12%",
          display: isMobile ? "none" : undefined,
          zIndex: 8, pointerEvents: "all",
          background: "#1C1917",
          padding: "11px 15px",
        }}>
          <p style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(1.05rem,1.5vw,1.35rem)", letterSpacing: "-0.03em", color: "#F0EBE1", lineHeight: 1 }}>₹18L+</p>
          <p style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "7.5px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(240,235,225,0.5)", marginTop: "5px" }}>Avg Package</p>
        </div>

        {/* Badge 3: Hours + Projects — lower-left */}
        <div className="float-badge" style={{
          position: "absolute", bottom: "28%", left: "-8%",
          display: isMobile ? "none" : "flex", alignItems: "center", gap: "12px",
          zIndex: 8, pointerEvents: "all",
          background: "rgba(240,235,225,0.90)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(139,58,38,0.16)",
          padding: "10px 14px",
        }}>
          <div>
            <p style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.03em", color: "#1C1917", lineHeight: 1 }}>180+</p>
            <p style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "7.5px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8B3A26", marginTop: "4px" }}>Live Hrs</p>
          </div>
          <div style={{ width: "1px", height: "26px", background: "rgba(28,25,23,0.12)" }} />
          <div>
            <p style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.03em", color: "#1C1917", lineHeight: 1 }}>13</p>
            <p style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "7.5px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8B3A26", marginTop: "4px" }}>Projects</p>
          </div>
        </div>

        {/* Name label — centered at figure's feet */}
        <div className="float-badge" style={{
          position: "absolute", bottom: "6.5%", left: "50%",
          transform: "translateX(-50%)",
          zIndex: 8, textAlign: "center", whiteSpace: "nowrap",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "20px", height: "1px", background: "rgba(139,58,38,0.5)" }} />
            <div>
              <p style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 600, fontSize: "12.5px", color: "#1C1917", letterSpacing: "0.01em", lineHeight: 1.2 }}>Soham Sharma</p>
              <p style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(28,25,23,0.44)", marginTop: "3px" }}>Founder, GenAI Academy</p>
            </div>
            <div style={{ width: "20px", height: "1px", background: "rgba(139,58,38,0.5)" }} />
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          CONTENT LAYER
          ════════════════════════════════════════ */}
      <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1.5rem,5vw,5rem)" }}>

        {/* TOP META BAR */}
        <header className="hero-top-bar" style={{ paddingTop: "clamp(5.5rem,8vh,6.5rem)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="hero-meta" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#8B3A26" }} />
              <span style={MSM}>Build With GenAI · 6-Month Bootcamp</span>
            </div>
            <span className="hero-meta" style={{ ...MSM, opacity: 0.42 }}>Cohort 03 · Q3 2026</span>
            <span className="hero-meta" style={MSM}>Est. 2024 · Soham Sharma</span>
          </div>
          <div className="h-rule" style={RULE} />
        </header>

        {/* TEXT COLUMN — left side */}
        <div
          className="hero-text-col"
          style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: isMobile ? "center" : "flex-end", paddingBottom: "clamp(3rem,6vh,5rem)", maxWidth: isMobile ? "100%" : "clamp(400px,56%,700px)" }}
        >
          <div className="hero-fade" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "clamp(1rem,2.5vh,2rem)" }}>
            <div style={{ width: "28px", height: "1px", background: "#8B3A26", flexShrink: 0 }} />
            <span style={{ ...MXS, color: "#8B3A26", fontWeight: 600, letterSpacing: "0.3em" }}>24-Week AI Engineering Bootcamp</span>
          </div>

          <h1 style={{ margin: 0 }}>
            {[
              { text: "Engineer",       serif: false, color: "#1C1917", fs: "clamp(3.8rem,7.8vw,8rem)",   ls: "-0.046em", fw: 700 },
              { text: "Intelligent",    serif: false, color: "#1C1917", fs: "clamp(3.8rem,7.8vw,8rem)",   ls: "-0.046em", fw: 700 },
              { text: "Infrastructure.",serif: true,  color: "#8B3A26", fs: "clamp(4rem,8.3vw,8.6rem)",   ls: "-0.03em",  fw: 600 },
            ].map(({ text, serif, color, fs, ls, fw }) => (
              <div key={text} className="hl-mask" style={{ overflow: "hidden", display: "block" }}>
                <span style={{
                  display: "block",
                  fontFamily: serif ? "var(--font-cormorant,'Cormorant Garamond',Georgia,serif)" : "var(--font-display,'Space Grotesk')",
                  fontWeight: fw,
                  fontStyle: serif ? "italic" : "normal",
                  fontSize: fs,
                  lineHeight: 0.88,
                  letterSpacing: ls,
                  color,
                  paddingBottom: "0.045em",
                }}>
                  {text}
                </span>
              </div>
            ))}
          </h1>

          <p className="hero-fade" style={{ marginTop: "clamp(1.4rem,3vh,2.4rem)", fontFamily: "var(--font-body,'Inter')", fontSize: "clamp(0.9rem,1.2vw,1.05rem)", fontWeight: 300, lineHeight: 1.78, color: "#5E574F", maxWidth: "450px" }}>
            A cohort-based engineering residency for working professionals. Build production-grade LLM systems, RAG architectures, and autonomous agents — 180+ live hours, 13 deployed projects.
          </p>

          <div className="hero-fade" style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "clamp(1.5rem,3vh,2.4rem)", flexWrap: "wrap" }}>
            <a href="#apply" style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 600, fontSize: "13px", letterSpacing: "0.01em", padding: "14px 30px", background: "#1C1917", color: "#F0EBE1", transition: "background .22s, transform .2s", display: "inline-block", whiteSpace: "nowrap" }}
              onMouseEnter={e => { e.currentTarget.style.background="#8B3A26"; e.currentTarget.style.transform="translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="#1C1917"; e.currentTarget.style.transform="translateY(0)"; }}>
              Apply Now →
            </a>
            <a href="#program" style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "10.5px", letterSpacing: "0.18em", textTransform: "uppercase", padding: "14px 26px", border: "1px solid rgba(28,25,23,0.22)", color: "#5E574F", transition: "all .2s", display: "inline-block", whiteSpace: "nowrap" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="#1C1917"; e.currentTarget.style.color="#1C1917"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(28,25,23,0.22)"; e.currentTarget.style.color="#5E574F"; }}>
              View Curriculum
            </a>
          </div>

          <div className="hero-fade" style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "clamp(1rem,2vh,1.5rem)", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "1.25rem", letterSpacing: "-0.02em", color: "#1C1917" }}>₹1,50,000</span>
            <div style={{ width: "1px", height: "13px", background: "rgba(28,25,23,0.18)" }} />
            <span style={{ ...MXS, color: "#9A938B" }}>7-Day Money-Back</span>
            <div style={{ width: "1px", height: "13px", background: "rgba(28,25,23,0.18)" }} />
            <span style={{ ...MXS, color: "#9A938B" }}>EMI Available</span>
          </div>
        </div>

        {/* BOTTOM METRICS BAR */}
        <footer className="hero-btm-bar" style={{ paddingBottom: "clamp(1.2rem,2.5vh,2rem)" }}>
          <div className="h-rule" style={{ ...RULE, marginBottom: "16px" }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            {[
              { v:"24",   l:"Weeks"    }, { v:"180+", l:"Live Hrs" },
              { v:"3/wk", l:"Sessions" }, { v:"13",   l:"Projects" },
              { v:"94%",  l:"Placed"   }, { v:"₹18L+",l:"Avg CTC"  },
            ].map(({ v, l }) => (
              <div key={l} className="hero-meta" style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(1.2rem,1.8vw,1.65rem)", letterSpacing: "-0.035em", color: "#1C1917", lineHeight: 1 }}>{v}</span>
                <span style={{ ...MXS, color: "#9A938B" }}>{l}</span>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}

const MSM: React.CSSProperties = { fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "10px", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(28,25,23,0.50)" };
const MXS: React.CSSProperties = { fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "9.5px", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(28,25,23,0.42)" };
const RULE: React.CSSProperties = { width: "100%", height: "1px", background: "rgba(28,25,23,0.12)", transformOrigin: "left center" };
