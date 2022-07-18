import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/nodedisc.jpg'
import IMG2 from '../../assets/nestjs.jpg'
import IMG3 from '../../assets/hilmi.PNG'
import IMG4 from '../../assets/todo.png'
import IMG5 from '../../assets/MERN.jpg'
import IMG6 from '../../assets/reactnative.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Recent Work</h2>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>
            This is a project for Discord Boot Developed with Nodejs . . .
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/pseudoO97/ChocoBot'
              className='btn btn-primary'
              
            >
              Github Link
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>This is an Api project For Books Developed with Nestjs . . .</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/khachaaBadis/book-api-projet-'
              className='btn btn-primary'
              
            >
              Github Link
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>
          HILMI website: HTML ,CSS and JavaScript integration 

          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/khachaaBadis/hilmi-version-one'
              className='btn btn-primary'
              
            >
              Github Link
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={IMG4} alt='' />
          </div>
          <h3>
            This project is a TO DO LIST developed with React Js . . .
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/khachaaBadis/to-do-list'
              className='btn btn-primary'
              
            >
              Github Link
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={IMG5} alt='' />
          </div>
          <h3>
            Green Store is an E-commerce WebSite Developed using MERN technology . . .{' '}
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/khachaaBadis/Green-store-E-shop'
              className='btn btn-primary'
              
            >
              Github Link
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>
            This project is an Mobile Camera developed with React Native . .
            .{' '}
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/khachaaBadis/CameraApp'
              className='btn btn-primary'
              
            >
              Github Link
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
