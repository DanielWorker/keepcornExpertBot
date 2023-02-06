import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Statuses extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'statuses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "statuses_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "statuses_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
