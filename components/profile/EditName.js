import { useEffect, useState } from 'react'

import styles from './edit-name.module.css'

export default function EditName({ name: nameProp, onCancel, onSave }) {
	const [name, setName] = useState('')

	useEffect(() => {
		setName(nameProp)
	}, [nameProp])

	return (
		<div className={styles['edit-name']}>
			<h3 className={styles['heading']}>Edit name</h3>

			<input
				type='text'
				placeholder='Enter your name'
				value={name}
				onChange={(e) => setName(e.target.value)}
				className={styles['name-input']}
			/>

			<div className='flex items-center gap-[8px] mt-[12px]'>
				<button className='outline w-full' onClick={onCancel}>
					Cancel
				</button>
				<button className='primary w-full' onClick={() => onSave(name)}>
					Save
				</button>
			</div>
		</div>
	)
}
