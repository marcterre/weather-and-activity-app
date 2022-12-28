import React from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import EntrySection from "./components/EntrySection";
import WeatherDisplay from "./components/WeatherDisplay";

import GlobalStyle from "./global.js";
import { useState, useEffect } from "react";

const initialEntries = [
  { name: "Go walking", id: crypto.randomUUID(), isChecked: true },
];

function App() {
  const [entries, SetEntries] = useState(initialEntries);
  const [weather, setWeather] = useState({});
  const url = "https://example-apis.vercel.app/api/weather/europe";

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(url);
        const getWeather = await response.json();

        setWeather(getWeather);
      } catch (error) {
        console.log(error);
      }
    }
    fetchWeather();
    const intervalId = setInterval(fetchWeather, 1000);
    return () => clearInterval(intervalId);
  });

  function handleActivity(newEntries) {
    SetEntries((oldEntries) => [
      ...oldEntries,
      {
        ...newEntries,
        id: crypto.randomUUID(),
      },
    ]);
  }

  function handleDelete(id) {
    console.log(id);
    SetEntries((oldEntries) => oldEntries.filter((entry) => entry.id !== id));
  }

  // function handleToggleWeather(id) {
  //   SetEntries((oldEntries) =>
  //     oldEntries.map((entry) => {
  //       if (entry.id !== id) {
  //         return entry;
  //       } else {
  //         return {
  //           ...entry,
  //           isChecked: !entry.isChecked,
  //         };
  //       }
  //     })
  //   );
  // }

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <WeatherDisplay weather={weather} />
        <EntrySection
          entries={entries}
          handleDelete={handleDelete}
          // handleToggleWeather={handleToggleWeather}
          isGoodWeather={weather.isGoodWeather}
        />
        <Form onAddActivity={handleActivity} />
      </main>
      <Footer />
    </>
  );
}

export default App;
