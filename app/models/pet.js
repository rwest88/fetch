module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
      id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Pet.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Pet.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    // Add a belongsTo association to Authors here
    // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
    return Pet;
};
  