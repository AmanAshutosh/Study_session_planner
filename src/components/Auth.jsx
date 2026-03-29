import { useState } from "react";

const Auth = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z\s]+$/;

    setError("");

    if (!emailRegex.test(form.email)) {
      setError("Enter a valid email");
      return;
    }

    if (!isLogin) {
      if (!form.name) {
        setError("Name is required");
        return;
      }

      if (!nameRegex.test(form.name)) {
        setError("Name should contain only letters");
        return;
      }
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(form));
      setUser(form);
      setLoading(false);
    }, 700);
  };

  return (
    <div style={styles.wrapper}>
      <div
        style={styles.card}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
        }}
      >
        <h2 style={styles.title}>
          {isLogin ? "Welcome Back 👋" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          {!isLogin && (
            <input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={styles.input}
              required
            />
          )}

          <input
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={styles.input}
            required
          />

          <button
            type="submit"
            style={{
              ...styles.button,
              opacity: loading ? 0.7 : 1,
            }}
            disabled={loading}
          >
            {loading
              ? isLogin
                ? "Signing in..."
                : "Registering..."
              : isLogin
                ? "Sign In"
                : "Register"}
          </button>
        </form>

        {error && <p style={styles.error}>{error}</p>}

        <p style={styles.switch} onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "New here? Create account"
            : "Already have an account? Sign in"}
        </p>
      </div>
    </div>
  );
};

export default Auth;

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f7fb",
    padding: "15px",
  },

  card: {
    width: "100%",
    maxWidth: "400px",
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: "600",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    outline: "none",
  },

  button: {
    padding: "12px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "500",
  },

  error: {
    color: "#ff4d4f",
    marginTop: "10px",
    fontSize: "14px",
    textAlign: "center",
  },

  switch: {
    marginTop: "15px",
    textAlign: "center",
    color: "#555",
    cursor: "pointer",
    fontSize: "14px",
  },
};
