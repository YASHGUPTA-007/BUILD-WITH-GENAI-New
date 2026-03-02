// "use client";
// import { useState, useEffect, useRef, useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// /*
//   BUILD WITH GEN AI — THE MASTERPIECE (COMPLETE)
//   Aesthetic: Elite Agency / Awwwards Winning
//   Architecture: Full-screen WebGL Swarm, Centered Cinematic Typography
//   Motion: GSAP Clip-Path Reveals + Lenis Smooth Scroll
// */

// // ═══════════════════════════════════════════════
// // SVG ICONS
// // ═══════════════════════════════════════════════
// const Icons = {
//   bolt: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M11 1L3 12h5l-1 7 8-11h-5l1-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
//   cube: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1l8 4.5v9L10 19l-8-4.5v-9L10 1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/><path d="M10 10v9M10 10l8-4.5M10 10L2 5.5" stroke="currentColor" strokeWidth="1.3"/></svg>,
//   layers: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l8 4-8 4-8-4 8-4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/><path d="M2 10l8 4 8-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 14l8 4 8-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
//   target: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3"/><circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.3"/><circle cx="10" cy="10" r="1" fill="currentColor"/></svg>,
//   globe: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3"/><path d="M2 10h16M10 2c2.5 2.5 3.5 5 3.5 8s-1 5.5-3.5 8c-2.5-2.5-3.5-5-3.5-8s1-5.5 3.5-8z" stroke="currentColor" strokeWidth="1.3"/></svg>,
//   terminal: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M5 8l3 2.5L5 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 13h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
//   play: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 2.5v11l9-5.5-9-5.5z" fill="currentColor"/></svg>,
//   arrow: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
//   check: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
//   brain: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 18V10M10 10C10 7 7.5 4 5 4S1 6.5 1 9c0 2 1.5 3.5 3 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M10 10c0-3 2.5-6 5-6s4 2.5 4 5c0 2-1.5 3.5-3 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><circle cx="5" cy="8" r="1" fill="currentColor" opacity="0.4"/><circle cx="15" cy="8" r="1" fill="currentColor" opacity="0.4"/></svg>,
//   shield: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V4l7-3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>,
//   rocket: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 18v-5M10 2c-3 3-4 7-4 11h8c0-4-1-8-4-11z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 13l-2 3M14 13l2 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
//   refresh: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 10a8 8 0 0114-5.3L18 2v5h-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 10a8 8 0 01-14 5.3L2 18v-5h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
//   award: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="8" r="6" stroke="currentColor" strokeWidth="1.3"/><path d="M6 13l-1 6 5-2.5L15 19l-1-6" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>,
//   users: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="7" cy="6" r="3" stroke="currentColor" strokeWidth="1.3"/><path d="M1 17c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><circle cx="15" cy="7" r="2" stroke="currentColor" strokeWidth="1.3"/><path d="M19 17c0-2.2-1.8-3.8-4-4.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
//   key: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="7" cy="11" r="4" stroke="currentColor" strokeWidth="1.3"/><path d="M10 8l7-5M14 5l2 1.5M16 4l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
//   star: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1l2.5 5.5L18 7.5l-4 4 1 6-5-2.8L5 17.5l1-6-4-4 5.5-1L10 1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>,
// };

// // ═══════════════════════════════════════════════
// // FULL-SCREEN NEURAL SWARM
// // ═══════════════════════════════════════════════
// function FullscreenSwarm() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d", { alpha: false }); 
    
//     let animationFrameId;
//     let particles = [];
//     let width, height;
//     const mouse = { x: -1000, y: -1000, radius: 200 };

//     const init = () => {
//       const dpr = window.devicePixelRatio || 1;
//       width = window.innerWidth;
//       height = window.innerHeight;

//       canvas.width = width * dpr;
//       canvas.height = height * dpr;
//       ctx.scale(dpr, dpr);

//       particles = Array.from({ length: 140 }).map(() => ({
//         x: Math.random() * width,
//         y: Math.random() * height,
//         vx: (Math.random() - 0.5) * 0.6,
//         vy: (Math.random() - 0.5) * 0.6,
//         size: Math.random() * 2 + 0.5,
//       }));
//     };

//     const draw = () => {
//       ctx.fillStyle = '#010308';
//       ctx.fillRect(0, 0, width, height);
      
//       ctx.globalCompositeOperation = 'lighter';

//       for (let i = 0; i < particles.length; i++) {
//         let p = particles[i];
//         p.x += p.vx;
//         p.y += p.vy;

//         if (p.x < 0 || p.x > width) p.vx *= -1;
//         if (p.y < 0 || p.y > height) p.vy *= -1;

//         let dx = mouse.x - p.x;
//         let dy = mouse.y - p.y;
//         let dist = Math.sqrt(dx * dx + dy * dy);
        
//         if (dist < mouse.radius) {
//           const force = (mouse.radius - dist) / mouse.radius;
//           p.x -= (dx / dist) * force * 1.5;
//           p.y -= (dy / dist) * force * 1.5;
//         }

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//         ctx.fillStyle = 'rgba(94, 234, 212, 0.5)';
//         ctx.fill();

//         for (let j = i + 1; j < particles.length; j++) {
//           let p2 = particles[j];
//           let dxC = p.x - p2.x;
//           let dyC = p.y - p2.y;
//           let distance = Math.sqrt(dxC * dxC + dyC * dyC);

//           if (distance < 140) {
//             let opacity = 1 - (distance / 140);
//             let grad = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
//             grad.addColorStop(0, `rgba(94, 234, 212, ${opacity * 0.8})`);
//             grad.addColorStop(1, `rgba(168, 85, 247, ${opacity * 0.8})`);

//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.strokeStyle = grad;
//             ctx.lineWidth = opacity * 1.2;
//             ctx.stroke();
//           }
//         }
//       }
//       ctx.globalCompositeOperation = 'source-over';
//       animationFrameId = requestAnimationFrame(draw);
//     };

//     const handleMouseMove = (e) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };
//     const handleMouseLeave = () => { mouse.x = -1000; mouse.y = -1000; };

//     window.addEventListener('resize', init);
//     window.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseleave', handleMouseLeave);

//     init();
//     draw();

//     return () => {
//       window.removeEventListener('resize', init);
//       window.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseleave', handleMouseLeave);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="swarm-canvas" />;
// }

// // ═══════════════════════════════════════════════
// // NAV
// // ═══════════════════════════════════════════════
// function Nav() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", fn, { passive: true });
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   const links = ["Curriculum", "Features", "Process", "Testimonials"];

