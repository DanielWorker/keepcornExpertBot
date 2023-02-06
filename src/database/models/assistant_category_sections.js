import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class AssistantCategorySections extends Model {
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
    sectionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ca_category_sections',
        key: 'id'
      },
      field: 'section_id'
    }
  }, {
    sequelize,
    tableName: 'assistant_category_sections',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assistant_category_sections_pk",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "section_id" },
        ]
      },
    ]
  });
  }
}
