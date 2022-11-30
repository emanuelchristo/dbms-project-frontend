import CurrLocation from 'components/common/CurrLocation'
import Navbar from 'components/common/Navbar'
import SearchBar from 'components/common/SearchBar'
import Browse from 'components/home/Browse'
import Recommended from 'components/home/Recommended'

export default function Home() {
	return (
		<>
			<Navbar />
			<CurrLocation />
			<SearchBar />
			<Browse />
			<Recommended />
		</>
	)
}
