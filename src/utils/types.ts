export type mappingDataType = {
  [key: string]: {
    from: string,
    to: string,
    type: string
  }
}
export type handleMapChangeType = (e: any, inputKey: string) => void