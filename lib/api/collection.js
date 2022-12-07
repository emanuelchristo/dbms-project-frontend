import axios from 'axios'

export function fetchFavourites({ user, type, sort, currPage }) {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/favourites`, {
				params: { type, sort, currPage },
				headers: { authorization: user.authToken },
			})
			resolve(data)
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to fetch favourites'))
		}
	})
}

export function fetchWantToGo({ user, type, sort, currPage }) {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/want-to-go`, {
				params: { type, sort, currPage },
				headers: { authorization: user.authToken },
			})
			resolve(data)
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to fetch want to go'))
		}
	})
}
