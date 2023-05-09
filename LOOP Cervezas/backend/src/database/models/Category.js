module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        "Category",
        {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            name: {
                type:DataTypes.STRING,
                allowNull:false
            }/* ,
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'products',
                    key: 'id'
                }
            } */
        },
        {
            tableName:"categories",
            timestamps:false
        }
    )
    
    return Category
}