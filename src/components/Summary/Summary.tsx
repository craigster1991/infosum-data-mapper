import { useContext } from 'react';
import styles from './Summary.module.scss'
import DataContext from '../../contexts/dataContext';
import { CONSTANTS } from '../../utils/constants';

export const Summary = () => {

  const { mappingData } = useContext(DataContext);

  const mappingsCompleteCount = Object.keys(mappingData).filter((key) => mappingData[key].to !== '').length
  const totalMappings = Object.keys(mappingData).length
  const autoMappingCount = Object.keys(mappingData).filter((key) => {
    return (mappingData[key].type === CONSTANTS.CONVERT_TYPES.AUTO) && mappingData[key].to !== ''
  }).length
  const manualMappingCount = Object.keys(mappingData).filter((key) => mappingData[key].type === CONSTANTS.CONVERT_TYPES.MANUAL).length

  return (
    <div className={styles.summary}>
      <div className={styles.content}>
        <p>
          You've completed {mappingsCompleteCount} of {totalMappings} mappings!
        </p>
        <p>
          {autoMappingCount} Automatically and {manualMappingCount} Manually.
        </p>
      </div>
    </div>
  )
}

