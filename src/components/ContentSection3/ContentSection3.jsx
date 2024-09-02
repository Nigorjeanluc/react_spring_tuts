import React from 'react'

import './ContentSection.css'
import Carousel from '../Carousel/Carousel'
// import CarouselBasicImage from '../Carousel/CarouselBasicImage'


import img3 from './../../assets/img3.jpg'
import img2 from './../../assets/img2.jpg'
import img4 from './../../assets/img4.jpg'
import img5 from './../../assets/img5.jpg'
import img1 from './../../assets/img1.jpg'

const SLIDES = [img1, img2, img3, img4, img5]

function ContentSection3() {
  return (
    <div className='content-section-container'>
      <div className="content-left content-clm">
        <h2 className="content-heading">
          This is the content heading
        </h2>
        <p className="content-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum, mauris at condimentum auctor, est elit ullamcorper dolor, at scelerisque arcu ex vitae quam. Suspendisse interdum condimentum enim. Cras sit amet lectus augue. Duis at libero orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Donec id leo porta lectus faucibus suscipit.
        </p>
        <p className="content-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum, mauris at condimentum auctor, est elit ullamcorper dolor, at scelerisque arcu ex vitae quam. Suspendisse interdum condimentum enim. Cras sit amet lectus augue. Duis at libero orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Donec id leo porta lectus faucibus suscipit.
        </p>
        <p className="content-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum, mauris at condimentum auctor, est elit ullamcorper dolor, at scelerisque arcu ex vitae quam. Suspendisse interdum condimentum enim. Cras sit amet lectus augue. Duis at libero orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Donec id leo porta lectus faucibus suscipit.
        </p>
      </div>
      <div className="content-right content-clm">
        <Carousel slides={SLIDES} />
        {/* <CarouselBasicImage slides={SLIDES} /> */}
      </div>
    </div>
  )
}

export default ContentSection3