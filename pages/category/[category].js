import styles from 'components/category/category-page.module.css'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { fetchCategory } from 'lib/api/category'

import Navbar from 'components/common/Navbar'
import Sort from 'components/common/Sort'
import Pagination from 'components/common/Pagination'
import SpotsList from 'components/common/SpotsList'
import { toast } from 'react-toastify'

export default function CategoryPage() {
	const router = useRouter()
	const [spots, setSpots] = useState([])
	const [type, setType] = useState('')
	const [sort, setSort] = useState('nearest')
	const [currPage, setCurrPage] = useState(1)
	const [maxPage, setMaxPage] = useState(1)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!router.isReady) return
		setType(router.asPath.split('/')[2].slice(0, -1))
	}, [router.isReady])

	useEffect(() => {
		if (type && sort && currPage) fetchData()
	}, [type, sort, currPage])

	function fetchData() {
		setLoading(true)
		fetchCategory({ type, sort, page: currPage })
			.then((data) => {
				setLoading(false)
				if (data) setSpots([...data])
			})
			.catch((err) => {
				console.error(err)
				toast.error('Failed to load')
			})
	}

	return (
		<>
			<Navbar />
			<div
				style={{
					backgroundImage: `linear-gradient(#fff, rgba(255, 255, 255, 0) 30%),
														linear-gradient(#00000000 20%, rgba(0, 0, 0, 0.8)),
														url('/images/${type}.jpg')`,
				}}
				className={styles['banner']}
			>
				<h1 className={styles['heading']}>{type ? type + 's' : ''}</h1>
			</div>
			{/* <h1 className='side-padding capitalize mb-[12px]'>{type + 's'}</h1> */}
			<Sort
				options={[
					{ label: 'Nearest', value: 'nearest' },
					{ label: 'Rating', value: 'rating' },
				]}
				value={sort}
				onChange={setSort}
			/>
			<div className='h-[10px]'></div>
			<SpotsList spots={spots} loading={loading} />
			{maxPage > 1 && <Pagination currPage={currPage} maxPage={maxPage} onChange={setCurrPage} />}
		</>
	)
}
