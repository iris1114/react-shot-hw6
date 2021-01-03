import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const HeroCard = (props) => {
    const { card } = props;

    console.log(card);

    return(
    <Card>
        <Card.Img variant="top" src={card.image} />
        <Card.Body className="text-center">
            <Card.Text className="f-lg-xl">{card.name}:</Card.Text>
            <Card.Text className="f-lg-m">{card.petPhrase}</Card.Text>
        </Card.Body>
    </Card>
    );


}

export default HeroCard;