import { useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from 'components/common/Navbar'

import styles from 'components/feedback/feedback-page.module.css'
import { submitFeedback } from 'lib/api/feedback'

export default function FeedbackPage() {
	const [feedback, setFeedback] = useState('')

	function handleSubmit() {
		if (!feedback) {
			toast.error('Feedback required')
			return
		}
		toast
			.promise(submitFeedback({ feedback }), {
				pending: 'Submitting feedback',
				error: 'Failed to submit feedback',
				success: 'Feedback submitted',
			})
			.then(() => setFeedback(''))
			.catch(console.error)
	}

	return (
		<>
			<Navbar />
			<div className={styles['content']}>
				<h1 className='mb-[4px]'>Feedback</h1>
				<p className={styles['sub-title']}>We&apos;d love to know what you think!</p>

				<textarea
					placeholder='Enter feedback'
					value={feedback}
					onChange={(e) => setFeedback(e.target.value)}
				/>
				<button className='primary w-full mt-[16px]' onClick={handleSubmit}>
					Submit
				</button>
			</div>
			<img src='/images/feedback.jpg' className='w-[80%] mx-[auto] mt-[24px]' />
		</>
	)
}
