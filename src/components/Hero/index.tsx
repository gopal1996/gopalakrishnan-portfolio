import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

export const Hero = ({
  title,
  name,
  subtitle,
}: {
  title: string;
  name: string;
  subtitle: string;
}) => {
  return (
    <section id="hero" className="jumbotron">
      <Container>
        <div>
          <h1 className="hero-title">
            {title} <span className="text-color-main">{name}</span>
            <br />
            {subtitle}
          </h1>
        </div>
        <div>
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link href="#about">About Me</Link>
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
};
