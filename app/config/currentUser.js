var currentUser = null;

module.exports = {
    init: function (id, firstName, lastName, username, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
    },
    
    setCurrentUser: function (user) {
        currentUser = user;
    },

    getCurrentUser: function () {
        return currentUser;
    }
}; 