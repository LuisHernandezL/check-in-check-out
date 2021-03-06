const {db,DataTypes} = require('../utils/database.util');

//Create the model
const Record = db.define('record',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false
    },
    entranceTime:{
        type:DataTypes.DATE,
        allowNull:false
    },
    exitTime:{
        type:DataTypes.DATE,
        allowNull:true
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'working'
    }
});

module.exports = { Record };
