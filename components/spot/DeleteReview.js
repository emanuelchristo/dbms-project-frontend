import styles from './delete-review.module.css'

export default function DeleteReview({ onCancel, onDelete }) {
	return (
		<div className={styles['delete-review']}>
			<h3 className={styles['heading']}>Delete review ?</h3>
			<p className={styles['text']}>Are you sure to delete the review</p>
			<div className='flex items-center gap-[8px] mt-[12px]'>
				<button className='outline w-full' onClick={onCancel}>
					Cancel
				</button>
				<button className='primary w-full' onClick={onDelete}>
					Delete
				</button>
			</div>
		</div>
	)
}
