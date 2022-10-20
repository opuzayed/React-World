import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-success">Login with Google</Button>
        <Button variant="outline-info">Login with Github</Button>
      </ButtonGroup>
    </div>
  );
};

export default RightSideNav;