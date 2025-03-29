import IntroWidgetAdd from '@/app/(index)/sections/Intro/IntroWidgetAdd'
import Image from 'next/image'
import styles from './Intro.module.css'
export default function Intro() {
	return (
		<div className={`${styles.intro} wrapper`}>
			<div className={styles.intropic}>
				<Image src='/img/intro.png' fill alt='Ассоль' />
				<IntroWidgetAdd />
			</div>
		</div>
	)
}
