import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Timers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'user_id'
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    typeId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'timer_types',
        key: 'id'
      },
      field: 'type_id'
    },
    messageId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'message_id'
    }
  }, {
    sequelize,
    tableName: 'timers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "timers_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "timers_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
