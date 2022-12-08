import SpotCardHorizontal from 'components/common/SpotCardHorizontal'
import NothingHere from 'components/common/NothingHere'
import Loading from 'components/common/Loading'
import { netRating } from 'lib/utils/net-rating'

export default function SpotsList({ spots, loading }) {
	if (loading) return <Loading />
	else
		return (
			<div>
				{spots?.length > 0 ? (
					<div className='vertical-card-list'>
						{spots?.map((item) => (
							<SpotCardHorizontal
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
						))}
					</div>
				) : (
					<NothingHere />
				)}
			</div>
		)
}
