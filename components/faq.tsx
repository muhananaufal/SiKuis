'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

export default function FAQ() {
	const faqItems = [
		{
			id: 'item-1',
			question: 'Apa itu SiKuis?',
			answer:
				'SiKuis adalah platform belajar berbasis web yang menggunakan teknologi Artificial Intelligence (AI) untuk membantu proses belajar mandiri. Dengan fitur seperti ringkasan otomatis, roadmap belajar personal, dan kuis adaptif, SiKuis membuat proses belajar jadi lebih mudah, efisien, dan menyenangkan.',
		},
		{
			id: 'item-2',
			question: 'Siapa saja yang bisa menggunakan SiKuis?',
			answer: 'SiKuis dapat digunakan oleh siapa saja, mulai dari pelajar, mahasiswa, guru, hingga masyarakat umum yang ingin belajar secara mandiri dan terarah.',
		},
		{
			id: 'item-3',
			question: 'Apakah SiKuis gratis?',
			answer: 'Ya, SiKuis menyediakan versi gratis dengan fitur-fitur utama. Namun, tersedia juga versi premium dengan fitur tambahan seperti kuis lanjutan berbasis AI, pelacakan progres belajar, dan sertifikat digital.',
		},
		{
			id: 'item-4',
			question: 'Apakah perlu mengunduh aplikasi SiKuis?',
			answer: 'Tidak perlu. SiKuis berbasis web, jadi kamu bisa langsung mengaksesnya melalui browser di laptop, tablet, atau smartphone tanpa perlu mengunduh apapun.',
		},
		{
			id: 'item-5',
			question: 'Bagaimana cara kerja fitur AI di SiKuis?',
			answer:
				'Fitur AI kami dapat merangkum materi otomatis, menyusun roadmap belajar yang disesuaikan dengan kemampuan pengguna, dan membuat kuis yang menyesuaikan levelmu. Semuanya dirancang agar kamu bisa belajar secara lebih personal dan efektif.',
		},
		{
			id: 'item-6',
			question: 'Apakah SiKuis bisa digunakan untuk persiapan ujian seperti UTBK atau sertifikasi?',
			answer: 'Tentu! Kamu bisa menggunakan SiKuis untuk membantu persiapan UTBK, ujian semester, ujian CPNS, sertifikasi, atau tujuan belajar lainnya. Cukup sesuaikan materi dan roadmap belajarnya.',
		},
		{
			id: 'item-7',
			question: 'Apakah bisa berinteraksi dengan pengguna lain di SiKuis?',
			answer: 'Ya, SiKuis memiliki fitur komunitas belajar tempat kamu bisa berdiskusi, berbagi pengalaman belajar, dan saling memotivasi bersama pengguna lainnya.',
		},
		{
			id: 'item-8',
			question: 'Bagaimana jika saya mengalami masalah saat menggunakan SiKuis?',
			answer: 'Jika kamu mengalami kendala, kamu bisa menghubungi tim dukungan kami melalui email atau form kontak yang tersedia di situs. Kami siap membantu kapan saja!',
		},
	];

	return (
		<section className="py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-4 md:px-6">
				<div className="mx-auto max-w-xl text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-5xl">Pertanyaan Umum</h2>
					<p className="mt-4">Masih ada pertanyaan tentang SiKuis? Temukan jawaban dari hal-hal yang paling sering ditanyakan di sini.</p>
				</div>

				<div className="mx-auto mt-12 max-w-xl">
					<Accordion type="single" collapsible className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
						{faqItems.map((item) => (
							<AccordionItem key={item.id} value={item.id} className="border-dashed">
								<AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
								<AccordionContent>
									<p className="text-base">{item.answer}</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>

					<div className="mt-6 px-8 text-center">
						Udah baca Pertanyaan Umum tapi masih bingung? <br />
						Hubungi
						<Link href="/contact" className="font-semibold hover:underline ms-1 me-1">
							tim dukungan
						</Link>
						kami
					</div>
				</div>
			</div>
		</section>
	);
}
