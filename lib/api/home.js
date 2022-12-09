import axios from 'axios'

export function fetchRecommended({ authToken, location }) {
	return new Promise(async (resolve, reject) => {
		try {
			let { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/recommended`, {
				authToken,
				location,
			})
			data = data.map((item) => {
				return {
					...item,
					thumbnail: process.env.NEXT_PUBLIC_IMAGE_URL + item.thumbnail,
				}
			})
			resolve(data)
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to fetch recommended'))
		}
	})
}
