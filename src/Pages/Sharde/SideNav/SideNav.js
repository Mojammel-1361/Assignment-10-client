import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const SideNav = () => {
    const [catagorys, setCatagorys] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9000/corse")
        .then(res => res.json())
        .then(data => setCatagorys(data));
    })
    return (
      <div>
        <div>All Course{catagorys.length}</div>
        <div>
          {catagorys.map((catagory) => (
            <p key={catagory.id}>
              <Link to={`/course/${catagory.id}`}>{catagory.name}</Link>
            </p>
          ))}
        </div>
      </div>
    );
};

export default SideNav;