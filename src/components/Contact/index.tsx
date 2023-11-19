import React from "react";
import { Container } from "react-bootstrap";
import { Title } from "../Title";

export const Contact = ({ email }: { email: string }) => {
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <div>
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              Would you like to work with me?
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:${email}`}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
