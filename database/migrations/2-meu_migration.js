'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Produtos", deps: []
 *
 **/

var info = {
    "revision": 2,
    "name": "meu_migration",
    "created": "2022-07-19T02:10:54.939Z",
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
                "type": Sequelize.STRING,
                "field": "nome",
                "allowNull": false
            },
            "preco": {
                "type": Sequelize.DECIMAL,
                "field": "preco"
            },
            "categoria": {
                "type": Sequelize.STRING,
                "field": "categoria"
            },
            "descriçao": {
                "type": Sequelize.STRING,
                "field": "descriçao"
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
