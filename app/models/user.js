module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
		firstname: { type: DataTypes.STRING,notEmpty: true},
		lastname: { type: DataTypes.STRING,notEmpty: true},
		username: {type: DataTypes.TEXT, notEmpty: true},
		about : {type: DataTypes.TEXT, notEmpty: true},
		email: { type: DataTypes.STRING, validate: {isEmail:true} },
		password : {type: DataTypes.STRING,allowNull: false }, 
		last_login: {type: DataTypes.DATE} 
	}, {
		timestamps: false
	});

	User.associate = function(models) {
		// Associating User with Pets
		// When a User is deleted, also delete any associated Pets
		User.hasMany(models.Pet, {
		  onDelete: "cascade"
		});
	};

	return User;
}