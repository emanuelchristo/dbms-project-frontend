import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MdSearch } from 'react-icons/md'

import styles from './search-bar.module.css'

export default function SearchBar() {
	const router = useRouter()
	const [query, setQuery] = useState('')

	useEffect(() => {
		if (!router.isReady) return
		if (router.query.q) setQuery(router.query.q)
	}, [router.isReady, router.asPath])

	function handleSearch(e) {
		e.preventDefault()
		router.push('/search?q=' + query)
	}

	return (
		<div className={styles['search-bar-container']}>
			<form onSubmit={handleSearch}>
				<input
					className={styles['search-input']}
					type='text'
					placeholder='Search location...'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type='submit' className='no-anim'>
					<MdSearch className={styles['search-icon']} />
				</button>
			</form>
		</div>
	)
}
