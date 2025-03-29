'use client'
import { useEffect } from 'react'

export default function YandexMetrika() {
	useEffect(() => {
		const script = document.createElement('script')
		script.type = 'text/javascript'
		script.async = true
		script.src = 'https://mc.yandex.ru/metrika/tag.js'

		script.onload = () => {
			if (typeof ym !== 'undefined') {
				ym(100666621, 'init', {
					clickmap: true,
					trackLinks: true,
					accurateTrackBounce: true,
					webvisor: true,
				})
			}
		}

		document.head.appendChild(script)

		const noscript = document.createElement('noscript')
		const img = document.createElement('img')
		img.src = 'https://mc.yandex.ru/watch/100666621'
		img.style = 'position:absolute; left:-9999px;'
		img.alt = ''
		noscript.appendChild(img)
		document.body.appendChild(noscript)
	}, [])

	return null
}
