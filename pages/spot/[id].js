import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { fetchSpot, fetchUserSpotDetails, markFavourite, markWantToGo } from 'lib/api/spot'
import { useGlobalContext } from 'lib/global-context'

import Navbar from 'components/common/Navbar'
import Header from 'components/spot/Header'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { MdBookmark, MdBookmarkBorder } from 'react-icons/md'

import styles from 'components/spot/spot-page.module.css'

export default function SpotPage() {
	const router = useRouter()
	const { user, authToken } = useGlobalContext()

	const [spot, setSpot] = useState(null)
	const [userSpotDetails, setUserSpotDetails] = useState({ favourite: false, wantToGo: false })
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!router.isReady) return
		fetchData()
	}, [router.isReady])

	function fetchData() {
		setLoading(true)
		fetchSpot({ spotId: router.query.id })
			.then((data) => {
				setLoading(false)
				setSpot(data)
			})
			.catch(console.error)

		fetchUserSpotDetails({ authToken: user?.authToken, spotId: router.query.id })
			.then(setUserSpotDetails)
			.catch(console.error)
	}

	function handleFavourite() {
		if (!user) {
			router.push('/signin')
			return
		}

		markFavourite({
			authToken,
			spotId: spot?.spot_id,
			favourite: !userSpotDetails?.favourite,
		})
			.then(() =>
				setUserSpotDetails({ ...userSpotDetails, favourite: !userSpotDetails?.favourite })
			)
			.catch(console.error)
	}

	function handleWantToGo() {
		if (!user) {
			router.push('/signin')
			return
		}

		markWantToGo({
			authToken,
			spotId: spot?.spot_id,
			wantToGo: !userSpotDetails?.wantToGo,
		})
			.then(() => setUserSpotDetails({ ...userSpotDetails, wantToGo: !userSpotDetails?.wantToGo }))
			.catch(console.error)
	}

	return (
		<>
			<Navbar />
			<Header
				type={spot?.type}
				name={spot?.name}
				latitude={spot?.latitude}
				longitude={spot?.longitude}
				rating={spot?.google_rating}
				city={spot?.city}
			/>

			<div className={styles['fav-wtg-buttons-wrapper']}>
				<button className={styles['button-fav']} onClick={handleFavourite}>
					{userSpotDetails?.favourite ? (
						<IoMdHeart className={styles['button-icon']} color='#D40404' />
					) : (
						<IoMdHeartEmpty className={styles['button-icon']} color='#D40404' />
					)}
					<span>Favourite</span>
				</button>
				<button
					className={`${styles['button-fav']} ${styles['want-to-go']}`}
					onClick={handleWantToGo}
				>
					{userSpotDetails?.wantToGo ? (
						<MdBookmark className={styles['button-icon']} color='#0A984B' />
					) : (
						<MdBookmarkBorder className={styles['button-icon']} color='#0A984B' />
					)}
					<span>Want to go</span>
				</button>
			</div>
			<div className={styles['directions-wrapper']}>
				<a href={spot?.location_link} target='_blank' rel='noreferrer noopener'>
					<button className={styles['directions-button']}>Directions</button>
				</a>
			</div>

			<div className={styles['about-wrapper']}>
				<span className={styles['about-heading']}>About spot</span>
				<p className={styles['about-para']}>{spot?.description || 'N/A'}</p>
			</div>
		</>
	)
}
