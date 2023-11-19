import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

import { Title } from "../Title";
import { ITalks } from "@/data/data";

export const PublicTalks = ({ talks }: { talks: ITalks[] }) => {
  return (
    <section id="talk">
      <Container>
        <div className="talk-wrapper">
          <Title title="Talk" />
          {talks.map((talk) => {
            const { title, info, info2, url, repo, img, id } = talk;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <div>
                    <div className="talk-wrapper__text">
                      <h3 className="talk-wrapper__text-title">{title}</h3>
                      <div>
                        <p>{info}</p>
                        <p className="mb-4">{info2}</p>
                      </div>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url}
                      >
                        Watch
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={8} sm={12}>
                  <div>
                    <div className="talk-wrapper__image">
                      <Link
                        href={url}
                        target="_blank"
                        aria-label="talk Link"
                        rel="noopener noreferrer"
                      >
                        <div
                          style={{ position: "relative", height: "100%" }}
                          className="thumbnail rounded"
                        >
                          <Image alt={title} src={img} fill loading="lazy" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
