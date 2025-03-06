const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div style={styles.container}>
        {/* Previous Button */}
        <button 
          disabled={currentPage === 1} 
          onClick={() => onPageChange(currentPage - 1)}
          style={styles.button}
        >
          ⬅
        </button>
  
        {/* Progress Bar Pagination */}
        <div style={styles.progressBar}>
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              onClick={() => onPageChange(index + 1)}
              style={{
                ...styles.pageSegment,
                backgroundColor: currentPage === index + 1 ? "#ff4757" : "#ccc",
              }}
            />
          ))}
        </div>
  
        {/* Next Button */}
        <button 
          disabled={currentPage === totalPages} 
          onClick={() => onPageChange(currentPage + 1)}
          style={styles.button}
        >
          ➡
        </button>
      </div>
    );
  };
  
  // ✅ **CSS Styles**
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "20px",
      gap: "10px",
    },
    button: {
      padding: "5px 10px",
      fontSize: "14px",
      border: "none",
      cursor: "pointer",
      background: "#333",
      color: "#fff",
      borderRadius: "5px",
    },
    progressBar: {
      display: "flex",
      alignItems: "center",
      width: "200px",
      height: "6px",
      background: "#ddd",
      borderRadius: "3px",
      overflow: "hidden",
    },
    pageSegment: {
      flex: 1,
      height: "100%",
      cursor: "pointer",
      transition: "background 0.3s",
    },
  };
  
  export default Pagination;
  