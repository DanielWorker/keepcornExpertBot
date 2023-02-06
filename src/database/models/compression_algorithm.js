import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CompressionAlgorithm extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    version: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    name: {
      type: "NAME",
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'compression_algorithm',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "compression_algorithm_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
