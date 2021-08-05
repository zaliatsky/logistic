import styles from '../../styles/auth.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Button = ({
  wrapperClass,
  btnClass,
  btnType,
  hasArrow,
  text,
  onClick,
}) => {
  return (
    <div className={wrapperClass} onClick={onClick}>
      <div className={styles.auth__formBtnBg} />
      <button type={btnType} className={btnClass}>
        {text}
        {hasArrow && (
          <FontAwesomeIcon
            className={styles.auth__formBtnIcon}
            icon={faArrowRight}
            size={'1x'}
          />
        )}
      </button>
    </div>
  )
}

export default Button
