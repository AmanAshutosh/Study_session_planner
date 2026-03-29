# 📚 Study Session Planner

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Context API](https://img.shields.io/badge/Context--API-000000?style=for-the-badge&logo=react)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

An advanced, responsive **Study Session Planner** built with React. This application provides a streamlined workflow for students to organize their academic schedule, track time-intensive tasks, and maintain focus through a clean, distraction-free UI.

[**🌐 Explore Live Demo**](https://study-session-planner-sand.vercel.app/)

---

## 🚀 Key Features

* **Smart Scheduling:** Create sessions with automated validation to prevent past-date scheduling.
* **Dynamic Priority Engine:** Visual indicators for High, Medium, and Low priority tasks.
* **Global State Management:** Powered by React Context API for seamless data flow across components.
* **Live Productivity Tools:** Real-time clock integration and total study duration calculator.
* **User Experience:** Includes loading states, dark/light mode persistence, and form validation via `react-hook-form`.
* **Secure Entrance:** Simple session-based authentication layer.

---

## 🛠️ Tech Stack & Architecture

### Frontend Core
- **Framework:** React 18+
- **State Management:** Context API
- **Form Handling:** React Hook Form
- **Build Tool:** Vite

### 📂 Directory Structure
```text
src/
├── context/
│   └── SessionContext.jsx    # Centralized state for sessions & auth
├── components/
│   ├── Auth.jsx              # User login logic
│   ├── Clock.jsx             # Real-time widget
│   ├── SessionForm.jsx       # Session creation logic
│   ├── SessionList.jsx       # Grid wrapper for cards
│   └── SessionCard.jsx       # Individual session display
├── App.jsx                   # Main application shell
└── main.jsx                  # Entry point


🧠 Technical Highlights
Optimization: Instead of "Prop Drilling," this project utilizes the Context API to manage the session array and theme state, ensuring a scalable and clean code architecture.

Key Learnings:
Form Validation: Implemented custom regex for email and date-future checks.
State Persistence: Managing complex state transitions using functional updates.
Theming: Designed a toggleable CSS variable system for Dark Mode.

📌 Roadmap
[ ] Persistence: Integrate localStorage for data retention.
[ ] CRUD Expansion: Add "Edit Session" functionality.
[ ] Analytics: Charts showing study time distribution.
[ ] Animations: Integration of Framer Motion for transitions.

👨‍💻 Author
Ashutosh Aman
