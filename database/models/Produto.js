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
    id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nome: {
      type: dataTypes.STRING,
      allowNull: false
    },
    preco: {
      type: dataTypes.DECIMAL,
  
    },
    categoria: {
      type: dataTypes.STRING,
    },
    descriçao:{
      type:dataTypes.STRING
    }
      
    }
  
  let config = {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false
  };
  const Produto = sequelize.define(alias, cols, config);

  return Produto;
};