//   return (
//     <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
//       <div className="nav__inner">
//         <a href="#" className="nav__logo gs-reveal-down">
//           <span className="nav__logo-mark">{Icons.bolt}</span>
//           <span className="nav__logo-text">Build with <span className="accent">Gen AI</span></span>
//         </a>
//         <div className="nav__links gs-reveal-down">
//           {links.map(l => (
//             <a key={l} href={`#${l.toLowerCase()}`} className="nav__link">{l}</a>
//           ))}
//           <a href="#enroll" className="btn btn--sm magnetic-btn">Start Learning</a>
//         </div>
//         <button className="nav__mobile-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
//           <span style={{ display: "block", width: 18, height: 2, background: "#EDEEF0", transition: "all 0.3s", transform: mobileOpen ? "rotate(45deg) translateY(3.5px)" : "none" }} />
//           <span style={{ display: "block", width: 18, height: 2, background: "#EDEEF0", transition: "all 0.3s", opacity: mobileOpen ? 0 : 1, margin: "5px 0" }} />
//           <span style={{ display: "block", width: 18, height: 2, background: "#EDEEF0", transition: "all 0.3s", transform: mobileOpen ? "rotate(-45deg) translateY(-3.5px)" : "none" }} />
//         </button>
//       </div>
//       {mobileOpen && (
//         <div className="nav__mobile-menu">
//           {links.map(l => (
//             <a key={l} href={`#${l.toLowerCase()}`} className="nav__mobile-link" onClick={() => setMobileOpen(false)}>{l}</a>
//           ))}
//           <a href="#enroll" className="btn" style={{ width: "100%", textAlign: "center", marginTop: 8 }}>Start Learning</a>
//         </div>
//       )}
//     </nav>
//   );
// }

// // ═══════════════════════════════════════════════
// // HERO (Centered Cinematic Layout)
// // ═══════════════════════════════════════════════
// // ═══════════════════════════════════════════════
// // HERO SECTION — Split Layout (Text Left / Image Right)
// // Drop-in replacement for the Hero() component
// // ═══════════════════════════════════════════════

// function Hero() {
//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       const metrics = document.querySelectorAll(".js-metric");
//       metrics.forEach(metric => {
//         const target = parseFloat(metric.getAttribute("data-target"));
//         const format = metric.getAttribute("data-format");
//         let obj = { val: 0 };
//         gsap.to(obj, {
//           val: target,
//           duration: 2.5,
//           ease: "expo.out",
//           delay: 1.2,
//           onUpdate: () => {
//             if (format === "comma") metric.innerText = Math.floor(obj.val).toLocaleString();
//             if (format === "decimal") metric.innerText = obj.val.toFixed(2);
//             if (format === "percent") metric.innerText = obj.val.toFixed(1) + "%";
//           }
//         });
//       });
//     });
//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <style>{`
//         /* ══════════════════════════════════════════
//            HERO SPLIT LAYOUT
//         ══════════════════════════════════════════ */
//         .hero-split {
//           position: relative;
//           width: 100%;
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           overflow: hidden;
//           padding-top: 90px;
//           padding-bottom: 40px;
//         }

//         .hero-split__bg {
//           position: absolute;
//           inset: 0;
//           z-index: 1;
//         }

//         .hero-split__inner {
//           position: relative;
//           z-index: 10;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 32px;
//           width: 100%;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 64px;
//           align-items: center;
//         }

//         /* ── LEFT COLUMN ── */
//         .hero-left {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           gap: 0;
//         }

//         .hero-split-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 8px 18px;
//           border-radius: 100px;
//           background: rgba(94, 234, 212, 0.08);
//           border: 1px solid rgba(94, 234, 212, 0.25);
//           margin-bottom: 28px;
//         }
//         .hero-split-badge__dot {
//           width: 7px;
//           height: 7px;
//           border-radius: 50%;
//           background: var(--accent);
//           box-shadow: 0 0 10px var(--accent);
//           animation: pulse-dot 2s infinite;
//           flex-shrink: 0;
//         }
//         .hero-split-badge__text {
//           font-size: 12px;
//           font-weight: 600;
//           color: var(--accent);
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//         }

//         .hero-split-title {
//           font-family: var(--font-display);
//           font-size: clamp(44px, 5.5vw, 76px);
//           font-weight: 800;
//           line-height: 1.0;
//           letter-spacing: -0.04em;
//           color: var(--text);
//           margin: 0 0 24px;
//         }

//         .hero-split-title .line {
//           display: block;
//         }

//         .hero-split-title .accent-line {
//           color: var(--accent);
//           display: block;
//         }

//         .hero-split-sub {
//           font-size: 16px;
//           line-height: 1.7;
//           color: var(--text-3);
//           max-width: 480px;
//           margin: 0 0 40px;
//           font-weight: 400;
//         }

//         .hero-split-actions {
//           display: flex;
//           gap: 14px;
//           flex-wrap: wrap;
//           margin-bottom: 56px;
//         }

//         .hero-split-metrics {
//           display: flex;
//           gap: 40px;
//           padding-top: 40px;
//           border-top: 1px solid var(--border);
//           width: 100%;
//         }

//         .hero-split-metric__val {
//           display: block;
//           font-family: var(--font-display);
//           font-size: 28px;
//           font-weight: 800;
//           color: var(--text);
//           letter-spacing: -0.03em;
//           line-height: 1;
//           margin-bottom: 6px;
//         }

//         .hero-split-metric__label {
//           font-size: 12px;
//           font-weight: 500;
//           color: var(--text-3);
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//         }

//         /* ── RIGHT COLUMN - IMAGE ── */
//         .hero-right {
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         /* Outer glow ring */
//         .hero-img-ring {
//           position: absolute;
//           width: 520px;
//           height: 520px;
//           border-radius: 50%;
//           border: 1px solid rgba(94, 234, 212, 0.08);
//           animation: ring-pulse 4s ease-in-out infinite;
//           pointer-events: none;
//         }
//         .hero-img-ring-2 {
//           position: absolute;
//           width: 460px;
//           height: 460px;
//           border-radius: 50%;
//           border: 1px solid rgba(94, 234, 212, 0.05);
//           animation: ring-pulse 4s ease-in-out 1s infinite;
//           pointer-events: none;
//         }
//         @keyframes ring-pulse {
//           0%, 100% { transform: scale(1); opacity: 1; }
//           50% { transform: scale(1.03); opacity: 0.5; }
//         }

//         /* The main image container */
//         .hero-img-wrap {
//           position: relative;
//           width: 400px;
//           height: 500px;
//           border-radius: 32px;
//           overflow: hidden;
//           border: 1px solid rgba(94, 234, 212, 0.2);
//           box-shadow:
//             0 0 0 1px rgba(255,255,255,0.04),
//             0 40px 80px rgba(0, 0, 0, 0.8),
//             0 0 120px rgba(94, 234, 212, 0.08),
//             inset 0 1px 0 rgba(255,255,255,0.06);
//           flex-shrink: 0;
//           animation: hero-img-float 6s ease-in-out infinite;
//         }

//         @keyframes hero-img-float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-14px); }
//         }

//         /* Background fill behind image */
//         .hero-img-bg {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(160deg, #0d1a2e 0%, #050812 60%, #0a0f1e 100%);
//         }

//         /* Gradient overlay at bottom */
//         .hero-img-overlay {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           height: 40%;
//           background: linear-gradient(to top, rgba(1,3,8,0.98) 0%, rgba(1,3,8,0.5) 60%, transparent 100%);
//           z-index: 2;
//         }

