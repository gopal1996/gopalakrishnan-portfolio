import { INetwork } from "@/data/data";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

export const Footer = ({ networks }: { networks: INetwork[] }) => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link href="hero">
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <Link
                  key={id}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || "refresh"} fa-inverse`} />
                </Link>
              );
            })}
        </div>
      </Container>
    </footer>
  );
};
