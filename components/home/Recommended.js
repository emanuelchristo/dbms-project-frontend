import SpotCardHorizontal from 'components/common/SpotCardHorizontal'
import SpotsList from 'components/common/SpotsList'

import styles from './recommended.module.css'

export default function Recommended({ loading, spots }) {
	return (
		<div className={styles['recommended']}>
			<h2 className={styles['heading']}>Recommended</h2>
			<SpotsList loading={loading} spots={spots} />
		</div>
	)
}
