import { useState } from "react";
import SessionForm from "./components/SessionForm";
import SessionList from "./components/SessionList";
import Auth from "./components/Auth";
import Clock from "./components/Clock";

function App() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  if (!user) {
    return <Auth setUser={setUser} />;
  }

  const bgColor = darkMode ? "#121212" : "#f5f7fb";
  const cardColor = darkMode ? "#1e1e1e" : "#fff";
  const textColor = darkMode ? "#fff" : "#000";

  return (
    <div style={{ background: bgColor, minHeight: "100vh" }}>
      <div style={{ ...styles.container, color: textColor }}>
        {/* HEADER */}
        <div style={styles.header}>
          <span>{new Date().toLocaleTimeString()}</span>

          <div style={styles.center}>
            <h1 style={styles.heading}>Study Session Planner</h1>

            <button
              onClick={() => setDarkMode(!darkMode)}
              style={styles.toggleBtn}
            >
              {darkMode ? " Light " : " Dark "}
            </button>
          </div>

          <span>
            {new Date().toLocaleDateString(undefined, {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        {/* FORM */}
        <div style={{ ...styles.card, background: cardColor }}>
          <SessionForm darkMode={darkMode} />
        </div>

        {/* LIST */}
        <div style={{ ...styles.card, background: cardColor }}>
          <SessionList darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    fontSize: "14px",
  },

  center: {
    textAlign: "center",
  },

  heading: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "600",
  },

  card: {
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  toggleBtn: {
    marginTop: "5px",
    padding: "6px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
