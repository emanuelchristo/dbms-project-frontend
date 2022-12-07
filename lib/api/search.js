import { getCurrLocation } from 'lib/location'
import axios from 'axios'

export function search({ type, sort, page, query }) {
	return new Promise(async (resolve, reject) => {
		try {
			const currLocation = await getCurrLocation()

			let { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/search`, {
				sort,
				location: currLocation,
				page: page || 1,
				type,
				query,
			})

			for (let item of data.spots)
				item.thumbnail = process.env.NEXT_PUBLIC_IMAGE_URL + item.thumbnail

			resolve(data)
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to search'))
		}
	})
}
