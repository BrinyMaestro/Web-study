const { DataTypes } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('users', { // sequelize.define('이름', {필드들});
        idx: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            allwNull: false,
            autoIncrement: true // 자동으로 번호가 1 증가하며 idx 매겨짐
        },
        userId: {
            type: DataTypes.STRING(250),
        },
    });
}

