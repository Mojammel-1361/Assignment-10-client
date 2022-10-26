import React from "react";
import Card from "../../Pages/Sharde/card/card";
import { useLoaderData } from "react-router-dom";


const Category = () => {
  const AllCourses = useLoaderData();

  return (
    <div>
      <div>
        <h3>cat: {AllCourses.length}</h3>
      </div>
      {AllCourses.map((courses) => (
        <Card key={courses._id} courses={courses}></Card>
      ))}
    </div>
  );
};

export default Category;
