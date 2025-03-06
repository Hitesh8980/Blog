import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../redux/blogSlice";
import BlogFilters from "../components/BlogFilters";
import Pagination from "../components/Pagination";

const placeholderImage = "https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png"

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.data || []);
  const status = useSelector((state) => state.blog.status);

  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [filters, setFilters] = useState({ search: "", category: "" });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  useEffect(() => {
    let filtered = blogs;

    if (filters.search) {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter((blog) => blog.category === filters.category);
    }

    setFilteredBlogs(filtered);
  }, [filters, blogs]);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const displayedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div style={{ padding: "20px" }}>
      <BlogFilters onFilterChange={setFilters} />

      {status === "loading" && <p>🚀 Blogs are on the way...</p>}
      {status === "failed" && <p style={{ color: "red" }}>Failed to load blogs.</p>}

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {displayedBlogs.map((blog) => (
          <div key={blog.id} style={styles.blogCard}>
            {/* Left: Image Box */}
            <div style={styles.imageContainer}>
              <img src={placeholderImage} alt="Blog" style={styles.image} />
            </div>

            {/* Right: Blog Details */}
            <div style={styles.content}>
              <h3 style={styles.title}>{blog.title}</h3>
              <p style={styles.category}>
                Category: {blog.category || "Uncategorized"}
              </p>
              <p style={styles.body}>{blog.body}</p>
              <p style={styles.author}>By: User {blog.userId}</p>

              {/* Reactions Section */}
              <div style={styles.reactions}>
                <span style={styles.reactionIcon}>👍 {blog.reactions.likes}</span>
                <span style={styles.reactionIcon}>👎 {blog.reactions.dislikes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

// **CSS Styles**
const styles = {
  blogCard: {
    display: "flex",
    width: "50vw",
    maxWidth: "600px",
    gap: "20px",
    padding: "20px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fff",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  },

  imageContainer: {
    flex: "1",
    maxWidth: "150px",
  },

  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },

  content: {
    flex: "2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
  },

  category: {
    fontSize: "14px",
    color: "#555",
  },

  body: {
    fontSize: "14px",
    marginTop: "10px",
    lineHeight: "1.5",
  },

  author: {
    fontSize: "12px",
    color: "#777",
    marginTop: "10px",
  },

  reactions: {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  reactionIcon: {
    fontSize: "14px",
    color: "#ff4757",
    fontWeight: "bold",
  },
};

export default Blog;
