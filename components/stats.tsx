import CountUp from './ui/count-up';

export default function Stats() {
	return (
		<section className="py-12 md:py-20">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
				<div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-5xl">SiKuis dalam Angka</h2>
					<p>Lihat seberapa jauh SiKuis telah tumbuh dan membantu proses belajar ribuan pengguna.</p>
				</div>

				<div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
					<div className="space-y-4">
						<div className="text-5xl font-bold inline">+</div>
						<CountUp from={0} to={5} separator="," direction="up" duration={11.7} className="count-up-text text-5xl font-bold" />
						<div className="text-5xl font-bold inline">K</div>
						<p>Total Pengguna</p>
					</div>
					<div className="space-y-4 text-[#9359FF]">
						<div className="text-5xl font-bold inline">+</div>
						<CountUp from={0} to={50} separator="," direction="up" duration={5} className="count-up-text text-5xl font-bold" />
						<div className="text-5xl font-bold inline">K</div>
						<p>Kuis Dibuat</p>
					</div>
					<div className="space-y-4">
						<div className="text-5xl font-bold inline">+</div>
						<CountUp from={0} to={500} separator="," direction="up" duration={2.7} className="count-up-text text-5xl font-bold" />
						<div className="text-5xl font-bold inline">K</div>
						<p>Pengunjung</p>
					</div>
				</div>
			</div>
		</section>
	);
}
