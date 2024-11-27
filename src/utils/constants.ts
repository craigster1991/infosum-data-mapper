import global_schema from '../../globalSchema.json';

export const CONSTANTS = {
  CONVERT_TYPES: {
    AUTO: 'auto' as 'auto',
    MANUAL: 'manual' as 'manual',
  },
  GLOBAL_SCHEMA_KEYS: global_schema.global_schema_keys.map((schema) => schema?.name?.toLowerCase()),
  CARD_TYPES: {
    MAP: 'map' as 'map',
    CUSTOMER_DATA: 'customerData' as 'customerData',
  }
}
