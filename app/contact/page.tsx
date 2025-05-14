'use client';
import { useEffect } from 'react';
import Contact from '@/components/contact';

export default function ContactPage() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Contact />
		</>
	);
}
