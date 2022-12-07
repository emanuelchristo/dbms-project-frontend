import geodist from 'geodist'
import { useState, useEffect } from 'react'
import { getCurrLocation } from 'lib/location'
import { MdOutlineLocationOn } from 'react-icons/md'

import styles from './header.module.css'

export default function Header({ type, latitude, longitude, name, rating, city }) {
	const [distance, setDistance] = useState(null)

	useEffect(() => {
		getCurrLocation().then((loc) => {
			let m = geodist(
				{ lat: loc.latitude, lon: loc.longitude },
				{ lat: latitude, lon: longitude },
				{ unit: 'meters' }
			)
			let km = (m / 1000).toFixed(2)
			setDistance(km)
		})
	}, [latitude, longitude])

	return (
		<div className={styles['content-wrapper']}>
			<div className='flex items-center gap-[8px]'>
				<span className={styles['type']}>{type || 'N/A'}</span>
				<div className={styles['rating-wrapper']}>
					<img src='/svgs/yellow-star.svg' alt='⭐️' />
					<span className={styles['rating']}>{rating?.toFixed(1) || 'N/A'}</span>
				</div>
			</div>
			<h4 className={styles['title']}>{name || 'N/A'}</h4>
			<div className='flex items-center gap-[10px]'>
				<span className={styles['distance']}>{distance !== null ? distance : 'N/A'} KM</span>
				<div className={styles['separator']}></div>
				<div className='flex items-center gap-[3px]'>
					<MdOutlineLocationOn className={styles['location-icon']} />{' '}
					<span className={styles['location']}>{city || 'N/A'}</span>
				</div>
			</div>
		</div>
	)
}
