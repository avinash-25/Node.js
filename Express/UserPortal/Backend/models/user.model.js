//? schema (structure) ==> mongoose (ODM ==> Object Data Modelling)
//* js objects --> document (This mapping is done by the mongoose by the help of ODM)
//* ODM ==> It maps js objects to mongodb documents.
//? It helps to add structure and validation to the mongodb collection. (middleware, plugin, validation, etc).

//^ steps to create collection using mongoose

// 1. import mongoose
// 2. create structure using the instance of Schema class
// 3. create a model/collection using model() method
// 4. Export the model/collection


import mongoose from 'mongoose';

let userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        age: {
            type: Number,
            required: true
        },
        isMarried: {
            type: Boolean
        },
        email: {
            type: String,
            required: true,
            
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    });
/**
 * first one is definition and second one is options
 */

let userModel = mongoose.model("User", userSchema);

//? model("collectionname", "schema") takes two argument, collection-name and Schema, it will convert the schema into mongodb collection.
//~ 

export default userModel;


//? All the validations are happening at database level



