import { MdModeEdit } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'

import styles from './review-item.module.css'

export default function ReviewItem({
	description,
	userName,
	rating,
	showOptions,
	onEdit,
	onDelete,
}) {
	return (
		<div className={styles['review-item']}>
			{description && <p className={styles['review-text']}>{description || 'N/A'}</p>}
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-[16px]'>
					<span className={styles['user-name']}>{userName || '--'}</span>
					<div className={styles['separator']}></div>
					<div className={styles['rating-wrapper']}>
						<img src='/svgs/yellow-star.svg' alt='⭐️' />
						<span className={styles['rating']}>{rating?.toFixed(1) || 'N/A'}</span>
					</div>
				</div>
				{showOptions && (
					<div className='flex item-center gap-[10px]'>
						<button className='icon-button' onClick={onEdit}>
							<MdModeEdit />
						</button>
						<button className='icon-button' onClick={onDelete}>
							<IoMdTrash />
						</button>
					</div>
				)}
			</div>
		</div>
	)
}
