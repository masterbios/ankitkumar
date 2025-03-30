import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import {
  ContactContainer,
  Content,
  Title,
  ContactGrid,
  ContactInfo,
  ContactForm,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  SocialLinks,
  SocialLink,
} from './styles';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setFormStatus('not-implemented');
  };

  return (
    <ContactContainer>
      <Content>
        <Title>Get in Touch</Title>
        <ContactGrid>
          <ContactInfo>
            <h2>Let's Connect</h2>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your visions.
            </p>
            <p>
              Feel free to reach out through the contact form or connect with me on social media.
            </p>
            <SocialLinks>
              <SocialLink
                href="https://www.linkedin.com/in/ankit-kumar-97b301158/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" required placeholder="Your name" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Message subject"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea id="message" name="message" required placeholder="Your message" />
            </FormGroup>
            <SubmitButton type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Send Message
            </SubmitButton>
            {formStatus === 'not-implemented' && (
              <p
                style={{
                  color: '#ff9800',
                  backgroundColor: '#fff3e0',
                  padding: '1rem',
                  borderRadius: '4px',
                  marginTop: '1rem',
                }}
              >
                ⚠️ Contact form functionality is not yet implemented. Please use the social media
                links above to connect.
              </p>
            )}
          </ContactForm>
        </ContactGrid>
      </Content>
    </ContactContainer>
  );
};

export default Contact;
