USE fetch_db;

INSERT INTO Users (firstname, lastname, username, about, email, password) 
    VALUES ("Jimmy", "Page", "jpage", "A default dummy data user for Led Zeppelin guitarist Jimmy Page.", 
    "jpage@whatever.com", "$2a$08$yGr0c8J1CnOOO5nVnGR2Y.jT1Ix5nZ/HhXQNF8FSGtRJ0ML33v2QK");
INSERT INTO Users (firstname, lastname, username, about, email, password) 
    VALUES ("Robert", "Plant", "rplant", "A default dummy data user for Led Zeppelin singer Robert Plant", 
    "rplant@whatever.com", "$2a$08$yGr0c8J1CnOOO5nVnGR2Y.jT1Ix5nZ/HhXQNF8FSGtRJ0ML33v2QK");
INSERT INTO Users (firstname, lastname, username, about, email, password) 
    VALUES ("John", "Jones", "jpjones", "A default dummy data user for Led Zeppelin bassist John Paul Jones.", 
    "jpjones@whatever.com", "$2a$08$yGr0c8J1CnOOO5nVnGR2Y.jT1Ix5nZ/HhXQNF8FSGtRJ0ML33v2QK");
INSERT INTO Users (firstname, lastname, username, about, email, password) 
    VALUES ("John", "Bonham", "jbonham", "A default dummy data user for Led Zeppelin drummer John Bonham", 
    "jbonham@whatever.com", "$2a$08$yGr0c8J1CnOOO5nVnGR2Y.jT1Ix5nZ/HhXQNF8FSGtRJ0ML33v2QK");    

INSERT INTO Pets (name, about, type, breed, UserId) 
    VALUES ("Hank", "A mutt from rural Amelia, found wandering the side of the road, rescued two years ago", "Dog", "Mutt/Foxhound/Beagle", 1);
INSERT INTO Pets (name, about, type, breed, UserId) 
    VALUES ("Fluffy", "A white fluffy queen of a cat", "Cat", "Persian", 2);
INSERT INTO Pets (name, about, type, breed, UserId) 
    VALUES ("Floppy", "A perfect Easter bunny if you ever did meet one", "Rabbit", "Domestic", 3);
INSERT INTO Pets (name, about, type, breed, UserId) 
    VALUES ("Birdie", "A flighty little brightly colored buddy", "Bird", "Songbird", 4);

INSERT INTO Engagements (name, date, address, UserId, PetId)
    VALUES ("Walk with Robert Plant", "2018-05-18 13:17:17", "123 Main Street, Richmond, VA 23229",2,1);
INSERT INTO Engagements (name, date, address, UserId, PetId)
    VALUES ("Afternoon with John Paul Jones", "2018-05-11 12:00:00", "456 Oak Lane, Scranton, PA", 3, 4);
INSERT INTO Engagements (name, date, address, UserId, PetId)
    VALUES ("Hike with Jimmy Page", "2018-05-05 10:34:44", "The Woods, Pawnee, Indiana",1,2);