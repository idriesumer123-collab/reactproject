import './ProfessorCard.css'

function ProfessorCard({ number, name, department, email, initials }) {
  return (
    <article className="professor-card">
      <div className="professor-card-top">
        <span className="professor-number">{number}</span>
        <span className="professor-avatar" aria-hidden="true">{initials}</span>
      </div>
      <h3>{name}</h3>
      <p className="professor-department">{department}</p>
      <a className="professor-email" href={`mailto:${email}`}>
        <span aria-hidden="true">✉</span>
        {email}
      </a>
    </article>
  )
}

export default ProfessorCard
