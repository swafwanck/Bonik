import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Tdata from "./Tdata"

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((list) => {
          return (
            <>
              <div className='box product' key={list.id}> 
                <div className='nametop d_flex' >
                  <span className='tleft'>{list.para}</span>
                  <span className='tright'>{list.desc}</span>
                </div>
                <div className='img'>
                  <img src={list.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default TopCart
