import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import { Title } from "../Title";
import { IAbout } from "@/data/data";

export const About = ({ about }: { about: IAbout }) => {
  let { paragraphOne, paragraphTwo, paragraphThree, resume, img } = about;

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <div>
              <div className="about-wrapper__image">
                <Image
                  alt="profile picture"
                  fill
                  style={{ objectFit: "contain" }}
                  src={img}
                  loading="lazy"
                />
              </div>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div>
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne || null}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo || null}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || null}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
