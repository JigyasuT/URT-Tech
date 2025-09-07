// import React, { useState } from "react";
// import axios from "axios";
// import { Navigate, useNavigate } from "react-router-dom";
// const AddProperty = () => {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [location, setLocation] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");
//   const [message, setMessage] = useState("");


//    const navigate = useNavigate(); // ✅ Correct position
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     // const navigate=useNavigate();
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/properties/add",
//         { title, price, location, image, description },
//         { withCredentials: true } // send cookie for auth
//       );

//       setMessage("✅ Property added successfully!");
//         navigate("/")
//       // Clear form
//       setTitle("");
//       setPrice("");
//       setLocation("");
//       setImage("");
//       setDescription("");
    
      
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Failed to add property");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Property</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//           style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
//         />
//         <input
//           type="text"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//           style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           required
//           style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
//         />
//         <input
//           type="file"
//           placeholder="Image URL"
//           value={image}
//           accept="image/*"
//           onChange={(e) => setImage(e.target.value)}
//           required
//           style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//           style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
//         />
//         <button
//           type="submit"
//           style={{ width: "100%", padding: "10px", backgroundColor: "#007BFF", color: "#fff", fontWeight: "bold", cursor: "pointer" }}
//         >
//           Add Property
//         </button>
//       </form>
//       {message && <p style={{ marginTop: "15px", textAlign: "center" }}>{message}</p>}
//     </div>
//   );
// };

// export default AddProperty;















import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null); // file object store karenge
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("price", price);
      formData.append("location", location);
      formData.append("description", description);
      formData.append("image", image); // key name same hona chahiye multer ke sath

      const res = await axios.post(
        "http://localhost:5000/api/properties/add",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true, // auth ke liye
        }
      );

      setMessage("✅ Property added successfully!");
      navigate("/");

      // Clear form
      setTitle("");
      setPrice("");
      setLocation("");
      setImage(null);
      setDescription("");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add property");
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Add Property
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Add Property
        </button>
      </form>
      {message && (
        <p style={{ marginTop: "15px", textAlign: "center" }}>{message}</p>
      )}
    </div>
  );
};

export default AddProperty;

