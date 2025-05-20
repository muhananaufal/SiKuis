import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

export default function Contact() {
	return (
		<section className="py-32">
			<div className="mx-auto max-w-4xl px-4 lg:px-0">
				<h1 className="mb-12 text-center text-balance text-4xl font-semibold lg:text-5xl">Bantu kami memahami kebutuhanmu</h1>

				<div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
					<div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
						<div>
							<h2 className="mb-3 text-lg font-semibold">Kolaborasi atau pertanyaan lainnya?</h2>
							<Link href="mailto:sikuis.app@gmail.com" className="text-lg text-blue-600 hover:underline dark:text-blue-400">
								sikuis.app@gmail.com
							</Link>
							<p className="mt-3 text-sm">+62 812-3456-7890</p>
						</div>
					</div>
				</div>

				<div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
				<form action="" className="border px-4 py-12 lg:px-0 lg:py-24">
					<Card className="mx-auto max-w-lg p-8 sm:p-16">
						<h3 className="text-xl font-semibold">Ayo ngobrol langsung dengan tim kami!</h3>
						<p className="mt-4 text-sm">Tim kami siap membantu dan tertarik mendengar bagaimana kamu ingin menggunakan SiKuis untuk mendukung proses belajarmu.</p>

						<div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
							<div>
								<Label htmlFor="name" className="space-y-2">
									Nama Lengkap
								</Label>
								<Input type="text" id="name" required />
							</div>
							<div>
								<Label htmlFor="email" className="space-y-2">
									Email
								</Label>
								<Input type="email" id="email" required />
							</div>
							<div>
								<Label htmlFor="country" className="space-y-2">
									Negara
								</Label>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Pilih negaramu" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="1">Indonesia</SelectItem>
										<SelectItem value="2">Amerika Serikat</SelectItem>
										<SelectItem value="3">Jepang</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div>
								<Label htmlFor="job" className="space-y-2">
									Pekerjaan
								</Label>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Pilih pekerjaanmu" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="1">Guru/Pengajar</SelectItem>
										<SelectItem value="2">Siswa</SelectItem>
										<SelectItem value="3">Mahasiswa</SelectItem>
										<SelectItem value="4">Lainnya</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div>
								<Label htmlFor="msg" className="space-y-2">
									Pesan
								</Label>
								<Textarea id="msg" rows={3} />
							</div>
							<Button className="bg-[#9359FF]">Kirim</Button>
						</div>
					</Card>
				</form>
			</div>
		</section>
	);
}
