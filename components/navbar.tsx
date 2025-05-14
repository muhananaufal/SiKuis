'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import { cn, disableNavbarAndFooter } from '@/lib/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const navbarItems = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'About',
		href: '/about',
	},
	{
		title: 'Pricing',
		href: '/pricing',
	},
	{
		title: 'Contact',
		href: '/contact',
	},
];

export default function Navbar() {
	const [menuState, setMenuState] = React.useState(false);
	const [isScrolled, setIsScrolled] = React.useState(false);

	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	const path = usePathname();

	React.useEffect(() => {
		setMounted(true);
	}, []);

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<>
			{!disableNavbarAndFooter.includes(path) && (
				<header>
					<nav data-state={menuState && 'active'} className="fixed top-0 z-50 w-full px-2 transition-all duration-300">
						<div className={cn('mx-auto mt-2 max-w-6xl px-6 lg:px-12 transition-all duration-300', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
							<div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
								<div className="flex w-full justify-between lg:w-auto">
									<Link href="/" aria-label="home" className="flex items-center me-2 pb-[3px]">
										<Image src="/logo.png" alt="logo" width="70" height="70" className="dark:invert dark:brightness-200" />
									</Link>

									<div className="flex items-center gap-3">
										{mounted && (
											<button onClick={toggleTheme} aria-label="Toggle Theme" className="p-2 rounded-md hover:bg-accent transition">
												{theme === 'dark' ? (
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="20"
														height="20"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="lucide lucide-sun-icon lucide-sun"
													>
														<circle cx="12" cy="12" r="4" />
														<path d="M12 2v2" />
														<path d="M12 20v2" />
														<path d="m4.93 4.93 1.41 1.41" />
														<path d="m17.66 17.66 1.41 1.41" />
														<path d="M2 12h2" />
														<path d="M20 12h2" />
														<path d="m6.34 17.66-1.41 1.41" />
														<path d="m19.07 4.93-1.41 1.41" />
													</svg>
												) : (
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="20"
														height="20"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="lucide lucide-moon-icon lucide-moon"
													>
														<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
													</svg>
												)}
											</button>
										)}

										<button onClick={() => setMenuState(!menuState)} aria-label={menuState == true ? 'Close Menu' : 'Open Menu'} className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
											<Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
											<X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
										</button>
									</div>
								</div>

								<div className="absolute inset-0 m-auto hidden size-fit lg:block">
									<ul className="flex gap-8 text-sm">
										{navbarItems.map((item, index) => (
											<li key={index}>
												<Link href={item.href} className="text-accent-foreground hover:text-accent-foreground block duration-150">
													<span>{item.title}</span>
												</Link>
											</li>
										))}
									</ul>
								</div>

								<div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
									<div className="lg:hidden">
										<ul className="space-y-6 text-base">
											{navbarItems.map((item, index) => (
												<li key={index}>
													<Link href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150">
														<span>{item.title}</span>
													</Link>
												</li>
											))}
										</ul>
									</div>
									<div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
										<Button asChild variant="outline" size="sm" className={cn(isScrolled && 'lg:hidden')}>
											<Link href="/login">
												<span>Login</span>
											</Link>
										</Button>
										<Button asChild size="sm" className={cn(isScrolled && 'lg:hidden')}>
											<Link href="/signup">
												<span>Sign Up</span>
											</Link>
										</Button>
										<Button asChild size="sm" className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
											<Link href="/login">
												<span>Get Started</span>
											</Link>
										</Button>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</header>
			)}
		</>
	);
}
