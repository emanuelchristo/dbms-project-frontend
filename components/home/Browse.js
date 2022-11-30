import styles from './browse.module.css'

export default function Browse() {
	return (
		<div className={styles['browse']}>
			<h2>Browse</h2>
			<div className={styles['buttons-grid']}>
				<button>Places</button>
				<button>Restaurants</button>
				<button>Movies</button>
				<button>Hotels</button>
			</div>
		</div>
	)
}
