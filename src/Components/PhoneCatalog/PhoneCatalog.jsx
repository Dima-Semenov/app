import React from 'react';

export const PhoneCatalog = ({
  id,
  imageUrl,
  name,
  snippet,
  select,
}) => {

  return (
    <li className="thumbnail">
      <a href="#!/phones/motorola-xoom-with-wi-fi" className="thumb">
        <img alt={id} src={imageUrl} />
      </a>

      <div className="phones__btn-buy-wrapper">
        <a className="btn btn-success" href="#buy">
          Add
        </a>
      </div>

      <a
        href="#!/phones/motorola-xoom-with-wi-fi"
        onClick={() => select(id)}
      >
        {name}
      </a>
      <p>{snippet}</p>
    </li>
  );
}