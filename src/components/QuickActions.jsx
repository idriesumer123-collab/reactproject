import './QuickActions.css'

function QuickActions() {
  return (
    <section className="quick-actions" aria-label="Quick actions">
      <a className="quick-action" href="#attendance">
        <span className="quick-action-icon attendance-icon" aria-hidden="true">✓</span>
        <span>
          <span className="quick-action-label">Attendance</span>
          <span className="quick-action-hint">Check your record</span>
        </span>
        <span className="quick-action-arrow" aria-hidden="true">↗</span>
      </a>
      <a className="quick-action" href="#schedule">
        <span className="quick-action-icon schedule-icon" aria-hidden="true">▦</span>
        <span>
          <span className="quick-action-label">Schedule</span>
          <span className="quick-action-hint">See what’s next</span>
        </span>
        <span className="quick-action-arrow" aria-hidden="true">↗</span>
      </a>
      <a className="quick-action" href="#fees">
        <span className="quick-action-icon fees-icon" aria-hidden="true">$</span>
        <span>
          <span className="quick-action-label">Pay fees</span>
          <span className="quick-action-hint">Manage payments</span>
        </span>
        <span className="quick-action-arrow" aria-hidden="true">↗</span>
      </a>
    </section>
  )
}

export default QuickActions
