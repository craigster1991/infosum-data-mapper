import { useContext, useState } from 'react'
import styles from './DataMapper.module.scss'
import DataContext from '../../contexts/dataContext'

export const DataMapper = () => {

  const { customerData: customerData, customerDataKeys: customerDataKeys } = useContext(DataContext)
  const [page, setPage] = useState(1)

  const handlePageChange = (page: number) => {
    // can't go below 1 or above the number of pages
    setPage(page < 1 ? 1 : page > (customerData.length - 1) ? (customerData.length - 1) : page)
  }

  return (
    <>
      {/* TODO // CREATE NAV COMPONENT */}
      <div className={styles.nav}>
        <input type="text" placeholder="search" />
        <button onClick={() => handlePageChange(page - 1)}>previous page</button>
        <button onClick={() => handlePageChange(page + 1)}>next page</button>
      </div>

      <div className={styles.columns}>
          <div className={styles.row}>
            <h2 className={styles.col}>Your Data</h2>
            <div className={`${styles.col} ${styles.arrowCol}`}></div>
            <h2 className={styles.col}>Mapped Fields</h2>
          </div>
          {
            // if we have data and keys, map and render
            customerData[page] && customerDataKeys && customerDataKeys.map((key: string) => (
              <div className={styles.row} key={key}>
                <div className={styles.col}>
                  {/* TODO // CREATE CARD COMPONENT */}
                  <div className={styles.card} key={key}>
                    <span>{key}</span>
                    <span>{customerData[page][key] || "\u00A0"}</span>
                  </div>
                </div>
                <div className={`${styles.col} ${styles.arrowCol}`}>{'➡️'}</div>
                <div className={styles.col}>
                  {/* TODO // USE CARD COMPONENT */}
                  merge
                </div>
              </div>
            ))
          }
      </div>

    </>
  )
}