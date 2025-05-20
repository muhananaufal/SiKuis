import { Button } from '@/components/ui/button';
import { Cpu } from 'lucide-react';
import Link from 'next/link';

const tableData = [
	{
		feature: 'Ringkasan Materi Otomatis',
		free: 'Maks. 5/bulan',
		pro: 'Tak terbatas',
		startup: 'Tak terbatas',
	},
	{
		feature: 'Roadmap Belajar',
		free: '1 topik aktif',
		pro: 'Multi-topik + tahapan belajar',
		startup: 'Multi-topik + tahapan belajar + kustomisasi',
	},
	{
		feature: 'Kuis Adaptif AI',
		free: 'Maks. 10/bulan',
		pro: 'Tanpa batas',
		startup: 'Tanpa batas',
	},
	{
		feature: 'Pelacakan Progres',
		free: 'Dasar (per topik)',
		pro: 'Lengkap + Grafik & Statistik',
		startup: 'Lengkap + Laporan Institusi',
	},
	{
		feature: 'Sertifikat Digital',
		free: false,
		pro: true,
		startup: true,
	},
	{
		feature: 'Komunitas Belajar',
		free: 'Akses standar',
		pro: 'Prioritas dalam diskusi',
		startup: 'Grup khusus institusi',
	},
	{
		feature: 'Branding & Kustomisasi',
		free: false,
		pro: false,
		startup: true,
	},
	{
		feature: 'Kapasitas Pengguna',
		free: '1 pengguna',
		pro: '1 pengguna',
		startup: 'Hingga 500+ pengguna',
	},
	{
		feature: 'Dukungan',
		free: 'Email (3 hari kerja)',
		pro: 'Email & Chat (respon <24 jam)',
		startup: 'Tim khusus & prioritas',
	},
	{
		feature: 'Penyimpanan Cloud',
		free: '1GB',
		pro: '5GB',
		startup: 'Fleksibel (hingga 100GB)',
	},
];

export default function PricingComparator() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="w-full overflow-auto lg:overflow-visible">
					<table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
						<thead className="bg-background top-0">
							<tr className="*:py-4 *:text-left *:font-medium">
								<th className="lg:w-2/5"></th>
								<th className="space-y-3">
									<span className="block">SiKuis Basi</span>

									<Button asChild variant="outline" size="sm">
										<Link href="/login">Coba sekarang!</Link>
									</Button>
								</th>
								<th className="bg-[#9359FF]/25 rounded-t-(--radius) space-y-3 px-4">
									<span className="block">SiKuis PLus</span>
									<Button asChild size="sm">
										<Link href="/login">Coba sekarang!</Link>
									</Button>
								</th>
								<th className="space-y-3">
									<span className="block">SiKuis EduPro</span>
									<Button asChild variant="outline" size="sm">
										<Link href="/login">Coba sekarang!</Link>
									</Button>
								</th>
							</tr>
						</thead>
						<tbody className="text-caption text-sm">
							<tr className="*:py-3">
								<td className="flex items-center gap-2 font-medium">
									<Cpu className="size-4" />
									<span>Fitur</span>
								</td>
								<td></td>
								<td className="bg-[#9359FF]/25 border-none px-4"></td>
								<td></td>
							</tr>
							{tableData.slice().map((row, index) => (
								<tr key={index} className="*:border-b *:py-3">
									<td className="text-muted-foreground">{row.feature}</td>
									<td>
										{row.free === true ? (
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
												<path
													fillRule="evenodd"
													d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
													clipRule="evenodd"
												/>
											</svg>
										) : (
											row.free
										)}
									</td>
									<td className="bg-[#9359FF]/25 border-none px-4">
										<div className="-mb-3 border-b py-3">
											{row.pro === true ? (
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
													<path
														fillRule="evenodd"
														d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
														clipRule="evenodd"
													/>
												</svg>
											) : (
												row.pro
											)}
										</div>
									</td>
									<td>
										{row.startup === true ? (
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
												<path
													fillRule="evenodd"
													d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
													clipRule="evenodd"
												/>
											</svg>
										) : (
											row.startup
										)}
									</td>
								</tr>
							))}
							<tr className="*:py-6">
								<td></td>
								<td></td>
								<td className="bg-[#9359FF]/25 rounded-b-(--radius) border-none px-4"></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}
