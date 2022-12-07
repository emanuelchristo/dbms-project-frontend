import axios from 'axios'

export function fetchSpot({ authToken, spotId }) {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/spot`, {
				params: { spotId },
				headers: { authorization: authToken },
			})
			data.thumbnail = process.env.NEXT_PUBLIC_IMAGE_URL + data.thumbnail
			data.images = data.images?.map((item) => process.env.NEXT_PUBLIC_IMAGE_URL + item)
			for (let item of data.nearBySpots)
				item.thumbnail = process.env.NEXT_PUBLIC_IMAGE_URL + item.thumbnail

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

export function submitReview({ authToken, spotId, review }) {
	return new Promise(async (resolve, reject) => {
		try {
			await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/submit-review`,
				{
					review,
					spotId,
				},
				{ headers: { authorization: authToken } }
			)

			resolve()
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to post review'))
		}
	})
}

export function editReview({ authToken, reviewId, review }) {
	return new Promise(async (resolve, reject) => {
		try {
			await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/edit-review`,
				{
					review,
					reviewId,
				},
				{ headers: { authorization: authToken } }
			)

			resolve()
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to edit review'))
		}
	})
}

export function deleteReview({ authToken, reviewId }) {
	return new Promise(async (resolve, reject) => {
		try {
			await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/delete-review`,
				{
					reviewId,
				},
				{ headers: { authorization: authToken } }
			)

			resolve()
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to delete review'))
		}
	})
}
