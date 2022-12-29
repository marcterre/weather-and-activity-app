import React from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import EntrySection from "./components/EntrySection";
import WeatherDisplay from "./components/WeatherDisplay";

import GlobalStyle from "./global.js";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

// const initialEntries = [
//   { name: "Go walking", id: crypto.randomUUID(), isChecked: true },
//   { name: "read a book", id: crypto.randomUUID(), isChecked: false },
//   { name: "riding bike", id: crypto.randomUUID(), isChecked: true },
// ];

function App() {
  const [entries, SetEntries] = useLocalStorageState("entries", {
    defaultValue: "",
  });
  const [weather, setWeather] = useState("");

  const url = "https://example-apis.vercel.app/api/weather/europe";

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(url);
        const getWeather = await response.json();

        console.log(getWeather);

        setWeather(getWeather);
      } catch (error) {
        console.log(error);
      }
    }

    fetchWeather();
    const intervalId = setInterval(fetchWeather, 150000);
    return () => clearInterval(intervalId);
  }, []);

  function addActivity(newEntry) {
    SetEntries((oldEntries) => [
      {
        ...newEntry,
        id: crypto.randomUUID(),
        isChecked: newEntry.isChecked ? true : false,
      },
      ...oldEntries,
    ]);
  }

  function handleDelete(id) {
    SetEntries((oldEntries) => oldEntries.filter((entry) => entry.id !== id));
  }

  function handleCompleted() {
    console.log("clicked");
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <WeatherDisplay weather={weather} />
        <Form onAddActivity={addActivity} />
        <EntrySection
          entries={entries}
          handleDelete={handleDelete}
          isGoodWeather={weather.isGoodWeather}
          onCompleted={handleCompleted}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
