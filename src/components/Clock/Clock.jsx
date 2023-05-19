import styles from './Clock.module.css'
import { getTime } from '../../utils/getTime'

const Clock = ({ time }) => {
  return <span className={styles.clock}>{getTime(time)}</span>
}

export default Clock
