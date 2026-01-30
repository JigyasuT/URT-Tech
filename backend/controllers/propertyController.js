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





// export const editProperty = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, price, location, description } = req.body;

//     // find property
//     const property = await Property.findById(id);
//     if (!property) {
//       return res.status(404).json({ message: "Property not found" });
//     }

//     // update text fields (agar aaye ho to)
//     if (title) property.title = title;
//     if (price) property.price = price;
//     if (location) property.location = location;
//     if (description) property.description = description;

//     // agar new image aayi ho
//     if (req.file) {
//       const file = req.file;
//       const fileUri = getDataUri(file);
//       const cloudResponse = await cloudinary.uploader.upload(
//         fileUri.content
//       );

//       property.image = cloudResponse.secure_url;
//     }

//     await property.save();

//     return res.status(200).json({
//       message: "Property updated successfully",
//       property,
//     });
//   } catch (error) {
//     console.error("Edit Property Error:", error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };






















export const editProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price, location, description } = req.body;

    // 1️⃣ find property
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // 2️⃣ update fields (sirf jo aaye ho)
    if (title !== undefined) property.title = title;
    if (price !== undefined) property.price = price;
    if (location !== undefined) property.location = location;
    if (description !== undefined) property.description = description;

    // 3️⃣ new image upload (optional)
    if (req.file) {
      const fileUri = getDataUri(req.file);
      const cloudResponse = await cloudinary.uploader.upload(
        fileUri.content
      );

      property.image = cloudResponse.secure_url;
    }

    // 4️⃣ save updated property
    await property.save();

    return res.status(200).json({
      success: true,
      message: "Property updated successfully",
      property,
    });
  } catch (error) {
    console.error("Edit Property Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
