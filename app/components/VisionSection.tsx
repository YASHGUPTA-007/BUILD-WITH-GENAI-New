"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useIsMobile } from "../hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  { n: "01", title: "Engineering First",  body: "Every concept is learned by building. No passive video lectures. No theoretical overview. You ship production-level AI systems from week one — code reviewed, deployed, evaluated." },
  { n: "02", title: "Cohort Discipline",  body: "You move with a cohort of serious engineers on fixed start dates. Weekly unlocks, accountability structures, and peer review are built into the architecture." },
  { n: "03", title: "Outcome Obsessed",   body: "Career placement is not a side-effect — it is the core metric. Our curriculum is reverse-engineered from what India's best AI teams actually hire for." },
];

export default function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".v-rule", { scaleX: 0, duration: 1.8, ease: "expo.out", transformOrigin: "left", stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
      gsap.from(".v-line", { yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.1, scrollTrigger: { trigger: ".v-statement", start: "top 78%" } });
      gsap.from(".v-pillar", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: ".v-pillars", start: "top 80%" } });
      gsap.from(".v-word", { opacity: 0, duration: 0.45, ease: "power2.out", stagger: 0.04, scrollTrigger: { trigger: ".v-quote", start: "top 76%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const QUOTE = "We are not producing prompt engineers. We are producing the architects of AI infrastructure — engineers who build the systems that power the next decade.".split(" ");

  return (
    <section id="vision" ref={sectionRef} style={{ background: "#F0EBE1", padding: "clamp(6rem,12vh,10rem) 0 clamp(5rem,10vh,8rem)", borderTop: "1px solid rgba(28,25,23,0.08)" }}>
      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1.5rem,5vw,5rem)" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
          <span style={MXS}>002 — Vision & Philosophy</span>
          <span style={MXS}>GenAI Academy · Est. 2024</span>
        </div>
        <div className="v-rule" style={RULE} />

        {/* Large manifesto */}
        <div className="v-statement" style={{ margin: "clamp(3rem,7vh,6rem) 0" }}>
          {[
            { t: "This is not a course.", c: "#1C1917" },
            { t: "This is not a bootcamp.", c: "rgba(28,25,23,0.22)" },
            { t: "This is a residency.", c: "#8B3A26" },
          ].map(({ t, c }) => (
            <div key={t} style={{ overflow: "hidden", marginBottom: "0.04em" }}>
              <div className="v-line" style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(2.6rem,5.2vw,5.2rem)", lineHeight: 0.92, letterSpacing: "-0.044em", color: c, display: "block" }}>{t}</div>
            </div>
          ))}
        </div>

        <div className="v-rule" style={{ ...RULE, marginBottom: "clamp(3rem,6vh,5rem)" }} />

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "clamp(2rem,6vw,7rem)", alignItems: "start" }}>

          {/* Pillars */}
          <div className="v-pillars" style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem,4vh,3rem)" }}>
            {PILLARS.map(({ n, title, body }) => (
              <div key={n} className="v-pillar">
                <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "12px" }}>
                  <span style={{ ...MXS, color: "#8B3A26" }}>{n}</span>
                  <div style={{ flex: 1, height: "1px", background: "rgba(28,25,23,0.10)" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontSize: "clamp(1.1rem,1.5vw,1.4rem)", fontWeight: 600, letterSpacing: "-0.02em", color: "#1C1917", marginBottom: "10px" }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-body,'Inter')", fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.78, color: "#5E574F" }}>{body}</p>
              </div>
            ))}
          </div>

          {/* Quote + founder */}
          <div style={{ position: isMobile ? "static" : "sticky", top: "120px" }}>
            <p className="v-quote" style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',Georgia,serif)", fontStyle: "italic", fontSize: "clamp(1.3rem,2.1vw,1.95rem)", fontWeight: 500, lineHeight: 1.45, color: "rgba(28,25,23,0.75)", marginBottom: "clamp(2rem,4vh,3rem)" }}>
              {QUOTE.map((w, i) => (<span key={i} className="v-word" style={{ display: "inline" }}>{w}{" "}</span>))}
            </p>

            <div style={{ borderLeft: "2px solid rgba(139,58,38,0.4)", paddingLeft: "20px", marginBottom: "clamp(2rem,4vh,3rem)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "1.5px solid rgba(28,25,23,0.12)" }}>
                  <Image src="/sohamsir.png" alt="Soham Sharma" width={44} height={44} style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "100%" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontSize: "13px", fontWeight: 600, color: "#1C1917", lineHeight: 1.2 }}>Soham Sharma</p>
                  <p style={{ ...MXS, color: "rgba(28,25,23,0.38)", marginTop: "3px", fontSize: "8.5px" }}>Founder, GenAI Academy</p>
                </div>
              </div>
              <p style={{ fontFamily: "var(--font-body,'Inter')", fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "#5E574F" }}>
                After training engineers at top product companies, Soham built GenAI Academy to create the LLM infrastructure talent India's AI ecosystem desperately needs — starting with a cohort-based residency that puts production outcomes first.
              </p>
            </div>

            {/* Fact grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(28,25,23,0.10)" }}>
              {[
                { v: "100%",  l: "Hands-On"       },
                { v: "Live",  l: "3 Sessions/Week"  },
                { v: "1:10",  l: "Mentor Ratio"    },
                { v: "Open",  l: "Portfolio Rights" },
              ].map(({ v, l }) => (
                <div key={l} style={{ padding: "18px 20px", background: "#F0EBE1" }}>
                  <p style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "1.35rem", letterSpacing: "-0.03em", color: "#1C1917", lineHeight: 1 }}>{v}</p>
                  <p style={{ ...MXS, color: "#9A938B", marginTop: "5px" }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MXS: React.CSSProperties = { fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "9.5px", letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(28,25,23,0.4)" };
const RULE: React.CSSProperties = { width: "100%", height: "1px", background: "rgba(28,25,23,0.10)", transformOrigin: "left center" };
