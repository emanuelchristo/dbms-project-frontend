import SpotCardHorizontal from 'components/common/SpotCardHorizontal'

import styles from './recommended.module.css'

export default function Recommended() {
	return (
		<div className={styles['recommended']}>
			<h2>Recommended</h2>
			<div className={styles['list']}>
				<SpotCardHorizontal
					imageUrl='https://lp-cms-production.imgix.net/2021-02/Saud_Beach_G.jpg?auto=format&q=40&w=870'
					type='place'
					rating={4.6}
					title='Kozhikode Beach'
					distance={12.3}
					location='Kozhikode'
				/>
				<SpotCardHorizontal />
			</div>
		</div>
	)
}
