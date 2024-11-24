import Papa from 'papaparse';
import csv from './dummy_data';

export const fetchCSV = (): any[] => {
  // non prod csv data for testing
  const csvData = csv
  const parsed = Papa.parse<[]>(csvData, {
    header: true,
    dynamicTyping: true
  });
  return parsed.data.map((item, index) => {
    return {
      id: index,
      ...item
    }
  })
};