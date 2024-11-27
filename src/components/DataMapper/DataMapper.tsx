import { useContext, useState } from 'react'
import styles from './DataMapper.module.scss'
import DataContext from '../../contexts/dataContext'
import { CONSTANTS } from '../../utils/constants'
import { Card } from '../Card/Card'

export const DataMapper = () => {

  const { customerData: customerData, customerDataKeys: customerDataKeys, mappingData, setMappingData } = useContext(DataContext)
  const [page, setPage] = useState(1)
  const [searchValues, setSearchValues] = useState<string[]>([])

  const handlePageChange = (page: number) => {
    // can't go below 1 or above the number of pages
    setPage(page < 1 ? 1 : page > (customerData.length - 1) ? (customerData.length - 1) : page)
  }

  const handleMapChange = (e: any, inputKey: string) => {
    setMappingData({
      ...mappingData,
      [inputKey]: {
        from: inputKey,
        to: e.target.value,
        type: CONSTANTS.CONVERT_TYPES.MANUAL
      }
    })
  }

  const search = (e: any) => {
    const searchValue = e.target.value.toLowerCase()
    const searchResults = (customerDataKeys.filter((key) => {
      return key?.toLowerCase()?.includes(searchValue) || (String(customerData[page][key]))?.toLowerCase()?.includes(searchValue)
    }))
    setSearchValues(searchResults)
  }

  return (
    <div className={styles.wrapper}>
      {/* TODO // CREATE NAV COMPONENT */}
      <div className={styles.nav}>
        <div className={styles.pagination}>
          <button onClick={() => handlePageChange(page - 1)}>←</button>
          <span>Page {page} of {customerData.length - 1}</span>
          <button onClick={() => handlePageChange(page + 1)}>→</button>
        </div>
        <select className={styles.filters} onClick={() => alert("This is not implemented yet!")}>
          <option value="default">Filter by...</option>
        </select>
        <input className={styles.search} type="text" placeholder="Search..." onChange={search} />
      </div>

      <div className={styles.columns}>
          <div className={styles.row}>
            <p className={`${styles.col} ${styles.colHeading}`}>Your Data</p>
            <div className={`${styles.col} ${styles.arrowCol}`}></div>
            <p className={`${styles.col} ${styles.colHeading}`}>Mapped Fields</p>
          </div>
          {
            // if we have data and keys, map and render
            customerData[page] && customerDataKeys && customerDataKeys
            .filter((key: string) => {
              // search filter
              if (searchValues.length) {
                return searchValues.includes(key)
              }
              return true
            })
            .map((key: string, index: number) => (
              <div className={styles.row} key={key}>
                <div className={styles.col}>
                  <Card keyName={key} content={customerData[page][key]} isDarkTheme={!!(index % 2)} />
                </div>
                <div className={`${styles.col} ${styles.arrowCol}`}>
                  <span>⮕</span>
                </div>
                <div className={styles.col}>
                  {/* TODO // USE CARD COMPONENT */}
                  {
                    mappingData[key] && (
                      <>
                        <div>map to: {mappingData[key].to}</div>
                        <select defaultValue={mappingData[key].to || "default"} onChange={(e) => handleMapChange(e, key)}>
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
              </div>
            ))
          }
      </div>

    </div>
  )
}