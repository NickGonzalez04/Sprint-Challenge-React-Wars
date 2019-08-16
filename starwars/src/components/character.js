import React from 'react';
import { Card } from "semantic-ui-react";

function CharacterCard(props){
    console.log(props);
    return(
        <Card>
            <Card.Content>
            <h1>Name: {props.name}</h1>
            <h3>Character Detail</h3>
            <div>Birth Date:{props.birth_year}</div>
            <div>Height: {props.height}</div>
            </Card.Content>
        </Card>
    );
}


export default CharacterCard;