import { useState, useEffect } from 'react'
import { useGlobalContext } from 'lib/global-context'
import { useRouter } from 'next/router'
import { fetchWantToGo } from 'lib/api/collection'

import Navbar from 'components/common/Navbar'
import Sort from 'components/common/Sort'
import Pagination from 'components/common/Pagination'
import FilterBar from 'components/common/FilterBar'
import { MdBookmarkAdd } from 'react-icons/md'
import SpotsList from 'components/common/SpotsList'

export default function FavouritesPage() {
	const { getUser, user } = useGlobalContext()
	const router = useRouter()

	const [spots, setSpots] = useState([])
	const [sort, setSort] = useState('nearest')
	const [filter, setFilter] = useState('all')
	const [currPage, setCurrPage] = useState(1)
	const [maxPage, setMaxPage] = useState(1)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getUser()
			.then((user) => {
				if (!user) router.push('/signin')
			})
			.catch(console.error)
	}, [])

	useEffect(() => {
		if (filter && sort && currPage && user) fetchData()
	}, [filter, sort, currPage, user])

	function fetchData() {
		setLoading(true)
		fetchWantToGo({ user, type: filter, sort, currPage })
			.then((data) => {
				if (data) setSpots([...data])
				setLoading(false)
			})
			.catch(console.error)
	}

	return (
		<>
			<Navbar />
			<div className='side-padding flex items-center gap-[12px]'>
				<MdBookmarkAdd style={{ fontSize: 30 }} color='#17A547' />
				<h1>Want to go</h1>
			</div>
			<FilterBar value={filter} onChange={setFilter} />
			<Sort value={sort} onChange={setSort} />
			<SpotsList spots={spots} loading={loading} />
			{maxPage > 1 && <Pagination currPage={currPage} maxPage={maxPage} onChange={setCurrPage} />}
		</>
	)
}
