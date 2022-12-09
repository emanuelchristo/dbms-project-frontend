import Loading from 'components/common/Loading'
import Navbar from 'components/common/Navbar'

export default function PageLoader() {
	return (
		<div className='h-[100vh] flex flex-col'>
			<Navbar />
			<div className='flex-1 flex items-center justify-center pb-[80px]'>
				<Loading />
			</div>
		</div>
	)
}
