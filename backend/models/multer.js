import multer from "multer";

const storage = multer.memoryStorage();

// Change 'file' to 'image' because frontend form me hum image bhejenge
export const singleUpload = multer({ storage }).single("image");
