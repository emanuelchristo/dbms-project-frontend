import { useRouter } from 'next/router'
import Navbar from 'components/common/Navbar'
import Sort from 'components/common/Sort'
import SpotCardHorizontal from 'components/common/SpotCardHorizontal'

import styles from 'components/category/category-page.module.css'

export default function CategoryPage() {
	const router = useRouter()

	return (
		<div>
			<Navbar />
			<div className={styles['content']}>
				<h1 className={styles['heading']}>{router.asPath.split('/')[2]}</h1>
				<Sort />
				<div className={styles['list']}>
					<SpotCardHorizontal />
					<SpotCardHorizontal />
					<SpotCardHorizontal />
				</div>

				<button className='load-more-button'>Load more</button>
			</div>
		</div>
	)
}
