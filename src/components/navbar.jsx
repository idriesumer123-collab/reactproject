import './navbar.css'

function Navbar() {
    return (
    <nav className="navbar" aria-label="Main navigation">
        <a className="navbar-brand" href="#home" aria-label="Campus home">
            <span className="brand-mark" aria-hidden="true">C</span>
            <span>campus<span className="brand-dot">.</span></span>
        </a>
        <div className="navbar-links">
            <a className="active" href="#home">Home</a>
            <a href="#profile">About me</a>
            <a href="#professors">Professors</a>
        </div>
        <a className="navbar-avatar" href="#profile" aria-label="Go to student profile">D</a>
    </nav>
    )
}

export default Navbar