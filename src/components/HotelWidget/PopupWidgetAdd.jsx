'use client'
import { IntroConfig } from '@/config/themeConfig'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from './PopupWidgetAdd.module.css'

export const PopupWidgetAdd = ({ isOpen, onClose }) => {
	useEffect(() => {
		if (!isOpen) return // Не запускаем, если попап закрыт

		const checkWidget = setInterval(() => {
			const container = document.getElementById('PopupWidget')

			if (
				container &&
				window.HotelWidget &&
				typeof window.HotelWidget.add === 'function'
			) {
				clearInterval(checkWidget)
				console.log('Adding HotelWidget to PopupWidget')
				window.HotelWidget.add({
					type: 'bookingForm',
					theme: IntroConfig,
					appearance: { container: 'PopupWidget' },
				})
			}
		}, 500)

		return () => clearInterval(checkWidget)
	}, [Boolean(isOpen)]) // Преобразуем в Boolean, чтобы избежать изменений размера массива

	return (
		<>
			{isOpen && (
				<div className={styles.Popup}>
					<div className={styles.close} onClick={() => onClose()}>
						<Image src='/icons/close.svg' alt='Закрыть' fill />
					</div>
					<div id='PopupWidget' className={styles.HotelWidget}></div>
				</div>
			)}
		</>
	)
}
