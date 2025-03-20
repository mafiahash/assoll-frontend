'use client'
import { PopupWidgetAdd } from '@/components/HotelWidget/PopupWidgetAdd'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [popupIsOpen, setPopupOpen] = useState(false)

	const toggleMenu = () => setMenuOpen(!menuOpen)

	return (
		<div className={styles.header_wrapper}>
			<div className='wrapper'>
				<div className={styles.header}>
					<div className={styles.links}>
						<Link href='/'>Номера</Link>
						<Link href='/'>О нас</Link>
					</div>
					<Link href='/' className={styles.logo}>
						Ассоль
					</Link>
					<div className={styles.button} onClick={() => setPopupOpen(true)}>
						Забронировать
						<Image src='/icons/arrow.svg' alt='' width='17' height='17' />
					</div>

					<div className={styles.burger} onClick={toggleMenu}>
						<Image src='/icons/menu.svg' alt='Меню' fill />
					</div>
				</div>

				{menuOpen && (
					<div className={styles.popupMenu}>
						<div className={styles.menuContent}>
							<div className={styles.close} onClick={toggleMenu}>
								<Image src='/icons/close.svg' alt='Закрыть' fill />
							</div>
							<Link href='/'>Номера</Link>
							<Link href='/'>О нас</Link>
							<div className={styles.mob_button}>
								Забронировать
								<Image src='/icons/arrow.svg' alt='' width='17' height='17' />
							</div>
						</div>
					</div>
				)}
			</div>

			<PopupWidgetAdd
				isOpen={popupIsOpen}
				onClose={() => setPopupOpen(false)}
			/>
		</div>
	)
}
