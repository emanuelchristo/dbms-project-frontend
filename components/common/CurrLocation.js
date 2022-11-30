import styles from './curr-location.module.css'

export default function CurrLocation({ location }) {
	return (
		<div className={styles['curr-location']}>
			<span>Location</span>
			<span>{location || 'NIT Calicut'}</span>
		</div>
	)
}
