'use client';

import { useEffect, useRef, useState } from 'react';

// ─── Particle canvas ────────────────────────────────────────────────
interface Particle {
	x: number;
	y: number;
	vx: number;
	vy: number;
	baseX: number;
	baseY: number;
	size: number;
	opacity: number;
	hue: number; // 0 = cyan, 1 = indigo
	phase: number;
}

function useParticleCanvas(
	canvasRef: React.RefObject<HTMLCanvasElement | null>,
) {
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animId: number;
		let particles: Particle[] = [];
		let W = 0,
			H = 0;
		let t = 0;

		function resize() {
			if (!canvas) return;
			W = canvas.width = canvas.offsetWidth;
			H = canvas.height = canvas.offsetHeight;
			buildParticles();
		}

		function buildParticles() {
			particles = [];
			const COUNT = Math.min(Math.floor((W * H) / 5000), 220);
			for (let i = 0; i < COUNT; i++) {
				const x = Math.random() * W;
				const y = Math.random() * H;
				particles.push({
					x,
					y,
					vx: (Math.random() - 0.5) * 0.35,
					vy: (Math.random() - 0.5) * 0.35,
					baseX: x,
					baseY: y,
					size: Math.random() * 1.8 + 0.5,
					opacity: Math.random() * 0.6 + 0.2,
					hue: Math.random(),
					phase: Math.random() * Math.PI * 2,
				});
			}
		}

		function draw() {
			if (!canvas || !ctx) return;
			t += 0.008;

			ctx.clearRect(0, 0, W, H);

			// Draw faint grid
			ctx.strokeStyle = 'rgba(91,77,255,0.055)';
			ctx.lineWidth = 1;
			const GRID = 60;
			for (let x = 0; x < W; x += GRID) {
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, H);
				ctx.stroke();
			}
			for (let y = 0; y < H; y += GRID) {
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(W, y);
				ctx.stroke();
			}

			// Particles
			for (const p of particles) {
				// Drift with gentle sine
				p.x += p.vx + Math.sin(t + p.phase) * 0.12;
				p.y += p.vy + Math.cos(t * 0.7 + p.phase) * 0.1;

				// Wrap
				if (p.x < -5) p.x = W + 5;
				if (p.x > W + 5) p.x = -5;
				if (p.y < -5) p.y = H + 5;
				if (p.y > H + 5) p.y = -5;

				const pulse = 0.75 + Math.sin(t * 1.3 + p.phase) * 0.25;
				const alpha = p.opacity * pulse;

				// Color: mix cyan #00D4FF and indigo #5B4DFF
				const r = Math.round(0 + p.hue * 91);
				const g = Math.round(212 * (1 - p.hue) + 77 * p.hue);
				const b = Math.round(255);

				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
				ctx.fill();
			}

			// Draw connections
			ctx.lineWidth = 0.5;
			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < 110) {
						const a = (1 - dist / 110) * 0.18;
						ctx.strokeStyle = `rgba(91,77,255,${a})`;
						ctx.beginPath();
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.stroke();
					}
				}
			}

			animId = requestAnimationFrame(draw);
		}

		resize();
		window.addEventListener('resize', resize);
		draw();

		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener('resize', resize);
		};
	}, [canvasRef]);
}

// ─── Animated counter ───────────────────────────────────────────────
function useCountdown(targetDate: Date) {
	const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

	useEffect(() => {
		function tick() {
			const diff = targetDate.getTime() - Date.now();
			if (diff <= 0) {
				setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
				return;
			}
			const d = Math.floor(diff / 86400000);
			const h = Math.floor((diff % 86400000) / 3600000);
			const m = Math.floor((diff % 3600000) / 60000);
			const s = Math.floor((diff % 60000) / 1000);
			setTimeLeft({ d, h, m, s });
		}
		tick();
		const id = setInterval(tick, 1000);
		return () => clearInterval(id);
	}, [targetDate]);

	return timeLeft;
}

// ─── Typed text effect ──────────────────────────────────────────────
function useTyped(words: string[], speed = 80, pause = 2200) {
	const [display, setDisplay] = useState('');
	const [wordIdx, setWordIdx] = useState(0);
	const [charIdx, setCharIdx] = useState(0);
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		const word = words[wordIdx];
		if (!deleting && charIdx < word.length) {
			const id = setTimeout(() => setCharIdx((c) => c + 1), speed);
			return () => clearTimeout(id);
		}
		if (!deleting && charIdx === word.length) {
			const id = setTimeout(() => setDeleting(true), pause);
			return () => clearTimeout(id);
		}
		if (deleting && charIdx > 0) {
			const id = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
			return () => clearTimeout(id);
		}
		if (deleting && charIdx === 0) {
			setDeleting(false);
			setWordIdx((i) => (i + 1) % words.length);
		}
	}, [charIdx, deleting, wordIdx, words, speed, pause]);

	useEffect(() => {
		setDisplay(words[wordIdx].slice(0, charIdx));
	}, [charIdx, wordIdx, words]);

	return display;
}

