import React, { useEffect, useState } from 'react';
import { getInfoPhone } from '../api/api';
import { Loader } from '../Loader/Loader';

export const InfoPhone = ({ id, reset }) => {
  const [info, setInfo] = useState(null);
  const [mainPhoto, setMainPhoto] = useState(null);

  useEffect(() => {
    getInfoPhone(id)
      .then(setInfo);
  }, [id])

  if (!info) {
    return (
      <Loader />
    );
  }

  return (
    <div className="col-md-10">
      <img
        className="phone"
        src={mainPhoto || info.images[0]}
        alt={info.name}
      />

      <button type="button" onClick={reset}>Back</button>
      <button type="button">Add to basket</button>

      <h1>{info.name}</h1>

      <p>{info.description}</p>

      <ul className="phone-thumbs">
        {info.images.map(photo => (
          <li key={photo} >
            <img
              src={photo}
              alt=""
              onClick={() => {
                setMainPhoto(photo)
              }}
            />
          </li>
        ))}
      </ul>

    </div>
  );
};