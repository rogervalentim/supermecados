'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Produtos", deps: []
 *
 **/

var info = {
    "revision": 4,
    "name": "meu_migration",
    "created": "2022-07-21T02:16:05.434Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "Produtos",
        {
            "id": {
                "type": Sequelize.BIGINT(10).UNSIGNED,
                "field": "id",
                "autoIncrement": true,
                "allowNull": false,
                "primaryKey": true
            },
            "nome": {
                "type": Sequelize.STRING(100),
                "field": "nome",
                "allowNull": false
            },
            "preco": {
                "type": Sequelize.INTEGER,
                "field": "preco",
                "allowNull": false
            },
            "categoria": {
                "type": Sequelize.STRING,
                "field": "categoria"
            },
            "descricao": {
                "type": Sequelize.STRING,
                "field": "descricao"
            },
            "created_at": {
                "type": Sequelize.DATE,
                "field": "created_at",
                "allowNull": false
            },
            "updated_at": {
                "type": Sequelize.DATE,
                "field": "updated_at",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
