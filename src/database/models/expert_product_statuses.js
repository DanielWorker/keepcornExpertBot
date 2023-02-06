import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ExpertProductStatuses extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'expert_product_statuses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "expert_product_statuses_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "expert_product_statuses_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
