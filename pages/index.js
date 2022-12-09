import { useState, useEffect } from 'react'
import { useGlobalContext } from 'lib/global-context'

import CurrLocation from 'components/common/CurrLocation'
import Navbar from 'components/common/Navbar'
import SearchBar from 'components/common/SearchBar'
import Browse from 'components/home/Browse'
import Recommended from 'components/home/Recommended'
import { fetchRecommended } from 'lib/api/home'
import { getCurrLocation } from 'lib/location'
import { toast } from 'react-toastify'

export default function Home() {
	const { authToken } = useGlobalContext()
	const [recommendedSpots, setRecommendedSpots] = useState([])
	const [currLocation, setCurrLocation] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getCurrLocation().then(setCurrLocation).catch(console.error)
	}, [])

	useEffect(() => {
		if (!currLocation) return
		setLoading(true)
		fetchRecommended({ authToken, location: currLocation })
			.then((data) => {
				setRecommendedSpots(data)
				setLoading(false)
			})
			.catch((err) => {
				console.error(err)
				toast.error('Failed to load')
			})
	}, [authToken, currLocation])

	return (
		<>
			<Navbar />
			<CurrLocation />
			<SearchBar />
			<Browse />
			<Recommended loading={loading} spots={recommendedSpots} />
		</>
	)
}
