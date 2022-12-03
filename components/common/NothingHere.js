import styles from './nothing-here.module.css'

export default function NothingHere() {
	return (
		<div className={styles['nothing-here']}>
			<img className={styles['img']} src='/images/nothing-here.png' />
			<span className={styles['text']}>Nothing here</span>
		</div>
	)
}
