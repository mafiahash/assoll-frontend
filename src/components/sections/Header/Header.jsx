'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => setMenuOpen(!menuOpen)

	const scrollToWidget = () => {
		if (typeof window === 'undefined') return

		if (window.location.pathname === '/') {
			const widget = document.getElementById('BookingFormWidget')
			if (widget) {
				widget.scrollIntoView({ behavior: 'smooth', block: 'center' })
			}
		} else {
			window.location.href = '/#booking'
		}
	}

	useEffect(() => {
		if (typeof window === 'undefined') return
		if (window.location.hash === '#booking') {
			const widget = document.getElementById('BookingFormWidget')
			if (widget) {
				setTimeout(() => {
					widget.scrollIntoView({ behavior: 'smooth', block: 'center' })
				}, 300)
			}
		}
	}, [])

	return (
		<div className={styles.header_wrapper}>
			<div className='wrapper'>
				<div className={styles.header}>
					<div className={styles.links}>
						<Link href='/rooms'>Номера</Link>
						<Link href='/#aboutUs'>О нас</Link>
					</div>
					<Link href='/' className={styles.logo}>
						<Image src='/img/logo.svg' alt='АССОЛЬ' fill />
					</Link>
					<div className={styles.button} onClick={scrollToWidget}>
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
							<Link href='/rooms' onClick={() => setMenuOpen(false)}>
								Номера
							</Link>
							<Link href='/#aboutUs' onClick={() => setMenuOpen(false)}>
								О нас
							</Link>
							<div
								className={styles.mob_button}
								onClick={() => {
									setMenuOpen(false)
									scrollToWidget()
								}}
							>
								Забронировать
								<Image src='/icons/arrow.svg' alt='' width='17' height='17' />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
