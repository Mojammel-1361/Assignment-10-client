import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Courses = () => {
    const courses = useLoaderData();
    const { title, details, image_url, category_id, total_view } = courses;
    
    
    return (
      <div>
        <h2> Courses Details </h2>
        <div>
          <Card style={{ width: "860px" }}>
            <Card.Img
              variant="top"
              src={image_url}
              style={{ width: "860px" }}
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{details}</Card.Text>
              <Card.Text>
                <Button variant="outline-success">Price: ${total_view}</Button>{" "}
              </Card.Text>

              <Link to={`/category/${category_id}`}>
                <Button variant="primary">Back to Details</Button>
              </Link>
            </Card.Body>
          </Card>
          
        </div>
      </div>
      
    );
};

export default Courses;