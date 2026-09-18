import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type ContactFormData = {
  firstName: string
  lastName: string
  contactNumber: string
  email: string
  message: string
}

const INITIAL_FORM: ContactFormData = {
  firstName: '',
  lastName: '',
  contactNumber: '',
  email: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM)
  const navigate = useNavigate()

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Assignment requirement: capture the entered information, then return to Home.
    console.log('Contact form submission:', formData)
    setFormData(INITIAL_FORM)
    navigate('/', { state: { messageSent: true } })
  }

  return (
    <section className="page">
      <div className="container contact-grid">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Contact Me</p>
            <h1>Let’s Connect</h1>
            <p>Use the form to send a message.</p>
          </div>

          <aside className="card contact-panel">
            <h2>Contact Information</h2>
            <p><strong>Name:</strong> Vitaliy Kulesh</p>
            <p><strong>Email:</strong> vkulesh@engineer.com</p>
            <p><strong>Phone:</strong> 437-233-6444</p>
            <p><strong>Location:</strong> Whitby, Ontario, Canada</p>
          </aside>
        </div>

        <form className="card contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              First Name
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last Name
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            Contact Number
            <input
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </label>

          <label>
            Email Address
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
