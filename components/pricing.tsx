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
					<h1 className="text-center text-balance text-4xl font-semibold lg:text-5xl">Harga Fleksibel, Belajar Tanpa Batas</h1>
					<p>SiKuis hadir untuk mendukung gaya belajar mandiri Anda, mulai dari pemula hingga profesional. Pilih paket yang sesuai dengan kebutuhan Anda.</p>
				</div>

				<div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
					<Card className="flex flex-col">
						<CardHeader>
							<CardTitle className="font-medium">SiKuis Basic</CardTitle>
							<span className="my-3 block text-2xl font-semibold">Rp0 / bulan</span>
							<CardDescription className="text-sm">Per Pengguna</CardDescription>
						</CardHeader>

						<CardContent className="space-y-4">
							<hr className="border-dashed" />

							<ul className="list-outside space-y-3 text-sm">
								{[
									'Ringkasan Materi Otomatis (maks. 5 ringkasan/bulan)',
									'Roadmap Belajar Dasar (1 topik aktif sekaligus)',
									'Kuis Adaptif (maks. 10 kuis/bulan)',
									'Pelacakan Progres Belajar Sederhana',
									'Akses Komunitas Belajar',
									'Tantangan Harian (Streak)',
									'Penyimpanan Cloud 1GB',
									'Dukungan Email (respon 1–3 hari kerja)',
								].map((item, index) => (
									<li key={index} className="flex items-center gap-2">
										<Check className="size-3" />
										{item}
									</li>
								))}
							</ul>
						</CardContent>

						<CardFooter className="mt-auto">
							<Button asChild variant="outline" className="w-full">
								<Link href="/login">Coba sekarang!</Link>
							</Button>
						</CardFooter>
					</Card>

					<Card className="relative bg-[#9359FF]/25">
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
								<CardTitle className="font-medium">SiKuis Plus</CardTitle>
								<span className="my-3 block text-2xl font-semibold">Rp29.000 / bulan</span>
								<CardDescription className="text-sm">Per Pengguna</CardDescription>
							</CardHeader>

							<CardContent className="space-y-4">
								<hr className="border-dashed" />
								<ul className="list-outside space-y-3 text-sm mb-5">
									{[
										'Semua fitur di Paket Sebelumnya',
										'Ringkasan Materi Tak Terbatas',
										'Roadmap Belajar Lengkap (multi-topik & tahapan)',
										'Kuis Adaptif Tanpa Batas',
										'Pelacakan Progres Belajar Lengkap + Statistik',
										'Sertifikat Digital untuk Topik yang Selesai',
										'Prioritas di Komunitas Diskusi',
										'Penyimpanan Cloud 5GB',
										'Dukungan Email & Chat (respon <24 jam)',
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
									<Link href="/login">Coba sekarang!</Link>
								</Button>
							</CardFooter>
						</div>
					</Card>

					<Card className="flex flex-col">
						<CardHeader>
							<CardTitle className="font-medium">SiKuis EduPro</CardTitle>
							<span className="my-3 block text-2xl font-semibold">Hubungi Kami (Harga Menyesuaikan Skala)</span>
							<CardDescription className="text-sm">Untuk Sekolah, Kampus, atau Bimbel</CardDescription>
						</CardHeader>

						<CardContent className="space-y-4">
							<hr className="border-dashed" />

							<ul className="list-outside space-y-3 text-sm">
								{[
									'Semua fitur di Paket SiKuis Plus',
									'Akses Massal untuk Siswa / Mahasiswa',
									'Dashboard & Laporan Pembelajaran Terintegrasi',
									'Branding Institusi & Kustomisasi Materi',
									'Pelatihan & Webinar untuk Pengajar',
									'Penyimpanan Cloud hingga 100GB',
									'Dukungan Eksklusif Prioritas',
								].map((item, index) => (
									<li key={index} className="flex items-center gap-2">
										<Check className="size-3" />
										{item}
									</li>
								))}
							</ul>
						</CardContent>

						<CardFooter className="mt-auto">
							<Button asChild variant="outline" className="w-full">
								<Link href="/login">Coba sekarang!</Link>
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	);
}
