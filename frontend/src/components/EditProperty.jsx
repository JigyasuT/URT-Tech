import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // 🔹 Fetch existing property
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/properties/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setLocation(res.data.location);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // 🔹 Update property
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(
        `http://localhost:5000/api/properties/edit/${id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/getall");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleUpdate}
      style={{
        maxWidth: "420px",
        margin: "40px auto",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Edit Property</h2>

      <input
        style={inputStyle}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      <input
        style={inputStyle}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />

      <input
        style={inputStyle}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />

      <textarea
        style={{ ...inputStyle, height: "80px" }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        style={{ marginBottom: "10px" }}
      />

      <button style={btnStyle}>Update Property</button>
    </form>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default EditProperty;
