//Databases are of two types: 1.SQL: Structured Query Language. 2.No SQL: Not a Structured Query Language.

//In MongoDB: Table is called Collection, Row is Document and Column is Fields.

//Or: Each object is called Document, a group of similar documents is called Collection, a group of collections is called Database.

//Query: It is used to give dynamic responses. Eg; ?name=Tanu
//Params: It is also used to give dynamic responses. Eg; /student/class

//The difference is we don't need to specify a query in url but in case of param it is necessary.

//MongoDB Commands

//mongo - enter
//Ctrl+D - exit

//CREATE
//use random - to use listed database
//use databasename - creates new database
//db.createcollection(collectionname) - to create a collection inside the database
//db.products.insertOne({key1:"item1",key2:"item2",key3:"item3"}) - to create a document inside collection.
//db.products.insertMany([{key1:"item1",key2:"item2",key3:"item3"},{key1:"item1",key2:"item2",key3:"item3"},{key1:"item1",key2:"item2",key3:"item3"}]) :Remember it should always be in array of object.

//Step 1: use databasename --> Step 2: db.dropDatabase(): To delete the complete database
//db.collectionname.updateOne({id: "cshg54gff"},{})/updateMany({},{}) :This step finds the particular document.
//{$set: {},{},{}} : Then to set. 

//READ
//show dbs - displays the list of databases
//show collections - displays the list of collection
//db.collectionname.find() - displays the items of the documents.
//db.collection1.find() //To read all the data
//db.collection1.find().pretty() //For formatted data
//db.collection1.find(query,projection) :query is bson with key-value pair to find that entire document, eg; db.collection1.find({name:"Tanu"}) and when projection is added we can achieve just specific field. eg;  db.collection1.find({name:"Tanu"},{name:1}) (to include the name field). and  db.collection1.find({name:"Tanu"},{name:0}) (to exclude the name field).
//db.collection1.find({name:"Tanu"},{_id:0, name:1}) :To get without _id field.
//db.collection1.find({active:true}) : Every field that has a value active:true will be displayed.
//db.collection1.find({active:true}).limit(1): Only 1 or first field that has a value active:true will be displayed.
//db.collection1.find({active:true}).limit(2): Now 2 of them will be shown.
//ANOTHER METHOD:
//db.collection1.findOne({active:true})
//db.collection1.find({active:true}).limit(1).skip(1) :Now get 2nd field skipping the first one with value {active:true}

//UPDATE

