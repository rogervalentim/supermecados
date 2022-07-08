module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
    let cols = {
      id: {
        type: dataTypes.BIGINT(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      nome: {
        type: dataTypes.STRING(100),
        allowNull: false
      },
      email: {
        type: dataTypes.STRING(15),
        allowNull: false
      },
      ativo: {
        type: dataTypes.BOOLEAN,
        allowNull: false
      }
    };
    let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
    };
    const Categoria = sequelize.define(alias, cols, config);
  
    return Categoria;
  };