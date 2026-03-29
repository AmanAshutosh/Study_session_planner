import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { SessionContext } from "../context/SessionContext";

const SessionForm = ({ darkMode }) => {
  const { register, handleSubmit, reset } = useForm();
  const { addSession } = useContext(SessionContext);

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    setTimeout(() => {
      const newSession = {
        ...data,
        id: Date.now(),
      };

      addSession(newSession);
      reset();
      setLoading(false);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      <input
        placeholder="Topic Name"
        {...register("topic", { required: true })}
        style={getInputStyle(darkMode)}
      />

      <select {...register("subject")} style={getInputStyle(darkMode)}>
        <option value="DSA">DSA</option>
        <option value="Web Dev">Web Dev</option>
        <option value="DBMS">DBMS</option>
        <option value="OS">OS</option>
        <option value="Others">Others</option>
      </select>

      <input
        type="number"
        placeholder="Duration (min)"
        {...register("duration", { min: 10 })}
        style={getInputStyle(darkMode)}
      />

      <select {...register("priority")} style={getInputStyle(darkMode)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        {...register("date", {
          validate: (value) => {
            const today = new Date().toISOString().split("T")[0];
            return value >= today || "Past dates are not allowed";
          },
        })}
        style={getInputStyle(darkMode)}
      />

      <button
        type="submit"
        style={{
          ...buttonStyle,
          opacity: loading ? 0.7 : 1,
        }}
        disabled={loading}
      >
        {loading ? "⏳ Adding..." : " Add Session "}
      </button>
    </form>
  );
};

export default SessionForm;

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

const getInputStyle = (darkMode) => ({
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  background: darkMode ? "#2c2c2c" : "#fff",
  color: darkMode ? "#fff" : "#000",
  fontSize: "14px",
});

const buttonStyle = {
  padding: "10px",
  background: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "500",
};
