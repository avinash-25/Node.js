import { v2 } from 'cloudinary';
import { CLOUDINARY_CLOUD_KEY, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_SECRET } from './index.js';

v2.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_CLOUD_KEY,
    api_secret: CLOUDINARY_API_SECRET
})

export default v2;