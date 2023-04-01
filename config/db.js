const {Sequelize} = require("sequelize");
const createDB = new Sequelize("URLs" , "aditya", "1221" , {
    dialect : 'sqlite',
    host:'./config/db.sqlite'
    
})

module.exports = createDB ;