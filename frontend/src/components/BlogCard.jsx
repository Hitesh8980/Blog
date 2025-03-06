const BlogCard = ({ blog }) => {
    return (
      <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
        <h3>{blog.title}</h3>
        <p>{blog.body}</p>
      </div>
    );
  };
  
  export default BlogCard;
  