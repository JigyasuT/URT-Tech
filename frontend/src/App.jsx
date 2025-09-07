// // src/App.jsx
// import React from "react";
// // import getAll from "./components/getAll";
// import getAll from "./components/getAll";
// import AdminLogin from "./components/AdminLogin";
// import AddProperty from "./components/AddProperty";

// function App() {
//   // return (
//   //   <div style={{ padding: "20px" }}>
//   //     <h1>Property Listings</h1>
//   //     <getAll />
//   //     <AdminLogin></AdminLogin>
//   //     <AddProperty></AddProperty>
//   //   </div>
//   // );



//    return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/" element={<Navigate to="/getAll" />} /> */}
//         <Route path="/getAll" element={<getAll/>} />
//         <Route path="/adminlogin" element={<AdminLogin />} />
//         <Route path="/addproperty" element={<AddProperty />} />
//       </Routes>
//     </BrowserRouter>
//   );

// }

// export default App;
















import React from "react";
import { Routes, Route } from "react-router-dom";
import GetAll from "./components/getAll";
import AdminLogin from "./components/AdminLogin";
import AddProperty from "./components/AddProperty";
import Navbar from "./components/Navbar";
import PropertyDetails from "./components/PropertyDetails";

function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path="/" element={<GetAll />} />

      <Route path="/getAll" element={<GetAll />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/addproperty" element={<AddProperty />} />
      <Route path="/adminlogin/AddProperty" element={<AddProperty />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
    </>
  );
}

export default App;
