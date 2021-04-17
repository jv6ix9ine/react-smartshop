import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>¡Encuentra las mejores tiendas!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='¿Te sientes mal?'
              label='Farmacias'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Tus supermercados favoritos'
              label='Supermercados'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='¡No te quedes sin ropa!'
              label='Ropa'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Las mejores tiendas de tecnologia'
              label='Electronica'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='¿Tienes hambre y no sabes que comer?'
              label='Restaurantes'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
