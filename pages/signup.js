import styles from 'components/signin/signin-page.module.css'

export default function SigninPage() {
	return (
		<div className={styles['container']}>
			<img className={styles['logo']} src='logo.svg' />
			<h1 className={styles['heading']}>
				Create a new <br />
				account
			</h1>

			<div className={styles['form-wrapper']}>
				<input type='text' placeholder='Name' />
				<input type='email' placeholder='Email' />
				<input type='password' placeholder='Password' />
				<button className={`${styles['button']} ${styles['green']}`}>
					<span>Create account</span> <img src='svgs/right-long-arrow-black.svg' />
				</button>
				<div className={styles['or-container']}>
					<div className={styles['or-line']}></div>
					<span>or</span>
					<div className={styles['or-line']}></div>
				</div>
				<button className={`${styles['button']} ${styles['grey']}`}>
					<span>Sign in</span> <img src='svgs/right-long-arrow-black.svg' />
				</button>
			</div>
		</div>
	)
}
