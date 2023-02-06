import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class AssistantsProfiles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tgId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'assistants',
        key: 'tg_id'
      },
      field: 'tg_id'
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
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
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    timezone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'last_name'
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
    tableName: 'assistants_profiles',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "assistants_profiles_pk",
        unique: true,
        fields: [
          { name: "tg_id" },
        ]
      },
      {
        name: "assistants_profiles_tg_id_uindex",
        unique: true,
        fields: [
          { name: "tg_id" },
        ]
      },
    ]
  });
  }
}