//         .hero-img {
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: center top;
//           z-index: 1;
//         }

//         /* Corner accents */
//         .hero-img-corner {
//           position: absolute;
//           width: 28px;
//           height: 28px;
//           z-index: 5;
//         }
//         .hero-img-corner--tl {
//           top: 16px; left: 16px;
//           border-top: 2px solid var(--accent);
//           border-left: 2px solid var(--accent);
//           border-radius: 6px 0 0 0;
//         }
//         .hero-img-corner--tr {
//           top: 16px; right: 16px;
//           border-top: 2px solid rgba(168, 85, 247, 0.7);
//           border-right: 2px solid rgba(168, 85, 247, 0.7);
//           border-radius: 0 6px 0 0;
//         }
//         .hero-img-corner--bl {
//           bottom: 16px; left: 16px;
//           border-bottom: 2px solid rgba(168, 85, 247, 0.7);
//           border-left: 2px solid rgba(168, 85, 247, 0.7);
//           border-radius: 0 0 0 6px;
//         }
//         .hero-img-corner--br {
//           bottom: 16px; right: 16px;
//           border-bottom: 2px solid var(--accent);
//           border-right: 2px solid var(--accent);
//           border-radius: 0 0 6px 0;
//         }

//         /* Name tag at bottom of image */
//         .hero-img-nametag {
//           position: absolute;
//           bottom: 20px;
//           left: 50%;
//           transform: translateX(-50%);
//           z-index: 6;
//           background: rgba(5, 8, 18, 0.9);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(94, 234, 212, 0.25);
//           border-radius: 14px;
//           padding: 12px 28px;
//           text-align: center;
//           white-space: nowrap;
//           box-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(94,234,212,0.05);
//         }
//         .hero-img-nametag__name {
//           font-family: var(--font-display);
//           font-size: 17px;
//           font-weight: 700;
//           color: var(--text);
//           letter-spacing: -0.02em;
//           display: block;
//           margin-bottom: 4px;
//         }
//         .hero-img-nametag__role {
//           font-size: 11px;
//           font-weight: 600;
//           color: var(--accent);
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//         }

//         /* Scan line */
//         .hero-img-scan {
//           position: absolute;
//           left: 0; right: 0;
//           height: 1px;
//           background: linear-gradient(90deg, transparent 0%, rgba(94,234,212,0.5) 50%, transparent 100%);
//           animation: scan 5s linear infinite;
//           z-index: 4;
//           pointer-events: none;
//         }
//         @keyframes scan {
//           0% { top: 0%; opacity: 0; }
//           10% { opacity: 1; }
//           90% { opacity: 1; }
//           100% { top: 100%; opacity: 0; }
//         }

//         /* Floating chips around image */
//         .hero-chip {
//           position: absolute;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 10px 18px;
//           border-radius: 50px;
//           background: rgba(10, 15, 30, 0.85);
//           backdrop-filter: blur(20px);
//           border: 1px solid var(--border);
//           box-shadow: 0 12px 32px rgba(0,0,0,0.5);
//           font-size: 13px;
//           font-weight: 600;
//           color: var(--text-2);
//           white-space: nowrap;
//           z-index: 12;
//           pointer-events: none;
//         }
//         .hero-chip__icon {
//           color: var(--accent);
//           display: flex;
//           align-items: center;
//           flex-shrink: 0;
//         }

//         .hero-chip--tl {
//           top: 30px;
//           left: -100px;
//           animation: chip-float-1 5s ease-in-out infinite;
//         }
//         .hero-chip--tr {
//           top: 70px;
//           right: -90px;
//           animation: chip-float-2 6s ease-in-out infinite;
//         }
//         .hero-chip--bl {
//           bottom: 120px;
//           left: -110px;
//           animation: chip-float-1 7s ease-in-out 1s infinite;
//         }
//         .hero-chip--br {
//           bottom: 80px;
//           right: -95px;
//           animation: chip-float-2 5.5s ease-in-out 0.5s infinite;
//         }

//         @keyframes chip-float-1 {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-8px) translateX(4px); }
//         }
//         @keyframes chip-float-2 {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-10px) translateX(-4px); }
//         }

//         /* Background ambient glow */
//         .hero-ambient {
//           position: absolute;
//           top: 50%;
//           right: 0;
//           transform: translateY(-50%);
//           width: 600px;
//           height: 600px;
//           background: radial-gradient(circle, rgba(94, 234, 212, 0.04) 0%, transparent 70%);
//           pointer-events: none;
//           z-index: 2;
//         }

//         /* ── RESPONSIVE ── */
//         @media (max-width: 1200px) {
//           .hero-chip--tl { left: -20px; top: -40px; }
//           .hero-chip--tr { right: -20px; top: -40px; }
//           .hero-chip--bl { left: -20px; bottom: 160px; }
//           .hero-chip--br { right: -20px; bottom: 160px; }
//         }

//         @media (max-width: 900px) {
//           .hero-split__inner {
//             grid-template-columns: 1fr;
//             gap: 48px;
//             padding-top: 20px;
//           }
//           .hero-left {
//             align-items: center;
//             text-align: center;
//           }
//           .hero-split-sub { text-align: center; max-width: 100%; }
//           .hero-split-actions { justify-content: center; }
//           .hero-split-metrics { justify-content: center; }
//           .hero-right { justify-content: center; }
//           .hero-img-wrap { width: 300px; height: 380px; }
//           .hero-chip { display: none; }
//           .hero-img-ring, .hero-img-ring-2 { display: none; }
//         }

//         @media (max-width: 480px) {
//           .hero-img-wrap { width: 260px; height: 330px; }
//           .hero-split-metrics { gap: 24px; flex-wrap: wrap; }
//         }

//         /* Glow sweep for buttons */
//         .btn-glow-sweep {
//           position: relative;
//           overflow: hidden;
//         }
//         .btn-glow-sweep::after {
//           content: '';
//           position: absolute;
//           top: -50%; left: -75%;
//           width: 50%; height: 200%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
//           transform: skewX(-20deg);
//           animation: btn-sweep 3s ease-in-out infinite;
//         }
//         @keyframes btn-sweep {
//           0% { left: -75%; }
//           60%, 100% { left: 125%; }
//         }

//         /* Idle float for clip text */
//         .gs-clip-text {
//           display: block;
//           clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
//           transform: translateY(40px);
//           opacity: 0;
//           background: transparent;
//         }
//       `}</style>

//       <section className="hero-split">

//         {/* Swarm background */}
//         <div className="hero-split__bg gs-parallax-bg">
//           <FullscreenSwarm />
//         </div>

//         {/* Ambient right glow */}
//         <div className="hero-ambient" />

//         <div className="hero-split__inner">

//           {/* ── LEFT: Text Content ── */}
//           <div className="hero-left">

//             <div className="hero-split-badge gs-hero-stagger">
//               <span className="hero-split-badge__dot" />
//               <span className="hero-split-badge__text">Cohort 04 — Now Enrolling</span>
//             </div>

