import axios from 'axios'

export function fetchFavourites({ user, type, currPage }) {
	return new Promise(async (resolve, reject) => {
		try {
			let { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/favourites`, {
				params: { type, currPage },
				headers: { authorization: user.authToken },
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
			reject(new Error('Failed to fetch favourites'))
		}
	})
}

export function fetchWantToGo({ user, type, currPage }) {
	return new Promise(async (resolve, reject) => {
		try {
			let { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/want-to-go`, {
				params: { type, currPage },
				headers: { authorization: user.authToken },
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
			reject(new Error('Failed to fetch want to go'))
		}
	})
}
