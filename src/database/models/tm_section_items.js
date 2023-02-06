import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class TmSectionItems extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tmSectionId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'task_manager_sections',
        key: 'id'
      },
      field: 'tm_section_id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    solution: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deadline: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isActive: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      field: 'is_active'
    }
  }, {
    sequelize,
    tableName: 'tm_section_items',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "tm_section_items_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
