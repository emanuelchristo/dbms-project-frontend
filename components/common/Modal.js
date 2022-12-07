import styles from './modal.module.css'

export default function Modal({ show, children }) {
	if (show) return <div className={styles['modal']}>{children}</div>
}
