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
      },
      //slug:{
        //type:dataTypes.STRING
      
    };
    //Criar um campo de slug para os produtos
   // O campo slug deve ser o nome do produto, mas ajustado para caber na url
    //* Criar campo de imagem no banco
    //Quando salvar algum produto, cadastrar uma URL padrao de imagem, para não ficar sem imagem
    
    let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
    };
    const Produto = sequelize.define(alias, cols, config);
  
    return Produto;
  };