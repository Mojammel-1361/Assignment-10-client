import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const SideNav = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/course")
          .then((res) => res.json())
          .then((data) => setCategorys(data));
    })
    return (
      <div>
        <div>All Course: {categorys.length}</div>
        <div>
          {categorys.map((category) => (  
            <p key={category.id}>
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </p>
          ))}
        </div>
      </div>
    );
};

export default SideNav;