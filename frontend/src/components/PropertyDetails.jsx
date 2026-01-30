// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const PropertyDetails = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProperty = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/properties/getbyId${id}`);
//         setProperty(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching property details:", err);
//         setLoading(false);
//       }
//     };

//     fetchProperty();
//   }, [id]);

//   if (loading) return <p style={{ textAlign: "center" }}>Loading property details...</p>;
//   if (!property) return <p style={{ textAlign: "center" }}>Property not found.</p>;

//   return (
//     <div style={{ maxWidth: "800px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
//       <img
//         src={property.image}
//         alt={property.title}
//         style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
//       />
//       <h2>{property.title}</h2>
//       <p><strong>Price:</strong> ₹{property.price}</p>
//       <p><strong>Location:</strong> {property.location}</p>
//       <p><strong>Description:</strong> {property.description}</p>
//     </div>
//   );
// };

// export default PropertyDetails;




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
        const res = await axios.get(
          `http://localhost:5000/api/properties/${id}`
        );
        setProperty(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching property details:", err);
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading)
    return (
      <p style={{ textAlign: "center", fontSize: "20px", marginTop: "60px" }}>
        Loading property details...
      </p>
    );

  if (!property)
    return (
      <p style={{ textAlign: "center", fontSize: "20px", marginTop: "60px" }}>
        Property not found.
      </p>
    );

  return (
    <div
      style={{
        minHeight: "60vh",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          // maxWidth: "900px",
          // width: "100%",
          maxWidth: "600px",
          width: "50%",
          background: "#fff",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
          transition: "0.3s ease",
        }}
      >
        <img
          src={property.image}
          alt={property.title}
          style={{
            // width: "100%",
            height: "250px",
            width: "100%",
            // height: "240px",
            // objectFit: "fit",
            objectFit: "contain",
    backgroundColor: "#f3f4f6",
    borderRadius: "12px",
          }}
        />

        <div style={{ padding: "30px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "700",
              color: "#1f2937",
              marginBottom: "12px",
            }}
          >
            {property.title}
          </h2>

          <p
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "#16a34a",
              marginBottom: "8px",
            }}
          >
            ₹ {property.price}
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#6b7280",
              marginBottom: "18px",
            }}
          >
            📍 {property.location}
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#374151",
            }}
          >
            {property.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
