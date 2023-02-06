import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ExpertProducts extends Model {
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
    },
    categoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'id'
      },
      field: 'category_id'
    },
    expertId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'expert_id'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    brief: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    faq: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rework: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    steps: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    clickupId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'clickup_id'
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deadline: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      field: 'status_id'
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "product_picture"
    }
  }, {
    sequelize,
    tableName: 'expert_products',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "expert_products_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
