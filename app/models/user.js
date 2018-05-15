module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
		firstname: { type: DataTypes.STRING,notEmpty: true},
		lastname: { type: DataTypes.STRING,notEmpty: true},
		username: {type: DataTypes.TEXT},
		about : {type: DataTypes.TEXT},
		email: { type: DataTypes.STRING, validate: {isEmail:true} },
		password : {type: DataTypes.STRING,allowNull: false }, 
		last_login: {type: DataTypes.DATE}
	});

	User.associate = function(models) {
		// Associating Author with Posts
		// When an Author is deleted, also delete any associated Posts
		User.hasMany(models.Pet, {
		  onDelete: "cascade"
		});
	};

	return User;
}