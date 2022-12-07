import { useGlobalContext } from 'lib/global-context'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import AddReview from 'components/spot/AddReview'
import ReviewItem from 'components/spot/ReviewItem'
import { MdRateReview } from 'react-icons/md'
import Modal from 'components/common/Modal'

import styles from './reviews.module.css'
import DeleteReview from 'components/spot/DeleteReview'
import { submitReview, editReview as editReviewFunc, deleteReview } from 'lib/api/spot'

export default function Reviews({ spotId, currUserReview, reviews }) {
	const { user, authToken } = useGlobalContext()
	const router = useRouter()

	const [showAddReview, setShowAddReview] = useState(false)
	const [showDeleteReview, setShowDeleteReview] = useState(false)
	const [deleteReviewId, setDeleteReviewId] = useState(null)
	const [editReview, setEditReview] = useState(null)

	function handleDelete() {
		toast
			.promise(deleteReview({ authToken, spotId, reviewId: deleteReviewId }), {
				pending: 'Deleting review ...',
				error: 'Failed to delete review',
				success: 'Review deleted',
			})
			.then(() => router.reload())
			.catch(console.error)
	}

	function handlePost(review) {
		if (editReview === null)
			toast
				.promise(submitReview({ authToken, spotId, review }), {
					pending: 'Posting review ...',
					error: 'Failed to submit review',
					success: 'Review posted',
				})
				.then(() => router.reload())
				.catch(console.error)
		else
			toast
				.promise(editReviewFunc({ authToken, reviewId: editReview.review_id, review }), {
					pending: 'Editing review ...',
					error: 'Failed to edit review',
					success: 'Review edited',
				})
				.then(() => router.reload())
				.catch(console.error)
	}

	return (
		<div className={styles['reviews-wrapper']}>
			<h2 className={styles['heading']}>Reviews</h2>
			{!currUserReview && (
				<button
					className={styles['review-button']}
					onClick={() => {
						if (!user) router.push('/signin')
						else setShowAddReview(true)
					}}
				>
					<MdRateReview className={styles['review-button-icon']} />
					<span>Add a review</span>
				</button>
			)}
			{reviews?.length > 0 && (
				<div className={styles['reviews-list']}>
					{reviews?.map((item) => (
						<ReviewItem
							key={item?.review_id}
							userName={item?.username}
							description={item?.description}
							rating={item?.rating}
							showOptions={item?.user_id == user?.userId}
							onEdit={() => {
								setEditReview(item)
								setShowAddReview(true)
							}}
							onDelete={() => {
								setDeleteReviewId(item?.review_id)
								setShowDeleteReview(true)
							}}
						/>
					))}
				</div>
			)}
			<Modal show={showAddReview}>
				<AddReview
					rating={editReview?.rating}
					description={editReview?.description}
					edit={editReview !== null}
					onCancel={() => setShowAddReview(false)}
					onPost={handlePost}
				/>
			</Modal>
			<Modal show={showDeleteReview}>
				<DeleteReview onCancel={() => setShowDeleteReview(false)} onDelete={handleDelete} />
			</Modal>
		</div>
	)
}
