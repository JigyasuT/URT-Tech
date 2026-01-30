// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "10px 20px",
//         width:"96%",
//         backgroundColor: "#007BFF",
//         color: "#fff",
//       }}
//     >
//       {/* Logo */}
//       <div style={{ fontSize: "20px", fontWeight: "bold" }}>
//         <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
//        📖 Library System
//         </Link>
//       </div>

//       {/* Links */}
//       <div style={{ display: "flex", gap: "18px" }}>
//         <Link
//           to="/usignup"
//           style={{ textDecoration: "none", color: "#fff", fontWeight: "500" }}
//         >
//           Signup
//         </Link>
//          <Link
//           to="/ulogin"
//           style={{ textDecoration: "none", color: "#fff", fontWeight: "500" }}
//         >
//           Login
//         </Link>
//         <Link
//           to="/adminlogin"
//           style={{ textDecoration: "none", color: "#fff", fontWeight: "500" }}
//         >
//           Admin
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

















// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [type, setType] = useState("login");

//   return (
//     <>
//       {/* NAVBAR */}
//       <nav
//         style={{
//           width: "96%",
//           padding: "12px 25px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           background: "linear-gradient(135deg,#2563eb,#1e40af)",
//           color: "#fff",
//           borderRadius: "14px",
//           margin: "10px auto",
//           boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
//         }}
//       >
//         <div style={{ fontSize: "22px", fontWeight: "700" }}>
//           📚 Library System
//         </div>

//         <div style={{ display: "flex", gap: "12px" }}>
//           <button
//             onClick={() => {
//               setType("signup");
//               setShowModal(true);
//             }}
//             style={{
//               padding: "8px 16px",
//               background: "#fff",
//               color: "#1e40af",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontWeight: "600",
//             }}
//           >
//             Signup
//           </button>

//           <button
//             onClick={() => {
//               setType("login");
//               setShowModal(true);
//             }}
//             style={{
//               padding: "8px 16px",
//               background: "#fff",
//               color: "#1e40af",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontWeight: "600",
//             }}
//           >
//             Login
//           </button>

//           <Link
//             to="/adminlogin"
//             style={{
//               padding: "8px 16px",
//               background: "#16a34a",
//               color: "#fff",
//               borderRadius: "8px",
//               textDecoration: "none",
//               fontWeight: "600",
//             }}
//           >
//             Admin
//           </Link>
//         </div>
//       </nav>

//       {/* MODAL */}
//       {showModal && (
//         <div
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(0,0,0,0.55)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//         >
//           <div
//             style={{
//               width: "360px",
//               background: "#fff",
//               padding: "25px",
//               borderRadius: "16px",
//               position: "relative",
//               boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
//             }}
//           >
//             <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
//               {type === "login" ? "User Login" : "Create Account"}
//             </h2>

//             {type === "signup" && (
//               <input
//                 placeholder="Full Name"
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   marginBottom: "10px",
//                   borderRadius: "8px",
//                   border: "1px solid #d1d5db",
//                 }}
//               />
//             )}

//             <input
//               placeholder="Email"
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 borderRadius: "8px",
//                 border: "1px solid #d1d5db",
//               }}
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 borderRadius: "8px",
//                 border: "1px solid #d1d5db",
//               }}
//             />

//             <button
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginTop: "5px",
//                 background: "#2563eb",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "8px",
//                 fontWeight: "700",
//                 cursor: "pointer",
//               }}
//             >
//               {type === "login" ? "Login" : "Signup"}
//             </button>

//             <p
//               style={{
//                 marginTop: "12px",
//                 textAlign: "center",
//                 fontSize: "14px",
//               }}
//             >
//               {type === "login"
//                 ? "Don't have an account?"
//                 : "Already have an account?"}
//               <span
//                 style={{
//                   color: "#2563eb",
//                   fontWeight: "700",
//                   cursor: "pointer",
//                   marginLeft: "5px",
//                 }}
//                 onClick={() =>
//                   setType(type === "login" ? "signup" : "login")
//                 }
//               >
//                 {type === "login" ? "Signup" : "Login"}
//               </span>
//             </p>

//             <button
//               onClick={() => setShowModal(false)}
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 right: "12px",
//                 background: "transparent",
//                 border: "none",
//                 fontSize: "18px",
//                 cursor: "pointer",
//               }}
//             >
//               ✖
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;








import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        width: "96%",
        padding: "12px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(135deg,#2563eb,#1e40af)",
        color: "#fff",
        borderRadius: "14px",
        margin: "10px auto",
        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
      }}
    >
      <div style={{ fontSize: "22px", fontWeight: "700" }}>
        📚 Library System
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <button
          onClick={() => navigate("/usignup")}
          style={btnStyle}
        >
          Signup
        </button>

        <button
          onClick={() => navigate("/ulogin")}
          style={btnStyle}
        >
          Login
        </button>

        <Link to="/adminlogin" style={adminStyle}>
          Admin
        </Link>
      </div>
    </nav>
  );
};

const btnStyle = {
  padding: "8px 16px",
  background: "#fff",
  color: "#1e40af",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
};

const adminStyle = {
  padding: "8px 16px",
  background: "#16a34a",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
};

export default Navbar;
