import Link from 'next/link'

import styles from 'components/signin/signin-page.module.css'

export default function SigninPage() {
	return (
		<div className={styles['container']}>
			<Link href='/'>
				<img className={styles['logo']} src='logo.svg' />
			</Link>
			<h1 className={styles['heading']}>
				Sign in to your <br />
				account
			</h1>

			<div className={styles['form-wrapper']}>
				<input type='email' placeholder='Email' />
				<input type='password' placeholder='Password' />
				<button className={styles['button']}>
					<span>Sign in</span> <img src='svgs/right-long-arrow-white.svg' />
				</button>
				<div className={styles['or-container']}>
					<div className={styles['or-line']}></div>
					<span>or</span>
					<div className={styles['or-line']}></div>
				</div>
				<Link href='/signup'>
					<button className={`${styles['button']} ${styles['grey']}`}>
						<span>Create account</span> <img src='svgs/right-long-arrow-black.svg' />
					</button>
				</Link>
			</div>
		</div>
	)
}
