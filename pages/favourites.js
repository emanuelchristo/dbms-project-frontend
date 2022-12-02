import Navbar from 'components/common/Navbar'
import Sort from 'components/common/Sort'
import SpotCardHorizontal from 'components/common/SpotCardHorizontal'
import LoadMore from 'components/common/LoadMore'
import FilterBar from 'components/common/FilterBar'
import { IoMdHeart } from 'react-icons/io'

export default function FavouritesPage() {
	return (
		<>
			<Navbar />
			<div className='side-padding flex items-center gap-[12px]'>
				<IoMdHeart style={{ fontSize: 30 }} color='#E70D42' />
				<h1>Favourites</h1>
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
