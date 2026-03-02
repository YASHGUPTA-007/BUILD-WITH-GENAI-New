"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "../hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const TRUST = [
  { n:"01", icon:"⟳", title:"7-Day Money-Back Guarantee", body:"Attend the first 2 sessions. If you feel the program is not right for you, request a full refund within 7 days of the batch start date. Refund processed within 5 business days, minus payment gateway fees." },
  { n:"02", icon:"◈", title:"Verified Certification", body:"On completing all 13 projects, your capstone, and a minimum 60% live session attendance, you receive a digitally signed certificate with a unique ID, QR code verification, and public verification page." },
  { n:"03", icon:"⊗", title:"Secure Payments", body:"All payments processed via Razorpay. GST-compliant invoices issued immediately — suitable for corporate reimbursement. EMI options available via no-cost credit card and NBFC financing partners." },
  { n:"04", icon:"◉", title:"Outcome Commitment", body:"If you complete the program with all projects deployed and remain unplaced after 6 months of active, documented job seeking, we extend full platform access and placement support at no additional cost." },
];

export default function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".tr-rule", { scaleX: 0, duration: 1.6, ease: "expo.out", transformOrigin: "left", scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } });
      gsap.from(".tr-card", { y: 28, opacity: 0, duration: 0.75, ease: "power3.out", stagger: 0.12, scrollTrigger: { trigger: ".tr-grid", start: "top 80%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="trust" ref={sectionRef} style={{ background: "#EAE4DA", borderTop: "1px solid rgba(28,25,23,0.08)", padding: "clamp(5rem,10vh,9rem) 0" }}>
      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1.5rem,5vw,5rem)" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
          <span style={MXS}>007 — Trust & Credibility</span>
          <span style={MXS}>Transparency First</span>
        </div>
        <div className="tr-rule" style={RULE} />

        <div style={{ margin: "clamp(2.5rem,5vh,4rem) 0" }}>
          <h2 style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(2rem,4vw,4rem)", letterSpacing: "-0.042em", color: "#1C1917", lineHeight: 0.92 }}>
            Every claim.<br />
            <span style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontStyle: "italic", color: "#8B3A26", fontSize: "clamp(2.2rem,4.5vw,4.5rem)" }}>In writing.</span>
          </h2>
        </div>

        <div className="tr-grid" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)", gap: "1px", background: "rgba(28,25,23,0.10)" }}>
          {TRUST.map(({ n, icon, title, body }) => (
            <div key={n} className="tr-card" style={{ padding: "clamp(1.8rem,3vw,2.8rem)", background: "#EAE4DA", transition: "background .22s" }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.background="#DDD6CA")}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.background="#EAE4DA")}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <span style={{ fontSize: "18px", color: "rgba(139,58,38,0.55)", lineHeight: 1 }}>{icon}</span>
                <span style={{ ...MXS, color: "rgba(28,25,23,0.25)" }}>{n}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 600, fontSize: "clamp(1rem,1.4vw,1.22rem)", letterSpacing: "-0.02em", color: "#1C1917", marginBottom: "12px" }}>{title}</h3>
              <p style={{ fontFamily: "var(--font-body,'Inter')", fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.8, color: "#5E574F" }}>{body}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "clamp(1rem,2vw,2rem)", alignItems: "center", marginTop: "clamp(2rem,4vh,3rem)", flexWrap: "wrap" }}>
          {["Razorpay Secured","SSL Encrypted","GST Invoice","DPDP Compliant","Cancellation Policy Clear"].map(b => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#1A6B3A" }} />
              <span style={{ ...MXS, fontSize: "8.5px", color: "rgba(28,25,23,0.38)" }}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MXS: React.CSSProperties = { fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "9.5px", letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(28,25,23,0.4)" };
const RULE: React.CSSProperties = { width: "100%", height: "1px", background: "rgba(28,25,23,0.10)", transformOrigin: "left center" };
