import React from 'react'
import '../index.css'
import About from './About'
import Explore from './Explore'
import Reviews from './Reviews'
import Faq from './Faq'
const Home = () => {
  return (
    <>
      <div className='container-fluid banner'>
        <div className='container gx-0'>
            <div className='row'>
                <div className='col-lg-5 col-md-6'>
                    <h1>Good food choices are good investments.</h1>
                    <br></br>
                    <p className='grey'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    <br></br>
                    <div className='button-group'>
                      <button type='button' className='outBtn'>Order Now  <i className="bi bi-basket2-fill"></i></button>
                      <button type='button' className='inBtn ms-3'>Order Now  <i className="bi bi-caret-right-fill"></i></button>
                    </div>                
                </div>
            </div>
        </div>
      </div>
      <About></About>
      <Explore></Explore>
      <Reviews></Reviews>
      <Faq></Faq>
    </>
  )
}

export default Home
