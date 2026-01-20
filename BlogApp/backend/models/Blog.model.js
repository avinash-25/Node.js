import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", //?lookup
    },
    image: {
      secure_url: {
        type: String,
      },
      public_id: {
        type: String,
      },
      default: {},
    }, //? data buckets --> url(string) imageKit, aws, (cloudinary) req.file
    category: {
      type: String,
      enum: [
        "science",
        "education",
        "sports",
        "gaming",
        "books",
        "foods",
        "travel",
      ],
      required: true,
    },
    tags: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        comment: {
          type: String,
        },
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "User", //?lookup
        },
      },
    ],
  },
  { timestamps: true, versionKey: false },
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
