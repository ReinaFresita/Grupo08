module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        "Product",
        {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            name: { type:DataTypes.STRING }, 
            description: { type:DataTypes.STRING },
            price: { type:DataTypes.NUMBER },
            image: { type:DataTypes.STRING }
        },
        {
            tableName:"products",
            createdAt:"created_at",
            timestamps:false
        }
    )
    
    return Product
}