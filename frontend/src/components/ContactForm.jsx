import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email address.";
    if (!formData.subject) newErrors.subject = "Please select a subject.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccess("");

    setTimeout(() => {
      setLoading(false);
      setSuccess("Message sent successfully! We will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Get in Touch</h2>
      {success && <p style={styles.success}>{success}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        <div style={styles.inputContainer}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        <div style={styles.inputContainer}>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Subject</option>
            <option value="Coach">Coach</option>
            <option value="Institute/Organisation">Institute/Organisation</option>
            <option value="Trainee/Coach">Trainee/Coach</option>
          </select>
          {errors.subject && <p style={styles.error}>{errors.subject}</p>}
        </div>

        <div style={styles.inputContainer}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          />
          {errors.message && <p style={styles.error}>{errors.message}</p>}
        </div>

        <div style={styles.inputContainer}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.phone && <p style={styles.error}>{errors.phone}</p>}
        </div>

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "480px",
    margin: "50px auto",
    padding: "25px",
    borderRadius: "12px",
    background: "rgba(255, 255, 255, 0.1)", 
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    fontFamily: "Poppins, sans-serif",
    color: "#fff",
  },
  heading: {
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    background: "rgba(255, 255, 255, 0.4)",
    color: "green",
    outline: "none",
    transition: "0.3s",
    boxShadow: "inset 2px 2px 5px rgba(255, 255, 255, 0.2), inset -2px -2px 5px rgba(0, 0, 0, 0.2)",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    background: "rgba(255, 255, 255, 0.2)",
    color: "#fff",
    outline: "none",
    transition: "0.3s",
    boxShadow: "inset 2px 2px 5px rgba(255, 255, 255, 0.2), inset -2px -2px 5px rgba(0, 0, 0, 0.2)",
  },
  button: {
    background: "linear-gradient(135deg, #ff7eb3, #ff758c)",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 4px 10px rgba(255, 117, 140, 0.4)",
  },
  buttonHover: {
    background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
  },
  error: {
    color: "#ff6b6b",
    fontSize: "13px",
    marginTop: "5px",
  },
  success: {
    color: "#8aff8a",
    textAlign: "center",
    marginBottom: "10px",
  },
};

export default ContactForm;
