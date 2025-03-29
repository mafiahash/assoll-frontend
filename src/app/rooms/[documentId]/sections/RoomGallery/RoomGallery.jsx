import Image from 'next/image'
import styles from './RoomGallery.module.css'
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337'

export default async function RoomGallery({ name, rating, reviews, photos }) {
	return (
		<div className='wrapper'>
			<h3 className={styles.name}>{name}</h3>
			<div className={styles.reviews}>
				<div className={styles.stars}>
					<Image src='/icons/star.svg' alt='Рейтинг:' width='16' height='16' />
					<p>{rating}</p>
				</div>
				<span></span>
				<p className={styles.review}>{reviews}</p>
			</div>
			<div className={`${styles.gallery} grid`}>
				{photos.slice(0, 5).map((photo, index) => (
					<div className={index === 0 ? styles.big : styles.small} key={index}>
						<Image
							src={`${STRAPI_URL}${photo.url}`}
							alt={`Фото ${index + 1}`}
							fill
						/>
					</div>
				))}
			</div>
		</div>
	)
}
