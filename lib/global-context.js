import { useEffect, useState, useContext, createContext } from 'react'
import { useRouter } from 'next/router'
import { generateAvatar } from 'lib/utils/generate-avatar'
import axios from 'axios'

const GlobalContext = createContext()

export function GlobalContextWrapper({ children }) {
	const router = useRouter()

	const [user, setUser] = useState(null)
	const [authToken, setAuthToken] = useState(null)

	useEffect(() => {
		let authToken = localStorage.getItem('authToken')
		if (authToken) setAuthenticatedUser(authToken).catch(console.error)
	}, [])

	function setAuthenticatedUser(authToken) {
		return new Promise(async (resolve, reject) => {
			try {
				if (!authToken) throw new Error('Auth token not provided')

				const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get-user`, {
					headers: {
						Authorization: authToken,
					},
				})

				const tempUser = {
					...data,
					imageUrl: generateAvatar(data.email),
				}

				setUser(tempUser)
				setAuthToken(authToken)
				localStorage.setItem('authToken', authToken)
				resolve(tempUser)
			} catch (err) {
				setUser(null)
				console.error(err)
				reject(new Error('Failed to set authenticated user'))
			}
		})
	}

	function getUser(refresh = false) {
		return new Promise(async (resolve, reject) => {
			try {
				if (user && !refresh) {
					resolve(user)
				} else {
					let authToken = localStorage.getItem('authToken')
					if (authToken) resolve(setAuthenticatedUser(authToken).catch(console.error))
					else resolve(null)
				}
			} catch (err) {
				console.error(err)
				reject(new Error('Failed to fetch user'))
			}
		})
	}

	function signIn({ email, password }) {
		return new Promise(async (resolve, reject) => {
			try {
				const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sign-in`, {
					email,
					password,
				})
				console.log(data)
				setAuthenticatedUser(data?.authToken)
				resolve()
			} catch (err) {
				console.error(err)
				reject(new Error('Failed to sign in'))
			}
		})
	}

	function signUp({ name, email, password }) {
		return new Promise(async (resolve, reject) => {
			try {
				const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sign-up`, {
					name,
					email,
					password,
				})
				await setAuthenticatedUser(data.authToken)
				resolve()
			} catch (err) {
				console.error(err)
				reject(new Error('Failed to sign up'))
			}
		})
	}

	function signOut() {
		setUser(null)
		setAuthToken(null)
		localStorage.removeItem('authToken')
		if (router.pathname != '/') router.push('/')
		else router.reload()
	}

	return (
		<GlobalContext.Provider
			value={{
				user,
				authToken,
				getUser,
				signIn,
				signUp,
				signOut,
				setAuthenticatedUser,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export function useGlobalContext() {
	return useContext(GlobalContext)
}