//             <h1 className="hero-split-title">
//               <span className="line gs-clip-text">Learn to build</span>
//               <span className="accent-line gs-clip-text">what's next.</span>
//             </h1>

//             <p className="hero-split-sub gs-hero-stagger">
//               An 8-week intensive that takes you from fundamentals to deploying production AI applications. Prompt engineering, RAG, autonomous agents, full-stack deployment — taught through real projects, not slideshows.
//             </p>

//             <div className="hero-split-actions gs-hero-stagger">
//               <a href="#enroll" className="btn btn--primary btn--lg magnetic-btn btn-glow-sweep">
//                 <span>Explore Curriculum</span>
//                 <span className="btn__icon">{Icons.arrow}</span>
//               </a>
//               <a href="#demo" className="btn btn--ghost btn--lg magnetic-btn">
//                 <span className="btn__icon" style={{ color: "var(--accent)" }}>{Icons.play}</span>
//                 <span>Watch Demo</span>
//               </a>
//             </div>

//             <div className="hero-split-metrics gs-hero-stagger">
//               <div>
//                 <span className="hero-split-metric__val js-metric" data-target="12847" data-format="comma">0</span>
//                 <span className="hero-split-metric__label">Enrolled</span>
//               </div>
//               <div>
//                 <span className="hero-split-metric__val js-metric" data-target="4.93" data-format="decimal">0.00</span>
//                 <span className="hero-split-metric__label">Avg. Rating</span>
//               </div>
//               <div>
//                 <span className="hero-split-metric__val js-metric" data-target="97.2" data-format="percent">0.0%</span>
//                 <span className="hero-split-metric__label">Completion</span>
//               </div>
//             </div>
//           </div>

//           {/* ── RIGHT: Instructor Image ── */}
//           <div className="hero-right gs-hero-stagger">

//             {/* Decorative rings behind image */}
//             <div className="hero-img-ring" />
//             <div className="hero-img-ring-2" />

//             {/* Floating topic chips */}
//             <div className="hero-chip hero-chip--tl">
//               <span className="hero-chip__icon">{Icons.terminal}</span>
//               <span>Prompt Engineering</span>
//             </div>
//             <div className="hero-chip hero-chip--tr">
//               <span className="hero-chip__icon">{Icons.layers}</span>
//               <span>RAG Pipelines</span>
//             </div>
//             <div className="hero-chip hero-chip--bl">
//               <span className="hero-chip__icon">{Icons.brain}</span>
//               <span>AI Agents</span>
//             </div>
//             <div className="hero-chip hero-chip--br">
//               <span className="hero-chip__icon">{Icons.rocket}</span>
//               <span>Deployment</span>
//             </div>

//             {/* Main image card */}
//             <div className="hero-img-wrap">
//               <div className="hero-img-bg" />
//               <div className="hero-img-scan" />

//               {/* Corner marks */}
//               <div className="hero-img-corner hero-img-corner--tl" />
//               <div className="hero-img-corner hero-img-corner--tr" />
//               <div className="hero-img-corner hero-img-corner--bl" />
//               <div className="hero-img-corner hero-img-corner--br" />

//               {/* Instructor image */}
//               <img
//                 src="/sohamsir.png"
//                 alt="Soham Sir — Lead Instructor"
//                 className="hero-img"
//               />

//               {/* Bottom gradient fade */}
//               <div className="hero-img-overlay" />

//               {/* Name tag */}
//               <div className="hero-img-nametag">
//                 <span className="hero-img-nametag__name">Soham Sir</span>
//                 <span className="hero-img-nametag__role">Lead Instructor</span>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// // ═══════════════════════════════════════════════
// // SECTIONS

// // ═══════════════════════════════════════════════
// function WhySection() {
//   const items = [
//     { icon: Icons.rocket, title: "Learn by Shipping", text: "Every module culminates in a deployed project. No passive tutorials — you build, iterate, and ship real AI products to production." },
//     { icon: Icons.cube, title: "Cutting-Edge Stack", text: "Work with GPT-4o, Claude, LangChain, vector databases, and the exact frameworks used by the teams building the future." },
//     { icon: Icons.target, title: "Career-Ready Skills", text: "Curriculum designed alongside hiring managers at top AI companies. Master the skills they're actively recruiting for." },
//     { icon: Icons.globe, title: "Global Builder Network", text: "Join 12,000+ practitioners across 40 countries. Find co-founders, collaborators, and career opportunities." },
//   ];

//   return (
//     <section className="section" id="why">
//       <div className="container">
//         <div className="text-center" style={{ textAlign: "center", marginBottom: "64px" }}>
//           <span className="section__label gs-reveal">Why This Program</span>
//           <h2 className="section__title gs-reveal" style={{ margin: "0 auto" }}>Not another course.<br /><span className="accent">A launchpad.</span></h2>
//         </div>
//         <div className="why-grid">
//           {items.map((item, i) => (
//             <div className="card gs-stagger-card" key={i}>
//               <div className="card__icon">{item.icon}</div>
//               <h3 className="card__title">{item.title}</h3>
//               <p className="card__text">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function CurriculumSection() {
//   const [active, setActive] = useState(0);
//   const modules = [
//     { num: "01", title: "Foundations of Generative AI", duration: "Weeks 1–2", topics: ["How LLMs work — tokenization, embeddings, transformers", "The prompt engineering masterclass", "Evaluation frameworks and benchmarking", "Project: Build and deploy a production chatbot"] },
//     { num: "02", title: "Retrieval-Augmented Generation", duration: "Weeks 3–4", topics: ["Vector databases and semantic search deep dive", "Chunking strategies and embedding optimization", "LangChain and LlamaIndex architectures", "Project: AI-powered knowledge base system"] },
//     { num: "03", title: "Autonomous AI Agents", duration: "Weeks 5–6", topics: ["Agent reasoning loops and planning strategies", "Tool use, function calling, and MCP", "Multi-agent orchestration patterns", "Project: Research assistant with web access"] },
//     { num: "04", title: "Full-Stack AI in Production", duration: "Weeks 7–8", topics: ["Streaming, caching, and latency optimization", "Cost management and usage monitoring", "CI/CD for AI applications", "Capstone: Ship your own AI product"] },
//   ];

//   return (
//     <section className="section section--alt" id="curriculum">
//       <div className="container">
//         <div className="text-center" style={{ textAlign: "center", marginBottom: "64px" }}>
//           <span className="section__label gs-reveal">Learning Path</span>
//           <h2 className="section__title gs-reveal" style={{ margin: "0 auto" }}>8 weeks. 4 modules.<br /><span className="accent">4 shipped products.</span></h2>
//         </div>