// ─── Main component ─────────────────────────────────────────────────
export default function Home() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	useParticleCanvas(canvasRef);

	// Launch date: 30 days from now
	const launchDate = useRef(new Date(Date.now() + 30 * 24 * 3600 * 1000));
	const { d, h, m, s } = useCountdown(launchDate.current);

	const typed = useTyped([
		'engineered for tomorrow.',
		'built for your business.',
		'arriving very soon.',
		'changing everything.',
	]);

	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const id = setTimeout(() => setMounted(true), 80);
		return () => clearTimeout(id);
	}, []);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (email.trim()) setSubmitted(true);
	}

	const pad = (n: number) => String(n).padStart(2, '0');

	return (
		<div
			style={{
				minHeight: '100vh',
				width: '100%',
				background: '#0A0E1A',
				fontFamily: "'Syne', 'Inter', system-ui, sans-serif",
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'relative',
				overflow: 'hidden',
				color: '#F2F4F8',
			}}
		>
			{/* Particle canvas */}
			<canvas
				ref={canvasRef}
				style={{
					position: 'absolute',
					inset: 0,
					width: '100%',
					height: '100%',
					pointerEvents: 'none',
				}}
			/>

			{/* Radial glow center */}
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: '700px',
					height: '700px',
					borderRadius: '50%',
					background:
						'radial-gradient(circle, rgba(91,77,255,0.13) 0%, rgba(0,212,255,0.06) 40%, transparent 70%)',
					pointerEvents: 'none',
				}}
			/>

			{/* Content */}
			<main
				style={{
					position: 'relative',
					zIndex: 10,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center',
					padding: '2rem 1.5rem',
					maxWidth: '760px',
					width: '100%',
					opacity: mounted ? 1 : 0,
					transform: mounted ? 'translateY(0)' : 'translateY(24px)',
					transition: 'opacity 0.9s ease, transform 0.9s ease',
				}}
			>
				{/* Eyebrow */}
				<div
					style={{
						display: 'inline-flex',
						alignItems: 'center',
						gap: '8px',
						marginBottom: '2.5rem',
						padding: '6px 16px',
						borderRadius: '999px',
						border: '1px solid rgba(91,77,255,0.4)',
						background: 'rgba(91,77,255,0.08)',
						fontFamily: "'DM Mono', monospace",
						fontSize: '11px',
						letterSpacing: '0.18em',
						color: '#00D4FF',
						textTransform: 'uppercase',
					}}
				>
					<span
						style={{
							width: 7,
							height: 7,
							borderRadius: '50%',
							background: '#00D4FF',
							animation: 'pulse-dot 2s ease-in-out infinite',
							display: 'inline-block',
						}}
					/>
					Something Unique Is Loading
				</div>

				{/* Wordmark */}
				<div
					style={{
						fontFamily: "'DM Mono', monospace",
						fontSize: 'clamp(10px, 1.5vw, 13px)',
						letterSpacing: '0.35em',
						color: 'rgba(242,244,248,0.4)',
						textTransform: 'uppercase',
						marginBottom: '1.25rem',
					}}
				>
					Unique Technology Solutions
				</div>

				{/* Headline */}
				<h1
					style={{
						fontSize: 'clamp(2.6rem, 7.5vw, 5.5rem)',
						fontWeight: 800,
						lineHeight: 1.05,
						letterSpacing: '-0.025em',
						margin: '0 0 0.5rem',
						background:
							'linear-gradient(135deg, #F2F4F8 30%, #00D4FF 80%, #5B4DFF 100%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						backgroundClip: 'text',
					}}
				>
					Technology
					<br />
					reimagined.
				</h1>

				{/* Typed subtitle */}
				<p
					style={{
						fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
						color: 'rgba(242,244,248,0.55)',
						fontWeight: 400,
						marginBottom: '3.5rem',
						minHeight: '2em',
						letterSpacing: '0.01em',
					}}
				>
					A new kind of solution,{' '}
					<span style={{ color: '#00D4FF', fontWeight: 500 }}>
						{typed}
						<span
							style={{
								display: 'inline-block',
								width: '2px',
								height: '1em',
								background: '#00D4FF',
								marginLeft: '2px',
								verticalAlign: 'text-bottom',
								animation: 'blink 1s step-end infinite',
							}}
						/>
					</span>
				</p>

				{/* Countdown */}
				<div
					style={{
						display: 'flex',
						gap: 'clamp(12px, 3vw, 28px)',
						marginBottom: '3.5rem',
					}}
				>
					{[
						{ label: 'Days', value: pad(d) },
						{ label: 'Hours', value: pad(h) },
						{ label: 'Minutes', value: pad(m) },
						{ label: 'Seconds', value: pad(s) },
					].map(({ label, value }) => (
						<div
							key={label}
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '6px',
							}}
						>
							<div
								style={{
									fontFamily: "'DM Mono', monospace",
									fontSize: 'clamp(1.8rem, 5vw, 3.25rem)',
									fontWeight: 700,
									lineHeight: 1,
									background:
										'linear-gradient(180deg, #F2F4F8 0%, #5B4DFF 150%)',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
									backgroundClip: 'text',
									minWidth: '2ch',
									textAlign: 'center',
								}}
							>
								{value}
							</div>
							<div
								style={{
									fontFamily: "'DM Mono', monospace",
									fontSize: '9px',
									letterSpacing: '0.2em',
									textTransform: 'uppercase',
									color: 'rgba(242,244,248,0.35)',
								}}
							>
								{label}
							</div>
						</div>
					))}
				</div>

				{/* Divider */}
				<div
					style={{
						width: '100%',
						maxWidth: '360px',
						height: '1px',
						background:
							'linear-gradient(90deg, transparent, rgba(91,77,255,0.5), rgba(0,212,255,0.5), transparent)',
						marginBottom: '3rem',
					}}
				/>

				{/* Email capture */}
				{!submitted ? (
					<form
						onSubmit={handleSubmit}
						style={{
							display: 'flex',
							gap: '10px',
							width: '100%',
							maxWidth: '440px',
							flexWrap: 'wrap',
							justifyContent: 'center',
						}}
					>
						<input
							type="email"
							required
							placeholder="your@email.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							style={{
								flex: '1 1 220px',
								padding: '13px 18px',
								borderRadius: '10px',
								border: '1px solid rgba(91,77,255,0.35)',
								background: 'rgba(91,77,255,0.07)',
								color: '#F2F4F8',
								fontFamily: "'DM Mono', monospace",
								fontSize: '13px',
								outline: 'none',
								transition: 'border-color 0.2s',
							}}
							onFocus={(e) => (e.target.style.borderColor = '#00D4FF')}
							onBlur={(e) =>
								(e.target.style.borderColor = 'rgba(91,77,255,0.35)')
							}
						/>
						<button
							type="submit"
							style={{
								padding: '13px 24px',
								borderRadius: '10px',
								border: 'none',
								background: 'linear-gradient(135deg, #5B4DFF, #00D4FF)',
								color: '#0A0E1A',
								fontFamily: "'Syne', sans-serif",
								fontWeight: 700,
								fontSize: '13px',
								letterSpacing: '0.04em',
								cursor: 'pointer',
								transition: 'opacity 0.2s, transform 0.15s',
								whiteSpace: 'nowrap',
							}}
							onMouseEnter={(e) => {
								(e.target as HTMLButtonElement).style.opacity = '0.88';
								(e.target as HTMLButtonElement).style.transform = 'scale(1.03)';
							}}
							onMouseLeave={(e) => {
								(e.target as HTMLButtonElement).style.opacity = '1';
								(e.target as HTMLButtonElement).style.transform = 'scale(1)';
							}}
						>
							Notify Me
						</button>
					</form>
				) : (
					<div
						style={{
							padding: '14px 28px',
							borderRadius: '10px',
							border: '1px solid rgba(0,212,255,0.4)',
							background: 'rgba(0,212,255,0.07)',
							fontFamily: "'DM Mono', monospace",
							fontSize: '13px',
							color: '#00D4FF',
							letterSpacing: '0.05em',
						}}
					>
						✓ &nbsp;You're on the list. We'll be in touch.
					</div>
				)}

				{/* Footer line */}
				<p
					style={{
						marginTop: '3.5rem',
						fontFamily: "'DM Mono', monospace",
						fontSize: '11px',
						letterSpacing: '0.12em',
						color: 'rgba(242,244,248,0.2)',
					}}
				>
					© {new Date().getFullYear()} Unique Technology Solutions · All rights
					reserved
				</p>
			</main>

			{/* Keyframe styles */}
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@400;500&display=swap');

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.75); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        * { box-sizing: border-box; }
        body { margin: 0; }
        ::placeholder { color: rgba(242,244,248,0.25); }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #0d1120 inset !important;
          -webkit-text-fill-color: #F2F4F8 !important;
        }
      `}</style>
		</div>
	);
}
