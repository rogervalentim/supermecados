module.exports = (sequelize, dataTypes) => {
    let alias = 'Produto';
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
      preco: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      categoria: {
        type: dataTypes.STRING,
    
      },
      descricao:{
        type:dataTypes.STRING
      }
    };
    let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
    };
    const Produto = sequelize.define(alias, cols, config);
  
    return Produto;
  };