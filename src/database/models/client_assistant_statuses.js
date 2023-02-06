import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ClientAssistantStatuses extends Model {
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
    tableName: 'client_assistant_statuses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "client_assistant_statuses_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
