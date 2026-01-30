




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const GetAll = () => {
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
//             src={property.image}
//             alt={property.title}
//             style={{
//               width: "100%",
//               height: "180px",
//               objectFit: "cover",
//             }}
//           />
//           <div style={{ padding: "15px" }}>
//             <h3 style={{ margin: "0 0 10px", fontSize: "18px", fontWeight: "bold", color: "#333" }}>
//               {property.title}
//             </h3>
//             <p style={{ margin: "5px 0", fontSize: "16px", color: "#007BFF", fontWeight: "bold" }}>
//               ₹{property.price}
//             </p>
//             <p style={{ margin: "5px 0", fontSize: "14px", color: "#555" }}>
//                {property.location}
//             </p>
//             <p style={{ margin: "10px 0 0", fontSize: "14px", color: "#666" }}>
//               {property.description.length > 60
//                 ? property.description.substring(0, 60) + "..."
//                 : property.description}
//             </p>
//             <div style={{ marginTop: "15px", textAlign: "right" }}>
//               <Link
//                 to={`/property/${property._id}`}
//                 style={{
//                   display: "inline-block",
//                   padding: "8px 15px",
//                   backgroundColor: "#007BFF",
//                   color: "#fff",
//                   borderRadius: "5px",
//                   textDecoration: "none",
//                   fontWeight: "bold",
//                 }}
//               >
//                 View Details
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GetAll;















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const GetAll = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:5000/api/properties/getAll"
//         );
//         setProperties(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching properties:", err);
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   if (loading)
//     return (
//       <p style={{ textAlign: "center", fontSize: "18px", marginTop: "40px" }}>
//         Loading properties...
//       </p>
//     );

//   if (!properties.length)
//     return (
//       <p style={{ textAlign: "center", fontSize: "18px", marginTop: "40px" }}>
//         No properties found.
//       </p>
//     );

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #f5f7fa, #e2e8f0)",
//         padding: "40px 20px",
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//         gap: "30px",
//       }}
//     >
//       {properties.map((property) => (
//         <div
//           key={property._id}
//           style={{
//             background: "#ffffff",
//             borderRadius: "18px",
//             overflow: "hidden",
//             boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
//             transition: "all 0.35s ease",
//             cursor: "pointer",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "translateY(-10px)";
//             e.currentTarget.style.boxShadow =
//               "0 25px 45px rgba(0,0,0,0.2)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "translateY(0)";
//             e.currentTarget.style.boxShadow =
//               "0 15px 30px rgba(0,0,0,0.12)";
//           }}
//         >
//           {/* IMAGE */}
//           <img
//             src={property.image}
//             alt={property.title}
//             style={{
//               width: "100%",
//               height: "200px",
//               objectFit: "cover",
//             }}
//           />

//           {/* CONTENT */}
//           <div style={{ padding: "20px" }}>
//             <h3
//               style={{
//                 margin: "0 0 8px",
//                 fontSize: "20px",
//                 fontWeight: "700",
//                 color: "#1f2937",
//               }}
//             >
//               {property.title}
//             </h3>

//             <p
//               style={{
//                 margin: "4px 0",
//                 fontSize: "18px",
//                 fontWeight: "600",
//                 color: "#16a34a",
//               }}
//             >
//               ₹ {property.price}
//             </p>

//             <p
//               style={{
//                 margin: "6px 0",
//                 fontSize: "14px",
//                 color: "#6b7280",
//               }}
//             >
//               📍 {property.location}
//             </p>

//             <p
//               style={{
//                 marginTop: "10px",
//                 fontSize: "14px",
//                 color: "#4b5563",
//                 lineHeight: "1.6",
//               }}
//             >
//               {property.description.length > 70
//                 ? property.description.substring(0, 70) + "..."
//                 : property.description}
//             </p>

//             {/* BUTTON */}
//             <div style={{ marginTop: "18px", textAlign: "right" }}>
//               <Link
//                 to={`/property/${property._id}`}
//                 style={{
//                   display: "inline-block",
//                   padding: "10px 18px",
//                   background:
//                     "linear-gradient(135deg, #2563eb, #1d4ed8)",
//                   color: "#ffffff",
//                   borderRadius: "999px",
//                   textDecoration: "none",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background =
//                     "linear-gradient(135deg, #1d4ed8, #1e40af)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background =
//                     "linear-gradient(135deg, #2563eb, #1d4ed8)";
//                 }}
//               >
//                 View Details →
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GetAll;




























// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const GetAll = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const isAdmin = localStorage.getItem("isAdmin") === "true";

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:5000/api/properties/getAll"
//         );
//         setProperties(res.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching properties:", err);
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   if (loading)
//     return <p style={{ textAlign: "center", marginTop: "40px" }}>Loading...</p>;

//   if (!properties.length)
//     return <p style={{ textAlign: "center", marginTop: "40px" }}>No properties found</p>;

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#e5e7eb",
//         // background: "#375289",
//         padding: "40px 20px",
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//         gap: "30px",
//       }}
//     >
//       {properties.map((property) => (
//         <div
//           key={property._id}
//           style={{
//             background: "linear-gradient(135deg, #0ea5e9, #7dd3fc)", // 🔥 gray
//             borderRadius: "18px",
//             overflow: "hidden",
//             boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
//             transition: "all 0.35s ease",
//             cursor: "pointer",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "translateY(-10px)";
//             e.currentTarget.style.boxShadow =
//               "0 30px 60px rgba(0,0,0,0.45)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "translateY(0)";
//             e.currentTarget.style.boxShadow =
//               "0 15px 35px rgba(0,0,0,0.35)";
//           }}
//         >
//           {/* IMAGE */}
//           <img
//             src={property.image}
//             alt={property.title}
//             style={{
//               width: "100%",
//               height: "200px",
//               objectFit: "cover",
//             }}
//           />

//           {/* CONTENT */}
//           <div style={{ padding: "20px" }}>
//             <h3
//               style={{
//                 margin: "0 0 8px",
//                 fontSize: "20px",
//                 fontWeight: "700",
//                 color: "black",
//               }}
//             >
//              Book-Title - {property.title}
//             </h3>

//             <p
//               style={{
//                 margin: "4px 0",
//                 fontSize: "18px",
//                 fontWeight: "700",
//                 color: "black", // ⭐ highlight price
//               }}
//             >
//             Book-Price - ₹{property.price}
//             </p>

//             <p
//               style={{
//                 margin: "6px 0",
//                 fontSize: "14px",
//                 fontWeight: "600",
//                 color: "black",
//               }}
//             >
//             Book-Author - {property.location}
//             </p>


//            {/* 🔥 ADMIN ONLY EDIT */}
//          {/* 🔥 ADMIN ONLY EDIT */}
// {isAdmin && (
//   <Link
//     to={`/edit/${property._id}`}
//     style={{
//       padding: "8px 14px",
//       background: "#22c55e",
//       color: "#000",
//       borderRadius: "6px",
//       textDecoration: "none",
//       fontWeight: "700",
//       display: "inline-block",
//       marginTop: "10px",
//     }}
//   >
//     ✏ Edit
//   </Link>
// )}



//             <p
//               style={{
//                 marginTop: "10px",
//                 fontSize: "14px",
//                 fontWeight: "600",
//                 color: "black",
//                 lineHeight: "1.6",
//               }}
//             >
//             About Book - {property.description.length > 70
//                 ? property.description.substring(0, 70) + "..."
//                 : property.description}
//             </p>

//             {/* BUTTON */}
//             <div style={{ marginTop: "18px", textAlign: "right" }}>
//               <Link
//                 to={`/property/${property._id}`}
//                 style={{
//                   display: "inline-block",
//                   padding: "10px 18px",
//                   background: "#111827",
//                   color: "#ffffff",
//                   borderRadius: "999px",
//                   textDecoration: "none",
//                   fontSize: "14px",
//                   fontWeight: "700",
//                   transition: "0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "#000000";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "#111827";
//                 }}
//               >
//                 View Details →
//               </Link>
//             </div>

            
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GetAll;














import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetAll = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/properties/getAll"
        );
        setProperties(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "40px" }}>Loading...</p>;

  if (!properties.length)
    return <p style={{ textAlign: "center", marginTop: "40px" }}>No properties found</p>;

  return (
    <div
      style={{
        minHeight: "50vh",
        background: "#e5e7eb",
        padding: "40px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "30px",
        justifyContent: "center", // ✅ center single card
      }}
    >
      {properties.map((property) => (
        <div
          key={property._id}
          style={{
            background: "linear-gradient(135deg, #0ea5e9, #7dd3fc)",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
            transition: "all 0.35s ease",
            cursor: "pointer",
            maxWidth: "350px", // ✅ max width for single/multiple cards
            margin: "0 auto", // ✅ center single card
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow =
              "0 30px 60px rgba(0,0,0,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 15px 35px rgba(0,0,0,0.35)";
          }}
        >
          {/* IMAGE */}
          <img
            src={property.image}
            alt={property.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />

          {/* CONTENT */}
          <div style={{ padding: "20px" }}>
            <h3
              style={{
                margin: "0 0 8px",
                fontSize: "20px",
                fontWeight: "700",
                color: "black",
              }}
            >
              Book-Title - {property.title}
            </h3>

            <p
              style={{
                margin: "4px 0",
                fontSize: "18px",
                fontWeight: "700",
                color: "black",
              }}
            >
              Book-Price - ₹{property.price}
            </p>

            <p
              style={{
                margin: "6px 0",
                fontSize: "14px",
                fontWeight: "600",
                color: "black",
              }}
            >
              Book-Author - {property.location}
            </p>

           

            <p
              style={{
                marginTop: "10px",
                fontSize: "14px",
                fontWeight: "600",
                color: "black",
                lineHeight: "1.6",
              }}
            >
              About Book -{" "}
              {property.description.length > 70
                ? property.description.substring(0, 70) + "..."
                : property.description}
            </p>


             {/* ADMIN ONLY EDIT */}
            {isAdmin && (
              <Link
                to={`/edit/${property._id}`}
                style={{
                  padding: "8px 14px",
                  background: "#070b08",
                  color: "#fffafa",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "700",
                  display: "inline-block",
                  marginTop: "10px",
                }}
              >
                Edit
              </Link>
            )}

            {/* BUTTON */}
            <div style={{ marginTop: "18px", textAlign: "right" }}>
              <Link
                to={`/property/${property._id}`}
                style={{
                  display: "inline-block",
                  padding: "10px 18px",
                  background: "#111827",
                  color: "#ffffff",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "700",
                  transition: "0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#000000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#111827";
                }}
              >
                View Details →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetAll;
