import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class TaskManagerSections extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    caId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'customers_assistants',
        key: 'id'
      },
      field: 'ca_id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    position: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'task_manager_sections',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "task_manager_sections_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
