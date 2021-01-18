import React, { useState } from 'react';
import people from '../assets/data';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (num) => {
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }
    return num;
  };

  const prevPerson = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      return checkIndex(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      return checkIndex(newIndex);
    });
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex += 1;
    }
    setIndex(checkIndex(randomIndex));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div>
        <button onClick={prevPerson} className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson} className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPerson} className='random-btn'>
        surprise me
      </button>
    </article>
  );
};

export default Review;
