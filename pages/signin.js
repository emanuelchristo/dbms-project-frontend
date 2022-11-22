import styles from 'components/signin/signin-page.module.css'

export default function SigninPage() {
	return (
		<div className={styles['container']}>
			<img className={styles['logo']} src='logo.svg' />
			<h1 className={styles['heading']}>
				Signin to your <br />
				account
			</h1>

			<div className={styles['form-wrapper']}>
				<input type='email' placeholder='Email' />
				<input type='password' placeholder='Password' />
				<button className={styles['button']}>
					<span>Signin</span> <img src='svgs/right-long-arrow-white.svg' />
				</button>
				<div className={styles['or-container']}>
					<div className={styles['or-line']}></div>
					<span>or</span>
					<div className={styles['or-line']}></div>
				</div>
				<button className={`${styles['button']} ${styles['grey']}`}>
					<span>Create account</span> <img src='svgs/right-long-arrow-black.svg' />
				</button>
			</div>
		</div>
	)
}
