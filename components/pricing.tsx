import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Pricing() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-2xl space-y-6 text-center">
					<h1 className="text-center text-balance text-4xl font-semibold lg:text-5xl">Pricing that Scales with You</h1>
					<p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
				</div>

				<div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
					<Card className="flex flex-col">
						<CardHeader>
							<CardTitle className="font-medium">Free</CardTitle>
							<span className="my-3 block text-2xl font-semibold">$0 / mo</span>
							<CardDescription className="text-sm">Per editor</CardDescription>
						</CardHeader>

						<CardContent className="space-y-4">
							<hr className="border-dashed" />

							<ul className="list-outside space-y-3 text-sm">
								{['Basic Analytics Dashboard', '5GB Cloud Storage', 'Email and Chat Support'].map((item, index) => (
									<li key={index} className="flex items-center gap-2">
										<Check className="size-3" />
										{item}
									</li>
								))}
							</ul>
						</CardContent>

						<CardFooter className="mt-auto">
							<Button asChild variant="outline" className="w-full">
								<Link href="/login">Get Started</Link>
							</Button>
						</CardFooter>
					</Card>

					<Card className="relative">
						<div className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full group justify-center px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] ">
							<span
								className={cn('absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]')}
								style={{
									WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
									WebkitMaskComposite: 'destination-out',
									mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
									maskComposite: 'subtract',
									WebkitClipPath: 'padding-box',
								}}
							/>
							<p className="text-sm font-medium">Popular</p>
						</div>

						<div className="flex flex-col">
							<CardHeader>
								<CardTitle className="font-medium">Pro</CardTitle>
								<span className="my-3 block text-2xl font-semibold">$19 / mo</span>
								<CardDescription className="text-sm">Per editor</CardDescription>
							</CardHeader>

							<CardContent className="space-y-4">
								<hr className="border-dashed" />
								<ul className="list-outside space-y-3 text-sm mb-5">
									{[
										'Everything in Free Plan',
										'5GB Cloud Storage',
										'Email and Chat Support',
										'Access to Community Forum',
										'Single User Access',
										'Access to Basic Templates',
										'Mobile App Access',
										'1 Custom Report Per Month',
										'Monthly Product Updates',
										'Standard Security Features',
									].map((item, index) => (
										<li key={index} className="flex items-center gap-2">
											<Check className="size-3" />
											{item}
										</li>
									))}
								</ul>
							</CardContent>

							<CardFooter>
								<Button asChild className="w-full">
									<Link href="/login">Get Started</Link>
								</Button>
							</CardFooter>
						</div>
					</Card>

					<Card className="flex flex-col">
						<CardHeader>
							<CardTitle className="font-medium">Startup</CardTitle>
							<span className="my-3 block text-2xl font-semibold">$29 / mo</span>
							<CardDescription className="text-sm">Per editor</CardDescription>
						</CardHeader>

						<CardContent className="space-y-4">
							<hr className="border-dashed" />

							<ul className="list-outside space-y-3 text-sm">
								{['Everything in Pro Plan', '5GB Cloud Storage', 'Email and Chat Support'].map((item, index) => (
									<li key={index} className="flex items-center gap-2">
										<Check className="size-3" />
										{item}
									</li>
								))}
							</ul>
						</CardContent>

						<CardFooter className="mt-auto">
							<Button asChild variant="outline" className="w-full">
								<Link href="/login">Get Started</Link>
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	);
}
