import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

import { Title } from "../Title";
import { IBlogs } from "@/data/data";

export const Blog = ({ blogs }: { blogs: IBlogs[] }) => {
  return (
    <section id="blog">
      <Container>
        <div className="blog-wrapper">
          <Title title="Blog" />
          {blogs.map((blog) => {
            const { title, info, info2, url, repo, img, id } = blog;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <div>
                    <div className="blog-wrapper__text">
                      <h3 className="blog-wrapper__text-title">{title}</h3>
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
                        Read More
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={8} sm={12}>
                  <div>
                    <div className="blog-wrapper__image">
                      <Link
                        href={url}
                        target="_blank"
                        aria-label="blog Link"
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
