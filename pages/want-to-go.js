import Navbar from 'components/common/Navbar'
import Sort from 'components/common/Sort'
import SpotCardHorizontal from 'components/common/SpotCardHorizontal'
import LoadMore from 'components/common/LoadMore'
import FilterBar from 'components/common/FilterBar'
import { MdBookmarkAdd } from 'react-icons/md'

export default function WantToGoPage() {
	return (
		<>
			<Navbar />
			<div className='side-padding flex items-center gap-[12px]'>
				<MdBookmarkAdd style={{ fontSize: 30 }} color='#17A547' />
				<h1>Want to go</h1>
			</div>
			<FilterBar />
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
