import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { AnimatedGroup } from '@/components/ui/animated-group';
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const transitionVariants = {
	item: {
		hidden: {
			opacity: 0,
			filter: 'blur(12px)',
			y: 12,
		},
		visible: {
			opacity: 1,
			filter: 'blur(0px)',
			y: 0,
			transition: {
				type: 'spring',
				bounce: 0.3,
				duration: 1.5,
			},
		},
	},
};

export const metadata: Metadata = {
	title: 'SiKuis - Turn your Media into Quiz',
	description: 'Aplikasi generate kuis otomatis dari transcript video atau dokumen menggunakan AI',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string} />

			<body className="antialiased">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Navbar />
					<AnimatedGroup variants={transitionVariants}>{children}</AnimatedGroup>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
