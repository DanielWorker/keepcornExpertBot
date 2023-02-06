import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Clients extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'last_name'
    },
    tgUsername: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'tg_username'
    },
    tgId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'tg_id'
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    assistantId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'assistant_id'
    },
    workingStatus: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1,
      field: 'working_status'
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'client_assistant_statuses',
        key: 'id'
      },
      field: 'status_id'
    }
  }, {
    sequelize,
    tableName: 'clients',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "clients_pk",
        unique: true,
        fields: [
          { name: "tg_id" },
        ]
      },
    ]
  });
  }
}
