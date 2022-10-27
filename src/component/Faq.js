import React from 'react'

const Faq = () => {
  return (
    <>
      <div className='container-fluid faq'>
        <h2 className='text-center capitalize brown'>frequently asked questions</h2>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h4 className='brown capitalize'>~ is foodles bread really baked fresh each day?</h4>
                    <p className='grey capitalize'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolorum soluta. Enim amet voluptates aperiam odio accusantium ullam itaque quidem nesciunt quis molestias? Molestiae nihil minima ullam. Nemo, delectus vero!
                    </p>
                </div>
                <div className='col-lg-6'>
                    <h4 className='brown capitalize'>~ do you bake breads containing animal fats or products?</h4>
                    <p className='grey capitalize'>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolorum soluta. Enim amet voluptates aperiam odio accusantium ullam itaque quidem nesciunt quis molestias? Molestiae nihil minima ullam. Nemo, delectus vero!
                    </p>
                </div>
                <div className='col-lg-6'>
                    <h4 className='brown capitalize'>~ can i order your products online?</h4>
                    <p className='grey capitalize'>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolorum soluta. Enim amet voluptates aperiam odio accusantium ullam itaque quidem nesciunt quis molestias? Molestiae nihil minima ullam. Nemo, delectus vero!
                    </p>
                </div>
                <div className='col-lg-6'>
                    <h4 className='brown capitalize'>~ when are you opening a shop near me?</h4>
                    <p className='grey capitalize'>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolorum soluta. Enim amet voluptates aperiam odio accusantium ullam itaque quidem nesciunt quis molestias? Molestiae nihil minima ullam. Nemo, delectus vero!
                    </p>
                </div>
            </div>
        </div>
      </div>
      <div className='container-fluid banner-2'>
        <h2 className='text-white capitalize'>baked fresh daily by bakers with passion</h2>
        <button type='button' className='outBtn'>Learn More</button>
      </div>
      <div className='container text-center newsletter'>
        <h2 className='capitalize choco'>hurry up! subscribe our newsletter and get 25% off</h2>
        <p className='grey'> amet voluptates aperiam odio accusantium ullam itaque</p>
        <br></br>
        <div className='form'>
            <input type='text'  placeholder='Enter Address here'></input>
            <button type='button' className='outBtn ms-2'>Subscribe</button>
        </div>
      </div>
    </>
  )
}

export default Faq
