# fetch
Fetch dog rental service application for the University of Richmond's coding bootcamp.

## Assumptions
The following steps assume the developer is on a machine with NodeJS and MySQL installed.

## Setup
In a command terminal navigate to the project's root directory and run the following:
```sh
mysql -u root -p < db/fetch_schema.sql
```
Note that the -p flag may be ommitted if the instance of mysql doesnt require a root password.  This would look like so:
```sh
mysql -u root < db/fetch_schema.sql
```
The two commands shown above will create a (empty) mysql database called fetch_db. Next the developer should run the application typing the following:
```sh
node server.js
```
This will create the "users" table in the fetch_db database as well as stand up a local node server on localhost:5000
