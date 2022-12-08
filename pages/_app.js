import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import 'swiper/css'

import 'styles/variables.css'
import 'styles/globals.css'
import 'styles/text-styles.css'
import 'styles/layout.css'
import 'styles/form.css'

import 'assets/fonts/gilroy/stylesheet.css'

import { GlobalContextWrapper } from 'lib/global-context'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>LetsGo - Travel Recommendation System for NITC Students</title>
			</Head>
			<GlobalContextWrapper>
				<div className='app-container'>
					<Component {...pageProps} />
					<div className='h-[32px]'></div>
					<ToastContainer />
				</div>
			</GlobalContextWrapper>
		</>
	)
}

export default MyApp
