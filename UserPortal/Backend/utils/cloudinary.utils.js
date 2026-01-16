import v2 from "../config/cloudinary.config.js";


export const uploadImage = async (filepath) => {
    let result = v2.uploader.upload(filepath, {
        folder: "blogApp",
        resource_type: "image",
        //TODO: transformation
    });
    return result;
};