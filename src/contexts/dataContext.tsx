import { createContext, useState } from 'react'
import { mappingDataType } from '../utils/types'

type dataContextType = {
  // can be any[] due to customer data being dynamic
  customerData: any[],
  setCustomerData: (data: any[]) => void
  customerDataKeys: any[],
  setCustomerDataKeys: (data: any[]) => void
  mappingData: mappingDataType,
  setMappingData: (data: {}) => void
}

const DataContext = createContext<dataContextType>({
  customerData: [],
  setCustomerData: () => {},
  customerDataKeys: [],
  setCustomerDataKeys: () => {},
  mappingData: {},
  setMappingData: () => {}
})

const DataProvider = ({ children }: { children: React.ReactNode }) => {

    const [customerData, setCustomerDataState] = useState<any[]>([])
    const setCustomerData = (data: any[]) => setCustomerDataState(data)

    const [customerDataKeys, setCustomerDataStateKeys] = useState<any[]>([])
    const setCustomerDataKeys = (data: any[]) => setCustomerDataStateKeys(data)

    const [mappingData, setMappingDataState] = useState<{}>({
      
    })
    const setMappingData = (data: {}) => setMappingDataState(data)


    return (
        <DataContext.Provider value={{
          customerData,
          setCustomerData,
          customerDataKeys,
          setCustomerDataKeys,
          mappingData,
          setMappingData
        }}>
          {children}
        </DataContext.Provider>
    )
}

export { DataProvider }
export default DataContext