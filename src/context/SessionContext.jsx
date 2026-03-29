import { createContext, useState } from "react";

// create context
const SessionContext = createContext();

// provider component
const SessionProvider = ({ children }) => {
  const [sessions, setSessions] = useState([]);

  const addSession = (session) => {
    setSessions((prev) => [...prev, session]);
  };

  const deleteSession = (id) => {
    setSessions((prev) => prev.filter((session) => session.id !== id));
  };

  return (
    <SessionContext.Provider value={{ sessions, addSession, deleteSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
