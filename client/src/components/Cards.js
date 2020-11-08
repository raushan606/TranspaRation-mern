import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
  
      <div className='cards'>
        <h1>Check out the price of the Grains!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/img5.jpg'
                text='                    Rice                         '
                label='20RS/Kg'
                path='/services'
              />
              <CardItem
                src='images/img3.jpg'
                text='                    Wheat                         '
                label='30RS/Kg'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/img5.jpeg'
                text="...................Sugar..........................."
                label='25RS/Kg'
                path='/services'
              />
              <CardItem
                src='images/img8.jpg'
                text="..................Kerosene..........................."
                label='35Rs/Lit'
                path='/products'
              />
              <CardItem
                src='images/img9.jpg'
                text="..................pulse............................."
                
                label='50Rs/Kg'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default Cards;
