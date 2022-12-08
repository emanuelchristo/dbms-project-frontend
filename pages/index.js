import { useState, useEffect } from 'react'
import { useGlobalContext } from 'lib/global-context'

import CurrLocation from 'components/common/CurrLocation'
import Navbar from 'components/common/Navbar'
import SearchBar from 'components/common/SearchBar'
import Browse from 'components/home/Browse'
import Recommended from 'components/home/Recommended'
import { fetchRecommended } from 'lib/api/home'
import { getCurrLocation } from 'lib/location'

export default function Home() {
	const { authToken } = useGlobalContext()
	const [recommendedSpots, setRecommendedSpots] = useState([])
	const [currLocation, setCurrLocation] = useState(null)

	useEffect(() => {
		getCurrLocation().then(setCurrLocation).catch(console.error)
	}, [])

	useEffect(() => {
		fetchRecommended({ authToken, location: currLocation })
			.then(setRecommendedSpots)
			.catch(console.error)
	}, [authToken, currLocation])

	return (
		<>
			<Navbar />
			<CurrLocation />
			<SearchBar />
			<Browse />
			<Recommended spots={recommendedSpots} />
		</>
	)
}
