import { Swiper, SwiperSlide } from 'swiper/react'
import FilterChip from 'components/common/FilterChip'

import styles from './filter-bar.module.css'

export default function FilterBar() {
	return (
		<div className={styles['filter-bar']}>
			<Swiper spaceBetween={12} slidesPerView={'auto'} freeMode={true}>
				<SwiperSlide>
					<FilterChip label='All' checked={true} />
				</SwiperSlide>
				<SwiperSlide>
					<FilterChip label='Places' />
				</SwiperSlide>
				<SwiperSlide>
					<FilterChip label='Restaurants' />
				</SwiperSlide>
				<SwiperSlide>
					<FilterChip label='Movies' />
				</SwiperSlide>
				<SwiperSlide>
					<FilterChip label='Hotels' />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
