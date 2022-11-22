import 'styles/variables.css'
import 'styles/globals.css'
import 'styles/text-styles.css'
import 'styles/layout.css'
import 'styles/form.css'

import 'assets/fonts/gilroy/stylesheet.css'

function MyApp({ Component, pageProps }) {
	return (
		<div className='app-container'>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
