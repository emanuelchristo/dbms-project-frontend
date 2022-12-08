import { useState } from 'react'
import { useGlobalContext } from 'lib/global-context'

import Link from 'next/link'
import { MdMenu, MdClose, MdHome, MdBookmarkAdd } from 'react-icons/md'
import { IoMdHeart } from 'react-icons/io'

import styles from './navbar.module.css'

export default function Navbar() {
	const { user } = useGlobalContext()
	const [showMenu, setShowMenu] = useState(false)

	return (
		<nav className={styles['navbar']}>
			<div className={styles['ham-icon-wrapper']} onClick={() => setShowMenu(true)}>
				<MdMenu />
			</div>

			<Link href='/'>
				<img src='/logo.svg' className={styles['logo']} />
			</Link>

			{user ? (
				<Link href='/profile'>
					<div
						className={styles['avatar']}
						style={{ backgroundImage: `url('${user.imageUrl}')` }}
					></div>
				</Link>
			) : (
				<Link href='/signin'>
					<button className={styles['sign-in']}>Sign in</button>
				</Link>
			)}
			<Menu show={showMenu} onClose={() => setShowMenu(false)} />
		</nav>
	)
}

function Menu({ show, onClose }) {
	return (
		<div className={`${styles['menu']} ${show ? styles['show'] : ''}`}>
			<div className={styles['ham-icon-wrapper']} onClick={onClose}>
				<MdClose />
			</div>

			<ul className={styles['menu-list']}>
				<li>
					<Link href='/'>
						<a>
							<div className={styles['menu-list-item']}>
								<MdHome className={styles['menu-item-icon']} color='#0F85F2' />
								<span>Home</span>
							</div>
						</a>
					</Link>
					<Link href='/favourites'>
						<a>
							<div className={styles['menu-list-item']}>
								<IoMdHeart className={styles['menu-item-icon']} color='#E70D42' />
								<span>Favourites</span>
							</div>
						</a>
					</Link>
					<Link href='/want-to-go'>
						<a>
							<div className={styles['menu-list-item']}>
								<MdBookmarkAdd className={styles['menu-item-icon']} color='#17A547' />
								<span>Want to go</span>
							</div>
						</a>
					</Link>
				</li>
			</ul>

			<div className={styles['sub-links']}>
				<Link href='/feedback'>
					<a>Feedback</a>
				</Link>
				<div className={styles['separator']}></div>
				<Link href='/contact'>
					<a>Contact</a>
				</Link>
			</div>
		</div>
	)
}
