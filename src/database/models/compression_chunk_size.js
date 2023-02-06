import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CompressionChunkSize extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    chunkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'chunk_id'
    },
    compressedChunkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'compressed_chunk_id'
    },
    uncompressedHeapSize: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'uncompressed_heap_size'
    },
    uncompressedToastSize: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'uncompressed_toast_size'
    },
    uncompressedIndexSize: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'uncompressed_index_size'
    },
    compressedHeapSize: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'compressed_heap_size'
    },
    compressedToastSize: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'compressed_toast_size'
    },
    compressedIndexSize: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'compressed_index_size'
    },
    numrowsPreCompression: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'numrows_pre_compression'
    },
    numrowsPostCompression: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'numrows_post_compression'
    }
  }, {
    sequelize,
    tableName: 'compression_chunk_size',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "compression_chunk_size_pkey",
        unique: true,
        fields: [
          { name: "chunk_id" },
          { name: "compressed_chunk_id" },
        ]
      },
    ]
  });
  }
}
