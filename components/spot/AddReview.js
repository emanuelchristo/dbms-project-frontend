import { useState } from 'react'

import Rating from '@mui/material/Rating'

import styles from './add-review.module.css'

export default function AddReview({
	rating: ratingProp,
	description: descriptionProp,
	edit,
	onCancel,
	onPost,
}) {
	const [rating, setRating] = useState(ratingProp || null)
	const [description, setDescription] = useState(descriptionProp || '')

	return (
		<div className={styles['add-review']}>
			<h3 className={styles['heading']}>{edit ? 'Edit' : 'Add'} review</h3>
			<div className={styles['rating-wrapper']}>
				<Rating
					name='simple-controlled'
					value={rating}
					onChange={(event, newValue) => setRating(newValue)}
				/>
			</div>
			<textarea
				className={styles['text-area']}
				placeholder='Share your experience'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			></textarea>
			<div className='flex items-center gap-[8px] mt-[12px]'>
				<button className='outline w-full' onClick={onCancel}>
					Cancel
				</button>
				<button className='primary w-full' onClick={() => onPost({ rating, description })}>
					{edit ? 'Save' : 'Post'}
				</button>
			</div>
		</div>
	)
}
