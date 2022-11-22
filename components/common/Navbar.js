import { MdMenu } from 'react-icons/md'

import styles from './navbar.module.css'

export default function Navbar() {
	return (
		<nav className={styles['navbar']}>
			<div className={styles['ham-icon-wrapper']}>
				<MdMenu />
			</div>

			<img src='logo.svg' />

			<div className={styles['avatar']}></div>
		</nav>
	)
}
