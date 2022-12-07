import { getCurrLocation } from 'lib/location'
import { useEffect } from 'react'

import styles from './curr-location.module.css'

export default function CurrLocation({ location }) {
	useEffect(() => {
		getCurrLocation(console.log)
	}, [])

	return (
		<div className={styles['curr-location']}>
			<span>Location</span>
			<span>{location || 'NIT Calicut'}</span>
		</div>
	)
}
