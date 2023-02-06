import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ExpertProductCases extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'expert_products',
        key: 'id'
      },
      field: 'product_id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    task: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    takeTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'take_time'
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    result: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    resultFile: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'result_file'
    }
  }, {
    sequelize,
    tableName: 'expert_product_cases',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "expert_product_cases_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
