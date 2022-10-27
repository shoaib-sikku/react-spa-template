import React from 'react'
import '../index.css'
import img3 from  "../images/img/img-3.jpg" 
import img4 from  "../images/img/img-4.jpg" 
import img5 from  "../images/img/img-5.jpg" 
const Explore = () => {
  return (
    <>
     <div className='container explore'>
        <h2 className='choco capitalize text-center'>explore our foods</h2>
        <p className='grey'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis modi velit natus repellat consequatur  eveniet veniam esse alias molestiae magnam? Exercitationem odit perspiciatis ea libero dolorem error   fugit sint praesentium doloremque optio deserunt quo ipsam, aliquam neque? Consequuntur, iusto  praesentium.
        </p>
        <div className='row'>
          <div className='col-lg-4 mt-md-1 mt-2'>
            <div className="card">
          <img src={img3} className="card-img-top img-fluid" />
          <div className="card-body capitalize">
            <h5 className="card-title">rainbow vegetable sandwich</h5>
            <p className="card-text">time 15-20 minutes | serves: 1</p>
            <br></br>
            <h4 className='rate'>$10.50 <del>$11.70</del></h4>
            <br></br>
            <button type='button' className="outBtn">order now</button>
          </div>
         </div>
          </div>
          <div className='col-lg-4 mt-md-1 mt-2'>
            <div className="card">
          <img src={img4} className="card-img-top img-fluid" />
          <div className="card-body capitalize">
            <h5 className="card-title">vegetarian burger</h5>
            <p className="card-text">time 30-45 minutes | serves: 1</p>
            <br></br>
            <h4 className='rate'>$9.20 <del>$11.70</del></h4>
            <br></br>
            <button type='button' className="outBtn">order now</button>
          </div>
         </div>
          </div>
          <div className='col-lg-4 mt-md-1 mt-2'>
            <div className="card">
          <img src={img5} className="card-img-top img-fluid" />
          <div className="card-body capitalize">
            <h5 className="card-title">rasberry stuffed french toast</h5>
            <p className="card-text">time 15-20 minutes | serves: 1</p>
            <br></br>
            <h4 className='rate'>$10.50 <del>$11.70</del></h4>
            <br></br>
            <button type='button' className="outBtn">order now</button>
          </div>
         </div>
          </div>

        </div>
     </div> 
    </>
  )
}

export default Explore
