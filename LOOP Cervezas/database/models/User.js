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
            }, 
            lastName: {
                type:DataTypes.STRING,
            }, 
            email: {
                type:DataTypes.STRING,
            },
            password:{
                type:DataTypes.STRING,
            },
            image: {
                type:DataTypes.STRING
            }
        },
        {
            tableName:"users",
            createdAt:"created_at",
            // updatedAt:"updated_at",
            timestamps:false
        }
    )

    User.associate = (models) => {
        User.belongsToMany(models.Product, {
            through:models.Cart,
            as:"ProductsInCart"
        })
    }

    return User
}