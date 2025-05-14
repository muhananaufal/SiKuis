'use client';

import { usePathname } from 'next/navigation';

export function useLayoutConfig() {
	const pathname = usePathname();

	const routesWithoutNavbarAndFooter = ['/login', '/signup', '/forgot-password'];
	const shouldShowLayout = !routesWithoutNavbarAndFooter.includes(pathname);

	return { shouldShowLayout };
}
