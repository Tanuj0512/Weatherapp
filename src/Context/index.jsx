import{ useContext, createContext,useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext()

export const StateContextProvider = ({children}) => {
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState({})
    const [place, setPlace] = useState('Jaipur')
    const [thislocation, setLocation] = useState('')

    //API

    const fetchWeather =async() => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: place,
                contntType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
            },

            Headers:{
                'X-RapidAPI-key':import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        }

        try{
            const response = await axios.request(options);
            console.log(response.data)
            const thisData =Object.values(response.data.locations)[0]
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])
        }catch(e){
            console.error(e);
            //in case api throws error
            alert('Something went wrong')   
        }
    }

    
    useEffect (() =>{
        fetchWeather()
    },[place])

    useEffect (() =>{
        console.log(values)
    },[values])

    return(
        <StateContextProvider value={{
            weather,
            setPlace,
            values,
            thislocation,
        }}>
            {children}
        </StateContextProvider>
    )
}

export const useStateContext = () => useContext(StateContext)