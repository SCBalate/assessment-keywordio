import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import { Wrapper } from "../CreateAdsMain";
import "./CreateAdsForm.css";

const CreateAdsForm = ({ adTypes }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
    <div className="container-fluid h-100 ">
      <h6 className="bold mb-4 p-2">Create Text & Media</h6>
      
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formGridHeading01" className="mb-4">
              <Form.Label className="bold">Heading 01</Form.Label>
              <Form.Control type="text" placeholder="Add a heading that would make users interested" />
            </Form.Group>

            <Form.Group controlId="formGridHeading02" className="mb-4">
            <Form.Label className="bold">Heading 02</Form.Label>
              <Form.Control type="text" placeholder="Add a heading that would make users interested" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formGridDescription01" className="mb-4">
            <Form.Label className="bold">Description 01</Form.Label>
              <Form.Control as="textarea" type="text" placeholder="Add Primary text that helps users understand more about your products, services, or offers" />
            </Form.Group>
          </Col>
        </Row>

        {adTypes.media && (
          <Row>
            <Col md={4}>
              <Form.Group controlId="formGridLandScapeMarketingImg" className="mb-4">
              <Form.Label className="bold">Landscape Marketing Image (1.9:1)</Form.Label>
                <Form.Control type="url" placeholder="Add the URL of the image that you want to use for the ad" />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formGridPortraitMarketingImg" className="mb-4">
              <Form.Label className="bold">Portrait Marketing Image (4:5)</Form.Label>
                <Form.Control type="url" placeholder="Add the URL of the image that you want to use for the ad" />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formGridSquareMarketingImg" className="mb-4">
              <Form.Label className="bold">Square Marketing Image (1:1)</Form.Label>
                <Form.Control type="url" placeholder="Add the URL of the image that you want to use for the ad" />
              </Form.Group>
            </Col>
          </Row>
        )}

        <Row>
          <Col md={12}>
            <Form.Group controlId="formGridVideoUrl" className="mb-4">
            <Form.Label className="bold">Video URL</Form.Label>
              <Form.Control type="url" placeholder="Add the URL of the video that you want to use for the ad" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formGridBuisnessName" className="mb-4">
            <Form.Label className="bold">Business Name</Form.Label>
              <Form.Control type="text" placeholder="Add your business name" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formGridEmail" className="mb-4">
            <Form.Label className="bold">Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group controlId="formGridWebsiteUrl" className="mb-4">
            <Form.Label className="bold">Website URL</Form.Label>
              <Form.Control type="url" placeholder="Add the URL of the landing page you want to redirect users to" />
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-end pt-5">
          <Button variant="outline-white"  onClick={() => navigate(-1)} className="m-2 px-5 rounded border-secondary">
            Back
          </Button>
          <Button variant="primary" onClick={() => navigate("/ads-submitted")} className="m-2 px-5 rounded">
            Submit
          </Button>
        </div>
      </Form>
    </div>
    </Wrapper>
  );
};

export default CreateAdsForm;
