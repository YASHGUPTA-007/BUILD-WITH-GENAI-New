"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "../hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".cta-rule", { scaleX: 0, duration: 2, ease: "expo.out", transformOrigin: "left", scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } });
      gsap.from(".cta-line", { yPercent: 110, duration: 1.2, ease: "power4.out", stagger: 0.1, scrollTrigger: { trigger: ".cta-hl", start: "top 80%" } });
      gsap.from(".cta-sub", { y: 24, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.08, delay: 0.2, scrollTrigger: { trigger: ".cta-hl", start: "top 78%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="apply" ref={sectionRef} style={{ background: "#F0EBE1", borderTop: "1px solid rgba(28,25,23,0.08)", padding: "clamp(6rem,12vh,11rem) 0 clamp(7rem,14vh,12rem)", position: "relative", overflow: "hidden" }}>

      {/* Background watermark */}
      <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(8rem,22vw,24rem)", letterSpacing: "-0.06em", color: "rgba(28,25,23,0.028)", whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none", lineHeight: 1 }}>
        APPLY
      </div>

      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1.5rem,5vw,5rem)", position: "relative", zIndex: 1 }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
          <span style={MXS}>008 — Apply for Cohort</span>
          <span style={MXS}>Cohort 03 · Q3 2026</span>
        </div>
        <div className="cta-rule" style={RULE} />

        <div className="cta-hl" style={{ margin: "clamp(3rem,7vh,6rem) 0 clamp(3rem,6vh,5rem)" }}>
          {[
            { t:"COHORT 03",  c:"rgba(28,25,23,0.22)", f:"var(--font-display,'Space Grotesk')", fw:700, fs:"clamp(3.8rem,8.5vw,8.8rem)", li:0.88, ls:"-0.05em", italic:false },
            { t:"NOW",        c:"#1C1917",              f:"var(--font-display,'Space Grotesk')", fw:700, fs:"clamp(3.8rem,8.5vw,8.8rem)", li:0.88, ls:"-0.05em", italic:false },
            { t:"Accepting.", c:"#8B3A26",              f:"var(--font-cormorant,'Cormorant Garamond',serif)", fw:600, fs:"clamp(4rem,9vw,9.5rem)", li:0.88, ls:"-0.03em", italic:true },
          ].map(({ t, c, f, fw, fs, li, ls, italic }) => (
            <div key={t} style={{ overflow: "hidden" }}>
              <div className="cta-line" style={{ fontFamily: f, fontWeight: fw, fontSize: fs, lineHeight: li, letterSpacing: ls, color: c, fontStyle: italic ? "italic" : "normal", display: "block", paddingBottom: "0.04em" }}>{t}</div>
            </div>
          ))}
        </div>

        <div className="cta-rule" style={{ ...RULE, marginBottom: "clamp(2.5rem,5vh,4rem)" }} />

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr auto", gap: "2rem", alignItems: "flex-end" }}>
          <div style={{ maxWidth: "540px" }}>
            <p className="cta-sub" style={{ fontFamily: "var(--font-body,'Inter')", fontSize: "clamp(0.95rem,1.3vw,1.08rem)", fontWeight: 300, lineHeight: 1.78, color: "#5E574F", marginBottom: "clamp(1.5rem,3vh,2.5rem)" }}>
              This is an application — not a purchase. We review every candidate to ensure cohort quality, because the engineers you study with directly affect your outcomes. If selected, you receive an offer letter within 72 hours.
            </p>
            <div className="cta-sub" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Application takes ~10 minutes","Decision within 72 hours","No payment until accepted","Seat held for 7 days post-offer","Intro call with Soham (recommended)"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "4px", height: "4px", background: "#8B3A26", borderRadius: "50%", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "11px", color: "#5E574F", letterSpacing: "0.05em" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-sub" style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: isMobile ? "stretch" : "flex-end" }}>
            <a href="#application-form" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(0.9rem,1.2vw,1rem)", letterSpacing: "-0.01em", padding: "clamp(14px,2vh,20px) clamp(28px,3vw,44px)", background: "#1C1917", color: "#F0EBE1", transition: "background .2s, transform .2s", whiteSpace: "nowrap", minWidth: "260px" }}
              onMouseEnter={e => { e.currentTarget.style.background="#8B3A26"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="#1C1917"; e.currentTarget.style.transform="translateY(0)"; }}>
              Apply for Cohort 03 →
            </a>
            <a href="#program" style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(28,25,23,0.42)", padding: "12px 24px", border: "1px solid rgba(28,25,23,0.18)", transition: "all .2s", textAlign: "center" }}
              onMouseEnter={e => { e.currentTarget.style.color="#1C1917"; e.currentTarget.style.borderColor="rgba(28,25,23,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.color="rgba(28,25,23,0.42)"; e.currentTarget.style.borderColor="rgba(28,25,23,0.18)"; }}>
              View Curriculum
            </a>
            <p style={{ ...MXS, color: "rgba(28,25,23,0.32)", fontSize: "8.5px" }}>14 seats remaining · ₹1,50,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const MXS: React.CSSProperties = { fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "9.5px", letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(28,25,23,0.4)" };
const RULE: React.CSSProperties = { width: "100%", height: "1px", background: "rgba(28,25,23,0.10)", transformOrigin: "left center" };
