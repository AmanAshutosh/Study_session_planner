import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import SessionCard from "./SessionCard";

const SessionList = ({ darkMode }) => {
  const { sessions } = useContext(SessionContext);

  const totalDuration = sessions.reduce(
    (sum, session) => sum + Number(session.duration || 0),
    0,
  );

  return (
    <div>
      <h2 style={styles.heading}>Total Duration: {totalDuration} mins</h2>

      {sessions.length === 0 ? (
        <p style={styles.empty}>No sessions added yet</p>
      ) : (
        sessions.map((session) => (
          <SessionCard key={session.id} session={session} darkMode={darkMode} />
        ))
      )}
    </div>
  );
};

export default SessionList;

const styles = {
  heading: {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "600",
  },

  empty: {
    fontSize: "14px",
    opacity: 0.7,
  },
};
