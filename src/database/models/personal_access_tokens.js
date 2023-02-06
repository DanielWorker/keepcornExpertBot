import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class PersonalAccessTokens extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tokenableType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'tokenable_type'
    },
    tokenableId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'tokenable_id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "personal_access_tokens_token_unique"
    },
    abilities: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lastUsedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'last_used_at'
    }
  }, {
    sequelize,
    tableName: 'personal_access_tokens',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "personal_access_tokens_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "personal_access_tokens_token_unique",
        unique: true,
        fields: [
          { name: "token" },
        ]
      },
      {
        name: "personal_access_tokens_tokenable_type_tokenable_id_index",
        fields: [
          { name: "tokenable_type" },
          { name: "tokenable_id" },
        ]
      },
    ]
  });
  }
}
