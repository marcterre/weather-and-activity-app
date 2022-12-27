import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Entry from "./components/Entry";
import GlobalStyle from "./global.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <body>
        <Header />
        <main>
          <Entry />
          <Form />
        </main>
        <Footer />
      </body>
    </>
  );
}

export default App;
