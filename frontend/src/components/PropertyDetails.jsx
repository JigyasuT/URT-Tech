import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/properties/getbyId${id}`);
        setProperty(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching property details:", err);
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading property details...</p>;
  if (!property) return <p style={{ textAlign: "center" }}>Property not found.</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <img
        src={property.image}
        alt={property.title}
        style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
      />
      <h2>{property.title}</h2>
      <p><strong>Price:</strong> ₹{property.price}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Description:</strong> {property.description}</p>
    </div>
  );
};

export default PropertyDetails;
