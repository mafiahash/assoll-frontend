import styles from './Footer.module.css'
export default function Footer() {
	return (
		<div className={styles.footer_wrapper}>
			<div className={`${styles.footer} wrapper`}>
				<p>2025 © Гостиница «Ассоль», г. Ейск.</p>
			</div>
		</div>
	)
}
