import { useContext, useState } from "react";
import { SessionContext } from "../context/SessionContext";

const getPriorityColor = (priority) => {
  if (priority === "High") return "#ff4d4f";
  if (priority === "Medium") return "#fa8c16";
  return "#52c41a";
};

const SessionCard = ({ session, darkMode }) => {
  const { deleteSession } = useContext(SessionContext);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    setDeleting(true);

    setTimeout(() => {
      deleteSession(session.id);
    }, 300);
  };

  const cardStyle = {
    ...styles.card,
    background: darkMode ? "#1e1e1e" : "#fafafa",
    color: darkMode ? "#fff" : "#000",
    border: darkMode ? "1px solid #333" : "1px solid #eee",
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ marginBottom: "6px", fontWeight: "600" }}>
        <span style={{ opacity: 0.7 }}>Topic:</span> {session.topic}
      </h3>

      <p>
        <strong>Subject:</strong> {session.subject}
      </p>

      <p>
        <strong>Duration:</strong> {session.duration} mins
      </p>

      <p style={{ color: getPriorityColor(session.priority) }}>
        <strong>Priority:</strong> {session.priority}
      </p>

      <p>
        <strong>Date:</strong>{" "}
        {session.date ? new Date(session.date).toLocaleDateString() : "N/A"}
      </p>

      <button
        onClick={handleDelete}
        style={{
          ...styles.deleteBtn,
          opacity: deleting ? 0.7 : 1,
        }}
        disabled={deleting}
      >
        {deleting ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default SessionCard;

const styles = {
  card: {
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    lineHeight: "1.6",
    fontSize: "14px",
  },

  title: {
    marginBottom: "6px",
    fontWeight: "600",
  },

  deleteBtn: {
    marginTop: "10px",
    padding: "6px 12px",
    background: "#ff4d4f",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
  },
};
