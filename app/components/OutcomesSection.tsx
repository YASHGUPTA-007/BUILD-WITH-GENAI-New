"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "../hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const METRICS = [
  { value:"94",  unit:"%",   label:"Placement Rate",          sub:"within 90 days" },
  { value:"18",  unit:"L+",  label:"Average CTC",             sub:"across placed engineers" },
  { value:"180", unit:"+",   label:"Live Engineering Hours",  sub:"per cohort" },
  { value:"13",  unit:"",    label:"Production Deployments",  sub:"per engineer" },
];
const OUTCOMES = [
  { role:"AI / ML Engineer",        cos:["Startups","Series B+","Enterprise"] },
  { role:"LLM Systems Engineer",    cos:["Product Companies","AI Labs"] },
  { role:"MLOps / AI Infra",        cos:["FinTech","HealthTech","SaaS"] },
  { role:"Founding AI Engineer",    cos:["Pre-Seed","Seed","Series A"] },
];
const COMPANIES = ["Razorpay","Zepto","Groww","Meesho","Lenskart","Postman","BrowserStack","Chargebee","Freshworks","PhonePe"];

export default function OutcomesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".oc-rule", { scaleX: 0, duration: 1.6, ease: "expo.out", transformOrigin: "left", scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } });
      gsap.from(".oc-mc", { y: 30, opacity: 0, duration: 0.75, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: ".oc-metrics", start: "top 82%" } });
      gsap.from(".oc-item", { y: 25, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: ".oc-grid", start: "top 80%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="outcomes" ref={sectionRef} style={{ background: "#EAE4DA", borderTop: "1px solid rgba(28,25,23,0.08)", padding: "clamp(5rem,10vh,9rem) 0" }}>
      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1.5rem,5vw,5rem)" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
          <span style={MXS}>005 — Outcomes & Placement</span>
          <span style={MXS}>Cohort 01 & 02 Data</span>
        </div>
        <div className="oc-rule" style={RULE} />

        <div style={{ margin: "clamp(2.5rem,5vh,4rem) 0" }}>
          <h2 style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(2.2rem,4.5vw,4.5rem)", letterSpacing: "-0.042em", color: "#1C1917", lineHeight: 0.92 }}>
            Engineering outcomes,<br />
            <span style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontStyle: "italic", color: "#8B3A26", fontSize: "clamp(2.4rem,5vw,5rem)" }}>not promises.</span>
          </h2>
        </div>

        {/* Metrics */}
        <div className="oc-metrics" style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: "1px", background: "rgba(28,25,23,0.10)", marginBottom: "clamp(3rem,6vh,5rem)" }}>
          {METRICS.map(({ value, unit, label, sub }) => (
            <div key={label} className="oc-mc" style={{ padding: "clamp(1.5rem,2.5vw,2.5rem) clamp(1.2rem,2vw,2rem)", background: "#EAE4DA" }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", marginBottom: "8px" }}>
                <span style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(2.5rem,4.2vw,4rem)", letterSpacing: "-0.05em", color: "#1C1917", lineHeight: 1 }}>{value}</span>
                <span style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(1.3rem,2.2vw,2.2rem)", color: "#8B3A26", lineHeight: 1, paddingBottom: "4px" }}>{unit}</span>
              </div>
              <p style={{ fontFamily: "var(--font-body,'Inter')", fontWeight: 500, fontSize: "0.85rem", color: "#1C1917", marginBottom: "4px" }}>{label}</p>
              <p style={{ ...MXS, color: "rgba(28,25,23,0.35)", fontSize: "8.5px" }}>{sub}</p>
            </div>
          ))}
        </div>

        <div className="oc-grid" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "clamp(2rem,5vw,6rem)" }}>
          {/* Role outcomes */}
          <div>
            <p style={{ ...MXS, marginBottom: "20px" }}>Where our engineers land</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {OUTCOMES.map(({ role, cos }) => (
                <div key={role} className="oc-item" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(28,25,23,0.08)" }}>
                  <p style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 600, fontSize: "clamp(0.95rem,1.3vw,1.12rem)", letterSpacing: "-0.02em", color: "#1C1917" }}>{role}</p>
                  <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    {cos.map(c => (
                      <span key={c} style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "8.5px", letterSpacing: "0.1em", padding: "3px 8px", background: "rgba(28,25,23,0.05)", border: "1px solid rgba(28,25,23,0.10)", color: "#5E574F", textTransform: "uppercase" }}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Companies + testimonial */}
          <div>
            <p style={{ ...MXS, marginBottom: "20px" }}>Engineers now work at</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "clamp(2rem,4vh,3rem)" }}>
              {COMPANIES.map(c => (
                <div key={c} className="oc-item" style={{ padding: "9px 14px", border: "1px solid rgba(28,25,23,0.12)", fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 500, fontSize: "11px", color: "rgba(28,25,23,0.5)", letterSpacing: "-0.01em", transition: "all .2s", cursor: "default" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.color="#1C1917"; (e.currentTarget as HTMLDivElement).style.borderColor="rgba(28,25,23,0.28)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.color="rgba(28,25,23,0.5)"; (e.currentTarget as HTMLDivElement).style.borderColor="rgba(28,25,23,0.12)"; }}
                >{c}</div>
              ))}
            </div>
            <div style={{ padding: "clamp(1.2rem,2vw,2rem)", borderLeft: "2px solid rgba(139,58,38,0.4)", background: "rgba(139,58,38,0.03)" }}>
              <p style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(28,25,23,0.7)", marginBottom: "16px" }}>
                "The level of depth here is unlike anything in the Indian market. I went from knowing LangChain basics to running a multi-agent RAG pipeline in production within 4 months."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#DDD6CA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#8B3A26", fontWeight: 700, fontFamily: "var(--font-display)" }}>A</div>
                <div>
                  <p style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontSize: "12px", fontWeight: 600, color: "#1C1917" }}>Arjun Mehra</p>
                  <p style={{ ...MXS, fontSize: "8px", color: "rgba(28,25,23,0.38)" }}>AI Engineer · Razorpay · Cohort 01</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MXS: React.CSSProperties = { fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "9.5px", letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(28,25,23,0.4)" };
const RULE: React.CSSProperties = { width: "100%", height: "1px", background: "rgba(28,25,23,0.10)", transformOrigin: "left center" };
