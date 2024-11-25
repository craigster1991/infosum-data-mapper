import { createContext, useState } from 'react'

const DataContext = createContext<{
  // can be any[] due to customer data being dynamic
  customerData: any[],
  setCustomerData: (data: any[]) => void
  customerDataKeys: any[],
  setCustomerDataKeys: (data: any[]) => void
  mappingData: {
    [key: string]: {
      from: string,
      to: string,
      type: string
    }
  },
  setMappingData: (data: {}) => void
}>({
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