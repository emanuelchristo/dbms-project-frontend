import { MdSearch } from 'react-icons/md'

import styles from './search-bar.module.css'

export default function SearchBar() {
	return (
		<div className={styles['search-bar-container']}>
			<input className={styles['search-input']} type='text' placeholder='Search location...' />
			<MdSearch className={styles['search-icon']} />
		</div>
	)
}
