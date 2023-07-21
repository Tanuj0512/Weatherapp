import { useState } from 'react'
import './App.css'
import search from './assets/icons/search.svg'
import { useStateContext } from './Context'
import {BGlayout, Mainweather, Sidecard} from './components'

function App() {
 

  const[input, setInput] = useState('')
  const {weather, thisLocation, values , place , setPlace} = useStateContext()
 
  const submitCity = ()=> {
    setPlace (input)
    setInput('')
  }


  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'> 
        <h1 className= 'font-bold tracking-wide text-3xl bg-black w-[12rem] overflow-hidden shadow-2x1 rounded flex items-center p-2 gap-2 '>
          WEATHERLY
        </h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2x1 rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem] box-shadow: 5px 10px #888888' />  
          <input onKeyUp={(e) => {
            if(e.key === 'Enter') {
              //Submit the form
              submitCity()
            }
          }} 
          type="text" className='focus: outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput (e.target.value)} />     
        </div> 
      </nav>
         
      <BGlayout />


      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'> 
         <Mainweather
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatIndex}
          iconString={weather.conditions}
          conditions={weather.conditoins}
         />

         <div className="div">
          {
            values?.slice(1, 7).map(curr => {
              return(
                <Sidecard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              )
             
            })
          }
         </div>

      </main>
    </div>
  )
}

export default App


