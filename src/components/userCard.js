import React from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const UserCard = ({user}) => {
    return (
        <>
        <Card style={{ width: '18rem', textAlign:'center' }}>
  <Card.Body>
    <Card.Title> <b>{user.name}</b></Card.Title>
    <Card.Text>
      Want to see more information about me?
    </Card.Text>
    <Button variant="primary"><Link to={`/profile/${user.id}`}>
                Go To Profile
              </Link>
              </Button>
  </Card.Body>
</Card>
</>
       
    )}

    export default UserCard;
