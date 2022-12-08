import axios from 'axios'

export function submitFeedback({ feedback }) {
	return new Promise(async (resolve, reject) => {
		try {
			await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/submit-feedback`, { feedback })
			resolve()
		} catch (err) {
			console.error(err)
			reject(new Error('Failed to submit feedback'))
		}
	})
}
