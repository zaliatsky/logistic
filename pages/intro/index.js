import { useRouter } from 'next/router'
import styles from '../../front-end/styles/intro.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Intro = () => {
  const router = useRouter()

  const letsPlay = () => router.push('/game')

  return (
    <main className={styles.intro__holder}>
      <div className={styles.intro__wrapper}>
        <div className={styles.intro__text}>
          <p>
            This application is a simple(not for me T_T) simulator of the game
            where you are a big boss(or a manager) of hotel empire.
          </p>
          <p>You can buy, update your hotels and make it better and worth.</p>
          <p>
            UI is pretty easy and intuitive. Also some tooltips are available.
          </p>
          <p>So, let&apos;s start and enjoy!</p>
        </div>
        <button className={styles.intro__button} onClick={letsPlay}>
          Begin
          <FontAwesomeIcon
            className={styles.intro__buttonIcon}
            icon={faChevronRight}
            size="1x"
          />
        </button>
      </div>
    </main>
  )
}

export default Intro
