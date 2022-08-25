module.exports = (sequelize, dataTypes) => {
    const Carrinho = sequelize.define(
      "Carrinho",
      {
        id_carrinho: {
          type: dataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          
        },
        fk_produto:{
          type: dataTypes.BIGINT(10).UNSIGNED
        },
      
        nome: {
          type: dataTypes.STRING(100),
          allowNull: false
        },
        preco: {
            type: dataTypes.DECIMAL,
            allowNull: false
          },
        quantidade: {
            type: dataTypes.DECIMAL,
            allowNull: false
          },
          imagem: {
            type: dataTypes.STRING
          },
      },{
        tableName: "carrinho",
        timestamps: false
      }
    );

    Carrinho.associate = (models) => {
      Carrinho.belongsTo(models.Produto, {
        as: 'produtos',
        foreignKey: 'fk_produto',
        timestamps: false
      })
    }
  
  
  
    return Carrinho;
  };