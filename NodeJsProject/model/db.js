const Sequelize = require('sequelize')
const sequelize = new Sequelize('노신영', 'root', 'notch0609', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    timezone: '+09:00',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
        freezeTableName: true,
    }
})

let db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize
db.users = sequelize.import(__dirname + "/users.js")

module.exports = db