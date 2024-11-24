import { useContext, useState } from 'react'
import styles from './DataMapper.module.scss'
import DataContext from '../../contexts/dataContext'

export const DataMapper = () => {

  const { customerData: customerData, customerDataKeys: customerDataKeys } = useContext(DataContext)
  const [ page, setPage ] = useState(1)

  const handlePageChange = (page: number) => {
    // can't go below 1 or above the number of pages
    setPage(page < 1 ? 1 : page > (customerData.length - 1) ? (customerData.length - 1) : page)
  }

  return (
    <div className={styles.columns}>
      <button onClick={() => handlePageChange(page - 1)}>previous page</button>
      <button onClick={() => handlePageChange(page + 1)}>next page</button>
      <div className={styles.column}>
        <h2>Your data</h2>
        {
          // if we have data and keys, map and render
          customerData[page] && customerDataKeys && customerDataKeys.map((key: string) => (
            <div key={key}>
              <span>{key}</span>
              <span>{customerData[page][key]}</span>
            </div>
          ))
        }
      </div>
      <div className={styles.column}>
        <h2>Mapped fields</h2>

      </div>
    </div>
  )
}