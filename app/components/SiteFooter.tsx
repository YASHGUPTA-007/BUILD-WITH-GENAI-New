"use client";
import { useIsMobile } from "../hooks/useIsMobile";

export default function SiteFooter() {
  const isMobile = useIsMobile();
  return (
    <footer style={{ background: "#E8E2D8", borderTop: "1px solid rgba(28,25,23,0.10)", padding: "clamp(3rem,5vh,5rem) 0 clamp(2rem,3vh,3rem)" }}>
      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1.5rem,5vw,5rem)" }}>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? "2rem" : "3rem", marginBottom: "clamp(3rem,5vh,4rem)" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "16px" }}>
              <div style={{ width: "7px", height: "7px", background: "#8B3A26", borderRadius: "50%" }} />
              <span style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontSize: "13px", fontWeight: 600, letterSpacing: "0.06em", color: "#1C1917", textTransform: "uppercase" }}>GenAI Academy</span>
            </div>
            <p style={{ fontFamily: "var(--font-body,'Inter')", fontSize: "12px", fontWeight: 300, lineHeight: 1.78, color: "#5E574F", maxWidth: "240px" }}>
              India's premier AI engineering residency. Cohort-based. Production-focused. Outcome-driven. Founded by Soham Sharma — 2024.
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{ ...MXS, marginBottom: "16px" }}>Navigate</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Program Structure","13 Production Projects","Career Outcomes","Enrollment & Pricing","Apply for Cohort 03"].map(link => (
                <a key={link} href="#" style={{ fontFamily: "var(--font-body,'Inter')", fontSize: "12.5px", fontWeight: 300, color: "rgba(28,25,23,0.5)", transition: "color .2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color="#1C1917")}
                  onMouseLeave={e => (e.currentTarget.style.color="rgba(28,25,23,0.5)")}>{link}</a>
              ))}
            </div>
          </div>

          {/* Research + Contact */}
          <div>
            <p style={{ ...MXS, marginBottom: "16px" }}>Institution</p>
            <div style={{ padding: "16px", border: "1px solid rgba(28,25,23,0.10)", marginBottom: "clamp(1rem,2vh,1.5rem)", background: "rgba(28,25,23,0.03)" }}>
              <p style={{ ...MXS, color: "#8B3A26", marginBottom: "6px", fontSize: "8px" }}>[ Research Division — 2027 ]</p>
              <p style={{ fontFamily: "var(--font-body,'Inter')", fontSize: "12px", fontWeight: 300, color: "#5E574F", lineHeight: 1.65 }}>
                GenAI Academy Research is being established to conduct applied research in agentic systems and LLM infrastructure. Open positions launching Q4 2027.
              </p>
            </div>
            {[{ l:"Email", v:"admissions@genai.academy" }, { l:"LinkedIn", v:"linkedin.com/company/genai-academy" }].map(({ l, v }) => (
              <div key={l} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                <span style={{ ...MXS, color: "rgba(28,25,23,0.3)", fontSize: "8px", minWidth: "48px" }}>{l}</span>
                <span style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "10px", color: "rgba(28,25,23,0.5)", letterSpacing: "0.03em" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(28,25,23,0.08)", marginBottom: "20px" }} />
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: "10px" }}>
          <p style={{ ...MXS, color: "rgba(28,25,23,0.28)", fontSize: "8.5px" }}>
            © 2026 GenAI Academy · All Rights Reserved · Soham Sharma
          </p>
          <div style={{ display: "flex", gap: "clamp(1rem,2vw,2rem)" }}>
            {["Privacy Policy","Terms of Service","Refund Policy"].map(item => (
              <a key={item} href="#" style={{ ...MXS, color: "rgba(28,25,23,0.28)", fontSize: "8px", transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color="rgba(28,25,23,0.6)")}
                onMouseLeave={e => (e.currentTarget.style.color="rgba(28,25,23,0.28)")}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const MXS: React.CSSProperties = { fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "9.5px", letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(28,25,23,0.4)" };
