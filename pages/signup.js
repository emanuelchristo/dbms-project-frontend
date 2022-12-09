import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { useGlobalContext } from 'lib/global-context'

import Link from 'next/link'

import styles from 'components/signin/signin-page.module.css'

export default function SignupPage() {
	const router = useRouter()
	const { getUser, signUp } = useGlobalContext()
	const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })

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

	function handleCreateAccount(e) {
		e.preventDefault()

		if (form.password.length < 6) {
			toast.error('Weak password')
			return
		}

		if (form.password !== form.confirmPassword) {
			toast.error("Passwords doesn't match")
			return
		}

		toast
			.promise(signUp({ name: form.name, email: form.email, password: form.password }), {
				pending: 'Signing up ...',
				error: 'Failed to signup',
				success: 'Signed up',
			})
			.then(() => {
				router.push('/')
			})
			.catch((err) => console.error(err))
	}

	return (
		<div className={styles['container']}>
			<Link href='/'>
				<img className={styles['logo']} src='logo.svg' />
			</Link>
			<h1 className={styles['heading']}>
				Create a new <br />
				account
			</h1>

			<div className={styles['form-wrapper']}>
				<form onSubmit={handleCreateAccount} className={styles['form-wrapper']}>
					<input
						type='text'
						placeholder='Name'
						name='name'
						value={form.name}
						onChange={handleFormChange}
						required
					/>
					<input
						type='email'
						placeholder='Email'
						name='email'
						value={form.email}
						onChange={handleFormChange}
						required
					/>
					<input
						type='password'
						placeholder='Password'
						name='password'
						value={form.password}
						onChange={handleFormChange}
						required
					/>
					<input
						type='password'
						placeholder='Confirm password'
						name='confirmPassword'
						value={form.confirmPassword}
						onChange={handleFormChange}
						required
					/>
					<button type='submit' className={`${styles['button']} ${styles['green']}`}>
						<span>Create account</span> <img src='svgs/right-long-arrow-black.svg' />
					</button>
				</form>
				<div className={styles['or-container']}>
					<div className={styles['or-line']}></div>
					<span>or</span>
					<div className={styles['or-line']}></div>
				</div>
				<Link href='/signin'>
					<button className={`${styles['button']} ${styles['grey']}`}>
						<span>Sign in</span> <img src='svgs/right-long-arrow-black.svg' />
					</button>
				</Link>
			</div>
		</div>
	)
}
