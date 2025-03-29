import Footer from '@/components/sections/Footer/Footer'
import Header from '@/components/sections/Header/Header'
import Image from 'next/image'
import Link from 'next/link'
import styles from './rooms.module.css'

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337'

export default async function RoomsPage() {
	const res = await fetch(`${STRAPI_URL}/api/rooms?populate=cover`, {
		next: { revalidate: 60 },
	})
	const resJson = await res.json()
	const rooms = resJson.data

	return (
		<>
			<Header />
			<div className={`${styles.rooms} wrapper grid`}>
				{rooms.map(room => (
					<Link
						href={`/rooms/${room.documentId}`}
						className={styles.card}
						key={room.documentId}
					>
						<div className={styles.img}>
							<Image
								src={`${STRAPI_URL}${room.cover?.url}`}
								alt={room.name}
								fill
							/>
						</div>
						<h4>
							{room.name}
							<Image src='/icons/arrow1.svg' alt='' width={24} height={24} />
						</h4>
						<small>{room.card_description}</small>
					</Link>
				))}
			</div>

			<Footer />
		</>
	)
}
