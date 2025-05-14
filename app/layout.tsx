import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { AnimatedGroup } from '@/components/ui/animated-group';
import ClientLayout from '@/components/clientsLayout';
import './globals.css';

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
			<body className="antialiased">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<AnimatedGroup variants={transitionVariants}>
						<ClientLayout>{children}</ClientLayout>
					</AnimatedGroup>
				</ThemeProvider>
			</body>
		</html>
	);
}
