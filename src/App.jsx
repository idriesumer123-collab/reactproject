import './App.css'
import Navbar from './components/navbar.jsx'
import QuickActions from './components/QuickActions.jsx'
import StudentProfile from './components/StudentProfile.jsx'
import ProfessorCard from './components/ProfessorCard.jsx'

function App() {
  return (
    <div className="app-shell" id="home">
      <Navbar />
      <main className="dashboard">
        <header className="dashboard-heading">
          <p className="eyebrow">CAMPUS PORTAL <span aria-hidden="true">/</span> OVERVIEW</p>
          <h1>Student dashboard</h1>
          <p className="dashboard-subtitle">A little space to keep your campus life in order.</p>
        </header>

        <QuickActions />

        <section className="profile-section" id="profile" aria-labelledby="profile-section-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR ACCOUNT</p>
              <h2 id="profile-section-title">Student profile</h2>
            </div>
            <span className="status-pill"><span aria-hidden="true" /> Active student</span>
          </div>
          <StudentProfile />
        </section>

        <section className="professors-section" id="professors" aria-labelledby="professors-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR FACULTY</p>
              <h2 id="professors-title">Meet your professors</h2>
            </div>
            <p className="section-note">The people behind your studies</p>
          </div>
          <div className="professor-grid">
            <ProfessorCard
              number="01"
              name="Professor 1"
              department="Computer Science"
              email="1@university.edu"
              initials="P1"
            />
            <ProfessorCard
              number="02"
              name="Professor 2"
              department="Mathematics"
              email="2@university.edu"
              initials="P2"
            />
            <ProfessorCard
              number="03"
              name="Professor 3"
              department="Physics"
              email="3@university.edu"
              initials="P3"
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App