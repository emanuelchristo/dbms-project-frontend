import axios from 'axios'

export function fetchRecommended({ authToken, location }) {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/recommended`, {
				authToken,
				location,
			})
			resolve(data)
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to fetch recommended'))
		}
	})
}
