import CurrLocation from 'components/common/CurrLocation'
import FilterBar from 'components/common/FilterBar'
import LoadMore from 'components/common/LoadMore'
import Navbar from 'components/common/Navbar'
import SearchBar from 'components/common/SearchBar'
import Sort from 'components/common/Sort'
import SpotCardHorizontal from 'components/common/SpotCardHorizontal'

import styles from 'components/search/search-page.module.css'

export default function SearchPage() {
	return (
		<>
			<Navbar />
			<CurrLocation />
			<SearchBar />
			<FilterBar />
			<Sort />
			<span className={styles['result-count']}>Showing 24 results</span>
			<div className='vertical-card-list'>
				<SpotCardHorizontal />
				<SpotCardHorizontal />
				<SpotCardHorizontal />
			</div>
			<LoadMore />
		</>
	)
}
