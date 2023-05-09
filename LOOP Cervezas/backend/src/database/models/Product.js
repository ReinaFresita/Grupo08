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
            /* ,
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
            } */
            /* ,
            category_id: { 
                type: DataTypes.INTEGER,
                references: {
                  model: 'categories', 
                  key: 'id',
            }
        } */
        },
        {
            tableName:"products",
            timestamps:false
        }
    )
    
    Product.associate = (models) => {
        Product.belongsTo(models.Category, { foreignKey: 'category_id' });
        models.Category.hasMany(Product, { foreignKey: 'category_id' });
    }
    
    return Product
}