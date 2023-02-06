import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class AssistantsProfileTools extends Model {
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
    },
    sectionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'assistants_profile_tool_sections',
        key: 'id'
      },
      field: 'section_id'
    }
  }, {
    sequelize,
    tableName: 'assistants_profile_tools',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assistants_profile_tools_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
