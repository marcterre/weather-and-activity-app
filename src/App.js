import React from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import EntrySection from "./components/EntrySection";
// import Entry from "./components/Entry";

import GlobalStyle from "./global.js";
import { useState } from "react";

function App() {
  const [entries, SetEntries] = useState([]);
  const [isChecked, SetIsChecked] = useState(false);

  function handleActivity(newEntries) {
    SetEntries([...entries, { ...newEntries, id: crypto.randomUUID() }]);
  }

  function handleCheckedClick() {
    SetIsChecked(!isChecked);
  }

  function handleDelete(id) {
    console.log(id);
  }

  function handleToggleWeather(id) {
    SetEntries((oldEntries) =>
      oldEntries.map((entry) => {
        if (entry.id !== id) {
          return entry;
        } else {
          return {
            ...entry,
            isChecked: !entry.isChecked,
          };
        }
      })
    );
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <EntrySection
          entries={entries}
          onDelete={handleDelete}
          handleToggleWeather={handleToggleWeather}
        />
        <Form onAddActivity={handleActivity} isChecked={handleCheckedClick} />
      </main>
      <Footer />
    </>
  );
}

export default App;
