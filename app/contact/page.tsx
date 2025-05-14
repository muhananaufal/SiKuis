'use client';
import { useEffect } from 'react';
import Contact from '@/components/contact';

export default function ContactPage() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Contact />
		</>
	);
}
