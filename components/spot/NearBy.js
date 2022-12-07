import SpotCardVertical from 'components/common/SpotCardVertical'
import { netRating } from 'lib/utils/net-rating'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './near-by.module.css'

export default function NearBy({ spots }) {
	if (spots?.length > 0)
		return (
			<div className={styles['near-by']}>
				<h2 className={styles['heading']}>Near by</h2>
				<Swiper spaceBetween={18} slidesPerView={'auto'} freeMode={true}>
					{spots?.map((item) => (
						<SwiperSlide key={item.spot_id}>
							<SpotCardVertical
								key={item.spot_id}
								spotId={item.spot_id}
								imageUrl={item.thumbnail}
								type={item.type}
								rating={netRating(item.user_rating, item.google_rating)}
								name={item.name}
								latitude={item.latitude}
								longitude={item.longitude}
								city={item.city}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		)
	else return <></>
}
