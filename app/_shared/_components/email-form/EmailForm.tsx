import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/mailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response);

      if (response.ok) {
        alert('Email berhasil dikirim!');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        alert('Gagal mengirim email.');
      }
    } catch (error) {
      console.log(error);
      alert('Terjadi kesalahan saat mengirim email.');
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label> Name </Form.Label>
          <Form.Control
            required
            name="name"
            type="text"
            placeholder="Enter your name"
            size="lg"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label> Company </Form.Label>
          <Form.Control
            required
            name="company"
            type="text"
            placeholder="Enter your company"
            size="lg"
            value={formData.company}
            onChange={handleChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group className="mb-3 mb-md-0">
              <Form.Label> Email </Form.Label>
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="Enter your email"
                size="lg"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label> Phone </Form.Label>
              <Form.Control
                required
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                size="lg"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label> Message </Form.Label>
          <Form.Control
            required
            name="message"
            type="text"
            as="textarea"
            rows={5}
            size="lg"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
          />
        </Form.Group>

        <div className="w-100 d-flex justify-content-end">
          <Button
            className="rounded px-5"
            size="lg"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default EmailForm;
