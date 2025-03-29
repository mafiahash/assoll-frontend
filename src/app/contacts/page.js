import Footer from '@/components/sections/Footer/Footer'
import Header from '@/components/sections/Header/Header'
import styles from './contacts.module.css'
import Map from './section/map/Map'
export default function Contacts() {
	return (
		<>
			<Header />
			<div className='wrapper'>
				<div className={styles.contacts}>
					<h2>Контакты</h2>
					<div className={`${styles.items}`}>
						<div className={styles.item}>
							<p className={styles.header}>Телефон:</p>
							<p className={styles.text}>+7 918 167 02 90</p>
						</div>
						<div className={styles.item}>
							<p className={styles.header}>What`s app:</p>
							<p className={styles.text}>+7 918 167 02 90</p>
						</div>
						<div className={styles.item}>
							<p className={styles.header}>Telegram:</p>
							<p className={styles.text}>@assollhotel</p>
						</div>
						<div className={styles.item}>
							<p className={styles.header}>Instagram:</p>
							<p className={styles.text}>@assoll_yeisk</p>
						</div>
						<div className={styles.item}>
							<p className={styles.header}>E-Mail:</p>
							<p className={styles.text}>hotel-yeisk@yandex.ru</p>
						</div>
						<div className={styles.item}>
							<p className={styles.header}>Адрес:</p>
							<p className={styles.text}>
								улица Шмидта, 20, Ейск, Краснодарский край, 353680
							</p>
						</div>
					</div>

					<hr />

					<h2>Реквизиты</h2>
					<div className={`${styles.items}`}>
						<div className={styles.item}>
							<p className={styles.header}>Наименование:</p>
							<p className={styles.text}>ИП Родоная Вахтанг Муртазович</p>
						</div>
						<div className={styles.item}>
							<p className={styles.header}>ИНН:</p>
							<p className={styles.text}>236102061456</p>
						</div>
						<div className={styles.item}>
							<p className={styles.header}>ОРГНИП:</p>
							<p className={styles.text}>317237500182341</p>
						</div>
					</div>

					<hr />

					<Map />
				</div>
			</div>
			<Footer />
		</>
	)
}
