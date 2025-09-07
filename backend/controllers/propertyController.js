import Property from "../models/property.js";
// import property from "../models/property.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: "Property not found" });
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

// export const addProperty = async (req, res) => {
//   try {
//     const { title, price, location, image, description } = req.body;
//     if (!title || !price || !location || !image || !description) {
//       return res.status(400).json({ message: "All fields are required" });
//     }
//      const file = req.file;
//     const fileUri = getDataUri(file);
//     const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

//     const property = new Property({ title,
//        price, 
//        location,
//         image:{
//           image:cloudResponse.secure_url,
//         },
//        description });

//     await property.save();
//     return res.status(201).json(property);
//   } catch (err) {
//     console.error("Add Property Error:", err);
//     return res.status(500).json({ message: "Server error" });
//   }
// };



// export const addProperty = async (req, res) => {
//   try {
//     const { title, price, location, description } = req.body;

//     if (!title || !price || !location || !description) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     if (!req.file) {
//       return res.status(400).json({ message: "Image file is required" });
//     }

//     const fileUri = getDataUri(req.file);
//     const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

//     const property = new Property({
//       title,
//       price,
//       location,
//       image: {
//         url: cloudResponse.secure_url, // Changed key name for clarity
//       },
//       description,
//     });

//     await property.save();
//     return res.status(201).json(property);
//   } catch (err) {
//     console.error("Add Property Error:", err);
//     return res.status(500).json({ message: "Server error" });
//   }
// };









export const addProperty = async (req, res) => {
  try {
    const { title, price, location, description } = req.body;

    if (!title || !price || !location || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const file = req.file;
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

    const property = new Property({
      title,
      price,
      location,
      image: cloudResponse.secure_url, // ✅ fix here
      description
    });

    await property.save();
    return res.status(201).json(property);
  } catch (err) {
    console.error("Add Property Error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
