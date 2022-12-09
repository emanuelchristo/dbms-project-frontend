import { useState, useEffect } from 'react'
import { useGlobalContext } from 'lib/global-context'
import { useRouter } from 'next/router'
import { fetchFavourites } from 'lib/api/collection'

import Navbar from 'components/common/Navbar'
import Sort from 'components/common/Sort'
import Pagination from 'components/common/Pagination'
import FilterBar from 'components/common/FilterBar'
import { IoMdHeart } from 'react-icons/io'
import SpotsList from 'components/common/SpotsList'
import { toast } from 'react-toastify'

export default function FavouritesPage() {
	const { getUser, user } = useGlobalContext()
	const router = useRouter()

	const [spots, setSpots] = useState([])
	const [filter, setFilter] = useState('all')
	const [currPage, setCurrPage] = useState(1)
	const [maxPage, setMaxPage] = useState(1)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getUser()
			.then((user) => {
				if (!user) router.push('/signin')
			})
			.catch((err) => router.push('/'))
	}, [])

	useEffect(() => {
		if (filter && currPage && user) fetchData()
	}, [filter, currPage, user])

	function fetchData() {
		setLoading(true)
		fetchFavourites({ user, type: filter, currPage })
			.then((data) => {
				if (data) setSpots([...data])
				setLoading(false)
			})
			.catch((err) => {
				console.error(err)
				toast.error('Failed to load')
			})
	}

	return (
		<>
			<Navbar />
			<div className='side-padding flex items-center gap-[12px]'>
				<IoMdHeart style={{ fontSize: 30 }} color='#E70D42' />
				<h1>Favourites</h1>
			</div>
			<FilterBar value={filter} onChange={setFilter} />
			<SpotsList spots={spots} loading={loading} />
			{maxPage > 1 && <Pagination currPage={currPage} maxPage={maxPage} onChange={setCurrPage} />}
		</>
	)
}
