export type mappingDataType = {
  [key: string]: {
    from: string,
    to: string,
    type: "auto" | "manual"
  }
}
export type handleMapChangeType = (e: any, inputKey: string) => void