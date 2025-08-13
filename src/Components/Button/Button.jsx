import {MdMessage} from 'react-icons/md'
import styles from "./Button.module.css"
const Button = ({isOutLine, icon, text, ...rest}) => {
  return (
    <button {...rest} className={isOutLine ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button