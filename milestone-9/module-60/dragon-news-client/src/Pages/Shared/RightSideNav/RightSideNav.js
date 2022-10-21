import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaMicrosoft, FaTwitch } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {

  const {providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error))
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick = {handleGoogleSignIn} className="mb-2" variant="outline-success">
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
