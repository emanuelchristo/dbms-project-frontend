import axios from 'axios'

export function fetchSpot({ spotId }) {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/spot`, {
				params: { spotId },
			})
			resolve(data)
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to fetch spot'))
		}
	})
}

export function fetchUserSpotDetails({ authToken, spotId }) {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-spot-details`, {
				params: { spotId },
				headers: { authorization: authToken },
			})
			resolve(data)
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to fetch user spot details'))
		}
	})
}

export function markFavourite({ authToken, spotId, favourite }) {
	return new Promise(async (resolve, reject) => {
		try {
			await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/mark-favourite`,
				{
					favourite,
					spotId,
				},
				{ headers: { authorization: authToken } }
			)

			resolve()
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to set favourite'))
		}
	})
}

export function markWantToGo({ authToken, spotId, wantToGo }) {
	return new Promise(async (resolve, reject) => {
		try {
			await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/mark-want-to-go`,
				{
					wantToGo,
					spotId,
				},
				{ headers: { authorization: authToken } }
			)

			resolve()
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to set want to go'))
		}
	})
}
