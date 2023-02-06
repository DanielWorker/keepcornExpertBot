import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ClientsProfiles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'clients',
        key: 'tg_id'
      },
      field: 'user_id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    taskListVoice: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'task_list_voice'
    },
    businessName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'business_name'
    },
    businessDesc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'business_desc'
    },
    businessArea: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'business_area'
    },
    businessPosition: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'business_position'
    },
    isFilled: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      field: 'is_filled'
    },
    agreement: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'last_name'
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    timezone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bioVideoNote: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'bio_video_note'
    },
    bioVoice: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'bio_voice'
    },
    bioText: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'bio_text'
    }
  }, {
    sequelize,
    tableName: 'clients_profiles',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "clients_profiles_pk",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "clients_profiles_userid_uindex",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
