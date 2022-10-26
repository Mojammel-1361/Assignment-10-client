import React from 'react';
import { useLoaderData } from "react-router-dom";
const Course = () => {
    const courses = useLoaderData();
    
    return (
      <div>
        <h2>This is cat{courses.title}</h2>
      </div>
    );
};

export default Course;