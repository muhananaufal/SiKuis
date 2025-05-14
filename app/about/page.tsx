'use client';
import Team from '@/components/team';
import { useEffect } from 'react';

export default function AboutPage() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Team />
		</>
	);
}
