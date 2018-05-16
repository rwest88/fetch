module.exports = function(sequelize, DataTypes) {
    var Engagement = sequelize.define("Engagement", {
      id: {autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      date: {type: DataTypes.DATE, allowNull: false},
      address: {type: DataTypes.STRING, allowNull: false}
    }, {
      timestamps: false
    });
    
    Engagement.associate = function(models) {
      Engagement.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
      Engagement.belongsTo(models.Pet, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Engagement;
  };