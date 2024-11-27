import { CONSTANTS } from '../../utils/constants'
import styles from './Hint.module.scss'

type HintProps = {
  type: "auto" | "manual",
  className?: string
}

export const Hint = ({ type, className }: HintProps) => {
  return (
    <div className={`${styles.hint} ${className} ${CONSTANTS.CONVERT_TYPES.AUTO && styles.auto}`}>
      <p>{type === CONSTANTS.CONVERT_TYPES.AUTO ? "automagic!" : "manual."}</p>
    </div>
  )
}

