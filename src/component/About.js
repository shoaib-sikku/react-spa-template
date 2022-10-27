import React from 'react'
import '../index.css'
import img1 from '../images/img/img-1.png'
import img2 from '../images/img/img-2.png'
const About = () => {
  return (
    <>
      <div className='container about'>
        <div className='row d-flex align-items-center'>
            <div className='col-lg-6'>
                <img src={img1} className='img-fluid img-thumbnail'/>
            </div>
            <div className='col-lg-6'>
                <h2 className='capitalize choco'>
                    we pride ourselves on making real food from the best ingredients.
                </h2>
                <p className='grey'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                <br></br>
                <button type='button' className='outBtn'>Learn More</button>
            </div>
          </div>
          <div className='row d-flex align-items-center pt-2'>
            <div className='col-lg-6'>
              <h2 className='capitalize choco'>
                we make everything by hand the best possible ingredients.
              </h2>
              <p className='grey'>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
              </p>
              <ul className='ul'>
                <li><i className="bi bi-check-lg"></i>  This is best way earn.</li>
                <li><i className="bi bi-check-lg"></i>  You know are the best.</li>
                <li><i className="bi bi-check-lg"></i>  Yes you can do it this.</li>
              </ul>
              <br></br>
              <button type='button' className='outBtn'>Learn More</button>
            </div>
            <div className='col-lg-6'>
              <img src={img2} className='img-fluid img-thumbnail'/>
            </div>
        </div>
      </div>
      <div className='container-fluid template'>
        <div className='container text-center about-2'>
          <h2 className='choco capitalize'>
            when a man's stomach is full it makes no diffrence whether he is rish or poor.
          </h2>
          <p className='grey'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
          </p>
          <br></br>
          <button type='button' className='outBtn'>Read More</button>
        </div>
      </div>
    </>
  )
}

export default About
