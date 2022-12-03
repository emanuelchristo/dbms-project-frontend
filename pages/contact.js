import Navbar from 'components/common/Navbar'
import { MdPhone } from 'react-icons/md'
import { MdOutlineMail } from 'react-icons/md'

import styles from 'components/contact/contact-page.module.css'

export default function ContactPage() {
	return (
		<>
			<Navbar />
			<>
				<div className={styles['contact-info']}>
					<div className={styles['info']}>For more Information</div>
					<div className={styles['phone']}>
						<MdPhone className={styles['phone-icon']}/>Phone -8746274302
					</div>
					<div className={styles['email']}>
          <MdOutlineMail className={styles['email-icon']}/> Email ID - letsgo@gmail.com
          </div>
				</div>
			</>
      <div className={styles['contact-us']}>
        Contact us
      </div>
      <div className={styles['details']}>
        <form>
          <div className={styles['name']}>
            First Name <input type="text" className={styles['input']}></input>
          </div>
          <div className={styles['name']}>
            Last Name <input type="text" className={styles['input']}></input>
          </div>
          <div className={styles['name']}>
            Contact Number <input type="text" className={styles['input']}></input>
          </div>
          <div className={styles['name']}>
            Message <input type="text" className={styles['input']}></input>
          </div>
        </form>
      </div>

      <div className={styles['button']}>
        <button type="button" className={styles['button-click']}>
          <span>Send</span>
        </button>
      </div>
		</>
	)
}
