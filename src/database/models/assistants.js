import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Assistants extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'first_name'
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
    workingStatus: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1,
      field: 'working_status'
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'last_name'
    },
    access: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'assistants',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "assistants_pk",
        unique: true,
        fields: [
          { name: "tg_id" },
        ]
      },
    ]
  });
  }
}
