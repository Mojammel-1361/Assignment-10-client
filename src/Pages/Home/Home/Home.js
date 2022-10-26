import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../Sharde/card/card";

const Home = () => {
  const AllCourses = useLoaderData();
  return (
    <div>
      <h3>my courses all data Home:</h3>
      {AllCourses.map((courses) => (
        <Card key={courses._id} courses={courses}></Card>
      ))}
    </div>
  );
};

export default Home;
