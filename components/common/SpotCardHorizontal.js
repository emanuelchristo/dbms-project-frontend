import { MdOutlineLocationOn } from 'react-icons/md'

import styles from './spot-card-horizontal.module.css'

export default function SpotCardHorizontal({ imageUrl, type, rating, title, distance, location }) {
	return (
		<div className={styles['card']}>
			<div className={styles['thumbnail']} style={{ backgroundImage: `url('${imageUrl}')` }}></div>
			<div className={styles['content-wrapper']}>
				<div className='flex items-center gap-[8px]'>
					<span className={styles['type']}>{type || 'N/A'}</span>
					<div className={styles['rating-wrapper']}>
						<img src='/svgs/yellow-star.svg' alt='⭐️' />
						<span className={styles['rating']}>{rating || 'N/A'}</span>
					</div>
				</div>
				<h4 className={styles['title']}>{title || 'N/A'}</h4>
				<div className='flex items-center gap-[10px]'>
					<span className={styles['distance']}>{distance || 'N/A'} KM</span>
					<div className={styles['separator']}></div>
					<div className='flex items-center gap-[3px]'>
						<MdOutlineLocationOn className={styles['location-icon']} />{' '}
						<span className={styles['location']}>{location || 'N/A'}</span>
					</div>
				</div>
			</div>
		</div>
	)
}
