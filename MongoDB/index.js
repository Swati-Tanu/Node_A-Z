//Databases are of two types: 1.SQL: Structured Query Language. 2.No SQL: Not a Structured Query Language.

//In MongoDB: Table is called Collection, Row is Document and Column is Fields.

//Or: Each object is called Document, a group of similar documents is called Collection, a group of collections is called Database.

//Query: It is used to give dynamic responses. Eg; ?name=Tanu
//Params: It is also used to give dynamic responses. Eg; /student/class

//The difference is we don't need to specify a query in url but in case of param it is necessary.

//MongoDB Commands

//mongo - enter
//Ctrl+D - exit
//show dbs - displays the list of databases
//show collections - displays the list of collection
//db.collectionname.find() - displays the object of the documents
//use random - to use listed database
//use databasename - creates new database
//db.createcollection(collectionname) - to create a collection inside the database
//db.products.insertOne({key1:"item1",key2:"item2",key3:"item3"}) - to create a document inside collection.
//db.products.insertMany([{key1:"item1",key2:"item2",key3:"item3"},{key1:"item1",key2:"item2",key3:"item3"},{key1:"item1",key2:"item2",key3:"item3"}])
//Step 1: use databasename --> Step 2: db.dropDatabase(): To delete the complete database
//db.collectionname.updateOne({id: "cshg54gff"},{})/updateMany({},{}) :This step finds the particular object.
//{$set: {},{},{}} : Then to set. 
