import React from 'react';

function Contact() {
  return (
    <div className="container mt-4">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Please fill out the form below:</p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <h3>Contact Information</h3>
      <p>Phone: 123-456-7890</p>
      <p>Email: it.department@lanna.edu</p>
      <div>
        <h4>Our Location</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
