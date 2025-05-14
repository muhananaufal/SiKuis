'use client';

import React from 'react';
import { useLayoutConfig } from '@/hooks/useLayoutConfig';
import Navbar from './navbar';
import Footer from './footer';
import CallToAction from './callToAction';

export default function ClientLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { shouldShowLayout } = useLayoutConfig();

	return (
		<>
			{shouldShowLayout && <Navbar />}
			{children}
			{shouldShowLayout && <CallToAction />}
			{shouldShowLayout && <Footer />}
		</>
	);
}
