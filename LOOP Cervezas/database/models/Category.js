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
            }
        },
        {
            tableName:"categories",
            timestamps:false
        }
    )

    /* Category.associate = (models) => {
        Category.hasMany(models.Product, {
            as: "product_id",
            foreignKey: "id"
        })
    } */

    return Category
}