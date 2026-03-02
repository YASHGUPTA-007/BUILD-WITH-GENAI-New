"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOKENS = [
  "attention","transformer","token","embed","LLM","RAG","vector",
  "agent","inference","weight","layer","decode","encode","gradient",
  "fine-tune","pipeline","retrieval","prompt","context","parameter",
  "logit","softmax","norm","residual","dropout","batch","shard",
  "RLHF","reward","latent","cluster","index","chunk","rerank",
  "tool-call","router","chain","memory","cache","stream","delta",
  "system","instruction","sampling","beam","temperature","top-p",
  "KV-cache","flash-attn","LoRA","PEFT","vLLM","quantize","distill",
];

const TRACKS = [
  { n: "01", label: "LLM Systems & Infrastructure" },
  { n: "02", label: "RAG & Retrieval Architecture"  },
  { n: "03", label: "Agent Orchestration & Deploy"  },
];

/* ─────────────────────────────────────────────────── */

export default function HeroVideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const rafRef     = useRef<number>(0);

  /* ── Token Stream Canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Col = { x: number; rows: { t: string; y: number; a: number; s: number }[] };
    let cols: Col[] = [];

    const init = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const GAP = 105;
      const n   = Math.ceil(canvas.width / GAP);
      cols = Array.from({ length: n }, (_, i) => ({
        x: i * GAP + 14,
        rows: Array.from({ length: 10 }, (_, j) => ({
          t: TOKENS[Math.floor(Math.random() * TOKENS.length)],
          y: -j * 95 - Math.random() * 180,
          a: 0.04 + Math.random() * 0.10,
          s: 0.28 + Math.random() * 0.48,
        })),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font      = '11px "JetBrains Mono","Fira Code",monospace';
      ctx.fillStyle = "#1A1A1A";
      for (const col of cols) {
        for (const r of col.rows) {
          ctx.globalAlpha = r.a;
          ctx.fillText(r.t, col.x, r.y);
          r.y += r.s;
          if (r.y > canvas.height + 50) {
            r.y = -70 - Math.random() * 100;
            r.t = TOKENS[Math.floor(Math.random() * TOKENS.length)];
            r.a = 0.04 + Math.random() * 0.10;
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

  /* ── GSAP Choreography ── */
  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {

      /* Phase 1 — Activation */
      gsap.from(".rx", {
        scaleX: 0, duration: 1.8, ease: "expo.out",
        stagger: 0.1, transformOrigin: "left center",
      });

      // Headline masked slide-up
      const lines = gsap.utils.toArray<HTMLElement>(".hl > span");
      gsap.from(lines, {
        yPercent: 112, duration: 1.15, ease: "power4.out", stagger: 0.11, delay: 0.2,
      });

      gsap.from(".eu", {
        y: 22, opacity: 0, duration: 0.85, ease: "power3.out", stagger: 0.07, delay: 0.7,
      });

      gsap.from(".ef", {
        opacity: 0, duration: 0.75, ease: "power2.out", stagger: 0.05, delay: 0.25,
      });

      /* Phase 2 — Structural Compression (scroll pin) */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=68%",
          pin: true,
          scrub: 1.3,
          anticipatePin: 1,
        },
      });
      tl
        .to(canvasRef.current,  { scale: 1.045,  ease: "none" }, 0)
        .to(".hl-block",        { y: -38,        ease: "none" }, 0)
        .to(".grid-struct",     { opacity: 1,    ease: "none" }, 0)
        .to(".top-bar",         { opacity: 0.28, ease: "none" }, 0)
        .to(".btm-bar",         { opacity: 0.45, y: 14,        ease: "none" }, 0);

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* ─────────────────────────────────────────────── */
  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: "680px",
        overflow: "hidden",
        background: "#F5F3EF",
      }}
    >
      {/* ─ Canvas ─ */}
      <canvas
        ref={canvasRef}
        aria-hidden
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />

      {/* ─ Veil: 14% only ─ */}
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "rgba(245,243,239,0.14)", pointerEvents: "none" }} />

      {/* ─ Structural grid overlay (Phase 2) ─ */}
      <div
        aria-hidden
        className="grid-struct"
        style={{
          position: "absolute", inset: 0, opacity: 0, pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(26,26,26,0.042) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(26,26,26,0.042) 1px,transparent 1px)",
          backgroundSize: "74px 74px",
        }}
      />

      {/* ─────────── CONTENT WRAPPER ─────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          maxWidth: "1520px",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 5rem)",
        }}
      >

        {/* ══ TOP BAR ══ */}
        <header className="top-bar" style={{ paddingTop: "clamp(1.5rem,3vh,2rem)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="ef" style={MONO_SM}>GenAI Academy / 2026</span>
            <span className="ef" style={{ ...MONO_SM, display: "none", opacity: 0.45 }}
              /* show only on wide screens via media-like trick — use CSS class */
            >Engineering Residency — Intake 03</span>
            <span className="ef" style={MONO_SM}>001 — SYST.&nbsp;INFRA</span>
          </div>
          <div className="rx" style={RULE_H} />
        </header>

        {/* ══ MAIN: Headline + Right Panel ══ */}
        <div
          className="hl-block"
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr clamp(220px,26%,340px)",
            gap: "clamp(2rem,4vw,5rem)",
            alignItems: "flex-end",
            paddingBottom: "clamp(1.5rem,4vh,3rem)",
            paddingTop: "clamp(1.5rem,4vh,3.5rem)",
          }}
        >
          {/* ── Left: Headline ── */}
          <div>
            {/* Eyebrow */}
            <div className="eu" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "clamp(10px,1.8vh,18px)" }}>
              <div style={{ width: "28px", height: "1px", background: "#C4603A", flexShrink: 0 }} />
              <span style={{ ...MONO_XS, color: "#C4603A", fontWeight: 600, letterSpacing: "0.3em" }}>
                24-Week Engineering Residency
              </span>
            </div>

            {/* Giant headline — clipped mask per line */}
            <h1 style={{ overflow: "hidden", margin: 0 }}>
              {[
                { text: "ENGINEER", color: "#1A1A1A" },
                { text: "GEN AI",   color: "#C4603A"  },
                { text: "SYSTEMS.", color: "#1A1A1A"  },
              ].map(({ text, color }) => (
                <div key={text} className="hl" style={{ overflow: "hidden", display: "block", lineHeight: 0.88 }}>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-space,'Space Grotesk',system-ui,sans-serif)",
                      fontWeight: 900,
                      fontSize: "clamp(3.6rem,7.8vw,7.6rem)",
                      lineHeight: 0.89,
                      letterSpacing: "-0.045em",
                      color,
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </h1>

            {/* Body copy */}
            <p
              className="eu"
              style={{
                marginTop: "clamp(1rem,2.5vh,1.8rem)",
                fontFamily: "var(--font-body,'Inter',system-ui)",
                fontSize: "clamp(0.92rem,1.3vw,1.1rem)",
                fontWeight: 300,
                lineHeight: 1.68,
                color: "rgba(26,26,26,0.62)",
                maxWidth: "540px",
              }}
            >
              Move beyond wrappers. Build the foundational layers — LLM
              infrastructure, production-grade RAG pipelines, and autonomous
              agent orchestration systems that deploy at scale.
            </p>
          </div>

          {/* ── Right panel ── */}
          <div
            className="hidden lg:flex flex-col"
            style={{ gap: "clamp(1rem,2vh,1.5rem)", paddingBottom: "2px" }}
          >
            {/* Track list */}
            <div>
              <div className="rx ef" style={RULE_H} />
              <p className="ef" style={{ ...MONO_XS, color: "rgba(26,26,26,0.38)", margin: "14px 0 10px" }}>
                Curriculum Tracks
              </p>
              {TRACKS.map(({ n, label }) => (
                <div key={n} className="eu" style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-start" }}>
                  <span style={{ ...MONO_XS, color: "#C4603A", flexShrink: 0, paddingTop: "1px" }}>{n}</span>
                  <span style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "11.5px", color: "rgba(26,26,26,0.68)", lineHeight: 1.45 }}>
                    {label}
                  </span>
                </div>
              ))}
              <div className="ef" style={RULE_H} />
            </div>

            {/* Admission card */}
            <div
              className="eu"
              style={{
                padding: "14px 16px",
                border: "1px solid rgba(196,96,58,0.32)",
                background: "rgba(196,96,58,0.035)",
              }}
            >
              <p style={{ ...MONO_XS, color: "#C4603A", marginBottom: "7px" }}>
                [ Selective Admission ]
              </p>
              <p style={{ fontFamily: "var(--font-body,'Inter',system-ui)", fontSize: "12px", color: "rgba(26,26,26,0.58)", lineHeight: 1.55 }}>
                Next cohort: Q3 2026<br />
                Limited seats · Application required
              </p>
            </div>
          </div>
        </div>

        {/* ══ BOTTOM BAR ══ */}
        <footer className="btm-bar" style={{ paddingBottom: "clamp(1.2rem,2.5vh,1.8rem)" }}>
          <div className="rx" style={{ ...RULE_H, marginBottom: "clamp(14px,2vh,22px)" }} />

          <div style={{ display: "flex", alignItems: "flex-end", gap: "clamp(1.5rem,3vw,3.5rem)" }}>
            {/* Metrics */}
            {[
              { v: "24",  l: "Weeks"      },
              { v: "3",   l: "Tracks"     },
              { v: "Q3",  l: "2026 Cohort"},
              { v: "↑",   l: "Live + Async" },
            ].map(({ v, l }) => (
              <div key={l} className="eu">
                <p style={{
                  fontFamily: "var(--font-space,'Space Grotesk',system-ui)",
                  fontSize: "clamp(1.55rem,2.2vw,2.1rem)",
                  fontWeight: 900,
                  lineHeight: 1,
                  color: "#1A1A1A",
                  letterSpacing: "-0.035em",
                }}>
                  {v}
                </p>
                <p style={{ ...MONO_XS, color: "rgba(26,26,26,0.4)", marginTop: "4px" }}>{l}</p>
              </div>
            ))}

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Secondary label */}
            <p className="eu hidden lg:block" style={{ ...MONO_XS, color: "rgba(26,26,26,0.38)", maxWidth: "220px", lineHeight: 1.55 }}>
              Production deployment required to graduate. Real systems. Real stakes.
            </p>

            {/* CTA */}
            <button
              className="eu"
              style={{
                fontFamily: "var(--font-mono,'JetBrains Mono',monospace)",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                padding: "13px 30px",
                border: "1px solid #1A1A1A",
                color: "#1A1A1A",
                background: "transparent",
                cursor: "pointer",
                transition: "background 0.22s, color 0.22s",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                const b = e.currentTarget;
                b.style.background = "#1A1A1A";
                b.style.color = "#F5F3EF";
              }}
              onMouseLeave={e => {
                const b = e.currentTarget;
                b.style.background = "transparent";
                b.style.color = "#1A1A1A";
              }}
            >
              Apply — Intake 03&nbsp;→
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}

/* ── Shared token style objects ── */
const MONO_SM: React.CSSProperties = {
  fontFamily: "var(--font-mono,'JetBrains Mono','Fira Code',monospace)",
  fontSize: "10px",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: "rgba(26,26,26,0.52)",
};

const MONO_XS: React.CSSProperties = {
  fontFamily: "var(--font-mono,'JetBrains Mono','Fira Code',monospace)",
  fontSize: "9.5px",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: "rgba(26,26,26,0.42)",
};

const RULE_H: React.CSSProperties = {
  width: "100%",
  height: "1px",
  background: "rgba(26,26,26,0.14)",
  transformOrigin: "left center",
  flexShrink: 0,
};
