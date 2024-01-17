const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './hottie.db'
});

sequelize.authenticate()
console.log('Connection has been established successfully.');

const Gdawg=sequelize.define("GDAWG", {
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

async ()=>{
    await sequelize.sync({alter:true}).then(()=>{
        console.log(Gdawg.findAll())
    })
}
module.exports={Gdawg}