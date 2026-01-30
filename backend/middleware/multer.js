import multer from "multer";

const storage = multer.memoryStorage();

// frontend se field name "image" aayega
export const singleUpload = multer({ storage }).single("image");
