"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useIsMobile } from "../hooks/useIsMobile";

export default function SiteNav() {
  const navRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, { opacity: 0, y: -8, duration: 0.8, ease: "power2.out", delay: 1.6 });
    const onScroll = () => {
      if (!navRef.current) return;
      const s = window.scrollY > 60;
      navRef.current.style.padding          = s ? "10px 0" : "20px 0";
      navRef.current.style.background       = s ? "rgba(240,235,225,0.94)" : "transparent";
      navRef.current.style.borderBottomColor = s ? "rgba(28,25,23,0.10)" : "transparent";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LINKS = [{ l: "Program", h: "#program" }, { l: "Projects", h: "#projects" }, { l: "Outcomes", h: "#outcomes" }];

  return (
    <>
      <nav
        ref={navRef}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "20px 0", backdropFilter: "blur(14px)", transition: "padding .35s, background .35s, border-color .35s", borderBottom: "1px solid transparent" }}
      >
        <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 clamp(1.2rem,5vw,5rem)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <div style={{ width: "7px", height: "7px", background: "#8B3A26", borderRadius: "50%" }} />
            <span style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontSize: "13px", fontWeight: 600, letterSpacing: "0.06em", color: "#1C1917", textTransform: "uppercase" }}>GenAI Academy</span>
          </div>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "clamp(1.5rem,3vw,2.5rem)" }}>
              {LINKS.map(({ l, h }) => (
                <a key={l} href={h} style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "10.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(28,25,23,0.48)", transition: "color .2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#1C1917")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(28,25,23,0.48)")}>{l}</a>
              ))}
              <a href="#apply" style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 600, fontSize: "12px", color: "#F0EBE1", padding: "10px 22px", background: "#1C1917", transition: "background .22s", whiteSpace: "nowrap" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#8B3A26")}
                onMouseLeave={e => (e.currentTarget.style.background = "#1C1917")}>
                Apply — Cohort 03
              </a>
            </div>
          )}

          {/* Mobile: Apply CTA + Hamburger */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <a href="#apply" style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 600, fontSize: "11px", color: "#F0EBE1", padding: "8px 16px", background: "#1C1917", whiteSpace: "nowrap" }}>
                Apply
              </a>
              <button
                onClick={() => setMenuOpen(o => !o)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "flex", flexDirection: "column", gap: "4px" }}
                aria-label="Menu"
              >
                {menuOpen
                  ? <span style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", fontSize: "11px", color: "#1C1917", letterSpacing: "0.1em" }}>✕</span>
                  : [0,1,2].map(i => <div key={i} style={{ width: "20px", height: "1.5px", background: "#1C1917" }} />)
                }
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMobile && menuOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 99, background: "rgba(240,235,225,0.98)", backdropFilter: "blur(16px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem" }}>
          {LINKS.map(({ l, h }) => (
            <a key={l} href={h} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "2rem", letterSpacing: "-0.04em", color: "#1C1917", textDecoration: "none" }}>
              {l}
            </a>
          ))}
          <a href="#apply" onClick={() => setMenuOpen(false)}
            style={{ fontFamily: "var(--font-display,'Space Grotesk')", fontWeight: 700, fontSize: "2rem", letterSpacing: "-0.04em", color: "#8B3A26", textDecoration: "none" }}>
            Apply →
          </a>
        </div>
      )}
    </>
  );
}
