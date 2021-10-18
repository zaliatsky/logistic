import styles from '../../styles/helpers/auth.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Button = ({
  wrapperClass,
  btnClass,
  hasArrow,
  text,
  onClick,
  ...rest
}) => (
  <div className={wrapperClass} onClick={onClick}>
    <div className={styles.auth__formBtnBg} />
    <button className={btnClass} {...rest}>
      {text}
      {hasArrow && (
        <FontAwesomeIcon
          className={styles.auth__formBtnIcon}
          icon={faArrowRight}
          size="1x"
        />
      )}
    </button>
  </div>
)

export default Button
