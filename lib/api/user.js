import axios from 'axios'

export function editName({ authToken, name }) {
	return new Promise(async (resolve, reject) => {
		try {
			await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/edit-name`,
				{ name },
				{ headers: { authorization: authToken } }
			)
			resolve()
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to edit name'))
		}
	})
}

export function deleteAccount({ authToken }) {
	return new Promise(async (resolve, reject) => {
		try {
			await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/delete-account`,
				{},
				{
					headers: {
						authorization: authToken,
					},
				}
			)
			resolve()
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to delete account'))
		}
	})
}

export function getProfile({ authToken }) {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get-profile`, {
				headers: {
					authorization: authToken,
				},
			})
			resolve(data)
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to get profile'))
		}
	})
}
