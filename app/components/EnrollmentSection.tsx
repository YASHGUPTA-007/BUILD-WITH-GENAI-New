"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "../hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const BATCHES = [
  { n:"01", title:"Cohort 01", status:"CLOSED",   start:"Jan 2025", seats:"32/32", fill:1 },
  { n:"02", title:"Cohort 02", status:"CLOSED",   start:"May 2025", seats:"32/32", fill:1 },
  { n:"03", title:"Cohort 03", status:"OPEN NOW", start:"Aug 2026", seats:"18/32", fill:0.56 },
  { n:"04", title:"Cohort 04", status:"UPCOMING", start:"Jan 2027", seats:"0/32",  fill:0 },
];
const PAYMENT = [
  { label:"One-Time Payment",   amount:"₹1,50,000",  note:"Best value · Save ₹15,000",  accent:true  },
  { label:"2 Instalments",      amount:"₹82,500 ×2", note:"₹1,65,000 total",             accent:false },
  { label:"3 Instalments",      amount:"₹55,000 ×3", note:"₹1,65,000 total",             accent:false },
  { label:"4-Month EMI",        amount:"~₹41,250/mo",note:"₹1,65,000 total · 0% options",accent:false },
];
const INCLUDED = ["24-week cohort curriculum","180+ live session hours","13 production projects","1:1 mentor code reviews","Career placement support","Private cohort Discord","Verified certification","Lifetime alumni access"];

export default function EnrollmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".enr-rule", { scaleX: 0, duration: 1.6, ease: "expo.out", transformOrigin: "left", scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } });
      gsap.from(".enr-item", { y: 28, opacity: 0, duration: 0.75, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: ".enr-body", start: "top 80%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="enrollment" ref={sectionRef} style={{ background: "#F0EBE1", borderTop: "1px solid rgba(28,25,23,0.08)", padding: "clamp(5rem,10vh,9rem) 0" }}>
      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1.5rem,5vw,5rem)" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
          <span style={MXS}>006 — Enrollment & Pricing</span>
          <span style={MXS}>Cohort-Based Model</span>
        </div>
        <div className="enr-rule" style={RULE} />

        <div className="enr-body" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "clamp(2rem,6vw,7rem)", margin: "clamp(2.5rem,5vh,4rem) 0 0", alignItems: "start" }}>

          {/* Batch calendar */}
          <div>
            <h2 style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(2rem,3.8vw,3.8rem)", letterSpacing: "-0.042em", color: "#1C1917", lineHeight: 0.92, marginBottom: "clamp(2rem,4vh,3rem)" }}>
              Cohort{" "}
              <span style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontStyle: "italic", color: "#8B3A26", fontSize: "clamp(2.2rem,4vw,4.2rem)" }}>03</span>{" "}
              is open.
            </h2>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {BATCHES.map(({ n, title, status, start, seats, fill }) => (
                <div key={n} className="enr-item" style={{ display: "grid", gridTemplateColumns: "auto 1fr auto auto", gap: "16px", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(28,25,23,0.08)", opacity: status==="CLOSED" ? 0.38 : 1 }}>
                  <span style={{ ...MXS, color: status==="OPEN NOW" ? "#8B3A26" : undefined }}>{n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 600, fontSize: "0.98rem", color: "#1C1917", marginBottom: "3px" }}>{title}</p>
                    <p style={{ ...MXS, fontSize: "8px", color: "rgba(28,25,23,0.38)" }}>Start: {start}</p>
                  </div>
                  <div style={{ width: "80px" }}>
                    <div style={{ width: "100%", height: "2px", background: "rgba(28,25,23,0.10)", borderRadius: "2px", overflow: "hidden" }}>
                      <div style={{ width:`${fill*100}%`, height:"100%", background: fill===1 ? "rgba(28,25,23,0.25)" : "#8B3A26", borderRadius:"2px" }} />
                    </div>
                    <p style={{ ...MXS, fontSize: "8px", color: "rgba(28,25,23,0.35)", marginTop: "3px", textAlign: "right" }}>{seats}</p>
                  </div>
                  <span style={{ ...MXS, fontSize: "8px", padding: "4px 10px", border: `1px solid ${status==="OPEN NOW" ? "rgba(139,58,38,0.4)" : "rgba(28,25,23,0.12)"}`, color: status==="OPEN NOW" ? "#8B3A26" : "rgba(28,25,23,0.35)" }}>{status}</span>
                </div>
              ))}
            </div>

            <div className="enr-item" style={{ marginTop: "clamp(1.5rem,3vh,2.5rem)", padding: "16px 20px", border: "1px solid rgba(139,58,38,0.22)", background: "rgba(139,58,38,0.04)" }}>
              <p style={{ ...MXS, color: "#8B3A26", marginBottom: "6px" }}>[ 14 Seats Remaining — Cohort 03 ]</p>
              <p style={{ fontFamily: "var(--font-body,'Inter')", fontSize: "12px", fontWeight: 300, color: "#5E574F", lineHeight: 1.65 }}>
                Applications are reviewed on a rolling basis. Seats fill 6–8 weeks before batch start. Early applicants receive priority review and optional intro call with Soham.
              </p>
            </div>

            <div className="enr-item" style={{ marginTop: "12px", padding: "14px 20px", border: "1px solid rgba(28,25,23,0.10)", background: "rgba(28,25,23,0.03)" }}>
              <p style={{ fontFamily: "var(--font-body,'Inter')", fontSize: "12px", fontWeight: 300, color: "#5E574F", lineHeight: 1.65 }}>
                <span style={{ fontWeight: 500, color: "#1C1917" }}>Enrollment Flow:</span> Application form → Intro call (recommended) → Payment → Immediate dashboard access → Content unlock on batch start date.
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div>
            <p style={{ ...MXS, marginBottom: "20px" }}>Investment</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(28,25,23,0.10)", marginBottom: "clamp(1.5rem,3vh,2.5rem)" }}>
              {PAYMENT.map(({ label, amount, note, accent }) => (
                <div key={label} className="enr-item" style={{ padding: "clamp(1.1rem,1.8vw,1.8rem)", background: accent ? "#E8E2D8" : "#F0EBE1", display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "center" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "5px" }}>
                      <p style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 600, fontSize: "0.93rem", color: "#1C1917" }}>{label}</p>
                      {accent && <span style={{ ...MXS, color: "#8B3A26", fontSize: "8px", padding: "2px 7px", border: "1px solid rgba(139,58,38,0.35)" }}>Recommended</span>}
                    </div>
                    <p style={{ ...MXS, fontSize: "8.5px", color: "rgba(28,25,23,0.40)" }}>{note}</p>
                  </div>
                  <p style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(1.05rem,1.7vw,1.45rem)", letterSpacing: "-0.03em", color: accent ? "#8B3A26" : "#1C1917", whiteSpace: "nowrap" }}>{amount}</p>
                </div>
              ))}
            </div>

            <p style={{ ...MXS, marginBottom: "14px" }}>What's included</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {INCLUDED.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#8B3A26", fontSize: "10px", marginTop: "2px", flexShrink: 0 }}>—</span>
                  <span style={{ fontFamily: "var(--font-body,'Inter')", fontSize: "12px", fontWeight: 300, color: "#5E574F", lineHeight: 1.5 }}>{item}</span>
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
