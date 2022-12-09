import { useGlobalContext } from 'lib/global-context'

import styles from './curr-location.module.css'

export default function CurrLocation() {
	const { currLocName } = useGlobalContext()

	return (
		<div className={styles['curr-location']}>
			<span>Location</span>
			<div className={styles['separator']}></div>
			<span>{currLocName || 'NIT Calicut'}</span>
		</div>
	)
}
