import { useContext, useState } from 'react'
import styles from './App.module.scss'
import { Heading } from './components/Heading/Heading'
import { Button } from './components/Button/Button';
import { DataMapper } from './components/DataMapper/DataMapper';
import DataContext from './contexts/dataContext';
import { fetchCSV, setUpInitialMappingData } from './utils/functions';

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
      <Heading />
      { step === 1 && <Button text="Upload CSV" onClick={UploadCSV} isLoading={isLoading} /> }
      { step === 2 && <DataMapper /> }
    </div>
  )
}

export default App
