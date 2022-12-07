import { Swiper, SwiperSlide } from 'swiper/react'
import FilterChip from 'components/common/FilterChip'

import styles from './filter-bar.module.css'

export default function FilterBar({
	options = [
		{ label: 'All', value: 'all' },
		{
			label: 'Places',
			value: 'place',
		},
		{
			label: 'Restaurants',
			value: 'restaurant',
		},
		{
			label: 'Movies',
			value: 'movie',
		},
		{ label: 'Hotels', value: 'hotel' },
	],
	value,
	onChange,
}) {
	return (
		<div className={styles['filter-bar']}>
			<Swiper spaceBetween={12} slidesPerView={'auto'} freeMode={true} threshold={2}>
				{options.map((item) => (
					<SwiperSlide key={item.value} onClick={() => onChange(item.value)}>
						<FilterChip label={item.label} checked={item.value === value} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
