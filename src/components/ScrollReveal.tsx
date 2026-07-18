'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in-view');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
		);

		const observeAll = () => {
			document.querySelectorAll('.reveal-up:not(.in-view), .reveal-stagger:not(.in-view)').forEach((el) => {
				observer.observe(el);
			});
		};

		observeAll();

		const mutationObserver = new MutationObserver(() => {
			observeAll();
		});

		mutationObserver.observe(document.body, { childList: true, subtree: true });

		return () => {
			observer.disconnect();
			mutationObserver.disconnect();
		};
	}, []);

	return null;
}
