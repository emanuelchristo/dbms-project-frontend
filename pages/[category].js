import { useRouter } from 'next/router'
import Navbar from 'components/common/Navbar'
import Sort from 'components/common/Sort'
import SpotCardHorizontal from 'components/common/SpotCardHorizontal'
import LoadMore from 'components/common/LoadMore'

export default function CategoryPage() {
	const router = useRouter()

	return (
		<>
			<Navbar />
			<h1 className='side-padding capitalize mb-[12px]'>{router.asPath.split('/')[1]}</h1>
			<Sort />
			<div className='vertical-card-list'>
				<SpotCardHorizontal />
				<SpotCardHorizontal />
				<SpotCardHorizontal />
			</div>
			<LoadMore />
		</>
	)
}