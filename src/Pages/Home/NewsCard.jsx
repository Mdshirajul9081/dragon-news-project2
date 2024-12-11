import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
  const{title,image_url,details,_id}=news;
  return (
    <div className="card bg-base-300 mb-16 border-x-2 w-full shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <figure>
    <img className='w-full'
      src={image_url}
      alt="Shoes" />
  </figure>
  </div>
  <div className='text-justify'>
  {
    details.length>200?<p>{details.slice(0,200)} <Link
    to={`/news/${_id}`}
    ><span className='text-blue-700'>read more</span></Link> </p>:<p>{details}</p>
  }
  </div>
</div>
  );
};

export default NewsCard;