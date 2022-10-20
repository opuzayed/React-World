import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub } from "react-icons/fa";
const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-success">Login with Google <FaGoogle></FaGoogle></Button>
        <Button variant="outline-info">Login with Github <FaGithub></FaGithub></Button>
      </ButtonGroup>
    </div>
  );
};

export default RightSideNav;
