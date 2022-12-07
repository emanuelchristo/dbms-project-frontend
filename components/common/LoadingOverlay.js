import Loading from 'components/common/Loading'

import styles from './loading-overlay.module.css'

export default function LoadingOverlay() {
	return (
		<div className={styles['loading-overlay']}>
			<Loading />
		</div>
	)
}
