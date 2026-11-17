import './StudentProfile.css'

function StudentProfile() {
  return (
    <article className="student-profile">
      <div className="student-avatar" aria-hidden="true">D</div>
      <div className="student-details">
        <div className="student-name-row">
          <h3>Diraja</h3>
          <span className="student-id">STUDENT</span>
        </div>
        <dl className="student-facts">
          <div>
            <dt>Age</dt>
            <dd>20</dd>
          </div>
          <div>
            <dt>Major</dt>
            <dd>Computer Science</dd>
          </div>
        </dl>
      </div>
      <div className="student-actions">
        <button type="button" className="profile-edit">Edit profile</button>
        <button type="button" className="profile-delete">Delete profile</button>
      </div>
    </article>
  )
}

export default StudentProfile
