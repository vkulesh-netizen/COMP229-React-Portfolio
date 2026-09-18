import { Link, useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation()
  const messageSent = Boolean(location.state?.messageSent)

  return (
    <section className="page hero-page">
      <div className="container hero-grid">
        <div>
          {messageSent && (
            <div className="success-banner" role="status">
              Thank you! Your message was captured successfully.
            </div>
          )}

          <p className="eyebrow">Welcome to my portfolio</p>
          <h1>Hi, I’m Vitaliy Kulesh.</h1>
          <p className="hero-copy">
  I am a Software Engineering Technology – Artificial Intelligence student
  with a strong background in engineering and automation. I am developing
  practical skills in software engineering, web development, programming,
  and artificial intelligence, with a focus on building reliable solutions
  to real-world problems.
</p>

          <div className="button-row">
            <Link className="btn btn-primary" to="/about">
              About Me
            </Link>
            <Link className="btn btn-secondary" to="/projects">
              View Projects
            </Link>
          </div>
        </div>

        <aside className="mission-card">
          <p className="eyebrow">Mission Statement</p>
          <h2>Build useful technology that solves real problems.</h2>
          <p>
            My goal is to keep learning modern development tools and create software
            that is simple to use, maintainable, and focused on the needs of the user.
          </p>
        </aside>
      </div>
    </section>
  )
}

export default Home
