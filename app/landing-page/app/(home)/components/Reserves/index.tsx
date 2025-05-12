"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Card1 } from './Card1';
import { Card2 } from './Card2';
import { Card3 } from './Card3';
import { Card4 } from './Card4';
import './Reserves.css';

function Reserves() {
  const cards = [<Card1 key="1" />, <Card2 key="2" />, <Card3 key="3" />, <Card4 key="4" />];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  const updateCardsPerSlide = () => {
    setCardsPerSlide(window.innerWidth <= 767 ? 1 : 3); // Mobile vs Desktop
  };

  useEffect(() => {
    updateCardsPerSlide(); // Set initial value
    window.addEventListener('resize', updateCardsPerSlide); // Update on resize
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(cards.length / cardsPerSlide);

  const getPositionX = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    // Use React-specific properties for touch and mouse events
    if ('touches' in e) {
      // This is a touch event
      return e.touches[0].clientX;
    } else {
      // This is a mouse event
      return e.clientX;
    }
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const positionX = getPositionX(e);
    setStartPosition(positionX);
    setPrevTranslate(currentTranslate);
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
  
    const positionX = getPositionX(e);  // Adjust this to work with React events
    const diff = positionX - startPosition;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
  
    if (carouselRef.current) {
      const widthPerSlide = carouselRef.current.offsetWidth / cardsPerSlide;
  
      if (movedBy < -widthPerSlide / 4 && currentIndex < totalSlides - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (movedBy > widthPerSlide / 4 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentTranslate(prevTranslate);
      }
    }
  };
  

  useEffect(() => {
    if (carouselRef.current) {  // Add null check here
      const widthPerSlide = carouselRef.current.offsetWidth / cardsPerSlide;
      setCurrentTranslate(-currentIndex * widthPerSlide);
    }
  }, [currentIndex, cardsPerSlide]);

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < totalSlides - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleDragStart(e);
  };
  
  // Touch event handler for drag start
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    handleDragStart(e);
  };
  
  // Mouse event handler for drag move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleDragMove(e);
  };
  
  // Touch event handler for drag move
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleDragMove(e);
  };

  return (
    <div className="carousel-wrapper-parent" id='reserves'>
      <h1 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
        Reserves
      </h1>
      <p className="text-sm md:text-base max-w-4xl text-center mx-auto text-neutral-500 font-normal dark:text-neutral-300">
        We make redemption profitable & solvent forever
      </p>

      <div
        className="carousel-wrapper"
        ref={carouselRef}
        onMouseDown={handleMouseDown}  // Mouse event
        onMouseMove={handleMouseMove}  // Mouse event
        onMouseUp={handleDragEnd}      // Mouse event
        onMouseLeave={() => isDragging && handleDragEnd()}  // Mouse event
        onTouchStart={handleTouchStart}  // Touch event
        onTouchMove={handleTouchMove}    // Touch event
        onTouchEnd={handleDragEnd}       // Touch event
      >
        <div
          className="carousel-container"
          style={{
            transform: `translateX(${currentTranslate}px)`,
            transition: isDragging ? "none" : "transform 0.5s ease-in-out",
          }}
        >
          {cards.map((card, index) => (
            <div className="carousel-item" key={index}>
              {card}
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-arrow left-arrow" onClick={handlePrevious}>
        &#10094;
      </button>
      <button className="carousel-arrow right-arrow" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
}

export default Reserves;
