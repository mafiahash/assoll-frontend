'use client'
import { IntroConfig } from '@/config/themeConfig'
import { useEffect } from 'react'
import styles from './HotelWidget.module.css'

export default function IntroWidgetAdd() {
	useEffect(() => {
		const checkWidget = setInterval(() => {
			if (window.HotelWidget && typeof window.HotelWidget.add === 'function') {
				clearInterval(checkWidget)
				console.log('Adding HotelWidget') // Проверяем, вызывается ли add
				window.HotelWidget.add({
					type: 'bookingForm',
					inline: true,
					theme: IntroConfig,
					appearance: { container: 'BookingFormWidget' },
				})
			}
		}, 500)

		return () => clearInterval(checkWidget)
	}, [])

	return <div id='BookingFormWidget' className={styles.HotelWidget}></div>
}
