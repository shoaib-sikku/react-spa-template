import React from 'react'
import '../index.css'
import Rev1 from "../images/review/review-1.jpg"
import Rev2 from "../images/review/review-2.jpg"
const Reviews = () => {
  return (
    <>
      <div className='container-fluid reviews'>
      <div className='container'>
      <h2 className='choco text-center text-white capitalize'>testimonials</h2>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
       <div className="carousel-indicators">
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"       className="active" aria-current="true" aria-label="Slide 1"></button>
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Rev1} className="img-fluid" alt="img"/>
      <div className="carousel-caption ">
        <p className='grey'>"Some representative placeholder content for the first slide Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit soluta veniam."</p>
        <h5 className='choco'>Shoaib ~ Software Developer</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Rev2} className="img-fluid" alt="img"/>
      <div className="carousel-caption ">
        <p className='grey'>"Some representative placeholder content for the first slide Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit soluta veniam."</p>
        <h5 className='choco'>Salman ~ Software Developer</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Rev1} className="img-fluid" alt="img"/>
      <div className="carousel-caption ">
        <p className='grey'>"Some representative placeholder content for the first slide Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit soluta veniam."</p>
        <h5 className='choco'>Elly ~ Software Developer</h5>
      </div>
    </div>
  </div>
</div>
</div>
      </div>
    </>
  )
}

export default Reviews
