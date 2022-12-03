import styles from './loading.module.css'

export default function Loading() {
	return (
		<div className={styles['loading']}>
			<div className={styles['lds-ring']}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
