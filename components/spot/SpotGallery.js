import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './spot-gallery.module.css'

export default function SpotGallery({ images }) {
	if (images?.length > 0)
		return (
			<div className={styles['spot-gallery']}>
				<Swiper
					loop={true}
					spaceBetween={12}
					slidesPerView={1.15}
					centeredSlides={true}
					freeMode={true}
				>
					{images?.map((item, index) => (
						<SwiperSlide key={index}>
							<div className={styles['image']} style={{ backgroundImage: `url('${item}')` }}></div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		)
}
