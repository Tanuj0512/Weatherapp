import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
//import { useStateContext } from '../Context'
import Clear from '../assets/images/clear.jpg'
import Fog from '../assets/images/Cloudy.jpg'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/Snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'

const Bglayout = () => {

  // const {weather} =useStateContext()
  // console.log(weather)

  const {weather} = useStateContext()
  const [image, setImage]= useState(Clear)
useEffect(() =>{

})
  //bg according to weather


  useEffect(()=> {
    if (weather.conditions){
    let imageString = weather.conditions
    if (imageString.tolowerCase().includes('clear')){
        setImage(Clear)

      } else if  (imageString.tolowerCase().includes('cloud')) {
        setImage(Cloudy)
        
      } else if  (imageString.tolowerCase().includes('rain') || imageString.tolowerCase().includes('shower')  ) {
        setImage(Rainy)

      } else if  (imageString.tolowerCase().includes('snow')) {
        setImage(Snow)

      } else if  (imageString.tolowerCase().includes('fog')) {
        setImage(Fog)

      } else if  (imageString.tolowerCase().includes('thunder') || imageString.tolowerCase().includes('storm')) {
        setImage(Stormy)
      }
    }
  },[weather])

  

  return (
   <img src={image} alt="Weather-image" className='h-screen w-full fixed left-0 top-0 -z-[10'/>
  )
}

export default Bglayout