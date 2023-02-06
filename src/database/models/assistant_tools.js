import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class AssistantTools extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'assistants_profiles',
        key: 'tg_id'
      },
      field: 'user_id'
    },
    toolId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'assistants_profile_tools',
        key: 'id'
      },
      field: 'tool_id'
    }
  }, {
    sequelize,
    tableName: 'assistant_tools',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assistant_tools_pk",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "tool_id" },
        ]
      },
    ]
  });
  }
}
