'use client';
import Pricing from '@/components/pricing';
import PricingComparator from '@/components/pricingComparator';
import { useEffect } from 'react';

export default function PricingPage() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Pricing />
			<PricingComparator/>
		</>
	);
}
