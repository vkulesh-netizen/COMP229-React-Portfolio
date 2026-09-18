type Qualification = {
  school: string
  program: string
  period: string
  details: string
}

const QUALIFICATIONS: Qualification[] = [
  {
    school: 'Centennial College',
    program: 'Software Engineering Technology – Artificial Intelligence',
    period: '2026 – Present',
    details:
      'Current studies include programming, web application development, software engineering, databases and artificial intelligence.',
  },
  {
    school: 'Odessa Marine University, Odessa, Ukraine',
    program: 'Bachelor’s Degree – Mechanical Engineering and Marine Automation',
    period: '1982 – 1987',
    details:
      'University education focused on mechanical engineering, marine automation and technical systems used aboard ships.',
  },
  {
    school: 'Georgian College, Owen Sound, Ontario, Canada',
    program: 'Marine Technical Training',
    period: '1998 – 1999',
    details:
      'Completed Propulsion Plant Simulator Level 2 and Marine Emergency Duties officer and senior officer courses.',
  },
  {
    school: 'Holland College, Summerside, PEI, Canada',
    program: 'Marine Safety Training',
    period: '2001',
    details:
      'Completed Basic Survival, Survival Craft, Fire Fighting, Marine Advanced First Aid and CPR training.',
  },
  {
    school: 'Memorial University of Newfoundland, Canada',
    program: 'Marine / Tanker Safety Training',
    period: '2000 – 2002',
    details:
      'Completed Inert Gas / Crude Oil Wash training and Advanced Petroleum Tanker Safety training.',
  },
  {
    school: 'Kongsberg Training Center, Halifax, Canada',
    program: 'Kongsberg DP Maintenance Course',
    period: '2014',
    details:
      'Professional training in dynamic positioning system maintenance.',
  },
]

function Education() {
  return (
    <section className="page">
      <div className="container narrow">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h1>Education & Qualifications</h1>
        </div>

        <div className="timeline">
          {QUALIFICATIONS.map((item) => (
            <article className="card timeline-item" key={`${item.school}-${item.program}`}>
              <p className="eyebrow">{item.period}</p>
              <h2>{item.program}</h2>
              <h3>{item.school}</h3>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
