import React from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import EntrySection from "./components/EntrySection";
import WeatherDisplay from "./components/WeatherDisplay";

import GlobalStyle from "./global.js";
import { useState, useEffect } from "react";
import { useLocalStorageState } from "use-local-storage-state";

const initialEntries = [
  { name: "Go walking", id: crypto.randomUUID(), isChecked: true },
  { name: "read a book", id: crypto.randomUUID(), isChecked: false },
];

function App() {
  const [entries, SetEntries] = useLocalStorageState(initialEntries);
  const [weather, setWeather] = useState({
    temperature: "",
    condition: "",
    isGoodWeather: "",
  });
  const url = "https://example-apis.vercel.app/api/weather/europe";

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(url);
        const getWeather = await response.json();

        setWeather({
          temperature: getWeather.temperature,
          condition: getWeather.condition,
          isGoodWeather: getWeather.isGoodWeather,
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchWeather();
    const intervalId = setInterval(fetchWeather, 5000);
    return () => clearInterval(intervalId);
  }, []);

  function handleActivity(newEntries) {
    SetEntries((oldEntries) => [
      {
        ...newEntries,
        id: crypto.randomUUID(),
      },
      ...oldEntries,
    ]);
  }

  function handleDelete(id) {
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
        <Form onAddActivity={handleActivity} />
        <EntrySection
          entries={entries}
          handleDelete={handleDelete}
          // handleToggleWeather={handleToggleWeather}
          isGoodWeather={weather.isGoodWeather}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
