// // src/components/PropertyList.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const getAll = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/properties/getAll");
//         setProperties(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching properties:", err);
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   if (loading) return <p>Loading properties...</p>;
//   if (!properties.length) return <p>No properties found.</p>;

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//       {properties.map((property) => (
//         <div
//           key={property._id}
//           style={{
//             border: "1px solid #ccc",
//             borderRadius: "8px",
//             width: "250px",
//             padding: "10px",
//             boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//           }}
//         >
//           <img
//             src={property.image}
//             alt={property.title}
//             style={{ width: "100%", borderRadius: "5px" }}
//           />
//           <h3 style={{ margin: "10px 0 5px" }}>{property.title}</h3>
//           <p style={{ margin: "5px 0" }}>
//             <strong>Price:</strong> ₹{property.price}
//           </p>
//           <p style={{ margin: "5px 0" }}>
//             <strong>Location:</strong> {property.location}
//           </p>
//           <p style={{ margin: "5px 0" }}> <strong>Description:</strong>{property.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default getAll;


















// src/components/PropertyList.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const getAll = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/properties/getAll");
//         setProperties(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching properties:", err);
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   if (loading) return <p style={{ textAlign: "center" }}>Loading properties...</p>;
//   if (!properties.length) return <p style={{ textAlign: "center" }}>No properties found.</p>;

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//         gap: "20px",
//         padding: "20px",
//       }}
//     >
//       {properties.map((property) => (
//         <div
//           key={property._id}
//           style={{
//             border: "1px solid #e0e0e0",
//             borderRadius: "12px",
//             overflow: "hidden",
//             boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//             transition: "transform 0.3s ease, box-shadow 0.3s ease",
//             backgroundColor: "#fff",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "translateY(-5px)";
//             e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "translateY(0)";
//             e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
//           }}
//         >
//           <img
//             // src="https://media.gettyimages.com/id/906786828/photo/illustration.jpg?s=1024x1024&w=gi&k=20&c=4dbMaZp8zbDYr7VTV8OzRvuNl_ng5FRJcpqsApZUHQg="
//             src={property.img}
//             alt={property.title}
//             style={{
//               width: "100%",
//               height: "180px",
//               objectFit: "cover",
//             }}
//           />
//           <div style={{ padding: "15px" }}>
//             <h3 style={{ margin: "0 0 10px", fontSize: "18px", fontWeight: "bold", color: "#333" }}>
//              Title {property.title}
//             </h3>
//             <p style={{ margin: "5px 0", fontSize: "16px", color: "#007BFF", fontWeight: "bold" }}>
//              Price ₹{property.price}
//             </p>
//             <p style={{ margin: "5px 0", fontSize: "14px", color: "#555" }}>
//               Location {property.location}
//             </p>
//             <p style={{ margin: "10px 0 0", fontSize: "14px", color: "#666" }}>
//              Description {property.description.length > 60
//                 ? property.description.substring(0, 60) + "..."
//                 : property.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default getAll;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetAll = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/properties/getAll`);
        setProperties(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading properties...</p>;
  if (!properties.length) return <p style={{ textAlign: "center" }}>No properties found.</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {properties.map((property) => (
        <div
          key={property._id}
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            backgroundColor: "#fff",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
          }}
        >
          <img
            src={property.image}
            alt={property.title}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
            }}
          />
          <div style={{ padding: "15px" }}>
            <h3 style={{ margin: "0 0 10px", fontSize: "18px", fontWeight: "bold", color: "#333" }}>
              {property.title}
            </h3>
            <p style={{ margin: "5px 0", fontSize: "16px", color: "#007BFF", fontWeight: "bold" }}>
              ₹{property.price}
            </p>
            <p style={{ margin: "5px 0", fontSize: "14px", color: "#555" }}>
               {property.location}
            </p>
            <p style={{ margin: "10px 0 0", fontSize: "14px", color: "#666" }}>
              {property.description.length > 60
                ? property.description.substring(0, 60) + "..."
                : property.description}
            </p>
            <div style={{ marginTop: "15px", textAlign: "right" }}>
              <Link
                to={`/property/${property._id}`}
                style={{
                  display: "inline-block",
                  padding: "8px 15px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetAll;

