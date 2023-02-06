import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CustomerProfileTasks extends Model {
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deadline: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customer_profile_tasks',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customer_profile_tasks_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
