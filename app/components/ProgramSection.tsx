"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "../hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const PHASES = [
  {
    n: "01", title: "Foundations", weeks: "Weeks 01 – 06", tag: "LLM Systems",
    description: "You don't just learn what an LLM is — you learn how it works architecturally and how to wire it into production systems. Every session ends with working code.",
    skills: ["Transformer architecture & attention","Tokenization & embeddings","OpenAI & Anthropic APIs","LangChain, LlamaIndex","Advanced prompt engineering","Vector DBs: Pinecone, Weaviate, Chroma","Evaluation frameworks","Python AI production stack"],
  },
  {
    n: "02", title: "Retrieval Architecture", weeks: "Weeks 07 – 12", tag: "RAG Systems",
    description: "Build RAG systems that actually hold up in production — not toy demos. Cover advanced retrieval strategies, hybrid search, multi-modal pipelines, and rigorous evaluation.",
    skills: ["Production RAG architecture","Hybrid search & BM25","Reranking with cross-encoders","Document processing pipelines","Multi-modal RAG (text + image)","Chunking strategies","RAGAS evaluation framework","REST API design for AI systems"],
  },
  {
    n: "03", title: "Agent Orchestration", weeks: "Weeks 13 – 18", tag: "Agentic Systems",
    description: "Go deep on multi-agent systems. Build autonomous workflows that use tools, maintain memory, delegate tasks, and operate reliably in messy real-world environments.",
    skills: ["LangGraph & AutoGen frameworks","Tool calling & function schemas","Multi-agent architectures","Memory & context management","Fine-tuning: LoRA, QLoRA, PEFT","Agent evaluation & monitoring","Guardrails & safety layers","Human-in-the-loop orchestration"],
  },
  {
    n: "04", title: "Production & Deployment", weeks: "Weeks 19 – 24", tag: "MLOps · Capstone",
    description: "Ship it. Containerize, serve, monitor, and optimize. Build 3 capstone systems deployed to production, then present at Demo Day to engineering leaders and hiring partners.",
    skills: ["vLLM, Ollama, Ray Serve","Docker & Kubernetes for AI","Latency & cost optimization","Observability & tracing","CI/CD for ML pipelines","Enterprise AI system design","Capstone: 3 live deployments","Demo Day + Placement preparation"],
  },
];

export default function ProgramSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const phase = PHASES[active];
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".prog-rule", { scaleX: 0, duration: 1.6, ease: "expo.out", transformOrigin: "left", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
      gsap.from(".prog-hdr", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } });
      gsap.from(".phase-row", { y: 28, opacity: 0, duration: 0.75, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: ".phases-list", start: "top 80%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="program" ref={sectionRef} style={{ background: "#EAE4DA", borderTop: "1px solid rgba(28,25,23,0.08)", padding: "clamp(5rem,10vh,9rem) 0" }}>
      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1.5rem,5vw,5rem)" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
          <span style={MXS}>003 — Program Breakdown</span>
          <span style={MXS}>24 Weeks · 180+ Live Hours</span>
        </div>
        <div className="prog-rule" style={RULE} />

        <div className="prog-hdr" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr auto", gap: "1.5rem", alignItems: "flex-end", margin: "clamp(2.5rem,5vh,4rem) 0 clamp(3rem,6vh,5rem)" }}>
          <h2 style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(2.2rem,4.5vw,4.5rem)", letterSpacing: "-0.042em", color: "#1C1917", lineHeight: 0.92 }}>
            Curriculum<br />
            <span style={{ color: "rgba(28,25,23,0.28)" }}>engineered for</span><br />
            <span style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',Georgia,serif)", fontStyle: "italic", fontSize: "clamp(2.4rem,5vw,5rem)", color: "#8B3A26" }}>production.</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body,'Inter')", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.78, color: "#5E574F", maxWidth: "300px", textAlign: isMobile ? "left" : "right", display: isMobile ? "none" : undefined }}>
            4 phases. 24 weeks. 180+ live engineering hours. 3 sessions per week. Every week ends with something deployed — not just learned.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "clamp(1.5rem,5vw,6rem)", alignItems: "start" }}>

          {/* Phase list */}
          <div className="phases-list" style={{ display: "flex", flexDirection: "column" }}>
            {PHASES.map(({ n, title, weeks, tag }, i) => (
              <div key={n} className="phase-row" onClick={() => setActive(i)}
                style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "18px", alignItems: "center", padding: "20px 0", borderBottom: "1px solid rgba(28,25,23,0.08)", cursor: "pointer", transition: "opacity .2s", opacity: active === i ? 1 : 0.42 }}
                onMouseEnter={e => { if (active !== i) (e.currentTarget as HTMLDivElement).style.opacity = "0.72"; }}
                onMouseLeave={e => { if (active !== i) (e.currentTarget as HTMLDivElement).style.opacity = "0.42"; }}
              >
                <span style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "10px", letterSpacing: "0.2em", color: active === i ? "#8B3A26" : "rgba(28,25,23,0.35)", transition: "color .2s" }}>{n}</span>
                <div>
                  <p style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 600, fontSize: "clamp(1rem,1.4vw,1.2rem)", letterSpacing: "-0.02em", color: "#1C1917", marginBottom: "3px" }}>{title}</p>
                  <p style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(28,25,23,0.38)" }}>{weeks}</p>
                </div>
                <span style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "8.5px", letterSpacing: "0.2em", textTransform: "uppercase", padding: "5px 10px", border: `1px solid ${active === i ? "rgba(139,58,38,0.4)" : "rgba(28,25,23,0.12)"}`, color: active === i ? "#8B3A26" : "rgba(28,25,23,0.38)", transition: "all .25s", whiteSpace: "nowrap" }}>
                  {tag}
                </span>
              </div>
            ))}
          </div>

          {/* Phase detail */}
          <div key={phase.n} style={{ position: isMobile ? "static" : "sticky", top: "100px", padding: "clamp(1.5rem,2.5vw,2.5rem)", border: "1px solid rgba(28,25,23,0.10)", background: "#F0EBE1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <span style={{ ...MXS, color: "#8B3A26" }}>Phase {phase.n}</span>
              <div style={{ flex: 1, height: "1px", background: "rgba(28,25,23,0.10)" }} />
              <span style={{ ...MXS, fontSize: "8.5px" }}>{phase.weeks}</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "clamp(1.4rem,2vw,2rem)", letterSpacing: "-0.03em", color: "#1C1917", marginBottom: "14px", lineHeight: 1.1 }}>{phase.title}</h3>
            <p style={{ fontFamily: "var(--font-body,'Inter')", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.78, color: "#5E574F", marginBottom: "22px" }}>{phase.description}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {phase.skills.map(s => (
                <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <div style={{ width: "3px", height: "3px", background: "#8B3A26", borderRadius: "50%", flexShrink: 0, marginTop: "5px" }} />
                  <span style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "10.5px", color: "#5E574F", lineHeight: 1.45 }}>{s}</span>
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
