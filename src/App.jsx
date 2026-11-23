import './App.css'
import StudentForm from './components/StudentForm.jsx'
function App() {
  const professors = [
    { name: '1', department: 'Computer Science', email: '1@university.edu' },
    { name: '2', department: 'Mathematics', email: '2@university.edu' },
    { name: '3', department: 'Physics', email: '3@university.edu' }
  ]

  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#me">Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#resources">Resources</a>
      </nav>

      <h1>Student Dashboard</h1>
     <StudentForm />
      <div className="actions">
        <button>Attendance</button>
        <button>Schedule</button>
        <button>Pay Fees</button>
      </div>

      <div className="professors">
        {professors.map((professor) => (
          <div className="card" key={professor.name}>
            <h2>Professors</h2>
            <p>Name: {professor.name}</p>
            <p>Department: {professor.department}</p>
            <p>Email: {professor.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
