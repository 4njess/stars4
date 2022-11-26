import React, {useEffect, useState} from 'react';
import { getRandomInt } from '../functions/function';
import Moon from './moon';
import './Sky.css';
import Star from './star';

function Sky() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = stars;
    const countStars = getRandomInt(0,100);

    for(let i = 0; i < countStars; i++){
      const star = {
        left: getRandomInt(0,100) + "%",
        top: getRandomInt(0,100) + "%",
      };
      newStars.push(star);
    }
    setStars([...newStars]);
  }, []);

  const changeSky = (event) => {
    console.log(event)
    const newStars = stars
    newStars.push({
      left: event.pageX -6,
      top: event.pageY -6,
    })
    setStars([...newStars]);

  }

  return (
    <div className="Sky" onClick={ event => changeSky(event)}>
    <Moon/>
    {stars.map((star, index) => (
      <Star star={star} key={index}></Star>
    ))}
    </div>
  );
}

export default Sky;
