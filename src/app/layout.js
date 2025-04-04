import HotelWidget from '@/components/HotelWidget/HotelWidget'
import YandexMetrika from '@/components/YandexMetrika'
import './globals.css'

export const metadata = {
	title: 'Бутик-отель «Ассоль» в Ейске – Ваш дом, вдали от дома',
	description:
		'Бутик-отель «Ассоль» — стильное пространство на берегу Азовского моря. Панорамные виды, 42 уникальных номера, ресторан, фуд-бар, коворкинг и бильярд-холл. Идеально для пар, семей и компаний. Живите у моря.',
	keywords: [
		'Бутик-отель Ейск',
		'гостиница у моря',
		'отдых в Ейске',
		'Азовское море отель',
		'Ассоль отель Ейск',
		'отель с видом на море',
		'отель с рестораном Ейск',
		'где остановиться в Ейске',
		'лучший отель Ейск',
		'семейный отель Ейск',
		'номер с балконом Ейск',
		'гостиница с парковкой Ейск',
		'стильный отель Ейск',
		'отель у набережной Ейск',
		'Assoll boutique hotel',
	],
	openGraph: {
		title: 'Бутик-отель «Ассоль» в Ейске',
		description:
			'42 уникальных пространства – от уютных стандартов до просторных семейных люксов.',
		url: 'https://assoll.ru',
		siteName: 'Бутик-отель Ассоль',
		images: [
			{
				url: 'https://assoll.ru/img/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Бутик-отель Ассоль в Ейске',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	icons: {
		icon: '/icons/favicon.svg',
		apple: '/icons/apple-touch-icon.svg',
		shortcut: '/icons/favicon.svg',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body>
				<YandexMetrika />
				{children}
				<HotelWidget />
			</body>
		</html>
	)
}
