import { MdSort } from 'react-icons/md'

import styles from './sort.module.css'

export default function Sort() {
	return (
		<div className={styles['sort']}>
			<div className={styles['left']}>
				<MdSort className={styles['sort-icon']} />
				<span>Sort by</span>
			</div>

			<select>
				<option>Relevance</option>
				<option>Rating</option>
				<option>Latest</option>
			</select>
		</div>
	)
}