//         <div className="curriculum gs-reveal">
//           <div className="curriculum__nav">
//             {modules.map((m, i) => (
//               <button
//                 key={i}
//                 className={`curriculum__tab ${active === i ? "curriculum__tab--active" : ""}`}
//                 onClick={() => setActive(i)}
//               >
//                 <span className="curriculum__tab-num">{m.num}</span>
//                 <div>
//                   <span className="curriculum__tab-title">{m.title}</span>
//                   <span className="curriculum__tab-dur">{m.duration}</span>
//                 </div>
//               </button>
//             ))}
//           </div>

//           <div className="curriculum__detail" key={active} style={{ animation: 'fadeIn 0.5s ease' }}>
//             <div className="curriculum__detail-head">
//               <span className="curriculum__detail-num">{modules[active].num}</span>
//               <div>
//                 <h3 className="curriculum__detail-title">{modules[active].title}</h3>
//                 <span className="curriculum__detail-dur">{modules[active].duration}</span>
//               </div>
//             </div>
//             <div className="curriculum__topics">
//               {modules[active].topics.map((t, ti) => (
//                 <div key={`${active}-${ti}`} className="curriculum__topic" style={{ animationDelay: `${ti * 0.06}s` }}>
//                   <span className="curriculum__topic-check">{Icons.check}</span>
//                   <span>{t}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FeaturesSection() {
//   const features = [
//     { icon: Icons.terminal, title: "Live Coding Labs", text: "Cloud environments pre-configured with GPUs, vector DBs, and every dependency." },
//     { icon: Icons.users, title: "1-on-1 Mentorship", text: "Weekly sessions with practicing AI engineers from top research labs." },
//     { icon: Icons.award, title: "Industry Certificates", text: "Earn verifiable credentials backed by real project work." },
//     { icon: Icons.layers, title: "Starter Architectures", text: "Production-tested boilerplates for RAG systems, chatbots, and agents." },
//     { icon: Icons.refresh, title: "Lifetime Updates", text: "Curriculum evolves monthly. Your knowledge stays current." },
//     { icon: Icons.shield, title: "Career Placement", text: "Resume reviews and direct introductions to our 200+ hiring partners." },
//   ];

//   return (
//     <section className="section" id="features">
//       <div className="container">
//         <div className="text-center" style={{ textAlign: "center", marginBottom: "64px" }}>
//           <span className="section__label gs-reveal">Platform</span>
//           <h2 className="section__title gs-reveal" style={{ margin: "0 auto" }}>Everything you need.<br /><span className="accent">Nothing you don't.</span></h2>
//         </div>
//         <div className="features-grid">
//           {features.map((f, i) => (
//             <div className="card card--feature gs-stagger-card" key={i}>
//               <div className="card__icon">{f.icon}</div>
//               <h3 className="card__title">{f.title}</h3>
//               <p className="card__text">{f.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function TestimonialsSection() {
//   const [active, setActive] = useState(0);
//   const testimonials = [
//     { name: "Priya Sharma", role: "ML Engineer, Flipkart", text: "Within two weeks of finishing, I shipped an internal RAG tool that saved my team 15 hours per week. The mentorship alone was worth 10x the price.", initials: "PS" },
//     { name: "Alex Chen", role: "Founder, NeuralDocs", text: "I went from zero LLM knowledge to launching my AI startup. The project-based approach means you graduate with a real portfolio, not just another certificate.", initials: "AC" },
//     { name: "Sarah Müller", role: "Sr. Engineer, Siemens", text: "We were using GPT-4 Turbo within days of its release. This is the only program that actually keeps pace with the industry. Everything else feels six months behind.", initials: "SM" },
//     { name: "James Okafor", role: "CTO, AfriTech AI", text: "Found my co-founder in the community. We've since raised seed funding for our AI-powered education platform. The network is the real product.", initials: "JO" },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => setActive(p => (p + 1) % testimonials.length), 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="section section--alt" id="testimonials">
//       <div className="container container--narrow text-center" style={{ textAlign: "center" }}>
//         <span className="section__label gs-reveal">Testimonials</span>
//         <h2 className="section__title gs-reveal" style={{ margin: "0 auto 64px" }}>Trusted by <span className="accent">12,000+ builders.</span></h2>
        
//         <div className="testimonial-container gs-reveal">
//           {testimonials.map((t, i) => (
//             <div key={i} className={`testimonial ${i === active ? "testimonial--active" : ""}`}>
//               <blockquote className="testimonial__text">"{t.text}"</blockquote>
//               <div className="testimonial__author" style={{ justifyContent: "center" }}>
//                 <div className="testimonial__avatar">{t.initials}</div>
//                 <div style={{ textAlign: "left" }}>
//                   <div className="testimonial__name">{t.name}</div>
//                   <div className="testimonial__role">{t.role}</div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="testimonial__dots" style={{ justifyContent: "center" }}>
//             {testimonials.map((_, i) => (
//               <button key={i} className={`testimonial__dot ${i === active ? "testimonial__dot--active" : ""}`} onClick={() => setActive(i)} aria-label={`Testimonial ${i + 1}`} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProcessSection() {
//   const steps = [
//     { num: "01", icon: Icons.key, title: "Enroll & Onboard", text: "Choose your track, meet your mentor, and access the AI-powered learning environment on day one." },
//     { num: "02", icon: Icons.terminal, title: "Learn & Build", text: "Bite-sized modules. Every lesson has a coding challenge. Every week ships a project milestone." },
//     { num: "03", icon: Icons.rocket, title: "Ship & Showcase", text: "Deploy real AI applications to production. Graduate with 4+ shipped products in your portfolio." },
//     { num: "04", icon: Icons.star, title: "Join the Network", text: "Lifetime alumni access — job placements, collaboration channels, monthly workshops with industry leaders." },
//   ];

//   return (
//     <section className="section" id="process">
//       <div className="container container--narrow">
//         <div className="text-center" style={{ textAlign: "center", marginBottom: "64px" }}>
//           <span className="section__label gs-reveal">Process</span>
//           <h2 className="section__title gs-reveal" style={{ margin: "0 auto" }}>Your path in <span className="accent">four steps.</span></h2>
//         </div>

//         <div className="process">
//           {steps.map((s, i) => (
//             <div key={i} className="process__step gs-reveal">
//               <div className="process__left">
//                 <div className="process__icon-wrap">{s.icon}</div>
//                 {i < steps.length - 1 && <div className="process__line" />}
//               </div>
//               <div className="process__content">
//                 <span className="process__num">{s.num}</span>
//                 <h3 className="process__title">{s.title}</h3>
//                 <p className="process__text">{s.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function FinalCTA() {
//   return (
//     <section className="section cta-section" id="enroll">
//       <div className="container container--narrow">
//         <div className="cta-box gs-reveal">
//           <div className="cta-box__glow" />
//           <span className="section__label" style={{ marginBottom: 16 }}>Ready?</span>
//           <h2 className="section__title" style={{ marginBottom: 24, fontSize: "clamp(32px, 4vw, 56px)" }}>
//             Build what's next<br /><span className="accent">with generative AI.</span>
//           </h2>
//           <p className="cta-box__sub">
//             Join 12,000+ developers, founders, and creators shipping
//             production AI. Next cohort starts soon — seats are limited.
//           </p>
//           <div className="cta-box__actions">
//             <a href="#" className="btn btn--primary btn--lg magnetic-btn">
//               <span>Enroll Now — $499</span>
//               <span className="btn__icon">{Icons.arrow}</span>
//             </a>
//             <a href="#" className="btn btn--ghost btn--lg magnetic-btn">Download Syllabus</a>
//           </div>
//           <p className="cta-box__note">30-day money-back guarantee · Cancel anytime · Lifetime access</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   const cols = [
//     { title: "Platform", links: ["Curriculum", "Features", "Pricing", "Enterprise"] },
//     { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
//     { title: "Legal", links: ["Privacy", "Terms", "Refund Policy"] },
//   ];

