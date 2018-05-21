module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
      id: {autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      imageURL: {type: DataTypes.STRING, allowNull: true},
      about: {type: DataTypes.TEXT, allowNull: false},
      type: {type: DataTypes.STRING, allowNull: false},
      breed: {type: DataTypes.STRING, allowNull: true},
    }, {
      timestamps: false
    });
  
    Pet.associate = function(models) {
      Pet.belongsTo(models.User, {
        foreignKey: {
          allowNull: true
        }
      });
    };
  
    return Pet;
 };