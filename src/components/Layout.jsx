import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="page">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
