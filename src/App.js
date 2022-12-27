import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import EntrySection from "./components/EntrySection";
import GlobalStyle from "./global.js";
import { useState } from "react";

function App() {
  const [entries, SetEntries] = useState([]);
  const [isChecked, SetIsChecked] = useState(false);

  function handleActivity(newEntries) {
    SetEntries([...entries, [...newEntries]]);
  }

  function handleCheckedClick() {
    SetIsChecked(!isChecked);
  }
  console.log(isChecked);

  return (
    <>
      <GlobalStyle />
      <body>
        <Header />
        <main>
          <EntrySection />
          <Form onAddActivity={handleActivity} isChecked={handleCheckedClick} />
        </main>
        <Footer />
      </body>
    </>
  );
}

export default App;
