'use client'

import { useEffect } from 'react'

export default function Map() {
	useEffect(() => {
		const script = document.createElement('script')
		script.src =
			'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=015b2907-4f58-4dde-86fb-3623fdd916dd'
		script.type = 'text/javascript'
		script.onload = () => {
			window.ymaps.ready(init)
		}
		document.head.appendChild(script)

		function init() {
			const map = new window.ymaps.Map('yandex-map', {
				center: [46.715323, 38.257889], // координаты центра карты по ссылке
				zoom: 16,
				controls: ['zoomControl'],
			})

			const placemark = new window.ymaps.Placemark(
				[46.715323, 38.257889],
				{
					balloonContent:
						'<strong>Гостевой дом "Ассоль"</strong><br /><a href="https://yandex.ru/maps/org/assol/1318349775" target="_blank" rel="noopener noreferrer">Открыть в Яндекс.Картах</a>',
					hintContent: 'Гостевой дом "Ассоль"',
				},
				{
					preset: 'islands#redDotIcon',
				}
			)

			map.geoObjects.add(placemark)
			placemark.balloon.open()
		}
	}, [])

	return (
		<div
			id='yandex-map'
			style={{ width: '100%', height: '400px', marginTop: '40px' }}
		/>
	)
}
