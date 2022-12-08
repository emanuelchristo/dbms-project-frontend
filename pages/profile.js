import { useEffect, useState } from 'react'
import { useGlobalContext } from 'lib/global-context'

import Link from 'next/link'
import { IoMdHeart, IoMdEye } from 'react-icons/io'
import { MdStar, MdBookmarkAdd } from 'react-icons/md'
import Navbar from 'components/common/Navbar'
import { toast } from 'react-toastify'

import styles from 'components/profile/profile-page.module.css'
import Modal from 'components/common/Modal'
import DeleteAccount from 'components/profile/DeleteAccount'
import EditName from 'components/profile/EditName'
import { deleteAccount, editName, getProfile } from 'lib/api/user'
import { useRouter } from 'next/router'
import LoadingOverlay from 'components/common/LoadingOverlay'

export default function ProfilePage() {
	const router = useRouter()
	const { user, authToken, getUser, signOut } = useGlobalContext()

	const [loading, setLoading] = useState(true)
	const [stats, setStats] = useState({ favourites: 0, wantToGo: 0, reviews: 0, views: 0 })
	const [showDeleteAccount, setShowDeleteAccount] = useState(false)
	const [showEditName, setShowEditName] = useState(false)

	useEffect(() => {
		getUser()
			.then((user) => {
				if (!user) router.push('/')
			})
			.catch((err) => router.push('/'))
	}, [])

	useEffect(() => {
		setLoading(true)
		getProfile({ authToken })
			.then((data) => {
				setStats(data)
				setLoading(false)
			})
			.catch(console.error)
	}, [user])

	function handleAccountDelete() {
		toast
			.promise(deleteAccount({ authToken }), {
				pending: 'Deleting account',
				error: 'Failed to delete account',
				success: 'Account deleted',
			})
			.then(() => (window.location = '/'))
			.catch(console.error)
	}

	function handleEditName(name) {
		if (!name || name?.length < 3) {
			toast.error('Name should be atleast 3 letters')
			return
		}
		if (name.length > 20) {
			toast.error('Name too long')
			return
		}
		toast
			.promise(editName({ authToken, name }), {
				pending: 'Editing name',
				error: 'Failed to edit name',
				success: 'Name edited',
			})
			.then(() => {
				getUser(true)
				setShowEditName(false)
			})
			.catch(console.error)
	}

	return (
		<>
			{loading && <LoadingOverlay />}
			<Navbar />
			<div className={styles['header']}>
				<div
					className={styles['avatar']}
					style={{ backgroundImage: `url('${user?.imageUrl}')` }}
				></div>

				<div className={styles['name-email']}>
					<span className={styles['name']}>{user?.name}</span>
					<span className={styles['email']}>{user?.email}</span>
					<button className={styles['edit-name-button']} onClick={() => setShowEditName(true)}>
						Edit name
					</button>
				</div>
			</div>

			<div className={styles['cards-grid']}>
				<Link href='/favourites'>
					<a>
						<Card
							number={stats?.favourites}
							label='Favourites'
							icon={<IoMdHeart color='#E70D42' />}
							hoverZoom={true}
						/>
					</a>
				</Link>
				<Link href='/want-to-go'>
					<a>
						<Card
							number={stats?.wantToGo}
							label='Want to go'
							icon={<MdBookmarkAdd color='#17A547' />}
							hoverZoom={true}
						/>
					</a>
				</Link>
				<Card number={stats?.reviews} label='Reviews' icon={<MdStar color='#F6BB22' />} />
				<Card number={stats?.views} label='Views' icon={<IoMdEye color='#5E2EE5' />} />
			</div>

			<div className={styles['buttons-wrapper']}>
				<button className={styles['logout-button']} onClick={signOut}>
					Logout
				</button>
				<button className={styles['delete-button']} onClick={() => setShowDeleteAccount(true)}>
					Delete account
				</button>
			</div>

			<Modal show={showDeleteAccount}>
				<DeleteAccount
					onDelete={handleAccountDelete}
					onCancel={() => setShowDeleteAccount(false)}
				/>
			</Modal>
			<Modal show={showEditName}>
				<EditName
					name={user?.name}
					onCancel={() => setShowEditName(false)}
					onSave={handleEditName}
				/>
			</Modal>
		</>
	)
}

function Card({ number, icon, label, hoverZoom }) {
	return (
		<div className={`${styles['card']} ${hoverZoom ? styles['hover-zoom'] : ''}`}>
			<span className={styles['number']}>{Number.isInteger(number) ? number : '--'}</span>
			<div className={styles['label-wrapper']}>
				<div className={styles['card-icon-wrapper']}>{icon}</div>
				<span>{label}</span>
			</div>
		</div>
	)
}
