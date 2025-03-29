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
						<Link href='/rooms/avyc2wwl2qp4eax069etbty8'>
							<div className={styles.img}>
								<Image
									src='https://api.assoll.ru/uploads/web_3_0533_e149f034e7.jpg'
									alt='Двухместный номер'
									fill
								/>
							</div>
							<h4>
								Стандарт
								<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
							</h4>
							<small>Стандартный двухместный номер с просторным балконом</small>
						</Link>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Link href='/rooms/eu2dzz0b58xg0p2wabgz1i6i'>
							<div className={styles.img}>
								<Image
									src='https://api.assoll.ru/uploads/web13_0599_1786fad01e.jpg'
									alt='Двухместный номер'
									fill
								/>
							</div>
							<h4>
								Супериор
								<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
							</h4>
							<small>
								Супериор с просторным балконом с одной двуспальной или двумя
								раздельными кроватями
							</small>
						</Link>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Link href='/rooms/l5rzb0onmrc9tlfv7kjyxlqi'>
							<div className={styles.img}>
								<Image
									src='https://api.assoll.ru/uploads/web_4_0541_d40e46e0cd.jpg'
									alt='Делюкс'
									fill
								/>
							</div>
							<h4>
								Делюкс
								<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
							</h4>
							<small>Делюкс с балконом и видом на море</small>
						</Link>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Link href='/rooms/uavkeex21c9tmfx9swm4wxom'>
							<div className={styles.img}>
								<Image
									src='https://api.assoll.ru/uploads/web_13_0596_88ef49a09f.jpg'
									alt='Люкс номер'
									fill
								/>
							</div>
							<h4>
								Люкс
								<Image src='icons/arrow1.svg' alt='' width='24' height='24' />
							</h4>
							<small>Люкс с просторным балконом и видом на море</small>
						</Link>
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
