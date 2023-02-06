import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Tablespace extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hypertableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'hypertable_id'
    },
    tablespaceName: {
      type: "NAME",
      allowNull: false,
      field: 'tablespace_name'
    }
  }, {
    sequelize,
    tableName: 'tablespace',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "tablespace_hypertable_id_tablespace_name_key",
        unique: true,
        fields: [
          { name: "hypertable_id" },
          { name: "tablespace_name" },
        ]
      },
      {
        name: "tablespace_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
