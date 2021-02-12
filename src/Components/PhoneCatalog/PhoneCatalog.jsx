import React from 'react';

export const PhoneCatalog = ({
  select,
  phones
}) => {

  return (
    <ul className="phones">
      {phones.map(phone => (
        <li key={phone.id} className="thumbnail">
          <a href="#!/phones/motorola-xoom-with-wi-fi" className="thumb">
            <img alt={phone.id} src={phone.imageUrl} />
          </a>

          <div className="phones__btn-buy-wrapper">
            <a className="btn btn-success" href="#buy">
              Add
            </a>
          </div>

          <a
            href="#!/phones/motorola-xoom-with-wi-fi"
            onClick={() => select(phone.id)}
          >
            {phone.name}
          </a>
          <p>{phone.snippet}</p>
        </li>
      ))}
    </ul>
  );
}