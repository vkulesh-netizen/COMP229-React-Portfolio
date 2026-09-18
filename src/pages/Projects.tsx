import projectWeb from '../assets/project-web.svg'
import projectJava from '../assets/project-java.svg'
import projectAi from '../assets/project-ai.svg'

type Project = {
  title: string
  image: string
  imageAlt: string
  role: string
  outcome: string
  technologies: string
}

const PROJECTS: Project[] = [
  {
    title: 'React Personal Portfolio',
    image: projectWeb,
    imageAlt: 'Illustration representing a responsive portfolio website',
    role: 'Student Developer',
    outcome:
      'Designed a six-page responsive portfolio with React routing, reusable components, custom styling and a contact form.',
    technologies: 'React, TypeScript, Vite, React Router, CSS',
  },
  {
    title: 'Java Bank Account Application',
    image: projectJava,
    imageAlt: 'Illustration representing a Java banking application',
    role: 'Java Developer',
    outcome:
      'Built an object-oriented Java program that demonstrates classes, constructors, methods and test objects for account operations.',
    technologies: 'Java, Eclipse, OOP',
  },
  {
    title: 'Simple Reflex AI Agent',
    image: projectAi,
    imageAlt: 'Illustration representing an artificial intelligence agent',
    role: 'AI Programming Student',
    outcome:
      'Modified and analyzed a simple reflex-agent program and documented its behavior, structure and design concepts.',
    technologies: 'Python, AI Concepts, UML',
  },
]

function Projects() {
  return (
    <section className="page">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h1>Selected Work</h1>
          <p>Three examples of projects that demonstrate my current technical skills.</p>
        </div>

        <div className="grid grid-3">
          {PROJECTS.map((project) => (
            <article className="card project-card" key={project.title}>
              <img src={project.image} alt={project.imageAlt} />
              <div className="card-body">
                <h2>{project.title}</h2>
                <p><strong>Role:</strong> {project.role}</p>
                <p><strong>Outcome:</strong> {project.outcome}</p>
                <p><strong>Technologies:</strong> {project.technologies}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
