import styles from './delete-account.module.css'

export default function DeleteAccount({ onCancel, onDelete }) {
	return (
		<div className={styles['delete-account']}>
			<h3 className={styles['heading']}>Delete account?</h3>
			<p className={styles['text']}>Are you sure to delete your account</p>
			<div className='flex items-center gap-[8px] mt-[12px]'>
				<button className='outline w-full' onClick={onCancel}>
					Cancel
				</button>
				<button
					className='primary w-full'
					style={{ backgroundColor: '#cc0202' }}
					onClick={onDelete}
				>
					Delete
				</button>
			</div>
		</div>
	)
}
