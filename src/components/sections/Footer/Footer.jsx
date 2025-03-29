'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'
export default function Footer() {
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

	return (
		<div className={styles.footer_wrapper}>
			<div className={`${styles.footer} wrapper`}>
				<div className={`${styles.columns} grid`}>
					<div className={styles.column}>
						<big>Навигация</big>
						<Link href='/rooms'>Номера</Link>
						<Link href='/#aboutUs'>О нас</Link>
						<Link href='/contacts'>Контакты</Link>
						<small onClick={scrollToWidget}>Забронировать</small>
					</div>
					<div className={styles.column}>
						<big>Связаться с нами</big>
						<Link href='tel:+79181670290'>+7 918 167 02 90</Link>
						<div className={styles.soc}>
							<Link target='_blank' href='http://t.me/assollhotel'>
								<div className={styles.icon}>
									<Image src='/icons/telegram.svg' alt='telegram' fill></Image>
								</div>
							</Link>
							<Link target='_blank' href='http://wa.me/79181670290'>
								<div className={styles.icon}>
									<Image src='/icons/whatsapp.svg' alt='whats app' fill></Image>
								</div>
							</Link>
							<Link
								target='_blank'
								href='https://www.instagram.com/assoll_yeisk/'
							>
								<div className={styles.icon}>
									<Image
										src='/icons/instagram.svg'
										alt='instagram'
										fill
									></Image>
								</div>
							</Link>
						</div>
					</div>
					<div className={styles.column}>
						<big>Правовая информация</big>
						<Link target='_blank' href='/confidentiation_policy.pdf'>
							Политика конфиденциальности
						</Link>
					</div>
				</div>
				<hr />
				<div className={styles.info}>
					<small>2025 © Гостиница «Ассоль», г. Ейск.</small>
					<small>ИП Родоная Вахтанг Муртазович</small>
					<small>ОГРНИП 317237500182341</small>
					<small>
						Социальная сеть Instagram принадлежит компании Meta, которая
						признана экстремистской организацией и запрещена в России.
					</small>
				</div>
			</div>
		</div>
	)
}
