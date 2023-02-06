import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Files extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'files',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "files_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
