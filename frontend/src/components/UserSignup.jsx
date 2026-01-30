// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const UserSignup = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/usignup",
//         formData
//       );

//       setMessage("Signup successful 🎉");
//       setLoading(false);

//       // redirect to login page
//       setTimeout(() => {
//         navigate("/ulogin");
//       }, 1000);
//     } catch (error) {
//       setLoading(false);
//       setMessage(
//         error.response?.data?.message || "Signup failed. Try again."
//       );
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(135deg, #e5e7eb, #c7d2fe)",
//       }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           width: "100%",
//           maxWidth: "400px",
//           background: "#fff",
//           padding: "30px",
//           borderRadius: "16px",
//           boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "20px",
//             fontSize: "26px",
//             fontWeight: "700",
//           }}
//         >
//           Create Account
//         </h2>

//         {/* NAME */}
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           style={inputStyle}
//         />

//         {/* EMAIL */}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           style={inputStyle}
//         />

//         {/* PASSWORD */}
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           style={inputStyle}
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             width: "100%",
//             padding: "12px",
//             marginTop: "10px",
//             background: "#2563eb",
//             color: "#fff",
//             fontSize: "16px",
//             fontWeight: "700",
//             border: "none",
//             borderRadius: "10px",
//             cursor: "pointer",
//           }}
//         >
//           {loading ? "Signing up..." : "Sign Up"}
//         </button>

//         {message && (
//           <p
//             style={{
//               marginTop: "15px",
//               textAlign: "center",
//               color: "#dc2626",
//               fontWeight: "600",
//             }}
//           >
//             {message}
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// const inputStyle = {
//   width: "100%",
//   padding: "12px",
//   marginBottom: "12px",
//   borderRadius: "8px",
//   border: "1px solid #d1d5db",
//   fontSize: "15px",
// };

// export default UserSignup;













import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/usignup",
        formData
      );

      setMessage("Signup successful 🎉");
      setLoading(false);

      // redirect to login page after 1s
      setTimeout(() => {
        navigate("/ulogin");
      }, 1000);
    } catch (error) {
      setLoading(false);
      setMessage(
        error.response?.data?.message || "Signup failed. Try again."
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e5e7eb, #c7d2fe)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#fff",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "26px",
            fontWeight: "700",
          }}
        >
          Create Account
        </h2>

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            background: "#2563eb",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "700",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {message && (
          <p
            style={{
              marginTop: "15px",
              textAlign: "center",
              color: message.includes("successful") ? "#16a34a" : "#dc2626",
              fontWeight: "600",
            }}
          >
            {message}
          </p>
        )}

        {/* Already have account */}
        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontSize: "14px",
            color: "#555",
          }}
        >
          Already have an account?{" "}
          <span
            style={{ color: "#2563eb", cursor: "pointer", fontWeight: "600" }}
            onClick={() => navigate("/ulogin")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "15px",
};

export default UserSignup;
