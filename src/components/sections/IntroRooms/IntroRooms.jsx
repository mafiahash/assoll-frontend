'use client'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './IntroRooms.module.css'

export default function IntroRooms() {
	return (
		<div className={styles.bg}>
			<div className='wrapper'>
				<div className={styles.header}>
					<h2>НАШИ НОМЕРА</h2>
					<p>
						42 уникальных пространства — от уютных стандартов до просторных
						семейных люксов. Живите у моря — большая часть номеров с панорамным
						видом. Идеально для всех — пары, семьи, компании. У нас комфортно
						каждому.
					</p>
				</div>

				<Swiper
					spaceBetween={20}
					slidesPerView={1.2}
					breakpoints={{
						1024: {
							slidesPerView: 4,
						},
						768: {
							slidesPerView: 3,
						},
						480: {
							slidesPerView: 2,
						},
					}}
					scrollbar={{ draggable: true }}
				>
					<SwiperSlide className={styles.slide}>
						<div className={styles.img}>
							<Image src='/img/1.png' alt='Одноместный номер' fill />
						</div>
						<h4>
							Двухместный номер
							<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
						</h4>
						<small>Стандартный двухместный номер с просторным балконом</small>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<div className={styles.img}>
							<Image src='/img/1.png' alt='Одноместный номер' fill />
						</div>
						<h4>
							Apartments
							<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
						</h4>
						<small>121,560 apartments</small>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<div className={styles.img}>
							<Image src='/img/1.png' alt='Одноместный номер' fill />
						</div>
						<h4>
							Apartments
							<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
						</h4>
						<small>121,560 apartments</small>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<div className={styles.img}>
							<Image src='/img/1.png' alt='Одноместный номер' fill />
						</div>
						<h4>
							Apartments
							<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
						</h4>
						<small>121,560 apartments</small>
					</SwiperSlide>
				</Swiper>
				<Link href='/rooms' className={styles.button}>
					Смотреть все
					<Image src='/icons/arrow1.svg' alt='' width='30' height='30' />
				</Link>
			</div>
		</div>
	)
}
