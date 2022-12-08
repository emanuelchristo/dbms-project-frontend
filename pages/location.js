import { useEffect, useState } from 'react'
import { getCurrLocation } from 'lib/location'

import styles from 'components/location/location-page.module.css'

export default function LocationPage() {
	const [location, setLocation] = useState(null)

	useEffect(() => {
		getCurrLocation()
			.then((loc) => {
				setLocation(loc)
				console.log(loc)
			})
			.catch(console.error)
	}, [])

	return (
		<div>
			{location && (
				<iframe
					width='100%'
					height='600'
					frameBorder='0'
					scrolling='no'
					marginHeight='0'
					marginWidth='0'
					src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Malet%20St,%20London%20WC1E%207HU,%20United%20Kingdom+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
				></iframe>
			)}
		</div>
	)
}
