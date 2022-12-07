import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { fetchCategory } from 'lib/api/category'

import Navbar from 'components/common/Navbar'
import Sort from 'components/common/Sort'
import Pagination from 'components/common/Pagination'
import SpotsList from 'components/common/SpotsList'

export default function CategoryPage() {
	const router = useRouter()
	const [spots, setSpots] = useState([])
	const [type, setType] = useState('')
	const [sort, setSort] = useState('nearest')
	const [currPage, setCurrPage] = useState(1)
	const [maxPage, setMaxPage] = useState(1)

	useEffect(() => {
		if (!router.isReady) return
		setType(router.asPath.split('/')[2].slice(0, -1))
	}, [router.isReady])

	useEffect(() => {
		if (type && sort && currPage) fetchData()
	}, [type, sort, currPage])

	function fetchData() {
		fetchCategory({ type, sort, page: currPage })
			.then((data) => {
				if (data) setSpots([...data])
			})
			.catch(console.error)
	}

	return (
		<>
			<Navbar />
			<h1 className='side-padding capitalize mb-[12px]'>{type + 's'}</h1>
			<Sort
				options={[
					{ label: 'Nearest', value: 'nearest' },
					{ label: 'Rating', value: 'rating' },
				]}
				value={sort}
				onChange={setSort}
			/>
			<SpotsList spots={spots} />
			{maxPage > 1 && <Pagination currPage={currPage} maxPage={maxPage} onChange={setCurrPage} />}
		</>
	)
}
