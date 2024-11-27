import Papa from 'papaparse';
import csv from './dummy_data';
import { CONSTANTS } from './constants';

export const fetchCSV = (): any[] => {
  // non prod csv data for testing
  const csvData = csv
  const parsed = Papa.parse<[]>(csvData, {
    header: true,
    dynamicTyping: true
  });
  return parsed.data.map((item) => {
    return {
      // id: index,
      ...item
    }
  })
};

const autoMapper = (inputKey: string): string => {
  ////////////////////////////
  // rough fuzzy matching!! //
  ////////////////////////////
  // fuzzy match the key to the global schema using regrx, trying with and without spaces
  const inputKeyNoSpaces = inputKey.replace(/\s/g, '');
  const match = CONSTANTS.GLOBAL_SCHEMA_KEYS?.find((key) => {
    const keyNoSpaces = key.replace(/\s/g, '');
    return keyNoSpaces.match(new RegExp(inputKeyNoSpaces, 'i')) ||
      inputKeyNoSpaces.match(new RegExp(keyNoSpaces, 'i'))
  })
  return match || ""
}

export const setUpInitialMappingData = (keys: string[]): {} => {
  const mappingData: { [key: string]: { from: string, to: string, type: string } } = {};
  keys.forEach((key) => {
    mappingData[key] = {
      from: key,
      to: autoMapper(key),
      type: CONSTANTS.CONVERT_TYPES.AUTO
    }
  })
  return mappingData
}