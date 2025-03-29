import styles from './RoomDescription.module.css'
export default function RoomGallery({
	name,
	description,
	advantage1,
	advantage2,
	advantage3,
	price,
}) {
	return (
		<>
			<div className='wrapper grid'>
				<div className={styles.description}>
					<div className={styles.header}>
						<h3>{name}</h3>
						<h3>{price} ₽</h3>
					</div>
					<div className={styles.advantages}>
						<p>{advantage1}</p>
						<span></span>
						<p>{advantage2}</p>
						<span></span>
						<p>{advantage3}</p>
					</div>
					<hr />
					<p>{description}</p>
				</div>
			</div>
		</>
	)
}
