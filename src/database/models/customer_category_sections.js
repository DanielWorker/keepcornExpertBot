import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CustomerCategorySections extends Model {
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
      references: {
        model: 'clients_profiles',
        key: 'user_id'
      },
      field: 'user_id'
    },
    sectionId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ca_category_sections',
        key: 'id'
      },
      field: 'section_id'
    }
  }, {
    sequelize,
    tableName: 'customer_category_sections',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customer_category_sections_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
