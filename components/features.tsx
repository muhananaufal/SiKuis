import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Brain, FilePlus2, Flame, Puzzle, Users, Zap } from 'lucide-react';
import { ReactNode } from 'react';

export default function Features() {
	return (
		<section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
			<div className="@container mx-auto max-w-7xl px-6">
				<div className="text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-5xl">Solusi Lengkap untuk Kebutuhan Belajarmu</h2>
					<p className="mt-4">Belajar nggak harus ribet. Semua yang kamu butuhkan dari awal sampai paham, sudah ada di SiKuis. Tinggal mulai aja!</p>
				</div>
				<div className="@min-4xl:max-w-5xl @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-4 *:text-center md:mt-16">
					<Card className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<FilePlus2 className="size-6" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-medium">Ubah Media Jadi Kuis Interaktif</h3>
						</CardHeader>
						<CardContent>
							<p className="text-sm">Konversi berbagai media seperti video, artikel, atau link menjadi kuis seru yang membantu memahami materi lebih cepat dan menyenangkan.</p>
						</CardContent>
					</Card>

					<Card className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Brain className="size-6" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-medium">Roadmap Belajar Personal dengan AI</h3>
						</CardHeader>
						<CardContent>
							<p className="mt-3 text-sm">AI akan menyusun jalur belajar yang disesuaikan dengan kebutuhan dan kemampuanmu, memastikan kamu belajar dengan arah yang jelas dan efektif.</p>
						</CardContent>
					</Card>

					<Card className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Puzzle className="size-6" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-medium">Kuis Adaptif Sesuai Level Pengguna</h3>
						</CardHeader>
						<CardContent>
							<p className="mt-3 text-sm">Dapatkan soal-soal yang sesuai dengan tingkat pemahamanmu. Belajar jadi lebih efisien dan tepat sasaran.</p>
						</CardContent>
					</Card>

					<Card className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Zap className="size-6" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-medium">Ringkasan Materi Otomatis</h3>
						</CardHeader>
						<CardContent>
							<p className="mt-3 text-sm">Tak sempat baca panjang? SiKuis merangkum materi otomatis dengan bantuan AI, sehingga kamu bisa memahami inti informasi dengan cepat.</p>
						</CardContent>
					</Card>

					<Card className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Flame className="size-6" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-medium">Streak Kuis Harian</h3>
						</CardHeader>
						<CardContent>
							<p className="mt-3 text-sm">Tingkatkan konsistensi belajarmu dengan streak kuis harian. Semakin rajin, semakin banyak streak-mu, semakin tinggi motivasimu!</p>
						</CardContent>
					</Card>

					<Card className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Users className="size-6" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-medium">Komunitas Belajar Interaktif</h3>
						</CardHeader>
						<CardContent>
							<p className="mt-3 text-sm">Belajar bareng komunitas! Dapatkan dukungan, berbagi semangat, dan tumbuh bersama dengan pembelajar lainnya dalam satu platform.</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
	<div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
		<div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
		<div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
		<div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
	</div>
);
