import Footer from '@/components/sections/Footer/Footer'
import Header from '@/components/sections/Header/Header'
import Image from 'next/image'
import Link from 'next/link'
import styles from './rooms.module.css'
export default function Room() {
	return (
		<>
			<Header />
			<div className={`${styles.rooms} wrapper grid`}>
				<Link href='/rooms/1' className={styles.card}>
					<div className={styles.img}>
						<Image src='/img/rooms/1/cover.jpg' alt='Двухместный номер' fill />
					</div>
					<h4>
						Двухместный номер
						<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
					</h4>
					<small>Стандартный двухместный номер с просторным балконом</small>
				</Link>

				<Link href='/rooms/2' className={styles.card}>
					<div className={styles.img}>
						<Image src='/img/rooms/2/cover.jpg' alt='Двухместный номер' fill />
					</div>
					<h4>
						Двухместный номер
						<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
					</h4>
					<small>
						Супериор с просторным балконом с одной двуспальной или двумя
						раздельными кроватями
					</small>
				</Link>

				<Link href='/rooms/3' className={styles.card}>
					<div className={styles.img}>
						<Image src='/img/rooms/3/cover.jpg' alt='Двухместный номер' fill />
					</div>
					<h4>
						Двухместный номер
						<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
					</h4>
					<small>Супериор с просторным балконом</small>
				</Link>

				<Link href='/rooms/4' className={styles.card}>
					<div className={styles.img}>
						<Image src='/img/rooms/4/cover.jpg' alt='Двухместный номер' fill />
					</div>
					<h4>
						Двухместный номер
						<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
					</h4>
					<small>Супериор с просторным балконом и видом на море</small>
				</Link>

				<Link href='/rooms/5' className={styles.card}>
					<div className={styles.img}>
						<Image src='/img/rooms/5/cover.jpeg' alt='Двухместный номер' fill />
					</div>
					<h4>
						Двухместный номер
						<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
					</h4>
					<small>
						Супериор с просторным балконом и видом на море с одной двуспальной
						или двумя раздельными кроватями
					</small>
				</Link>

				<Link href='/rooms/6' className={styles.card}>
					<div className={styles.img}>
						<Image src='/img/rooms/6/cover.jpg' alt='Двухместный номер' fill />
					</div>
					<h4>
						Трехместный номер
						<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
					</h4>
					<small>Супериор трехместный с просторным балконом</small>
				</Link>

				<Link href='/rooms/7' className={styles.card}>
					<div className={styles.img}>
						<Image src='/img/rooms/7/cover.jpeg' alt='Двухместный номер' fill />
					</div>
					<h4>
						Трехместный номер
						<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
					</h4>
					<small>
						Супериор трехместный с просторным балконом и видом на море с тремя
						раздельными кроватями
					</small>
				</Link>

				<Link href='/rooms/8' className={styles.card}>
					<div className={styles.img}>
						<Image src='/img/rooms/8/cover.jpg' alt='Двухместный номер' fill />
					</div>
					<h4>
						Трехместный номер
						<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
					</h4>
					<small>
						Супериор трехместный с просторным балконом и видом на море
					</small>
				</Link>

				<Link href='/rooms/9' className={styles.card}>
					<div className={styles.img}>
						<Image src='/img/rooms/9/cover.jpg' alt='Двухместный номер' fill />
					</div>
					<h4>
						Делюкс номер
						<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
					</h4>
					<small>Делюкс с балконом и видом на море</small>
				</Link>

				<Link href='/rooms/10' className={styles.card}>
					<div className={styles.img}>
						<Image src='/img/rooms/10/cover.jpg' alt='Двухместный номер' fill />
					</div>
					<h4>
						Люкс номер
						<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
					</h4>
					<small>Люкс с просторным балконом и видом на море</small>
				</Link>

				<Link href='/rooms/11' className={styles.card}>
					<div className={styles.img}>
						<Image src='/img/rooms/11/cover.jpg' alt='Двухместный номер' fill />
					</div>
					<h4>
						Семейный номер
						<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
					</h4>
					<small>
						Семейный двухкомнатный четырехместный комфорт с просторным балконом
					</small>
				</Link>

				<Link href='/rooms/12' className={styles.card}>
					<div className={styles.img}>
						<Image src='/img/rooms/12/cover.jpg' alt='Двухместный номер' fill />
					</div>
					<h4>
						Семейный номер
						<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
					</h4>
					<small>
						Люкс двухкомнатный с просторным балконом и видом на море
					</small>
				</Link>
			</div>

			<Footer />
		</>
	)
}
