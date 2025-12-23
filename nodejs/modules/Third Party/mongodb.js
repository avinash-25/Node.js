import mongodb, { ObjectId } from 'mongodb';

// console.log(mongodb)

async function connectDB() {
    const client = await mongodb.MongoClient.connect("mongodb://127.0.0.1:27017");
    // console.log(client.db);

    let database = client.db("NodeJS");

    // console.log(database.collection);

    let collection = await database.createCollection("nodeCollection")
    console.log("database connected");
   
    //^ Insert document
    collection.insertOne({ name: "Avinash", Phone: 6204732828 })

    //^ delete using id
    // await collection.deleteOne({
    //  _id: new ObjectId("694acc9f7b4fed43f240e74f")
    // });
    

    
    console.log("Data inserted");
}

connectDB();