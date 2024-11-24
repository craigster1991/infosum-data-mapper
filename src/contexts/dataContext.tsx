import { createContext, useState } from 'react'

const DataContext = createContext<{
  // can be any[] due to customer data being dynamic
  customerData: any[],
  setCustomerData: (data: any[]) => void
  customerDataKeys: any[],
  setCustomerDataKeys: (data: any[]) => void
}>({
  customerData: [],
  setCustomerData: () => {},
  customerDataKeys: [],
  setCustomerDataKeys: () => {}
})

const DataProvider = ({ children }: { children: React.ReactNode }) => {

    const [customerData, setCustomerDataState] = useState<any[]>([])
    const setCustomerData = (data: any[]) => setCustomerDataState(data)

    const [customerDataKeys, setCustomerDataStateKeys] = useState<any[]>([])
    const setCustomerDataKeys = (data: any[]) => setCustomerDataStateKeys(data)


    return (
        <DataContext.Provider value={{
          customerData,
          setCustomerData,
          customerDataKeys,
          setCustomerDataKeys
        }}>
          {children}
        </DataContext.Provider>
    )
}

export { DataProvider }
export default DataContext