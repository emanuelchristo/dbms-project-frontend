import axios from 'axios'

export function getLocationName({ latitude, longitude }) {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get-location-name`, {
				params: {
					latitude,
					longitude,
				},
			})
			resolve(data)
		} catch (err) {
			console.error()
			reject(new Error('Failed to get location name'))
		}
	})
}
