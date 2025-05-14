'use client';
import Features from '@/components/features';
import Hero from '@/components/hero';
import Stats from '@/components/stats';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import { useEffect } from 'react';
import Integrations from '@/components/integrations';
import LogoCloud from '@/components/logoCloud';

export default function HomePage() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Hero />
			<LogoCloud />
			<Integrations />
			<Stats />
			<Features />
			<Testimonials />
			<FAQ />
		</>
	);
}
