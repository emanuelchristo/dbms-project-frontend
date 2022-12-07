import Navbar from 'components/common/Navbar'
import styles from 'components/feedback/feedback-page.module.css'
import { FaCommentDots } from 'react-icons/md'

export default function FeedbackPage() 
{
    return(
      <>
        <Navbar />
        <div className={styles['feedback']}>
          <div className={styles['feedback1']}>
            Please Give Us
          </div>
          <div className={styles['feedback2']}>
            Your Valuable
          </div>
          <div className={styles['feedback3']}>
            Feedback 
          </div>
        </div>
        <div className={styles['message']}>
          <textarea className={styles['input']}></textarea>
        </div>

      <div className={styles['button']}>
        <button type="button" className={styles['button-click']}>
          <span>Sumbit</span>
        </button>
      </div>
      </>
    )
}
