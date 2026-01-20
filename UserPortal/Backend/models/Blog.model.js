import mongoose, { mongo } from 'mongoose';

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User" // perform lookup .. same as join in sql
        },
        image: {
            type: String,
        }, //? data buckets --> url(string), imageKit,aws, (cloudniary)
        category: {
            // type: mongoose.Schema.Types.ObjectId, 
            type: String,
            enum: ["science", "sports", "education", "gaming", "books", "foods", "travel"],
            required: true
        },
        tags: {
            type: String
        },
        likes: {
            type: Number,
            default: 0
        },
        comments: [
            {
                comment: {
                    type: String
                },
                userId: {
                    type: mongoose.Schema.Types.ObjectId
                }
            },
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const BlogModel = mongoose.model("Blog", blogSchema);

export default BlogModel;


// let blog1 = {
//   title: "1",
//   description: "some",
//   createdBy: "OB_ID", //! (_id)
//   image: "link",
//   category: "string",
//   tags: "electrons",
//   likes: 0,
//   comments: [
//     { comment, userId },
//     { comment, userId },
//   ],
// };