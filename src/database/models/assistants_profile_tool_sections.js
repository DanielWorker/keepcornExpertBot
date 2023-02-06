import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class AssistantsProfileToolSections extends Model {
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'assistants_profile_tool_sections',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assistants_profile_tool_sections_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
