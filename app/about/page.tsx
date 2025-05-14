'use client';
import Team from '@/components/team';
import { useEffect } from 'react';

export default function AboutPage() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Team />
		</>
	);
}
