import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useGlobalContext } from 'lib/global-context'
import { useRouter } from 'next/router'

import Link from 'next/link'

import styles from 'components/signin/signin-page.module.css'

export default function SigninPage() {
	const router = useRouter()
	const { signIn, getUser } = useGlobalContext()

	const [form, setForm] = useState({ email: '', password: '' })

	useEffect(() => {
		getUser()
			.then((user) => {
				if (user) router.push('/')
			})
			.catch(console.error)
	}, [])

	function handleFormChange(e) {
		setForm((curr) => {
			return { ...curr, [e.target.name]: e.target.value }
		})
	}

	function handleSignin(e) {
		e.preventDefault()
		toast
			.promise(signIn({ email: form.email, password: form.password }), {
				pending: 'Signing in ...',
				error: 'Failed to sign in',
				success: 'Signed in',
			})
			.then(() => router.push('/'))
			.catch(console.error)
	}

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
				<form onSubmit={handleSignin} className={styles['form-wrapper']}>
					<input
						type='email'
						placeholder='Email'
						required
						name='email'
						value={form.email}
						onChange={handleFormChange}
					/>
					<input
						type='password'
						placeholder='Password'
						required
						name='password'
						value={form.password}
						onChange={handleFormChange}
					/>
					<button className={styles['button']} type='submit'>
						<span>Sign in</span> <img src='svgs/right-long-arrow-white.svg' />
					</button>
				</form>
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
