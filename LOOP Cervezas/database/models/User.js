module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            // release_date: { type:DataTypes.DATE },
            // end_date: { type:DataTypes.DATE },
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            firstName: {
                type:DataTypes.STRING,
                allowNull:false
            }, 
            lastName: {
                type:DataTypes.STRING,
                allowNull:false
            }, 
            email: {
                type:DataTypes.STRING,
                allowNull:false
            },
            password:{
                type:DataTypes.STRING,
                allowNull:false
            },
            image: {
                type:DataTypes.STRING
            }
        },
        {
            tableName:"users",
            // createdAt:"created_at",
            // updatedAt:"updated_at",
            timestamps:false
        }
    )

    /* Product.associate = (db) => {
        
    } */

    return User
}