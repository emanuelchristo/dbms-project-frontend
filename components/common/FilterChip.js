import styles from './filter-chip.module.css'

export default function FilterChip({ checked, label }) {
	return (
		<div className={`${styles['filter-chip']} ${checked ? styles['checked'] : ''} `}>{label}</div>
	)
}