//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer__grid">
//           <div className="footer__brand">
//             <div className="nav__logo" style={{ marginBottom: 16 }}>
//               <span className="nav__logo-mark">{Icons.bolt}</span>
//               <span className="nav__logo-text">Build with <span className="accent">Gen AI</span></span>
//             </div>
//             <p className="footer__desc">The premier project-based program for mastering generative AI development.</p>
//           </div>
//           {cols.map(c => (
//             <div key={c.title} className="footer__col">
//               <h4 className="footer__col-title">{c.title}</h4>
//               {c.links.map(l => <a key={l} href="#" className="footer__link">{l}</a>)}
//             </div>
//           ))}
//         </div>
//         <div className="footer__bottom">
//           <span className="footer__copy">&copy; 2026 Build with Gen AI. All rights reserved.</span>
//           <div className="footer__socials">
//             {["X", "Li", "YT", "GH"].map(s => (
//               <a key={s} href="#" className="footer__social">{s}</a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // ═══════════════════════════════════════════════
// // MAIN APP COMPONENT (Handles GSAP + Lenis + Parallax)
// // ═══════════════════════════════════════════════
// export default function Page() {
  
//   useLayoutEffect(() => {
//     // 1. Lenis Smooth Scroll
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       direction: 'vertical',
//       gestureDirection: 'vertical',
//       smooth: true,
//       mouseMultiplier: 1,
//     });

//     lenis.on('scroll', ScrollTrigger.update);
//     gsap.ticker.add((time) => { lenis.raf(time * 1000); });
//     gsap.ticker.lagSmoothing(0);

//     // 2. GSAP Animations
//     let ctx = gsap.context(() => {

//       // Initial Nav Reveal
//       gsap.from(".gs-reveal-down", {
//         y: -30, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.2
//       });

//       // Flawless Clip-Path Text Reveal
//       gsap.to(".gs-clip-text", {
//         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//         y: 0,
//         opacity: 1,
//         duration: 1.2,
//         stagger: 0.08,
//         ease: "expo.out",
//         delay: 0.4
//       });

//       // Hero Elements Fade up
//       gsap.from(".gs-hero-stagger", {
//         y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.8
//       });

//       // Floating Badges Entrance
//       gsap.from(".parallax-badge", {
//         scale: 0.8, opacity: 0, y: 50, duration: 1.2, stagger: 0.15, ease: "back.out(1.2)", delay: 1.2
//       });

//       // Parallax Background on Scroll
//       gsap.to(".gs-parallax-bg", {
//         yPercent: 30,
//         ease: "none",
//         scrollTrigger: { trigger: ".hero-fullscreen", start: "top top", end: "bottom top", scrub: true }
//       });

//       // Global Mouse Parallax for Floating Elements
//       const badges = gsap.utils.toArray('.parallax-badge');
//       window.addEventListener('mousemove', (e) => {
//         const x = (e.clientX / window.innerWidth - 0.5) * 2;
//         const y = (e.clientY / window.innerHeight - 0.5) * 2;
        
//         badges.forEach((badge) => {
//           const depth = parseFloat(badge.dataset.depth) || 1;
//           gsap.to(badge, {
//             x: x * 40 * depth,
//             y: y * 40 * depth,
//             duration: 1.5,
//             ease: "power2.out"
//           });
//         });
//       });

//       // Scroll-triggered reveals for standard elements across all sections
//       gsap.utils.toArray('.gs-reveal').forEach(elem => {
//         gsap.from(elem, {
//           scrollTrigger: { trigger: elem, start: "top 85%" },
//           y: 40, opacity: 0, duration: 1, ease: "power3.out"
//         });
//       });

//       // Staggered grid cards
//       ScrollTrigger.batch(".gs-stagger-card", {
//         start: "top 85%",
//         onEnter: batch => gsap.fromTo(batch, { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" })
//       });

//       // Magnetic Buttons
//       const magnets = document.querySelectorAll('.magnetic-btn');
//       magnets.forEach((btn) => {
//         btn.addEventListener('mousemove', (e) => {
//           const rect = btn.getBoundingClientRect();
//           const x = e.clientX - rect.left - rect.width / 2;
//           const y = e.clientY - rect.top - rect.height / 2;
//           gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.4, ease: "power2.out" });
//         });
//         btn.addEventListener('mouseleave', () => {
//           gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
//         });
//       });
//     });

//     return () => {
//       lenis.destroy();
//       ctx.revert(); 
//     };
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Outfit:wght@300;400;500;600&display=swap');

//         *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

//         :root {
//           --bg: #010308;
//           --bg-alt: #050812;
//           --surface: rgba(15, 19, 34, 0.4);
//           --border: rgba(255, 255, 255, 0.08);
//           --border-hover: rgba(255, 255, 255, 0.15);
//           --text: #ffffff;
//           --text-2: #e2e8f0;
//           --text-3: #94a3b8;
//           --accent: #5EEAD4;
//           --accent-dim: rgba(94, 234, 212, 0.08);
//           --accent-border: rgba(94, 234, 212, 0.2);
//           --font-display: 'Bricolage Grotesque', serif;
//           --font-body: 'Outfit', sans-serif;
//         }

//         html { scroll-behavior: auto; }
//         body { background: var(--bg); color: var(--text); font-family: var(--font-body); -webkit-font-smoothing: antialiased; overflow-x: hidden; }

//         .accent { color: var(--accent); }

//         /* NO MORE BUGGY WRAPPERS. Direct clip-path styling for typography. */
//         .gs-clip-text {
//           display: inline-block;
//           clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
//           transform: translateY(40px);
//           opacity: 0;
//           background: transparent;
//         }

//         .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 2; }
//         .container--narrow { max-width: 860px; }
//         .section { padding: 140px 0; position: relative; z-index: 2;}
//         .section--alt { background: var(--bg-alt); }
        
//         .section__label { display: inline-block; font-family: var(--font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); margin-bottom: 24px; }
//         .section__title { font-family: var(--font-display); font-size: clamp(36px, 5vw, 56px); font-weight: 800; line-height: 1.05; letter-spacing: -0.04em; margin-bottom: 64px; }

