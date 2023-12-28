import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
  reactCertTitle,
  oracleCloudDataManagementCertification,
  microsotAzureCertification,
} from "../../content_option";

import react_cert from '../../assets/react_cert.pdf';
import oracle from '../../assets/oracle.pdf';
import microsoft from '../../assets/microsoft_certified.pdf';




export const Certifications = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Certifications | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Certifications</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{reactCertTitle}</h3>
            <h5 className="color_sec py-4">Andela, Meta & Pluralsight</h5>

          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
            <object data={ react_cert } type="application/pdf" width="100%" height="100%">
               <p>Alternative text - include a link <a href="#">to the PDF!</a></p>
          </object>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{oracleCloudDataManagementCertification}</h3>
            <h5 className="color_sec py-4">Oracle</h5>

          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
            <object data={ oracle } type="application/pdf" width="100%" height="100%">
               <p>Alternative text - include a link <a href="#">to the PDF!</a></p>
          </object>            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{microsotAzureCertification}</h3>
            <h5 className="color_sec py-4">Microsoft</h5>

          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
            <object data={ microsoft } type="application/pdf" width="100%" height="100%">
               <p>Alternative text - include a link <a href="#">to the PDF!</a></p>
          </object>            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
