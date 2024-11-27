import { useContext, useState } from 'react'
import styles from './DataMapper.module.scss'
import DataContext from '../../contexts/dataContext'
import { CONSTANTS } from '../../utils/constants'
import { Card } from '../Card/Card'
import { Button } from '../Button/Button'

export const DataMapper = () => {

  const { customerData: customerData, customerDataKeys: customerDataKeys } = useContext(DataContext)
  const [page, setPage] = useState(1)
  const [hasSeach, setHasSearch] = useState(false)
  const [searchValues, setSearchValues] = useState<string[]>([])

  const handlePageChange = (page: number) => {
    // can't go below 1 or above the number of pages
    setPage(page < 1 ? 1 : page > (customerData.length - 1) ? (customerData.length - 1) : page)
  }

  const search = (e: any) => {
    const searchValue = e.target.value.toLowerCase()
    setHasSearch(!!searchValue)
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
          <p className={`${styles.col} ${styles.colHeading}`}>
            Mapped Fields
            <Button isSmall text='Reset to auto' className={styles.autoButton} onClick={() => alert('Sorry this isn\'t implemented yet!')} />
          </p>
        </div>
        {
          // if we have data and keys, map and render
          customerData[page] && customerDataKeys && customerDataKeys
            .filter((key: string) => {
              // search filter
              if (!hasSeach) return true
              // if (searchValues.length) {
                return searchValues.includes(key)
              // }
              // return true
            })
            .map((key: string, index: number) => {
              const isDarkTheme = !!(index % 2)
              return (
                <div className={styles.row} key={key}>
                  <div className={styles.col}>
                    <Card
                      keyName={key}
                      cardType={CONSTANTS.CARD_TYPES.CUSTOMER_DATA}
                      content={customerData[page][key]}
                      isDarkTheme={isDarkTheme}
                    />
                  </div>
                  <div className={`${styles.col} ${styles.arrowCol}`}>
                    <span>⬇</span>
                  </div>
                  <div className={styles.col}>
                    {
                      <Card
                        cardType={CONSTANTS.CARD_TYPES.MAP}
                        keyName={key}
                        isDarkTheme={isDarkTheme}
                      />
                    }
                  </div>
                </div>
              )
            })
        }
      </div>

    </div>
  )
}