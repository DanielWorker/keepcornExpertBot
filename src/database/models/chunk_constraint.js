import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ChunkConstraint extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    chunkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'chunk_id'
    },
    dimensionSliceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'dimension_slice_id'
    },
    constraintName: {
      type: "NAME",
      allowNull: false,
      field: 'constraint_name'
    },
    hypertableConstraintName: {
      type: "NAME",
      allowNull: true,
      field: 'hypertable_constraint_name'
    }
  }, {
    sequelize,
    tableName: 'chunk_constraint',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "chunk_constraint_chunk_id_constraint_name_key",
        unique: true,
        fields: [
          { name: "chunk_id" },
          { name: "constraint_name" },
        ]
      },
      {
        name: "chunk_constraint_dimension_slice_id_idx",
        fields: [
          { name: "dimension_slice_id" },
        ]
      },
    ]
  });
  }
}
