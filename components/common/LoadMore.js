import styles from './load-more.module.css'

export default function LoadMore() {
	return (
		<div className={styles['wrapper']}>
			<button className={styles['button']}>Load more</button>
		</div>
	)
}
