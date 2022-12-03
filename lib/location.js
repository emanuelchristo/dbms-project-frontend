const NITC_COORDS = { latitude: 11.322610064139191, longitude: 75.9336359 }

export function getCurrLocation(callback) {
	return new Promise((resolve, reject) => {
		if (!navigator.geolocation) {
			resolve(NITC_COORDS)
			return
		}

		navigator.geolocation.getCurrentPosition(
			(position) => {
				resolve({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				})
			},
			() => {
				resolve(NITC_COORDS)
			}
		)
	})
}
