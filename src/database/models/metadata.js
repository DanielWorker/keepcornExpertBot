import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Metadata extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    key: {
      type: "NAME",
      allowNull: false
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    includeInTelemetry: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'include_in_telemetry'
    }
  }, {
    sequelize,
    tableName: 'metadata',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "metadata_pkey",
        unique: true,
        fields: [
          { name: "key" },
        ]
      },
    ]
  });
  }
}
