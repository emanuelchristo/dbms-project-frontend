import axios from 'axios'
import { getCurrLocation } from 'lib/location'

// sort = "nearest" | "rating"

export function fetchCategory({ type, sort, page }) {
	return new Promise(async (resolve, reject) => {
		try {
			const currLocation = await getCurrLocation()
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`, {
				params: {
					sort: sort,
					location: currLocation,
					page: page || 0,
					type: type,
				},
			})
			resolve(data)
		} catch (err) {
			reject(err)
		}
	})
}
