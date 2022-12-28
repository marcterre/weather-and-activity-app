import { useEffect, useState } from "react";

const url = "https://example-apis.vercel.app/api/weather/europe";

export default function WeatherDisplay() {
  const [weather, setWeather] = useState({
    location: "",
    temperature: "",
    condition: "",
    isGoodWeather: "",
  });

  useEffect(() => {
    async function fetchWeahter() {
      const response = await fetch(url);
      const getWeather = await response.json();

      setWeather({
        location: getWeather.location,
        temperature: getWeather.temperature,
        condition: getWeather.condition,
        isGoodWeather: getWeather.isGoodWeather,
      });
    }
    fetchWeahter();
  }, []);

  console.log(weather);

  return (
    <section>
      <h2>{weather.location}</h2>
      <p>{weather.temperature}</p>
      <div>{weather.condition}</div>
    </section>
  );
}
