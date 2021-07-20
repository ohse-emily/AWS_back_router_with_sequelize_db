module.exports =(sequelize, DataTypes)=>{
    const Comment = sequelize.define('Comment',{
        userid:{
            type:DataTypes.STRING(30),
            allowNull:false,
        },
        content:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        date:{
            type:DataTypes.DATE,
        },
    },{
        charset:'utf8mb4', // mb4 -> 이모지 가능
        collate:'utf8mb4_general_ci'
    })

    return Comment
}