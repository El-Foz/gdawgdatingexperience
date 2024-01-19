const { Sequelize, DataTypes, Model } = require("sequelize")

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './hottie.sqlite'
});

sequelize.authenticate()
console.log('Connection has been established successfully.');

const Gdawg=sequelize.define('Gdawg',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    pic: DataTypes.TEXT,
    name: DataTypes.TEXT,
    desc: DataTypes.TEXT,
    picdesc: {
        type: DataTypes.TEXT,
        default: "a gorgeous image of the gdawg"
    }
}, {
    tableName: "GDAWGS"
})
Gdawg.sync();

module.exports={Gdawg}