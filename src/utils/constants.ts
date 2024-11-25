import global_schema from '../../globalSchema.json';

export const CONSTANTS = {
  CONVERT_TYPES: {
    AUTO: 'auto',
    MANUAL: 'manual'
  },
  GLOBAL_SCHEMA_KEYS: global_schema.global_schema_keys.map((schema) => schema?.name?.toLowerCase())
}