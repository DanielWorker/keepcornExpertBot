import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class TimerTypes extends Model {
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
    tableName: 'timer_types',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "timer_types_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
