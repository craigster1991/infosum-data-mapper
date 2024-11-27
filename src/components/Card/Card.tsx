import { useContext } from 'react'
import { CONSTANTS } from '../../utils/constants'
import { handleMapChangeType } from '../../utils/types'
import styles from './Card.module.scss'
import DataContext from '../../contexts/dataContext'

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
  cardType: 'map' | 'customerData',
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

  let content = '';
  // type guard for content
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
        cardType === CONSTANTS.CARD_TYPES.MAP && (
          <>
            <div>map to: {mappingData[keyName].to}</div>
            <select defaultValue={mappingData[keyName].to || "default"} onChange={(e) => handleMapChange(e, keyName)}>
              <option disabled value={"default"}>Please select...</option>
              {
                CONSTANTS.GLOBAL_SCHEMA_KEYS.map((mapKey) => (
                  <option key={mapKey} value={mapKey}>{mapKey}</option>
                ))
              }
            </select>
          </>
        )
      }
    </div>
  )
}

