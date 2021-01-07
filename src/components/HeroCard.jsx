import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroCard = (props) => {
  const { card } = props;

  return (
    <Card>
      <Link to={`/heroes/${card.id}`}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body className="text-center">
          <Card.Title>{card.name}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default HeroCard;
