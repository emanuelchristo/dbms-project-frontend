import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { search } from 'lib/api/search'

import CurrLocation from 'components/common/CurrLocation'
import FilterBar from 'components/common/FilterBar'
import Pagination from 'components/common/Pagination'
import Navbar from 'components/common/Navbar'
import SearchBar from 'components/common/SearchBar'
import Sort from 'components/common/Sort'
import SpotsList from 'components/common/SpotsList'
import LoadingOverlay from 'components/common/LoadingOverlay'

import styles from 'components/search/search-page.module.css'

export default function SearchPage() {
	const router = useRouter()

	const [loading, setLoading] = useState(true)
	const [type, setType] = useState('all')
	const [sort, setSort] = useState('relavance')
	const [query, setQuery] = useState('')
	const [results, setResults] = useState([])
	const [toatalResults, setTotalResults] = useState(0)
	const [currPage, setCurrPage] = useState(1)
	const [maxPage, setMaxPage] = useState(1)

	useEffect(() => {
		if (!router.isReady) return
		const { q } = router.query
		setQuery(q)
	}, [router.isReady, router.asPath])

	useEffect(() => {
		setLoading(true)
		search({ type, page: currPage, sort, query })
			.then((data) => {
				setLoading(false)
				setResults(data.spots)
				setMaxPage(data.totalPages)
				setCurrPage(data.page)
				setTotalResults(data.totalResults)
			})
			.catch(console.error)
	}, [query, currPage, type, sort])

	return (
		<>
			{loading && <LoadingOverlay />}
			<Navbar />
			<CurrLocation />
			<SearchBar />
			<FilterBar value={type} onChange={setType} />
			<Sort
				value={sort}
				onChange={setSort}
				options={[
					{ label: 'Relevance', value: 'relavance' },
					{ label: 'Nearest', value: 'nearest' },
					{ label: 'Rating', value: 'rating' },
				]}
			/>
			<span className={styles['result-count']}>Showing {toatalResults} results</span>
			<SpotsList spots={results} />
			{maxPage > 1 && <Pagination currPage={currPage} maxPage={maxPage} onChange={setCurrPage} />}
		</>
	)
}
