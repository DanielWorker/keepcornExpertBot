import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Hypertable extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    schemaName: {
      type: "NAME",
      allowNull: false,
      field: 'schema_name'
    },
    tableName: {
      type: "NAME",
      allowNull: false,
      field: 'table_name'
    },
    associatedSchemaName: {
      type: "NAME",
      allowNull: false,
      field: 'associated_schema_name'
    },
    associatedTablePrefix: {
      type: "NAME",
      allowNull: false,
      field: 'associated_table_prefix'
    },
    numDimensions: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'num_dimensions'
    },
    chunkSizingFuncSchema: {
      type: "NAME",
      allowNull: false,
      field: 'chunk_sizing_func_schema'
    },
    chunkSizingFuncName: {
      type: "NAME",
      allowNull: false,
      field: 'chunk_sizing_func_name'
    },
    chunkTargetSize: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'chunk_target_size'
    },
    compressionState: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      field: 'compression_state'
    },
    compressedHypertableId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'compressed_hypertable_id'
    },
    replicationFactor: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'replication_factor'
    }
  }, {
    sequelize,
    tableName: 'hypertable',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "hypertable_associated_schema_name_associated_table_prefix_key",
        unique: true,
        fields: [
          { name: "associated_schema_name" },
          { name: "associated_table_prefix" },
        ]
      },
      {
        name: "hypertable_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "hypertable_table_name_schema_name_key",
        unique: true,
        fields: [
          { name: "table_name" },
          { name: "schema_name" },
        ]
      },
    ]
  });
  }
}
