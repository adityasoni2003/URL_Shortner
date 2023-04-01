const {Model,DataTypes} = require("sequelize");
const sequelize = require("../config/db");
class Urls extends Model{};
Urls.init(
    {
        
        
        longURL:{
            type : DataTypes.STRING,
            
        
        },
        shortID:{
            type : DataTypes.STRING,
            
        }
    },{
        sequelize,
        modelName : "urls"
    }
)

module.exports = Urls ;