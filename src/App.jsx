import { useState } from "react";
import { useStateContext } from "./context";
import { BackgroundLayout } from "./component/BackgroundLayout";
import { WeatherCard } from "./component/WeatherCard";
import { MiniCard } from "./component/MiniCard";

function App() {
  const [input, setInput] = useState("");
  const { weather, thisLocation, values, setPlace } = useStateContext();

const submitCity = ()=>{
  setPlace(input);
  setInput('');
}

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center bg-indigo-700 bg-opacity-25">
        <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <input
            type="text"
            placeholder="Search City"
            value={input}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                //Submit the form
                submitCity();
              }
            }}
            onChange={(e) => setInput(e.target.value)}
            className="focus:outline-none w-full text-[#212121] text-lg px-2"
          />
        </div>
      </nav>
      <BackgroundLayout />
      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className="flex justify-center gap-4 flex-wrap w-[60%]">
          {values?.slice(1, 6).map((elm) => {
            return (
              <MiniCard
                key={elm.datetime}
                time={elm.datetime}
                temperature={elm.temp}
                iconString={elm.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
