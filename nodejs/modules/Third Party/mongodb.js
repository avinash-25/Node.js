import mongodb, { ObjectId } from 'mongodb';

// console.log(mongodb)

async function connectDB() {
    const client = await mongodb.MongoClient.connect("mongodb://127.0.0.1:27017");
    // console.log(client.db);

    let database = client.db("NodeJS");

    // console.log(database.collection);

    let collection = await database.createCollection("nodeCollection")
    console.log("database connected");
   

//! Crud Operation

//? create/insert  --> inseetOne({})/insertMany([{}]);
    // let resullt = await collection.insertOne({ name: "Bablu", Phone: 8765234509 })
    // console.log("Data inserted")
    // console.log(resullt);
     

    // let result = await collection.insertMany([{ name: "ashwini", age: 34 }, { name: "Rajan", age: 23 }]);
    // console.log("All data inserted");
    // console.log(result);

//? read/fetch  --> findOne({filter})/find({filter})
    
    // let user = await collection.findOne({ name: "Avinash" });
    // console.log("user : ",user)

    // let users = await collection.find(); //* this will return cursor object
    // console.log("user : ", user);
    //* Simplest way to print all documents --> use toArray()
    // console.log(await users.toArray());

    // let users = await collection.find().toArray();
    // console.log(users);


//? update --> updateOne({filter}, {updateion}) / updateMany({updateion}, {filter});
    
    // let updatedResponse = await collection.updateMany(
    //     { age: 23 }, //* filter
    //     { $set: { hasInsurence: true } }); //* updation object
    
    // console.log(updatedResponse);

//? delete operation
    
    // let res = await collection.deleteMany(); 
    // console.log(res);

    //& Delete using id
    // await collection.deleteOne({
    //  _id: new ObjectId("694acc9f7b4fed43f240e74f")
    // });
}

connectDB();