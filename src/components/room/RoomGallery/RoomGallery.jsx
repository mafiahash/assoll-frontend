import Image from 'next/image'
import styles from './RoomGallery.module.css'
export default function RoomGallery() {
	return (
		<div className='wrapper'>
			<h3 className={styles.name}>Sea View Sifnos Reason</h3>
			<div className={styles.reviews}>
				<div className={styles.stars}>
					<Image src='/icons/star.svg' alt='Рейтинг:' width='16' height='16' />
					<p>5.0</p>
				</div>
				<span></span>
				<p className={styles.review}>226 отзыва</p>
			</div>
			<div className={`${styles.gallery} grid`}>
				<div className={styles.big}>
					<Image src='/img/room1.png' alt='11' fill />
				</div>
				<div className={styles.small}>
					<Image src='/img/room1.png' alt='11' fill />
				</div>
				<div className={styles.small}>
					<Image src='/img/room1.png' alt='11' fill />
				</div>
				<div className={styles.small}>
					<Image src='/img/room1.png' alt='11' fill />
				</div>
				<div className={styles.small}>
					<Image src='/img/room1.png' alt='11' fill />
				</div>
			</div>
		</div>
	)
}
