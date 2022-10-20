import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaMicrosoft, FaTwitch } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-success">
          Login with Google <FaGoogle></FaGoogle>
        </Button>
        <Button variant="outline-info">
          Login with Github <FaGithub></FaGithub>
        </Button>
      </ButtonGroup>
      <div className='mt-3'>
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaLinkedin></FaLinkedin>Linkedin</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaMicrosoft></FaMicrosoft>Microsoft</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch>Twitch</ListGroup.Item>
        </ListGroup>
      </div>
      <div className='mt-4'>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
