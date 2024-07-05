import { BrowserRouter,Routes,Route, HashRouter } from "react-router-dom";
import Navbar from "./UI/Navbar";
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      {/* using has router since it works with github pages,
      unlike browserRouter */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/abelsportfolio" element={<HomePage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;


  // "homepage": "https://abelgloria.github.io/abelsportfolio",
