import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Blogs</div>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/contact" style={styles.link}>Contact Us</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#333",
    color: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "0.3s",
  },
  linkHover: {
    background: "#555",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.background = "#555";
    });
    link.addEventListener("mouseout", () => {
      link.style.background = "transparent";
    });
  });
});

export default Navbar;
