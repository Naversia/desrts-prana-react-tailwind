import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Therapies from "./pages/Therapies";
import Contact from "./pages/Contact";

// const Router = () => {
//   return (
//     <div className="page">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/accommodation" element={<Accommodation />} />
//         <Route path="/forza" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// };

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/accommodation", element: <Accommodation /> },
  { path: "/therapies", element: <Therapies /> },
  { path: "/forza", element: <Contact /> },
]);
