import { createContext, useState } from 'react'

const DataContext = createContext<{
  // can be any[] due to customer data being dynamic
  customerDataState: any[],
  setCustomerData: (data: any[]) => void
  customerDataKeysState: any[],
  setCustomerDataKeys: (data: any[]) => void
}>({
  customerDataState: [],
  setCustomerData: () => {},
  customerDataKeysState: [],
  setCustomerDataKeys: () => {}
})

const DataProvider = ({ children }: { children: React.ReactNode }) => {

    const [customerDataState, setCustomerDataState] = useState<any[]>([])
    const setCustomerData = (data: any[]) => setCustomerDataState(data)

    const [customerDataKeysState, setCustomerDataKeysState] = useState<any[]>([])
    const setCustomerDataKeys = (data: any[]) => setCustomerDataKeysState(data)


    return (
        <DataContext.Provider value={{
          customerDataState,
          setCustomerData,
          customerDataKeysState,
          setCustomerDataKeys
        }}>
          {children}
        </DataContext.Provider>
    )
}

export { DataProvider }
export default DataContext