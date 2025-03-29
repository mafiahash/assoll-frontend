import Image from 'next/image'
import styles from './Advantages.module.css'
export default function Advantages() {
	return (
		<div className={`${styles.advantages} wrapper`}>
			<h2 className={styles.header}>Удобства</h2>
			<div className={styles.items}>
				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src='/icons/kitchen.svg' alt='12' fill />
					</div>
					<div className={styles.texts}>
						<big>Завтраки по системе «шведский стол»</big>
						<p>Начните утро с вкусного и сытного завтрака</p>
					</div>
				</div>

				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src='/icons/carousel.svg' alt='12' fill />
					</div>
					<div className={styles.texts}>
						<big>Детская площадка</big>
						<p>Развлечение и безопасность для самых маленьких</p>
					</div>
				</div>

				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src='/icons/beach.svg' alt='12' fill />
					</div>
					<div className={styles.texts}>
						<big>Первая линия – пляж в шаговой доступности</big>
						<p>Море и солнце в двух шагах от вашего номера</p>
					</div>
				</div>

				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src='/icons/dolphin.svg' alt='12' fill />
					</div>
					<div className={styles.texts}>
						<big>Дельфинарий в шаговой доступности</big>
						<p>Яркие впечатления и шоу с дельфинами рядом с вами</p>
					</div>
				</div>

				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src='/icons/fire.svg' alt='12' fill />
					</div>
					<div className={styles.texts}>
						<big>«Хлеб&мясо» – ресторан с концептуальной кухней</big>
						<p>Гастрономическое удовольствие в уютной атмосфере</p>
					</div>
				</div>

				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src='/icons/burger.svg' alt='12' fill />
					</div>
					<div className={styles.texts}>
						<big>Балкан Лайт – сербский фуд-бар</big>
						<p>Аутентичный вкус Балкан в легком формате</p>
					</div>
				</div>

				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src='/icons/shopping-cart.svg' alt='12' fill />
					</div>
					<div className={styles.texts}>
						<big>Экстра-Маркет – магазин локальных продуктов</big>
						<p>Свежие и качественные продукты от местных производителей</p>
					</div>
				</div>

				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src='/icons/billard.svg' alt='12' fill />
					</div>
					<div className={styles.texts}>
						<big>Бильярд-холл</big>
						<p>Отдых и азарт в приятной обстановке</p>
					</div>
				</div>

				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src='/icons/wifi.svg' alt='12' fill />
					</div>
					<div className={styles.texts}>
						<big>Бесплатный Wi-Fi на территории</big>
						<p>Будьте онлайн в любое время и в любом месте</p>
					</div>
				</div>

				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src='/icons/wash.svg' alt='12' fill />
					</div>
					<div className={styles.texts}>
						<big>Прачечная комната</big>
						<p>Комфорт и удобство для вашего отдыха</p>
					</div>
				</div>
			</div>
		</div>
	)
}
