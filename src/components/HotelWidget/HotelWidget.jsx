'use client'
import { GlobalConfig } from '@/config/themeConfig'
import { useEffect } from 'react'

export default function HotelWidget() {
	useEffect(() => {
		const script = document.createElement('script')
		script.src = 'https://bookonline24.ru/widget.js'
		script.async = true
		document.body.appendChild(script)

		script.onload = () => {
			if (window.HotelWidget) {
				window.HotelWidget.init({
					hotelId: 'c6f80dd7-e6f9-4f34-86e0-9c150f7b52a8',
					version: '2',
					baseUrl: 'https://bookonline24.ru',
					theme: GlobalConfig,
				})
			}
		}

		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return null
}
