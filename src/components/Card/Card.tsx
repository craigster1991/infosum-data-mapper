import { useContext } from 'react'
import { CONSTANTS } from '../../utils/constants'
import { handleMapChangeType } from '../../utils/types'
import styles from './Card.module.scss'
import DataContext from '../../contexts/dataContext'
import { Hint } from '../Hint/Hint'

type mapCardProps = {
  cardType: 'map',
}

type customerDataCardProps = {
  content: string,
  cardType: 'customerData',
}

type CardProps = {
  isDarkTheme?: boolean,
  keyName: string,
} & (mapCardProps | customerDataCardProps)

export const Card = (props: CardProps) => {

  const { mappingData, setMappingData } = useContext(DataContext)

  const handleMapChange: handleMapChangeType = (e, inputKey) => {
    setMappingData({
      ...mappingData,
      [inputKey]: {
        from: inputKey,
        to: e.target.value,
        type: CONSTANTS.CONVERT_TYPES.MANUAL
      }
    })
  }

  const { isDarkTheme, cardType, keyName } = props;

  // type guard for content because of using union types
  let content = '';
  if ('content' in props) content = props.content;

  return (
    <div className={`${styles.card} ${isDarkTheme ? styles.cardDark : ''}`}>
      {
        cardType === CONSTANTS.CARD_TYPES.CUSTOMER_DATA && (
          <>
            <span className={styles.title}>{keyName}</span>
            <span className={`${styles.content} ${!content && styles.isEmpty}`}>{
              (content?.length > 16 ? `${content?.slice(0, 15)}...` : content) || "-- empty --"
            }</span>
          </>
        )
      }
      {
        cardType === CONSTANTS.CARD_TYPES.MAP && mappingData[keyName] && (
          <>
            <div className={styles.title}>
              <span>Currently set to: </span>
              <span className={`${!mappingData[keyName].to && styles.isEmpty}`}>
                {mappingData[keyName].to || "no match found"}
              </span>
            </div>
            <select className={styles.choice} defaultValue={mappingData[keyName].to || "default"} onChange={(e) => handleMapChange(e, keyName)}>
              <option disabled value={"default"}>Please select...</option>
              {
                CONSTANTS.GLOBAL_SCHEMA_KEYS.map((mapKey) => (
                  <option key={mapKey} value={mapKey}>{mapKey}</option>
                ))
              }
            </select>
            { mappingData[keyName].to && <Hint type={mappingData[keyName].type} /> }
          </>
        )
      }
    </div>
  )
}

