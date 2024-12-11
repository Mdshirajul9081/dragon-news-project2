import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
  const [categories,setCategories]=useState([])
  useEffect(()=>{
    fetch("categories.json")
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[])
  return (
    <div className="space-y-10">
      <h2 className="text-3xl mt-4 text-left">All categorie</h2>
      {
        categories.map(category=><Link className="block text-xl  px-4 font-semibold text-left"
           key={category.id}
           to={`/category/${category}`}
           >{category.name}</Link>)
      }
      <a href="">

      </a>
    </div>
  );
};

export default LeftSideNav;