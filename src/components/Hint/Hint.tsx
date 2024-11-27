import { CONSTANTS } from '../../utils/constants'
import styles from './Hint.module.scss'

type HintProps = {
  type: "auto" | "manual",
  className?: string
}

export const Hint = ({ type, className }: HintProps) => {
  const theme = type === CONSTANTS.CONVERT_TYPES.AUTO ? styles.auto : styles.manual
  return (
    <div className={`${styles.hint} ${className} ${theme}`}>
      <p>{type === CONSTANTS.CONVERT_TYPES.AUTO ? "automatically selected!" : "manually selected"}</p>
    </div>
  )
}

