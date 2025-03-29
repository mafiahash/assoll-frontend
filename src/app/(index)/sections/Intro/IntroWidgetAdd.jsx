'use client'
import styles from '@/components/HotelWidget/HotelWidget.module.css'
import { IntroConfig } from '@/config/themeConfig'
import { useEffect, useRef } from 'react'

export default function IntroWidgetAdd() {
	const widgetIdRef = useRef(null)

	useEffect(() => {
		const checkWidget = setInterval(() => {
			if (window.HotelWidget && typeof window.HotelWidget.add === 'function') {
				clearInterval(checkWidget)
				widgetIdRef.current = window.HotelWidget.add({
					type: 'bookingForm',
					inline: true,
					theme: IntroConfig,
					appearance: { container: 'BookingFormWidget' },
				})
				console.log(widgetIdRef.current)
			}
		}, 500)

		return () => clearInterval(checkWidget)
	}, [])

	return <div id='BookingFormWidget' className={styles.HotelWidget}></div>
}
