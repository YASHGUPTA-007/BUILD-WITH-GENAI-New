"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "../hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  { n:"01", title:"Document Intelligence System",    stack:["RAG","OCR","FastAPI","Pinecone"],          tag:"DEPLOYED", phase:"Phase 2" },
  { n:"02", title:"Multi-Source RAG Pipeline",        stack:["LangGraph","Reranker","Redis","GCP"],     tag:"LIVE",     phase:"Phase 2" },
  { n:"03", title:"Autonomous Research Agent",        stack:["AutoGen","Tool-Call","Tavily","GPT-4o"],  tag:"DEPLOYED", phase:"Phase 3" },
  { n:"04", title:"AI Code Review Assistant",         stack:["Fine-tuned LLM","GitHub API","Docker"],   tag:"DEPLOYED", phase:"Phase 3" },
  { n:"05", title:"Enterprise Knowledge Base",        stack:["Hybrid Search","FAISS","OpenAI","AWS"],   tag:"LIVE",     phase:"Phase 2" },
  { n:"06", title:"Multi-Modal Analysis Platform",    stack:["GPT-4o","CLIP","S3","FastAPI"],            tag:"DEPLOYED", phase:"Phase 2" },
  { n:"07", title:"Real-Time Customer Support Bot",   stack:["Streaming","WebSocket","Redis","Eval"],    tag:"LIVE",     phase:"Phase 1" },
  { n:"08", title:"Content Generation Pipeline",      stack:["LoRA","PEFT","Airflow","vLLM"],            tag:"DEPLOYED", phase:"Phase 4" },
  { n:"09", title:"AI Data Analysis Dashboard",       stack:["LangChain","Plotly","Pandas","SQL"],       tag:"DEPLOYED", phase:"Phase 1" },
  { n:"10", title:"Conversational Commerce Engine",   stack:["Function Calling","Stripe","Agents"],      tag:"LIVE",     phase:"Phase 3" },
  { n:"11", title:"Legal Document Reviewer",          stack:["Long-Context","Citation","RAG","GCP"],     tag:"DEPLOYED", phase:"Phase 2" },
  { n:"12", title:"Medical Records Summariser",       stack:["Guardrails","BERT","HIPAA-patterns"],      tag:"DEPLOYED", phase:"Phase 3" },
  { n:"13", title:"Multi-Agent Dev Team",             stack:["LangGraph","Supervisor","Code Executor"],  tag:"CAPSTONE", phase:"Phase 4" },
];

const TC: Record<string, string> = { DEPLOYED:"#1A6B3A", LIVE:"#1A3A6B", CAPSTONE:"#8B3A26" };
const TB: Record<string, string> = { DEPLOYED:"rgba(26,107,58,0.1)", LIVE:"rgba(26,58,107,0.1)", CAPSTONE:"rgba(139,58,38,0.1)" };

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number|null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".pr-rule", { scaleX: 0, duration: 1.6, ease: "expo.out", transformOrigin: "left", scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } });
      gsap.from(".pr-hdr",  { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } });
      gsap.from(".pr-card", { y: 36, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.055, scrollTrigger: { trigger: ".pr-grid", start: "top 82%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} style={{ background: "#F0EBE1", borderTop: "1px solid rgba(28,25,23,0.08)", padding: "clamp(5rem,10vh,9rem) 0" }}>
      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1.5rem,5vw,5rem)" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
          <span style={MXS}>004 — Projects Showcase</span>
          <span style={MXS}>13 Systems · All Deployed</span>
        </div>
        <div className="pr-rule" style={RULE} />

        <div className="pr-hdr" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.5rem", alignItems: "flex-end", margin: "clamp(2.5rem,5vh,4rem) 0 clamp(3rem,6vh,5rem)" }}>
          <h2 style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(2rem,4vw,4rem)", letterSpacing: "-0.042em", color: "#1C1917", lineHeight: 0.92 }}>
            You don't build demos.<br />
            <span style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontStyle: "italic", color: "#8B3A26", fontSize: "clamp(2.2rem,4.5vw,4.5rem)" }}>Production systems.</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body,'Inter')", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.78, color: "#5E574F", maxWidth: "360px", textAlign: isMobile ? "left" : "right", marginLeft: isMobile ? 0 : "auto", display: isMobile ? "none" : undefined }}>
            Every project is deployed to real infrastructure. GitHub URL, live deployed URL, or video demo — submitted, reviewed, graded. These go on your engineering portfolio.
          </p>
        </div>

        <div className="pr-grid" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: "1px", background: "rgba(28,25,23,0.10)" }}>
          {PROJECTS.map(({ n, title, stack, tag, phase }, i) => (
            <div key={n} className="pr-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ padding: "clamp(1.2rem,2vw,1.8rem)", background: hovered===i ? "#E8E2D8" : "#F0EBE1", transition: "background .22s", display: "flex", flexDirection: "column", gap: "14px", minHeight: "175px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ ...MXS, color: "rgba(28,25,23,0.28)" }}>{n}</span>
                <span style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "8px", letterSpacing: "0.2em", padding: "3px 8px", border: `1px solid ${TC[tag]}44`, color: TC[tag], textTransform: "uppercase", background: TB[tag] }}>
                  {tag}
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 600, fontSize: "clamp(0.9rem,1.15vw,1.02rem)", letterSpacing: "-0.015em", color: "#1C1917", lineHeight: 1.3, flex: 1 }}>{title}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {stack.map(s => (
                  <span key={s} style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "9px", padding: "3px 8px", background: "rgba(28,25,23,0.05)", border: "1px solid rgba(28,25,23,0.10)", color: "#5E574F", letterSpacing: "0.04em" }}>{s}</span>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(28,25,23,0.07)", paddingTop: "10px" }}>
                <span style={{ ...MXS, color: "rgba(28,25,23,0.28)", fontSize: "8.5px" }}>{phase}</span>
                <span style={{ ...MXS, color: hovered===i ? "#8B3A26" : "rgba(28,25,23,0.28)", fontSize: "8.5px", transition: "color .2s" }}>View →</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "clamp(2rem,4vh,3rem)" }}>
          <p style={{ ...MXS, color: "rgba(28,25,23,0.35)" }}>
            All 13 projects · Reviewed by engineering mentors · Deployed to production · Part of your public portfolio
          </p>
        </div>
      </div>
    </section>
  );
}

const MXS: React.CSSProperties = { fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "9.5px", letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(28,25,23,0.4)" };
const RULE: React.CSSProperties = { width: "100%", height: "1px", background: "rgba(28,25,23,0.10)", transformOrigin: "left center" };
