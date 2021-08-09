import styles from '../../styles/helpers/auth.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Button = ({
  wrapperClass,
  btnClass,
  btnType,
  hasArrow,
  text,
  onClick,
  disabled,
}) => {
  return (
    <div className={wrapperClass} onClick={onClick}>
      <div className={styles.auth__formBtnBg} />
      <button type={btnType} className={btnClass} {...disabled}>
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
