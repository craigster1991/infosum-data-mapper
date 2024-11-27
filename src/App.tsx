import { useContext, useState } from 'react'
import styles from './App.module.scss'
import { Nav } from './components/Nav/Nav'
import { Button } from './components/Button/Button';
import { DataMapper } from './components/DataMapper/DataMapper';
import DataContext from './contexts/dataContext';
import { fetchCSV, setUpInitialMappingData } from './utils/functions';
import { Summary } from './components/Summary/Summary';

function App() {

  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { setCustomerData, setCustomerDataKeys, setMappingData } = useContext(DataContext);

  const UploadCSV = () => {
    setIsLoading(true);

    // simulate loading, would fetch data from API
    setTimeout(() => {
      // get the data
      const csvData = fetchCSV()
      const csvDataKeys = Object.keys(csvData[0])
      
      // would check here for invalud data/keys etc before proceeding
      // set the data and dynamic keys
      setCustomerData(csvData)
      setCustomerDataKeys(csvDataKeys)
      setMappingData(setUpInitialMappingData(csvDataKeys))      

      setStep(2);
      setIsLoading(false);
    }, 2000);
  }

  return (
    <div className={styles.wrapper}>
      <Nav />
      <div className={styles.content}>
        {step === 1 && (
          <div className={styles.step}>
            <h1 className={styles.title}>Welcome to <span>SecureAlign.</span></h1>
            <h2 className={styles.subtitle}>Align your data with us and we'll guide you every step of the way.</h2>
            <p className={styles.instructions}>
              Upload a CSV file to get started. We will automatically map your data to our schema where possible. You can then choose your own mappings for any fields that need amendments or that an automatic match was not found for.
            </p>
            <Button className={styles.uploadButton} text="Upload CSV" onClick={UploadCSV} isLoading={isLoading} />
          </div>
        )}
        {step === 2 && (
          <div className={styles.step}>
            <h2 className={styles.subtitle}>Let's get started.</h2>
            <p className={styles.instructions}>Below you can see your data on the left, with each property in a separate card. You can cycle your content pages to ensure the data has successfully pulled through.</p>
            <p className={styles.instructions}>On the right you can see the what the auto map result is. Please amend as required by selecting any of the cards on the right hand side.</p>
            <p className={styles.instructions}>You can also search both property names from your data and your content to find what you need.</p>
            <hr />
            <DataMapper />
            <Summary />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
