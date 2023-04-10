module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define(
        "Cart",
        {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            user_id: {
                type:DataTypes.INTEGER,
            },
            product_id: {
                type:DataTypes.INTEGER,
            },
            quantity: {
                type:DataTypes.INTEGER,
            }
        },
        {
            tableName:"cart",
            timestamps:false
        }
    )

    return Cart
}