import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import styles from './pagination.module.css'

export default function Pagination({ currPage, maxPage, onChange }) {
	return (
		<div className={styles['wrapper']}>
			<button
				className={styles['button']}
				onClick={() => {
					let newPage = currPage - 1
					if (newPage < 1) onChange(1)
					else onChange(newPage)
				}}
			>
				<MdChevronLeft />
			</button>
			<div className={styles['number']}>
				{currPage}&nbsp;/&nbsp;{maxPage}
			</div>
			<button
				className={styles['button']}
				onClick={() => {
					let newPage = currPage + 1
					if (newPage > maxPage) onChange(maxPage)
					else onChange(newPage)
				}}
			>
				<MdChevronRight />
			</button>
		</div>
	)
}
