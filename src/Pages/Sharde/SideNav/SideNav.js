import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";


const SideNav = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch("https://code-sarver.vercel.app/course")
          .then((res) => res.json())
          .then((data) => setCategorys(data));
    })
    return (
      <div>
        {/* <div>Course: {categorys.length}</div> */}
        <div>
          {categorys.map((category) => (
            <p key={category.id}>
              <Button
                variant="light "
                size="md"
                className="w-5"
                style={{ width: "200px" }}
              >
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </Button>
            </p>
          ))}
        </div>
      </div>
    );
};

export default SideNav;