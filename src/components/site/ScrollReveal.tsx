"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal]:not(.is-visible), [data-reveal-group]:not(.is-visible)";

/**
 * Reveals elements as they enter the viewport.
 *
 * Mounted once in the root layout. Elements are unobserved after their first
 * reveal, and newly rendered elements are picked up on the next animation
 * frame after a DOM change — batched, so a burst of React updates costs one
 * sweep rather than one per mutation.
 */
export default function ScrollReveal() {
	useEffect(() => {
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		// Nothing to animate: leave every element in its visible default state.
		if (prefersReducedMotion) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
		);

		const observeAll = () => {
			for (const el of document.querySelectorAll(SELECTOR)) {
				observer.observe(el);
			}
		};

		observeAll();

		// Coalesce mutation bursts into a single sweep per frame.
		let frame = 0;
		const mutations = new MutationObserver(() => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				observeAll();
			});
		});

		mutations.observe(document.body, { childList: true, subtree: true });

		return () => {
			if (frame) cancelAnimationFrame(frame);
			mutations.disconnect();
			observer.disconnect();
		};
	}, []);

	return null;
}
