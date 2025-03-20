import styles from './RoomDescription.module.css'
export default function RoomGallery() {
	return (
		<div className='wrapper'>
			<div className={styles.description}>
				<div className={styles.header}>
					<h3>VERINA SIFNOS</h3>
					<div>
						<p>4 guest</p>
						<span></span>
						<p>2 bedroom</p>
						<span></span>
						<p>wifi</p>
					</div>
				</div>

				<hr />

				<div className={styles.features}>
					<div className={styles.feature}>
						<div className={styles.icon}></div>
						<div className={styles.texts}></div>
					</div>
				</div>
			</div>
		</div>
	)
}
