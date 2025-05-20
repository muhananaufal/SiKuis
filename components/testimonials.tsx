import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

type Testimonial = {
	name: string;
	role: string;
	image: string;
	quote: string;
};

const testimonials: Testimonial[] = [
	{
		name: 'Andi Prasetyo',
		role: 'Mahasiswa Teknik Informatika',
		image: 'https://randomuser.me/api/portraits/men/1.jpg',
		quote: 'SiKuis bantu saya belajar lebih fokus. Materinya padat, kuisnya adaptif, dan terasa seperti punya guru pribadi!',
	},
	{
		name: 'Fajar Nugroho',
		role: 'Pelajar SMA Kelas 12',
		image: 'https://randomuser.me/api/portraits/men/6.jpg',
		quote: 'Fitur roadmap belajarnya luar biasa. Nggak bingung lagi mau mulai belajar dari mana.',
	},
	{
		name: 'Rian Alamsyah',
		role: 'Mahasiswa Ilmu Pemerintahan',
		image: 'https://randomuser.me/api/portraits/men/7.jpg',
		quote: 'Suka banget sama fitur streak-nya. Jadi makin semangat buat belajar tiap hari!',
	},
	{
		name: 'Rizky Alfian',
		role: 'Mahasiswa Kedokteran',
		image: 'https://randomuser.me/api/portraits/men/8.jpg',
		quote:
			'Awalnya saya skeptis karena sudah coba banyak aplikasi belajar. Tapi SiKuis beda. Fitur ringkasan materi otomatis dan kuis adaptif-nya sangat membantu saya dalam memahami materi dengan cepat. Saya bisa mengukur progres belajar dan jadi lebih percaya diri menghadapi ujian.',
	},
	{
		name: 'Dimas Wicaksono',
		role: 'Karyawan Swasta',
		image: 'https://randomuser.me/api/portraits/men/4.jpg',
		quote:
			'Sebagai pegawai kantoran yang sedang mempersiapkan ujian sertifikasi, waktu belajar saya sangat terbatas. SiKuis bantu banget karena saya bisa belajar sesuai kemampuan dan waktu yang saya punya. Kuisnya menyesuaikan level saya, dan progress-nya bisa dilacak. Sangat efisien!',
	},
	{
		name: 'Teguh Ardiansyah',
		role: 'Guru Les Privat',
		image: 'https://randomuser.me/api/portraits/men/2.jpg',
		quote: 'SiKuis itu beda. Nggak cuma bantu hafalan, tapi juga bikin kita ngerti konsepnya.',
	},
	{
		name: 'Arif Santoso',
		role: 'Siswa Gap Year',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
		quote:
			'Saya sedang mempersiapkan SBMPTN dan merasa materi terlalu banyak dan melelahkan. Dengan SiKuis, saya bisa memecah materi jadi lebih ringkas dan terstruktur. Roadmap belajarnya seperti peta jalan yang memudahkan saya fokus ke hal penting.',
	},
	{
		name: 'Agung Maulana',
		role: 'Barista & Mahasiswa Karyawan',
		image: 'https://randomuser.me/api/portraits/men/10.jpg',
		quote: 'Platform yang ringan dan gampang diakses. Cocok buat belajar kapan saja, bahkan di HP kentang.',
	},
	{
		name: 'Bayu Laksmana',
		role: 'Mahasiswa Hukum',
		image: 'https://randomuser.me/api/portraits/men/11.jpg',
		quote: 'Ringkasan otomatisnya berguna banget. Saya pakai sebelum ujian dan terbukti membantu.',
	},
	{
		name: 'Hendra Kurniawan',
		role: 'Guru IPA SMP',
		image: 'https://randomuser.me/api/portraits/men/12.jpg',
		quote:
			'Saya guru SMP dan pakai SiKuis untuk bantu siswa belajar mandiri. Mereka jadi lebih semangat karena aplikasinya interaktif dan tidak membosankan. Bahkan saya sendiri ikut pakai buat belajar topik baru. Ini contoh edtech lokal yang layak didukung!',
	},
	{
		name: 'Ilham Setiawan',
		role: 'Freelancer Data Analyst',
		image: 'https://randomuser.me/api/portraits/men/13.jpg',
		quote: 'Komunitas belajar di SiKuis bikin saya merasa nggak sendirian dalam belajar.',
	},

	{
		name: 'Febrian Nurcahyo',
		role: 'Desainer Grafis',
		image: 'https://randomuser.me/api/portraits/men/9.jpg',
		quote:
			'Sebagai orang yang sudah bekerja tapi tetap ingin belajar, SiKuis adalah solusi belajar mandiri terbaik yang pernah saya temui. Selain fiturnya cerdas, komunitas di dalamnya juga suportif. Kita bisa diskusi dan saling semangati.',
	},
];

export default function Testimonials() {
	return (
		<section>
			<div className="py-16 md:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<div className="text-center">
						<h2 className="text-balance text-4xl font-semibold lg:text-5xl">
							<span className="text-[#9359FF]">Pendapat Mereka</span> Gimana?
						</h2>
						<p className="text-body mt-6">Jangan cuma percaya kata kami, dengerin langsung pengalaman mereka setelah pakai SiKuis.</p>
					</div>
					<div className="columns-1 sm:columns-2 lg:columns-3 space-y-4 mt-8 gap-4 md:mt-12 ">
						{testimonials.map(({ name, role, quote, image }, index) => (
							<div key={index} className="break-inside-avoid">
								<Card>
									<CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
										<Avatar className="size-9">
											<AvatarImage alt={name} src={image} loading="lazy" width="120" height="120" />
											<AvatarFallback>ST</AvatarFallback>
										</Avatar>
										<div>
											<h3 className="font-medium">{name}</h3>
											<span className="text-muted-foreground block text-sm tracking-wide">{role}</span>
											<blockquote className="mt-3">
												<p className="text-gray-700 dark:text-gray-300">{quote}</p>
											</blockquote>
										</div>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
