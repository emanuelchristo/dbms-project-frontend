import { MdSort } from 'react-icons/md'

import styles from './sort.module.css'

export default function Sort({
	options = [
		{ label: 'Nearest', value: 'nearest' },
		{ label: 'Rating', value: 'rating' },
	],
	value,
	onChange,
}) {
	return (
		<div className={styles['sort']}>
			<div className={styles['left']}>
				<MdSort className={styles['sort-icon']} />
				<span>Sort by</span>
			</div>

			<select onChange={(e) => onChange(e.target.value)}>
				{options.map((item) => (
					<option value={item.value} key={item.value}>
						{item.label}
					</option>
				))}
			</select>
		</div>
	)
}
