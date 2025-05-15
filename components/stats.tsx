import CountUp from './ui/count-up';

export default function Stats() {
	return (
		<section className="py-12 md:py-20">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
				<div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-5xl">Tailark in numbers</h2>
					<p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
				</div>

				<div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
					<div className="space-y-4">
						<div className="text-5xl font-bold inline">+</div>
						<CountUp from={0} to={1200} separator="," direction="up" duration={2.4} className="count-up-text text-5xl font-bold" />
						<p>Stars on GitHub</p>
					</div>
					<div className="space-y-4">
						<CountUp from={0} to={22} separator="," direction="up" duration={7} className="count-up-text text-5xl font-bold" />
						<div className="text-5xl font-bold inline"> Million</div>
						<p>Active Users</p>
					</div>
					<div className="space-y-4">
						<div className="text-5xl font-bold inline">+</div>
						<CountUp from={0} to={500} separator="," direction="up" duration={3} className="count-up-text text-5xl font-bold" />
						<p>Powered Apps</p>
					</div>
				</div>
			</div>
		</section>
	);
}
