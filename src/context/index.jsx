import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const stateContext = createContext(0;
    
    export const StateContextProvider=()=>{
        const [weather,setWeather] = useState([]);
        const [values,setValues] = useState([]);
        const [place, setPlace] = useState('Sydney');
        const [location, setLocation] = useState('');

        //fetch weather api

        const fetchWeather = async()=>{
            const options = {
                method:'GET',
                url:'https://visual-crossing-weather.p.rapidapi.com/forecast',
                params:{
                    aggregateHours:'24',
                    location:place,
                    ContentType:'json',
                    unitGroup:'metric',
                    shortColumnNames:0,
                },
                headers:{
                    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                    'X-RapidAPI-Host' : 'visual-crossing-weather.p.rapidapi.com'
                }
            }
            try {
                const res = await axios.request(options);
                console.log(res);
                const thisData = Object.values(response.data.locations)[0];
                setLocation(thisData.address);
                setValues(thisData.values);
                setWeather(thisData.values[0]);

            } catch (e) {
                console.log(e);
                alert('This place does not exist.');
            }
        }
    }