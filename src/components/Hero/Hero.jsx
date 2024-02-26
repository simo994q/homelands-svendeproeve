import React, { useState } from 'react'
import style from './Hero.module.scss'
import Carousel from 'react-material-ui-carousel'

export const Hero = () => {

  const [imgIndex, setImgIndex] = useState(0)

  const images = [
    "https://api.mediehuset.net/images/homelands/large/house-1.jpg",
    "https://api.mediehuset.net/images/homelands/large/house-2.jpg",
    "https://api.mediehuset.net/images/homelands/large/apartment-2.jpg"
  ]

  let int

  const changeFunc = () => {
    console.log(imgIndex);
    if (imgIndex === 2) {
      setImgIndex(0)
    } else {
      setImgIndex(imgIndex + 1)
    }
    clearInterval(int)
  }

  int = setInterval(changeFunc, 5000)


  return (
    <>
      <div className={style.wrapper}>
        <img src={images[imgIndex]} alt="" className={style.carouselImg} />
      </div>
    </>
  )
}
