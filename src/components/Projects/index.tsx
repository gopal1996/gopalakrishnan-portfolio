import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import { Title } from "../Title";
import { IProjects } from "@/data/data";

export const Projects = ({ projects }: { projects: IProjects[] }) => {
  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Project" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <div>
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">
                        {title || "Project Title"}
                      </h3>
                      <div>
                        <p>
                          {info ||
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                        </p>
                        <p className="mb-4">{info2 || ""}</p>
                      </div>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || "#!"}
                      >
                        See Live
                      </Link>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={8} sm={12}>
                  <div>
                    <div className="project-wrapper__image">
                      <a
                        href={url || "#!"}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <div
                          style={{ position: "relative", height: "100%" }}
                          className="thumbnail rounded"
                        >
                          <Image alt={title} src={img} fill loading="lazy" />
                        </div>
                      </a>
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
