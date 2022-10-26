import React from 'react';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const card = ({courses}) => {
    const {title, details, image_url, _id} = courses
    return (
      <div>
        <Card className=" mb-5">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} style={{width: '500px'}}/>
            <Card.Text>
              {details.length > 200 ? (
                <>
                  {details.slice(0, 200) + "..."}{" "}
                  <Link to={`/courses/${_id}`}>Read more</Link>{" "}
                </>
              ) : (
                <p>{details}</p>
              )}
            </Card.Text>
            
          </Card.Body>
          
        </Card>
      </div>
    );
};

export default card;