//         /* NAV */
//         .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 24px 0; transition: all 0.4s ease; }
//         .nav--scrolled { padding: 16px 0; background: rgba(1, 3, 8, 0.6); backdrop-filter: blur(24px); border-bottom: 1px solid var(--border); }
//         .nav__inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; justify-content: space-between; align-items: center; }
//         .nav__logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
//         .nav__logo-mark { width: 36px; height: 36px; border-radius: 10px; background: var(--accent-dim); border: 1px solid var(--accent-border); display: flex; align-items: center; justify-content: center; color: var(--accent); }
//         .nav__logo-text { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--text); letter-spacing: -0.02em; }
//         .nav__links { display: flex; align-items: center; gap: 36px; }
//         .nav__link { font-size: 14px; font-weight: 500; color: var(--text-3); text-decoration: none; transition: color 0.3s; }
//         .nav__link:hover { color: var(--text); }
//         .nav__mobile-btn { display: none; background: none; border: none; cursor: pointer; padding: 8px; }
//         .nav__mobile-menu { position: absolute; top: 100%; left: 0; right: 0; background: rgba(1, 3, 8, 0.96); backdrop-filter: blur(16px); padding: 20px 24px; display: flex; flex-direction: column; gap: 16px; border-bottom: 1px solid var(--border); }
//         .nav__mobile-link { font-size: 15px; color: var(--text-2); text-decoration: none; font-weight: 500; }

//         /* BUTTONS */
//         .btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 12px; font-family: var(--font-body); font-size: 14px; font-weight: 600; text-decoration: none; cursor: pointer; transition: background 0.3s, border 0.3s, color 0.3s; border: 1px solid var(--border); background: var(--surface); color: var(--text); backdrop-filter: blur(12px); }
//         .btn:hover { border-color: var(--border-hover); }
//         .btn--primary { background: var(--accent); color: var(--bg); border-color: var(--accent); }
//         .btn--primary:hover { box-shadow: 0 0 32px rgba(94, 234, 212, 0.25); background: #6ff0dc; }
//         .btn--ghost { background: transparent; border-color: var(--border); }
//         .btn--ghost:hover { border-color: var(--accent-border); background: rgba(94, 234, 212, 0.05); }
//         .btn--lg { padding: 16px 32px; font-size: 15px; }
//         .btn--sm { padding: 10px 20px; font-size: 13px; }
//         .btn__icon { display: flex; align-items: center; }

//         /* THE MASTERPIECE HERO (Full Screen) */
//         .hero-fullscreen { position: relative; width: 100vw; min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; padding-top: 80px; }
//         .hero-bg-wrapper { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
//         .swarm-canvas { width: 100%; height: 100%; display: block; }
        
//         .hero-center-aura { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 800px; height: 800px; background: radial-gradient(circle, rgba(1, 3, 8, 0.9) 0%, rgba(1, 3, 8, 0.5) 40%, transparent 70%); z-index: 2; pointer-events: none; }

//         .parallax-layer { position: absolute; inset: 0; z-index: 3; pointer-events: none; }
//         .hero__float { position: absolute; display: flex; align-items: center; gap: 12px; padding: 14px 24px; border-radius: 100px; background: rgba(15, 19, 34, 0.5); backdrop-filter: blur(24px); border: 1px solid var(--border); box-shadow: 0 24px 48px rgba(0,0,0,0.5); pointer-events: auto; }
//         .hero__float-icon { color: var(--accent); display: flex; }
//         .hero__float-text { font-size: 14px; font-weight: 600; color: var(--text-2); white-space: nowrap; letter-spacing: -0.01em; }

//         .hero-content-center { position: relative; z-index: 10; text-align: center; display: flex; flex-direction: column; align-items: center; max-width: 900px; padding: 0 24px; }
        
//         .hero-title { font-family: var(--font-display); font-size: clamp(52px, 8vw, 110px); font-weight: 800; line-height: 0.95; letter-spacing: -0.05em; color: var(--text); margin: 0 0 32px; }
//         .hero-title .word { display: inline-block; padding-right: 0.2em; }
        
//         .hero__sub { font-size: 18px; line-height: 1.6; color: var(--text-3); max-width: 600px; margin: 0 0 48px; font-weight: 400; }
//         .hero__actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
//         .hero__metrics { display: flex; gap: 56px; margin-top: 72px; padding-top: 48px; border-top: 1px solid var(--border); justify-content: center; width: 100%; max-width: 700px; }
//         .hero__metric-val { display: block; font-family: var(--font-display); font-size: 32px; font-weight: 800; color: var(--text); letter-spacing: -0.03em; }
//         .hero__metric-label { font-size: 13px; font-weight: 500; color: var(--text-3); letter-spacing: 0.05em; margin-top: 4px; display: block; text-transform: uppercase; }

//         .badge { display: inline-flex; align-items: center; gap: 10px; padding: 8px 16px; border-radius: 100px; background: var(--accent-dim); border: 1px solid var(--accent-border); backdrop-filter: blur(12px); }
//         .badge__dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 12px var(--accent); animation: pulse-dot 2s infinite; }
//         .badge__text { font-size: 12px; font-weight: 600; color: var(--accent); letter-spacing: 0.08em; text-transform: uppercase; }

//         /* CARDS */
//         .why-grid, .features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
//         .features-grid { grid-template-columns: repeat(3, 1fr); }
//         .card { padding: 40px 32px; border-radius: 20px; background: var(--surface); border: 1px solid var(--border); transition: border-color 0.4s, transform 0.4s; height: 100%; backdrop-filter: blur(12px); }
//         .card:hover { border-color: var(--accent-border); transform: translateY(-4px); }
//         .card__icon { width: 48px; height: 48px; border-radius: 12px; background: var(--accent-dim); border: 1px solid var(--accent-border); display: flex; align-items: center; justify-content: center; color: var(--accent); margin-bottom: 24px; }
//         .card__title { font-family: var(--font-display); font-size: 20px; font-weight: 700; color: var(--text); margin-bottom: 12px; letter-spacing: -0.02em; }
//         .card__text { font-size: 15px; line-height: 1.7; color: var(--text-3); font-weight: 400; }

//         /* CURRICULUM */
//         .curriculum { display: grid; grid-template-columns: 320px 1fr; gap: 32px; }
//         .curriculum__nav { display: flex; flex-direction: column; gap: 8px; }
//         .curriculum__tab { display: flex; align-items: center; gap: 16px; padding: 20px; border-radius: 16px; cursor: pointer; border: 1px solid transparent; background: transparent; text-align: left; transition: all 0.3s ease; font-family: var(--font-body); }
//         .curriculum__tab:hover { background: var(--surface); }
//         .curriculum__tab--active { background: var(--surface); border-color: var(--accent-border); }
//         .curriculum__tab-num { font-family: var(--font-display); font-size: 14px; font-weight: 800; color: var(--accent); min-width: 28px; }
//         .curriculum__tab-title { display: block; font-size: 15px; font-weight: 600; color: var(--text-2); letter-spacing: -0.01em; }
//         .curriculum__tab--active .curriculum__tab-title { color: var(--text); }
//         .curriculum__tab-dur { font-size: 13px; color: var(--text-3); margin-top: 4px; display: block; }

