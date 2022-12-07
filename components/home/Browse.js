import Link from 'next/link'

import styles from './browse.module.css'

export default function Browse() {
	return (
		<div className={styles['browse']}>
			<h2>Browse</h2>
			<div className={styles['buttons-grid']}>
				<Link href='/category/places'>
					<button>Places</button>
				</Link>
				<Link href='/category/restaurants'>
					<button>Restaurants</button>
				</Link>
				<Link href='/category/movies'>
					<button>Movies</button>
				</Link>
				<Link href='/category/hotels'>
					<button>Hotels</button>
				</Link>
			</div>
		</div>
	)
}
