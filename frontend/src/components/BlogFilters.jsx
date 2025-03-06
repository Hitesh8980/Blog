import { useState } from "react";

const BlogFilters = ({ onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onFilterChange({ search: e.target.value, category });
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilterChange({ search, category: e.target.value });
  };

  return (
    <div style={styles.filterContainer}>
      {/* Search Input */}
      <input
        type="text"
        placeholder="🔍 Search blogs..."
        value={search}
        onChange={handleSearch}
        style={styles.input}
      />

      {/* Category Dropdown */}
      <select value={category} onChange={handleCategoryChange} style={styles.select}>
        <option value="">All Categories</option>
        <option value="students">Students (13-18 years)</option>
        <option value="college">College Students (18-22 years)</option>
        <option value="career">Career Changers (23-40 years)</option>
      </select>
    </div>
  );
};

const styles = {
  filterContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
    padding: "15px",
    background: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "0.3s",
  },
  select: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "0.3s",
    cursor: "pointer",
  },
};

// Hover effects
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input[type='text']");
  const select = document.querySelector("select");

  if (input) {
    input.addEventListener("focus", () => {
      input.style.borderColor = "#007bff";
    });
    input.addEventListener("blur", () => {
      input.style.borderColor = "#ccc";
    });
  }

  if (select) {
    select.addEventListener("mouseover", () => {
      select.style.borderColor = "#007bff";
    });
    select.addEventListener("mouseout", () => {
      select.style.borderColor = "#ccc";
    });
  }
});

export default BlogFilters;
