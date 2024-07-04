import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./UI/Navbar";
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="abelgloria.github.io/abelsportfolio" element={<HomePage/>}/>
          <Route path="abelgloria.github.io/" element={<HomePage/>}/>
          <Route path="abelgloria.github.io/projects" element={<Projects/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
