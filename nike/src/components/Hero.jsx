import React from 'react'

function Hero() {
  return (
    <div className='container'>
      <div className='details'>
        <h1 className="heading">YOUR FEET DESERVE THE BEST</h1>
        <p classname='para'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='buttons'>
        <button className='button'>Shop Now</button>
        <button className='button2'>Category</button>
        </div>
        
        <div >
          <p>
            Also available on
          </p>
          <div className='logoes'>
            <img src='./public/images/flipkart.png' alt='flipkart logo'/>
            <img src ='./public/images/amazon.png' alt='amazon logo'/>
          </div>
        </div>
      </div>
      <div className='shoe'>
        <img src='./public/images/shoe_image.png'/>
      </div>
    </div>
  )
}

export default Hero