//         .curriculum__detail { padding: 48px; border-radius: 20px; background: var(--surface); border: 1px solid var(--border); backdrop-filter: blur(12px); }
//         .curriculum__detail-head { display: flex; align-items: center; gap: 20px; margin-bottom: 40px; }
//         .curriculum__detail-num { font-family: var(--font-display); font-size: 48px; font-weight: 800; color: var(--accent); opacity: 0.25; line-height: 1; }
//         .curriculum__detail-title { font-family: var(--font-display); font-size: 24px; font-weight: 700; color: var(--text); letter-spacing: -0.02em; }
//         .curriculum__detail-dur { font-size: 14px; color: var(--text-3); display: block; margin-top: 4px; }
        
//         .curriculum__topics { display: flex; flex-direction: column; gap: 16px; }
//         .curriculum__topic { display: flex; align-items: center; gap: 16px; font-size: 15px; color: var(--text-2); font-weight: 400; animation: fadeIn 0.4s ease forwards; opacity: 0; }
//         .curriculum__topic-check { width: 28px; height: 28px; border-radius: 8px; background: var(--accent-dim); border: 1px solid var(--accent-border); display: flex; align-items: center; justify-content: center; color: var(--accent); flex-shrink: 0; }

//         /* TESTIMONIALS */
//         .testimonial-container { position: relative; min-height: 240px; }
//         .testimonial { position: absolute; top: 0; left: 0; right: 0; opacity: 0; transform: translateY(16px); transition: all 0.6s ease; pointer-events: none; }
//         .testimonial--active { position: relative; opacity: 1; transform: translateY(0); pointer-events: auto; }
//         .testimonial__text { font-family: var(--font-display); font-size: clamp(20px, 3vw, 28px); font-weight: 500; line-height: 1.5; color: var(--text-2); font-style: normal; letter-spacing: -0.01em; margin-bottom: 40px; }
//         .testimonial__author { display: flex; align-items: center; gap: 16px; }
//         .testimonial__avatar { width: 52px; height: 52px; border-radius: 14px; background: var(--surface); border: 1px solid var(--accent-border); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--accent); }
//         .testimonial__name { font-size: 16px; font-weight: 600; color: var(--text); }
//         .testimonial__role { font-size: 14px; color: var(--text-3); margin-top: 2px; }
//         .testimonial__dots { display: flex; gap: 10px; margin-top: 48px; }
//         .testimonial__dot { width: 10px; height: 10px; border-radius: 50%; background: var(--border); border: none; cursor: pointer; transition: all 0.3s ease; padding: 0; }
//         .testimonial__dot--active { width: 32px; border-radius: 5px; background: var(--accent); }

//         /* PROCESS */
//         .process { display: flex; flex-direction: column; }
//         .process__step { display: flex; gap: 32px; }
//         .process__left { display: flex; flex-direction: column; align-items: center; }
//         .process__icon-wrap { width: 56px; height: 56px; border-radius: 16px; flex-shrink: 0; background: var(--surface); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--accent); position: relative; z-index: 2; transition: border-color 0.3s; }
//         .process__step:hover .process__icon-wrap { border-color: var(--accent-border); background: var(--accent-dim); }
//         .process__line { width: 1px; flex: 1; min-height: 48px; background: var(--border); margin: 8px 0; }
//         .process__content { padding-bottom: 56px; }
//         .process__num { font-family: var(--font-display); font-size: 12px; font-weight: 700; color: var(--accent); letter-spacing: 0.12em; display: block; margin-bottom: 8px; }
//         .process__title { font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--text); letter-spacing: -0.02em; margin-bottom: 12px; }
//         .process__text { font-size: 15px; line-height: 1.7; color: var(--text-3); max-width: 500px; }

//         /* CTA */
//         .cta-box { text-align: center; padding: 80px 48px; border-radius: 32px; position: relative; overflow: hidden; background: var(--surface); border: 1px solid var(--border); backdrop-filter: blur(24px); }
//         .cta-box__glow { position: absolute; top: -50%; left: 50%; transform: translateX(-50%); width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(94, 234, 212, 0.1) 0%, transparent 60%); pointer-events: none; }
//         .cta-box > * { position: relative; z-index: 1; }
//         .cta-box__sub { font-size: 17px; line-height: 1.7; color: var(--text-3); max-width: 500px; margin: 0 auto 36px; }
//         .cta-box__actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
//         .cta-box__note { font-size: 13px; color: var(--text-3); margin-top: 24px; opacity: 0.6; }

//         /* FOOTER */
//         .footer { padding: 64px 0 40px; border-top: 1px solid var(--border); position: relative; z-index: 2; }
//         .footer__grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 64px; margin-bottom: 64px; }
//         .footer__desc { font-size: 15px; line-height: 1.7; color: var(--text-3); max-width: 320px; }
//         .footer__col-title { font-size: 13px; font-weight: 600; color: var(--text-2); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 20px; }
//         .footer__link { display: block; font-size: 15px; color: var(--text-3); text-decoration: none; margin-bottom: 12px; transition: color 0.3s; }
//         .footer__link:hover { color: var(--text); }
//         .footer__bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 32px; border-top: 1px solid var(--border); }
//         .footer__copy { font-size: 14px; color: var(--text-3); }
//         .footer__socials { display: flex; gap: 10px; }
//         .footer__social { width: 38px; height: 38px; border-radius: 10px; background: transparent; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--text-3); font-size: 12px; font-weight: 700; text-decoration: none; transition: all 0.3s; font-family: var(--font-body); }
//         .footer__social:hover { border-color: var(--accent-border); color: var(--accent); background: var(--surface); }

//         @keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
//         @keyframes fadeIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }

//         @media (max-width: 1024px) {
//           .why-grid { grid-template-columns: repeat(2, 1fr); }
//           .features-grid { grid-template-columns: repeat(2, 1fr); }
//           .curriculum { grid-template-columns: 1fr; gap: 40px; }
//           .hero__float { display: none; }
//           .footer__grid { grid-template-columns: 1fr 1fr; gap: 48px; }
//         }
//         @media (max-width: 768px) {
//           .nav__links { display: none; }
//           .nav__mobile-btn { display: block; }
//           .hero-title { font-size: clamp(42px, 10vw, 64px); }
//           .hero__metrics { flex-direction: column; gap: 24px; align-items: center; text-align: center; }
//           .why-grid, .features-grid { grid-template-columns: 1fr; }
//           .curriculum__detail { padding: 32px; }
//           .cta-box { padding: 48px 24px; }
//           .footer__grid { grid-template-columns: 1fr; }
//           .footer__bottom { flex-direction: column; gap: 24px; }
//         }
//       `}</style>

//       <div>
//         <Nav />
//         <Hero />
//         <WhySection />
//         <CurriculumSection />
//         <FeaturesSection />
//         <TestimonialsSection />
//         <ProcessSection />
//         <FinalCTA />
//         <Footer />
//       </div>
//     </>
//   );
// }